// Generates every SVG in ../assets. Run: node scripts/gen-assets.mjs
// GitHub renders the org README ~850px wide, so images are shown at ~70% scale.
// Type sizes below are chosen so text stays >= ~17px after that scaling.
import fs from 'fs';
fs.mkdirSync('assets', { recursive: true });
const out = 'assets/';
const font = `font-family="'Segoe UI',Helvetica,Arial,sans-serif"`;
const mono = `font-family="'JetBrains Mono',Consolas,monospace"`;
const defs = `<defs>
<linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#010403"/><stop offset="1" stop-color="#03120A"/></linearGradient>
<linearGradient id="g" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#3DE08A"/><stop offset=".5" stop-color="#2FE0B0"/><stop offset="1" stop-color="#E2FF7A"/></linearGradient>
<filter id="b" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="55"/></filter>
<pattern id="d" width="26" height="26" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.2" fill="#fff" fill-opacity=".09"/></pattern></defs>`;
const svg = (w, h, label, body) => `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${label}">${defs}${body}</svg>`;
const write = (name, s) => fs.writeFileSync(out + name, s);
// greedy word wrap into lines of at most n characters
const wrap = (text, n) => {
  const lines = [];
  let cur = '';
  for (const w of text.split(' ')) {
    if ((cur + ' ' + w).trim().length > n) { lines.push(cur); cur = w; } else cur = (cur + ' ' + w).trim();
  }
  if (cur) lines.push(cur);
  return lines;
};
const panel = (w, h, r = 22, stroke = '#2EBD74') => `<rect x=".75" y=".75" width="${w - 1.5}" height="${h - 1.5}" rx="${r}" fill="none" stroke="${stroke}" stroke-opacity=".5" stroke-width="1.5"/>`;

// ---------- header ----------
// Animated logo (built by scripts/build-logo.py) is embedded so the hero stays a single image.
const logoGif = fs.readFileSync(out + 'logo-hero.gif').toString('base64');
write('header.svg', svg(1200, 420, 'Team Redesign: we redesign and architect websites', `
<clipPath id="r"><rect width="1200" height="420" rx="22"/></clipPath>
<g clip-path="url(#r)"><rect width="1200" height="420" fill="url(#bg)"/>
<g filter="url(#b)">
<ellipse cx="200" cy="120" rx="240" ry="120" fill="#2EBD74" fill-opacity=".3"><animateTransform attributeName="transform" type="translate" values="0 0;180 40;60 -20;0 0" dur="16s" repeatCount="indefinite"/></ellipse>
<ellipse cx="640" cy="380" rx="270" ry="110" fill="#1A9E7C" fill-opacity=".32"><animateTransform attributeName="transform" type="translate" values="0 0;-160 -50;120 -20;0 0" dur="19s" repeatCount="indefinite"/></ellipse>
<ellipse cx="1040" cy="90" rx="220" ry="120" fill="#6FAE3B" fill-opacity=".25"><animateTransform attributeName="transform" type="translate" values="0 0;-140 60;40 90;0 0" dur="14s" repeatCount="indefinite"/></ellipse></g>
<rect width="1200" height="420" fill="url(#d)"/>
<g transform="translate(1040 210)" fill="none" stroke="#fff" stroke-opacity=".18"><circle r="64"/><circle r="108" stroke-dasharray="3 9"/><circle r="150" stroke-opacity=".1"/>
<g><animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="24s" repeatCount="indefinite"/><circle cx="108" r="7" fill="#2EBD74" stroke="none"/></g>
<g><animateTransform attributeName="transform" type="rotate" from="360" to="0" dur="34s" repeatCount="indefinite"/><circle cx="150" r="6" fill="#B5D86A" stroke="none"/></g></g>
<g transform="translate(70 44)">
<rect width="230" height="46" rx="23" fill="#2EBD74" fill-opacity=".16" stroke="#2EBD74" stroke-opacity=".7"/>
<circle cx="24" cy="23" r="6" fill="#3DE08A"><animate attributeName="opacity" values="1;.2;1" dur="2s" repeatCount="indefinite"/></circle>
<text x="46" y="31" ${mono} font-size="22" font-weight="700" fill="#E2FF7A" letter-spacing="2">WEB STUDIO</text></g>
<clipPath id="lc"><rect x="70" y="110" width="660" height="189" rx="24"/></clipPath>
<image href="data:image/gif;base64,${logoGif}" x="70" y="110" width="660" height="189" clip-path="url(#lc)" preserveAspectRatio="xMidYMid slice"/>
<rect x="70.75" y="110.75" width="658.5" height="187.5" rx="24" fill="none" stroke="#3DE08A" stroke-opacity=".45" stroke-width="1.5"/>
<text x="70" y="352" ${font} font-size="38" font-weight="600" fill="#fff">We redesign and architect websites.</text>
<text x="70" y="394" ${mono} font-size="24" fill="#E2FF7A">Next.js · React · TypeScript · Tailwind · GSAP</text></g>
<rect x=".75" y=".75" width="1198.5" height="418.5" rx="22" fill="none" stroke="#2EBD74" stroke-opacity=".35" stroke-width="1.5"/>`));

