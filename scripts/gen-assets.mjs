import fs from 'fs';
fs.mkdirSync('assets', { recursive: true });
const out = 'assets/';
const font = `font-family="'Segoe UI',Helvetica,Arial,sans-serif"`;
const mono = `font-family="'JetBrains Mono',Consolas,monospace"`;
const defs = `<defs>
<linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#030A06"/><stop offset="1" stop-color="#08170F"/></linearGradient>
<linearGradient id="g" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#2EBD74"/><stop offset=".5" stop-color="#1A9E7C"/><stop offset="1" stop-color="#B5D86A"/></linearGradient>
<filter id="b" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="55"/></filter>
<pattern id="d" width="26" height="26" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.2" fill="#fff" fill-opacity=".09"/></pattern></defs>`;

// header
fs.writeFileSync(out + 'header.svg', `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="380" viewBox="0 0 1200 380" role="img" aria-label="Team Redesign: we redesign and architect websites">${defs}
<clipPath id="r"><rect width="1200" height="380" rx="22"/></clipPath>
<g clip-path="url(#r)"><rect width="1200" height="380" fill="url(#bg)"/>
<g filter="url(#b)">
<ellipse cx="200" cy="120" rx="240" ry="120" fill="#2EBD74" fill-opacity=".5"><animateTransform attributeName="transform" type="translate" values="0 0;180 40;60 -20;0 0" dur="16s" repeatCount="indefinite"/></ellipse>
<ellipse cx="640" cy="340" rx="270" ry="110" fill="#1A9E7C" fill-opacity=".55"><animateTransform attributeName="transform" type="translate" values="0 0;-160 -50;120 -20;0 0" dur="19s" repeatCount="indefinite"/></ellipse>
<ellipse cx="1040" cy="90" rx="220" ry="120" fill="#6FAE3B" fill-opacity=".4"><animateTransform attributeName="transform" type="translate" values="0 0;-140 60;40 90;0 0" dur="14s" repeatCount="indefinite"/></ellipse></g>
<rect width="1200" height="380" fill="url(#d)"/>
<g transform="translate(1030 190)" fill="none" stroke="#fff" stroke-opacity=".18"><circle r="64"/><circle r="108" stroke-dasharray="3 9"/><circle r="150" stroke-opacity=".1"/>
<g><animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="24s" repeatCount="indefinite"/><circle cx="108" r="7" fill="#2EBD74" stroke="none"/></g>
<g><animateTransform attributeName="transform" type="rotate" from="360" to="0" dur="34s" repeatCount="indefinite"/><circle cx="150" r="6" fill="#B5D86A" stroke="none"/></g></g>
<g transform="translate(70 90)">
<rect width="190" height="36" rx="18" fill="#2EBD74" fill-opacity=".12" stroke="#2EBD74" stroke-opacity=".5"/>
<circle cx="18" cy="18" r="5" fill="#2EBD74"><animate attributeName="opacity" values="1;.2;1" dur="2s" repeatCount="indefinite"/></circle>
<text x="36" y="24" ${mono} font-size="15" fill="#B5D86A" letter-spacing="2">WEB STUDIO</text></g>
<text x="66" y="215" ${font} font-size="92" font-weight="800" fill="url(#g)" letter-spacing="-3">Team Redesign</text>
<text x="70" y="272" ${font} font-size="34" font-weight="600" fill="#fff" fill-opacity=".92">We redesign and architect websites.</text>
<text x="70" y="322" ${mono} font-size="20" fill="#B5D86A">Next.js · React · TypeScript · Tailwind · GSAP · Three.js</text></g>
<rect x=".5" y=".5" width="1199" height="379" rx="22" fill="none" stroke="#2EBD74" stroke-opacity=".25"/></svg>`);

fs.writeFileSync(out + 'divider.svg', `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="20" viewBox="0 0 1200 20" role="presentation"><defs><linearGradient id="l" x1="0" x2="1"><stop offset="0" stop-color="#2EBD74" stop-opacity="0"/><stop offset=".5" stop-color="#2EBD74"/><stop offset="1" stop-color="#2EBD74" stop-opacity="0"/></linearGradient></defs><rect y="9" width="1200" height="2" fill="url(#l)"/><circle cy="10" r="4" fill="#B5D86A"><animate attributeName="cx" values="0;1200" dur="6s" repeatCount="indefinite"/></circle></svg>`);

const title = (id, t, sub) => fs.writeFileSync(out + `t-${id}.svg`, `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="96" viewBox="0 0 1200 96" role="img" aria-label="${t}">${defs}<text x="600" y="52" text-anchor="middle" ${font} font-size="46" font-weight="800" fill="url(#g)">${t}</text><text x="600" y="84" text-anchor="middle" ${mono} font-size="18" fill="#B5D86A" letter-spacing="3">${sub}</text></svg>`);
title('work', 'Selected Redesigns', 'LIVE · OPEN SOURCE · SHIPPED');
title('process', 'How We Work', 'FROM AUDIT TO LAUNCH');
title('stack', 'Our Toolkit', 'BUILT FOR SPEED, MOTION &amp; ACCESSIBILITY');

