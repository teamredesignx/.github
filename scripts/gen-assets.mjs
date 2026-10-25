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
<rect width="168" height="30" rx="15" fill="#2EBD74" fill-opacity=".12" stroke="#2EBD74" stroke-opacity=".5"/>
<circle cx="18" cy="15" r="4" fill="#2EBD74"><animate attributeName="opacity" values="1;.2;1" dur="2s" repeatCount="indefinite"/></circle>
<text x="32" y="20" ${mono} font-size="12" fill="#B5D86A" letter-spacing="1.5">WEB STUDIO</text></g>
<text x="66" y="215" ${font} font-size="92" font-weight="800" fill="url(#g)" letter-spacing="-3">Team Redesign</text>
<text x="70" y="268" ${font} font-size="26" fill="#fff" fill-opacity=".85">We redesign and architect websites.</text>
<text x="70" y="312" ${mono} font-size="15" fill="#8FB5A2">Next.js Â· React Â· TypeScript Â· Tailwind Â· GSAP Â· Three.js</text></g>
<rect x=".5" y=".5" width="1199" height="379" rx="22" fill="none" stroke="#2EBD74" stroke-opacity=".25"/></svg>`);

fs.writeFileSync(out + 'divider.svg', `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="20" viewBox="0 0 1200 20" role="presentation"><defs><linearGradient id="l" x1="0" x2="1"><stop offset="0" stop-color="#2EBD74" stop-opacity="0"/><stop offset=".5" stop-color="#2EBD74"/><stop offset="1" stop-color="#2EBD74" stop-opacity="0"/></linearGradient></defs><rect y="9" width="1200" height="2" fill="url(#l)"/><circle cy="10" r="4" fill="#B5D86A"><animate attributeName="cx" values="0;1200" dur="6s" repeatCount="indefinite"/></circle></svg>`);

const title = (id, t, sub) => fs.writeFileSync(out + `t-${id}.svg`, `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="84" viewBox="0 0 1200 84" role="img" aria-label="${t}">${defs}<text x="600" y="44" text-anchor="middle" ${font} font-size="38" font-weight="800" fill="url(#g)">${t}</text><text x="600" y="72" text-anchor="middle" ${mono} font-size="13" fill="#8FB5A2" letter-spacing="2">${sub}</text></svg>`);
title('work', 'Selected Redesigns', 'LIVE Â· OPEN SOURCE Â· SHIPPED');
title('process', 'How We Work', 'FROM AUDIT TO LAUNCH');
title('stack', 'Our Toolkit', 'BUILT FOR SPEED, MOTION &amp; ACCESSIBILITY');

const projects = [
  ['imperial', 'Imperial Law', 'Law firm Â· Kathmandu', 'Bilingual English / Nepali redesign of a law firm site.', ['Next.js 16', 'React 19', 'Tailwind 4'], '#2EBD74'],
  ['murshida', 'Murshida Portfolio', 'Portfolio Â· Astrology', 'Calm, elegant portfolio redesign with fast static output.', ['Astro', 'React', 'Tailwind'], '#1A9E7C'],
  ['makura', 'Makura Creations', 'Creative studio', 'Cinematic redesign driven by scroll motion and 3D.', ['Next.js', 'GSAP', 'Three.js'], '#6FAE3B'],
  ['pragati', 'Digital Pragati', 'Lead generation', 'Lead-gen sites for Nepali-owned businesses in AU &amp; NP.', ['Next.js', 'Static site', 'Backend'], '#B5D86A'],
  ['sitebazaar', 'SiteBazaar', 'Marketplace', 'A website marketplace styled like an auction house.', ['Next.js', 'shadcn/ui', 'GSAP'], '#5FBF86'],
];
projects.forEach(([id, n, k, d, tags, c], i) => {
  let x = 28;
  const chips = tags.map((t) => {
    const w = t.length * 8 + 22;
    const s = `<g transform="translate(${x} 160)"><rect width="${w}" height="26" rx="13" fill="${c}" fill-opacity=".12" stroke="${c}" stroke-opacity=".5"/><text x="${w / 2}" y="17" text-anchor="middle" ${mono} font-size="11" fill="#e8f5ee">${t}</text></g>`;
    x += w + 8;
    return s;
  }).join('');
  fs.writeFileSync(out + `p-${id}.svg`, `<svg xmlns="http://www.w3.org/2000/svg" width="560" height="230" viewBox="0 0 560 230" role="img" aria-label="${n}: ${k}">${defs}