write('divider.svg', `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="20" viewBox="0 0 1200 20" role="presentation"><defs><linearGradient id="l" x1="0" x2="1"><stop offset="0" stop-color="#2EBD74" stop-opacity="0"/><stop offset=".5" stop-color="#2EBD74"/><stop offset="1" stop-color="#2EBD74" stop-opacity="0"/></linearGradient></defs><rect y="9" width="1200" height="2" fill="url(#l)"/><circle cy="10" r="4" fill="#B5D86A"><animate attributeName="cx" values="0;1200" dur="6s" repeatCount="indefinite"/></circle></svg>`);

// ---------- rotating tagline ----------
const lines = ['Slow site? We make it fast.', 'Dated design? We make it unforgettable.', 'Messy structure? We architect it clean.', 'Redesigns that turn visitors into customers.'];
write('tagline.svg', svg(1200, 110, lines.join(' '), `${panel(1200, 110, 18)}
${lines.map((l, i) => `<text x="600" y="70" text-anchor="middle" ${mono} font-size="36" font-weight="700" fill="#fff" opacity="${i === 0 ? 1 : 0}"><animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;${(i / 4).toFixed(3)};${(i / 4 + 0.03).toFixed(3)};${(i / 4 + 0.22).toFixed(3)};${(i / 4 + 0.25).toFixed(3)};1" dur="12s" repeatCount="indefinite"/>${l}</text>`).join('')}`));

// ---------- section titles ----------
const title = (id, t, sub) => write(`t-${id}.svg`, svg(1200, 130, t, `${panel(1200, 130, 18)}
<text x="600" y="62" text-anchor="middle" ${font} font-size="58" font-weight="800" fill="url(#g)">${t}</text>
<text x="600" y="108" text-anchor="middle" ${font} font-size="30" font-weight="600" fill="#E2FF7A">${sub}</text>`));
title('why', 'Why Teams Pick Us', 'Three things we obsess over');
title('work', 'Selected Redesigns', 'Live, open source and shipped');
title('process', 'How We Work', 'From first audit to launch day');
title('stack', 'Our Toolkit', 'Built for speed, motion &amp; accessibility');

// ---------- stats ----------
const stats = [['5', 'live redesigns'], ['EN + NE', 'bilingual builds'], ['100%', 'open source']];
write('stats.svg', svg(1200, 200, '5 live redesigns, English and Nepali bilingual builds, 100 percent open source',
  stats.map(([big, small], i) => `<g transform="translate(${20 + i * 394} 10)">${panel(372, 180, 22)}<text x="186" y="98" text-anchor="middle" ${font} font-size="76" font-weight="800" fill="url(#g)">${big}</text><text x="186" y="150" text-anchor="middle" ${font} font-size="30" font-weight="600" fill="#fff">${small}</text></g>`).join('')));

// ---------- why ----------
const why = [['Faster', 'Pages that load in a blink, so visitors stay.', '#3DE08A'], ['Clearer', 'Structure and copy that guide people to act.', '#2FE0B0'], ['Memorable', 'Motion and design nobody mistakes for a template.', '#E2FF7A']];
write('why.svg', svg(1200, 290, 'Faster, clearer, memorable websites',
  why.map(([t, d, c], i) => `<g transform="translate(${20 + i * 394} 10)">${panel(372, 270, 22, c)}<rect x="30" y="32" width="56" height="7" rx="3.5" fill="${c}"/><text x="30" y="106" ${font} font-size="50" font-weight="800" fill="#fff">${t}</text>${wrap(d, 24).map((l, j) => `<text x="30" y="${156 + j * 38}" ${font} font-size="27" fill="#fff">${l}</text>`).join('')}</g>`).join('')));

// ---------- project cards ----------
const projects = [
  ['imperial', 'Imperial Law', 'Law firm · Kathmandu', 'Bilingual English / Nepali redesign of a law firm site.', ['Next.js 16', 'React 19', 'Tailwind 4'], '#3DE08A'],
  ['murshida', 'Murshida Portfolio', 'Portfolio · Astrology', 'Calm, elegant portfolio redesign with fast static output.', ['Astro', 'React', 'Tailwind'], '#2FE0B0'],
  ['makura', 'Makura Creations', 'Creative studio', 'Cinematic redesign driven by scroll motion and 3D.', ['Next.js', 'GSAP', 'Three.js'], '#9BE564'],
  ['pragati', 'Digital Pragati', 'Lead generation', 'Lead-gen sites for Nepali businesses in Australia and Nepal.', ['Next.js', 'Static site', 'Backend'], '#E2FF7A'],
  ['sitebazaar', 'SiteBazaar', 'Marketplace', 'A website marketplace styled like an auction house.', ['Next.js', 'shadcn/ui', 'GSAP'], '#6EE7A8'],
];
const CH = 340;
projects.forEach(([id, n, k, d, tags, c], i) => {
  let x = 32;
  const chips = tags.map((t) => {
    const w = t.length * 13 + 36;
    const s = `<g transform="translate(${x} 244)"><rect width="${w}" height="44" rx="22" fill="${c}" fill-opacity=".16" stroke="${c}" stroke-opacity=".75" stroke-width="1.5"/><text x="${w / 2}" y="29" text-anchor="middle" ${mono} font-size="20" font-weight="700" fill="#fff">${t}</text></g>`;
    x += w + 10;
    return s;
  }).join('');
  write(`p-${id}.svg`, svg(560, CH, `${n}: ${k}`, `
<clipPath id="r"><rect width="560" height="${CH}" rx="18"/></clipPath>
<g clip-path="url(#r)"><rect width="560" height="${CH}" fill="url(#bg)"/><rect width="560" height="${CH}" fill="url(#d)"/>
<g filter="url(#b)"><ellipse cx="480" cy="30" rx="130" ry="70" fill="${c}" fill-opacity=".28"><animateTransform attributeName="transform" type="translate" values="0 0;-60 30;0 0" dur="10s" repeatCount="indefinite"/></ellipse></g>
<rect width="8" height="${CH}" fill="${c}"/>
<text x="32" y="50" ${mono} font-size="20" font-weight="700" fill="${c}" letter-spacing="1.5">0${i + 1} / ${k.toUpperCase()}</text>
<text x="32" y="112" ${font} font-size="48" font-weight="800" fill="#fff" letter-spacing="-1">${n}</text>
${wrap(d, 36).map((l, j) => `<text x="32" y="${158 + j * 34}" ${font} font-size="27" fill="#fff">${l}</text>`).join('')}
${chips}
<text x="32" y="322" ${mono} font-size="22" font-weight="700" fill="${c}">VIEW LIVE ↗</text></g>
<rect x=".75" y=".75" width="558.5" height="${CH - 1.5}" rx="18" fill="none" stroke="${c}" stroke-opacity=".5" stroke-width="1.5"/>`));
});
write('p-next.svg', svg(560, CH, 'Your site is next', `<clipPath id="r"><rect width="560" height="${CH}" rx="18"/></clipPath><g clip-path="url(#r)"><rect width="560" height="${CH}" fill="url(#bg)"/><rect width="560" height="${CH}" fill="url(#d)"/></g>
<rect x="1.5" y="1.5" width="557" height="${CH - 3}" rx="18" fill="none" stroke="#3DE08A" stroke-opacity=".8" stroke-width="2" stroke-dasharray="8 10"><animate attributeName="stroke-dashoffset" from="0" to="-72" dur="3s" repeatCount="indefinite"/></rect>
<text x="280" y="148" text-anchor="middle" ${font} font-size="50" font-weight="800" fill="url(#g)">Your site is next</text>
<text x="280" y="204" text-anchor="middle" ${font} font-size="28" fill="#fff">Tell us what is holding</text>
<text x="280" y="240" text-anchor="middle" ${font} font-size="28" fill="#fff">your website back.</text>`));

// ---------- process ----------
const steps = [
  ['01', 'Audit', 'Find what hurts', 'speed and conversion'],
  ['02', 'Architect', 'Plan content, flows', 'and components'],
  ['03', 'Design', 'Craft a bold,', 'accessible look'],
  ['04', 'Launch', 'Ship fast, with', 'motion that earns it'],
];
write('process.svg', svg(1200, 290, 'Process: Audit, Architect, Design, Build and Launch', `${panel(1200, 290)}
<line x1="150" y1="64" x2="1050" y2="64" stroke="#3DE08A" stroke-opacity=".5" stroke-width="2" stroke-dasharray="4 8"><animate attributeName="stroke-dashoffset" from="0" to="-48" dur="4s" repeatCount="indefinite"/></line>
${steps.map(([n, t, a, b], i) => { const cx = 150 + i * 300; return `<circle cx="${cx}" cy="64" r="36" fill="#03120A" stroke="#3DE08A" stroke-width="2.5"/><text x="${cx}" y="73" text-anchor="middle" ${mono} font-size="26" font-weight="700" fill="#E2FF7A">${n}</text><text x="${cx}" y="147" text-anchor="middle" ${font} font-size="38" font-weight="800" fill="#fff">${t}</text><text x="${cx}" y="195" text-anchor="middle" ${font} font-size="26" fill="#fff">${a}</text><text x="${cx}" y="231" text-anchor="middle" ${font} font-size="26" fill="#fff">${b}</text>`; }).join('')}`));

// ---------- stack (two rows) ----------
const rows = [['Next.js', 'React', 'TypeScript', 'Tailwind'], ['GSAP', 'Three.js', 'Astro', 'Vercel']];
const pillRows = rows.map((row, ri) => {
  const items = row.map((t) => ({ t, w: t.length * 17 + 60 }));
  let sx = (1200 - items.reduce((a, b) => a + b.w + 16, -16)) / 2;
  return items.map((it, i) => {
    const s = `<g transform="translate(${sx} ${28 + ri * 82})"><rect width="${it.w}" height="64" rx="32" fill="#03120A" stroke="#3DE08A" stroke-opacity=".7" stroke-width="1.5"/><text x="${it.w / 2}" y="42" text-anchor="middle" ${mono} font-size="28" font-weight="700" fill="#fff">${it.t}</text></g>`;
    sx += it.w + 16;
    return s;
  }).join('');
}).join('');
write('stack.svg', svg(1200, 192, `Toolkit: ${rows.flat().join(', ')}`, `${panel(1200, 192)}${pillRows}`));

// ---------- footer ----------
write('footer.svg', svg(1200, 260, 'Let us redesign your website', `<clipPath id="r"><rect width="1200" height="260" rx="22"/></clipPath><g clip-path="url(#r)"><rect width="1200" height="260" fill="url(#bg)"/><rect width="1200" height="260" fill="url(#d)"/><g filter="url(#b)"><ellipse cx="300" cy="230" rx="300" ry="90" fill="#2EBD74" fill-opacity=".3"><animateTransform attributeName="transform" type="translate" values="0 0;400 -20;0 0" dur="14s" repeatCount="indefinite"/></ellipse><ellipse cx="900" cy="20" rx="280" ry="80" fill="#6FAE3B" fill-opacity=".25"/></g>
<text x="600" y="120" text-anchor="middle" ${font} font-size="68" font-weight="800" fill="url(#g)" letter-spacing="-1">Let's redesign your website.</text>
<text x="600" y="190" text-anchor="middle" ${mono} font-size="34" font-weight="700" fill="#E2FF7A">contact@teamredesign.com</text></g>
<rect x=".75" y=".75" width="1198.5" height="258.5" rx="22" fill="none" stroke="#2EBD74" stroke-opacity=".4" stroke-width="1.5"/>`));

// ---------- light-theme variants ----------
// The panel-style images have transparent backgrounds so they sit on GitHub's own page colour.
// Dark text colours would vanish on a dark page (and vice versa), so each gets a -light twin;
// the README serves it through <picture> + prefers-color-scheme.
const lightMap = [
  ['#ffffff', '#0b1f14'], ['#fff', '#0b1f14'],
  ['#E2FF7A', '#4d6b00'], ['#2FE0B0', '#0b8f78'], ['#3DE08A', '#0a8f4f'],
  ['#03120A', '#e6f6ed'], ['#2EBD74', '#0a8f4f'], ['#B5D86A', '#4d6b00'],
];
for (const f of ['divider', 'tagline', 't-why', 't-work', 't-process', 't-stack', 'stats', 'why', 'process', 'stack']) {
  let t = fs.readFileSync(out + f + '.svg', 'utf8');
  // keep the white dot/ring decorations only in the dark file; swap every themed colour here
  for (const [a, b] of lightMap) t = t.split(a).join(b);
  fs.writeFileSync(out + f + '-light.svg', t);
}