const projects = [
  ['imperial', 'Imperial Law', 'Law firm · Kathmandu', 'Bilingual English / Nepali redesign of a law firm site.', ['Next.js 16', 'React 19', 'Tailwind 4'], '#2EBD74'],
  ['murshida', 'Murshida Portfolio', 'Portfolio · Astrology', 'Calm, elegant portfolio redesign with fast static output.', ['Astro', 'React', 'Tailwind'], '#1A9E7C'],
  ['makura', 'Makura Creations', 'Creative studio', 'Cinematic redesign driven by scroll motion and 3D.', ['Next.js', 'GSAP', 'Three.js'], '#6FAE3B'],
  ['pragati', 'Digital Pragati', 'Lead generation', 'Lead-gen sites for Nepali-owned businesses in AU &amp; NP.', ['Next.js', 'Static site', 'Backend'], '#B5D86A'],
  ['sitebazaar', 'SiteBazaar', 'Marketplace', 'A website marketplace styled like an auction house.', ['Next.js', 'shadcn/ui', 'GSAP'], '#5FBF86'],
];
projects.forEach(([id, n, k, d, tags, c], i) => {
  let x = 28;
  const chips = tags.map((t) => {
    const w = t.length * 10 + 28;
    const s = `<g transform="translate(${x} 162)"><rect width="${w}" height="32" rx="16" fill="${c}" fill-opacity=".12" stroke="${c}" stroke-opacity=".5"/><text x="${w / 2}" y="21" text-anchor="middle" ${mono} font-size="14" fill="#e8f5ee">${t}</text></g>`;
    x += w + 10;
    return s;
  }).join('');
  fs.writeFileSync(out + `p-${id}.svg`, `<svg xmlns="http://www.w3.org/2000/svg" width="560" height="230" viewBox="0 0 560 230" role="img" aria-label="${n}: ${k}">${defs}
<clipPath id="r"><rect width="560" height="230" rx="18"/></clipPath>
<g clip-path="url(#r)"><rect width="560" height="230" fill="url(#bg)"/><rect width="560" height="230" fill="url(#d)"/>
<g filter="url(#b)"><ellipse cx="480" cy="30" rx="130" ry="70" fill="${c}" fill-opacity=".45"><animateTransform attributeName="transform" type="translate" values="0 0;-60 30;0 0" dur="10s" repeatCount="indefinite"/></ellipse></g>
<rect width="6" height="230" fill="${c}"/>
<text x="28" y="48" ${mono} font-size="15" fill="${c}" letter-spacing="2">0${i + 1} / ${k.toUpperCase()}</text>
<text x="28" y="104" ${font} font-size="44" font-weight="800" fill="#fff" letter-spacing="-1">${n}</text>
<text x="28" y="142" ${font} font-size="19" fill="#fff" fill-opacity=".88">${d}</text>
${chips}
<text x="28" y="218" ${mono} font-size="16" font-weight="700" fill="${c}">VIEW LIVE ↗</text></g>
<rect x=".5" y=".5" width="559" height="229" rx="18" fill="none" stroke="${c}" stroke-opacity=".3"/></svg>`);
});

fs.writeFileSync(out + 'p-next.svg', `<svg xmlns="http://www.w3.org/2000/svg" width="560" height="230" viewBox="0 0 560 230" role="img" aria-label="Your site is next">${defs}<clipPath id="r"><rect width="560" height="230" rx="18"/></clipPath><g clip-path="url(#r)"><rect width="560" height="230" fill="url(#bg)"/><rect width="560" height="230" fill="url(#d)"/></g>
<rect x="1" y="1" width="558" height="228" rx="18" fill="none" stroke="#2EBD74" stroke-opacity=".6" stroke-dasharray="6 8"><animate attributeName="stroke-dashoffset" from="0" to="-56" dur="3s" repeatCount="indefinite"/></rect>
<text x="280" y="108" text-anchor="middle" ${font} font-size="40" font-weight="800" fill="url(#g)">Your site is next</text>
<text x="280" y="150" text-anchor="middle" ${font} font-size="20" fill="#fff" fill-opacity=".88">Tell us what is holding it back.</text></svg>`);

const steps = [
  ['01', 'Audit', 'Find what hurts speed,', 'clarity and conversion.'],
  ['02', 'Architect', 'Structure content, flows', 'and the component system.'],
  ['03', 'Design', 'Craft a bold, accessible', 'visual language.'],
  ['04', 'Build &amp; Launch', 'Ship fast on Next.js with', 'motion that earns its place.'],
];
fs.writeFileSync(out + 'process.svg', `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="230" viewBox="0 0 1200 230" role="img" aria-label="Process: Audit, Architect, Design, Build and Launch">${defs}
<line x1="150" y1="40" x2="1050" y2="40" stroke="#2EBD74" stroke-opacity=".35" stroke-dasharray="4 8"><animate attributeName="stroke-dashoffset" from="0" to="-48" dur="4s" repeatCount="indefinite"/></line>
${steps.map(([n, t, a, b], i) => { const cx = 150 + i * 300; return `<circle cx="${cx}" cy="40" r="28" fill="#08170F" stroke="#2EBD74" stroke-width="2"/><text x="${cx}" y="46" text-anchor="middle" ${mono} font-size="18" fill="#B5D86A">${n}</text><text x="${cx}" y="108" text-anchor="middle" ${font} font-size="30" font-weight="800" fill="#fff">${t}</text><text x="${cx}" y="144" text-anchor="middle" ${font} font-size="18" fill="#c9e3d6">${a}</text><text x="${cx}" y="170" text-anchor="middle" ${font} font-size="18" fill="#c9e3d6">${b}</text>`; }).join('')}</svg>`);