<clipPath id="r"><rect width="560" height="230" rx="18"/></clipPath>
<g clip-path="url(#r)"><rect width="560" height="230" fill="url(#bg)"/><rect width="560" height="230" fill="url(#d)"/>
<g filter="url(#b)"><ellipse cx="480" cy="30" rx="130" ry="70" fill="${c}" fill-opacity=".45"><animateTransform attributeName="transform" type="translate" values="0 0;-60 30;0 0" dur="10s" repeatCount="indefinite"/></ellipse></g>
<rect width="6" height="230" fill="${c}"/>
<text x="28" y="48" ${mono} font-size="12" fill="${c}" letter-spacing="2">0${i + 1} / ${k.toUpperCase()}</text>
<text x="28" y="98" ${font} font-size="36" font-weight="800" fill="#fff" letter-spacing="-1">${n}</text>
<text x="28" y="132" ${font} font-size="15" fill="#fff" fill-opacity=".75">${d}</text>
${chips}
<text x="28" y="212" ${mono} font-size="12" fill="${c}">View live â†—</text></g>
<rect x=".5" y=".5" width="559" height="229" rx="18" fill="none" stroke="${c}" stroke-opacity=".3"/></svg>`);
});

fs.writeFileSync(out + 'p-next.svg', `<svg xmlns="http://www.w3.org/2000/svg" width="560" height="230" viewBox="0 0 560 230" role="img" aria-label="Your site is next">${defs}<clipPath id="r"><rect width="560" height="230" rx="18"/></clipPath><g clip-path="url(#r)"><rect width="560" height="230" fill="url(#bg)"/><rect width="560" height="230" fill="url(#d)"/></g>
<rect x="1" y="1" width="558" height="228" rx="18" fill="none" stroke="#2EBD74" stroke-opacity=".6" stroke-dasharray="6 8"><animate attributeName="stroke-dashoffset" from="0" to="-56" dur="3s" repeatCount="indefinite"/></rect>
<text x="280" y="108" text-anchor="middle" ${font} font-size="34" font-weight="800" fill="url(#g)">Your site is next</text>
<text x="280" y="144" text-anchor="middle" ${font} font-size="15" fill="#fff" fill-opacity=".75">Tell us what is holding it back.</text></svg>`);

const steps = [
  ['01', 'Audit', 'Find what hurts speed,', 'clarity and conversion.'],
  ['02', 'Architect', 'Structure content, flows', 'and the component system.'],
  ['03', 'Design', 'Craft a bold, accessible', 'visual language.'],
  ['04', 'Build &amp; Launch', 'Ship fast on Next.js with', 'motion that earns its place.'],
];
fs.writeFileSync(out + 'process.svg', `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="170" viewBox="0 0 1200 170" role="img" aria-label="Process: Audit, Architect, Design, Build and Launch">${defs}
<line x1="150" y1="40" x2="1050" y2="40" stroke="#2EBD74" stroke-opacity=".35" stroke-dasharray="4 8"><animate attributeName="stroke-dashoffset" from="0" to="-48" dur="4s" repeatCount="indefinite"/></line>
${steps.map(([n, t, a, b], i) => { const cx = 150 + i * 300; return `<circle cx="${cx}" cy="40" r="24" fill="#08170F" stroke="#2EBD74"/><text x="${cx}" y="45" text-anchor="middle" ${mono} font-size="14" fill="#B5D86A">${n}</text><text x="${cx}" y="100" text-anchor="middle" ${font} font-size="22" font-weight="700" fill="#fff">${t}</text><text x="${cx}" y="126" text-anchor="middle" ${font} font-size="13" fill="#8FB5A2">${a}</text><text x="${cx}" y="145" text-anchor="middle" ${font} font-size="13" fill="#8FB5A2">${b}</text>`; }).join('')}</svg>`);

const stack = ['Next.js', 'React', 'TypeScript', 'Tailwind', 'GSAP', 'Three.js', 'Astro', 'Vercel', 'Figma'];
const items = stack.map((t) => ({ t, w: t.length * 10 + 40 }));
let sx = (1200 - items.reduce((a, b) => a + b.w + 12, -12)) / 2;
const pills = items.map((it, i) => {
  const s = `<g transform="translate(${sx} 34)"><rect width="${it.w}" height="42" rx="21" fill="#08170F" stroke="#2EBD74" stroke-opacity=".5"><animate attributeName="stroke-opacity" values=".25;.8;.25" dur="${3 + i * 0.4}s" repeatCount="indefinite"/></rect><text x="${it.w / 2}" y="27" text-anchor="middle" ${mono} font-size="14" fill="#e8f5ee">${it.t}</text></g>`;
  sx += it.w + 12;
  return s;
}).join('');
fs.writeFileSync(out + 'stack.svg', `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="110" viewBox="0 0 1200 110" role="img" aria-label="Toolkit: ${stack.join(', ')}">${defs}${pills}</svg>`);

fs.writeFileSync(out + 'footer.svg', `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="220" viewBox="0 0 1200 220" role="img" aria-label="Let us redesign your website">${defs}<clipPath id="r"><rect width="1200" height="220" rx="22"/></clipPath><g clip-path="url(#r)"><rect width="1200" height="220" fill="url(#bg)"/><rect width="1200" height="220" fill="url(#d)"/><g filter="url(#b)"><ellipse cx="300" cy="200" rx="300" ry="90" fill="#2EBD74" fill-opacity=".5"><animateTransform attributeName="transform" type="translate" values="0 0;400 -20;0 0" dur="14s" repeatCount="indefinite"/></ellipse><ellipse cx="900" cy="20" rx="280" ry="80" fill="#6FAE3B" fill-opacity=".4"/></g>
<text x="600" y="108" text-anchor="middle" ${font} font-size="48" font-weight="800" fill="url(#g)" letter-spacing="-1">Let's redesign your website.</text>
<text x="600" y="150" text-anchor="middle" ${mono} font-size="15" fill="#B5D86A">contact@teamredesign.com</text></g></svg>`);

