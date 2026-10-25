"""Recolour the animated logo MP4 for the dark hero banner and write assets/logo-hero.gif.

Usage: uv run --with numpy --with pillow --with scipy scripts/build-logo.py <logo.mp4>
The source is dark ink on off-white; the hero is dark, so the wordmark becomes white,
and the "tlr" tile gets a green outline. Output frames are opaque (card colour behind).
"""
import subprocess, sys, tempfile, pathlib
import numpy as np
from PIL import Image
from scipy import ndimage

src = sys.argv[1]
out = pathlib.Path(__file__).resolve().parent.parent / 'assets' / 'logo-hero.gif'
CARD = np.array([3, 18, 10], dtype=np.float32)       # #03120A
GREEN = np.array([61, 224, 138], dtype=np.float32)   # #3DE08A
WHITE = np.array([255, 255, 255], dtype=np.float32)
SPLIT = 215                                           # x where the wordmark starts (840px wide frame)

tmp = pathlib.Path(tempfile.mkdtemp())
(tmp / 'in').mkdir(); (tmp / 'out').mkdir()
subprocess.run(['ffmpeg', '-v', 'error', '-y', '-i', src, '-an',
                '-vf', 'crop=1120:320:400:380,fps=15,scale=840:-1:flags=lanczos',
                str(tmp / 'in' / 'f%03d.png')], check=True)

for p in sorted((tmp / 'in').glob('f*.png')):
    im = np.asarray(Image.open(p).convert('RGB')).astype(np.float32)
    lum = im.mean(axis=2)
    bg, ink = 240.0, 22.0
    a = np.clip((bg - lum) / (bg - ink), 0, 1)       # 1 where dark ink
    res = np.empty_like(im)
    # wordmark: white ink on card
    word = CARD[None, None, :] * (1 - a[..., None]) + WHITE[None, None, :] * a[..., None]
    # tile: dark rounded square with light glyph; keep original pixels inside it
    left = np.zeros_like(a, dtype=bool); left[:, :SPLIT] = True
    interior = ndimage.binary_fill_holes((a > 0.5) & left)
    tile = np.where(interior[..., None], im, CARD[None, None, :] * (1 - a[..., None]) + im * a[..., None])
    ring = ndimage.binary_dilation(interior, iterations=3) & ~ndimage.binary_dilation(interior, iterations=1)
    ring &= left
    tile = np.where(ring[..., None], GREEN[None, None, :], tile)
    res = np.where(left[..., None], tile, word)
    Image.fromarray(res.clip(0, 255).astype(np.uint8)).save(tmp / 'out' / p.name)

subprocess.run(['ffmpeg', '-v', 'error', '-y', '-framerate', '15', '-i', str(tmp / 'out' / 'f%03d.png'),
                '-vf', 'split[a][b];[a]palettegen=max_colors=48:stats_mode=full[p];[b][p]paletteuse=dither=none',
                '-loop', '0', str(out)], check=True)
print(out, round(out.stat().st_size / 1024), 'KB')