const stack = ['Next.js', 'React', 'TypeScript', 'Tailwind', 'GSAP', 'Three.js', 'Astro', 'Vercel'];
const items = stack.map((t) => ({ t, w: t.length * 13 + 48 }));
let sx = (1200 - items.reduce((a, b) => a + b.w + 14, -14)) / 2;
const pills = items.map((it, i) => {
  const s = `<g transform="translate(${sx} 26)"><rect width="${it.w}" height="52" rx="26" fill="#08170F" stroke="#2EBD74" stroke-opacity=".5"><animate attributeName="stroke-opacity" values=".25;.8;.25" dur="${3 + i * 0.4}s" repeatCount="indefinite"/></rect><text x="${it.w / 2}" y="33" text-anchor="middle" ${mono} font-size="20" font-weight="700" fill="#e8f5ee">${it.t}</text></g>`;
  sx += it.w + 14;
  return s;
}).join('');
fs.writeFileSync(out + 'stack.svg', `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="104" viewBox="0 0 1200 104" role="img" aria-label="Toolkit: ${stack.join(', ')}">${defs}${pills}</svg>`);

fs.writeFileSync(out + 'footer.svg', `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="220" viewBox="0 0 1200 220" role="img" aria-label="Let us redesign your website">${defs}<clipPath id="r"><rect width="1200" height="220" rx="22"/></clipPath><g clip-path="url(#r)"><rect width="1200" height="220" fill="url(#bg)"/><rect width="1200" height="220" fill="url(#d)"/><g filter="url(#b)"><ellipse cx="300" cy="200" rx="300" ry="90" fill="#2EBD74" fill-opacity=".5"><animateTransform attributeName="transform" type="translate" values="0 0;400 -20;0 0" dur="14s" repeatCount="indefinite"/></ellipse><ellipse cx="900" cy="20" rx="280" ry="80" fill="#6FAE3B" fill-opacity=".4"/></g>
<text x="600" y="112" text-anchor="middle" ${font} font-size="58" font-weight="800" fill="url(#g)" letter-spacing="-1">Let's redesign your website.</text>
<text x="600" y="164" text-anchor="middle" ${mono} font-size="24" font-weight="700" fill="#B5D86A">contact@teamredesign.com</text></g></svg>`);


const stats = [['5', 'live redesigns'], ['EN + NE', 'bilingual builds'], ['100%', 'open source']];
fs.writeFileSync(out + 'stats.svg', `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="170" viewBox="0 0 1200 170" role="img" aria-label="5 live redesigns, English and Nepali bilingual builds, 100 percent open source">${defs}
${stats.map(([big, small], i) => { const x = 20 + i * 394; return `<g transform="translate(${x} 10)"><rect width="372" height="150" rx="22" fill="url(#bg)" stroke="#2EBD74" stroke-opacity=".4" stroke-width="1.5"/><text x="186" y="82" text-anchor="middle" ${font} font-size="62" font-weight="800" fill="url(#g)">${big}</text><text x="186" y="122" text-anchor="middle" ${mono} font-size="20" fill="#e8f5ee" letter-spacing="1">${small}</text></g>`; }).join('')}</svg>`);

const why = [['Faster', 'Pages that load in a blink, so visitors stay.', '#2EBD74'], ['Clearer', 'Structure and copy that guide people to act.', '#1A9E7C'], ['Memorable', 'Motion and design nobody mistakes for a template.', '#B5D86A']];
fs.writeFileSync(out + 'why.svg', `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="230" viewBox="0 0 1200 230" role="img" aria-label="Faster, clearer, memorable websites">${defs}
${why.map(([t, d, c], i) => { const x = 20 + i * 394; const k = d.lastIndexOf(' ', 28); return `<g transform="translate(${x} 10)"><rect width="372" height="210" rx="22" fill="url(#bg)" stroke="${c}" stroke-opacity=".45" stroke-width="1.5"/><rect x="28" y="30" width="48" height="6" rx="3" fill="${c}"/><text x="28" y="96" ${font} font-size="42" font-weight="800" fill="#fff">${t}</text><text x="28" y="140" ${font} font-size="20" fill="#d4ebdf">${d.slice(0, k)}</text><text x="28" y="168" ${font} font-size="20" fill="#d4ebdf">${d.slice(k + 1)}</text></g>`; }).join('')}</svg>`);
title('why', 'Why Teams Pick Us', 'THREE THINGS WE OBSESS OVER');
