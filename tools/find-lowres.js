#!/usr/bin/env node
// Finds product images whose native resolution is smaller than the space they are
// displayed in, so the browser upscales them and they look soft or blocky.
//
// The product page shows the main image in a ~600px-wide box on desktop
// (1320px container -> 684px gallery column -> minus 40px padding each side).
//   node tools/find-lowres.js
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');
process.chdir(ROOT);
global.window = { location: { pathname: '/' } };
const P = require(path.join(ROOT, 'pages', 'products-data.js'));

const DISPLAY = 600;

function dims(file) {
  const fd = fs.openSync(file, 'r');
  const buf = Buffer.alloc(65536);
  const read = fs.readSync(fd, buf, 0, 65536, 0);
  fs.closeSync(fd);
  if (buf.slice(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a])))
    return { w: buf.readUInt32BE(16), h: buf.readUInt32BE(20) };
  if (buf[0] === 0xff && buf[1] === 0xd8) {
    let i = 2;
    while (i < read - 9) {
      if (buf[i] !== 0xff) { i++; continue; }
      const m = buf[i + 1];
      if (m >= 0xc0 && m <= 0xcf && m !== 0xc4 && m !== 0xc8 && m !== 0xcc)
        return { h: buf.readUInt16BE(i + 5), w: buf.readUInt16BE(i + 7) };
      i += 2 + buf.readUInt16BE(i + 2);
    }
  }
  return null;
}

const rows = [];
P.forEach(p => (p.images || []).forEach((f, idx) => {
  const d = dims(f);
  if (!d) return;
  const longest = Math.max(d.w, d.h);
  if (longest >= DISPLAY) return;                       // fills the box fine
  const upscale = +(DISPLAY / longest).toFixed(1);
  const grade = longest < 200 ? 'unusable' : longest < 350 ? 'bad' : 'soft';
  rows.push({ id: p.id, src: f, w: d.w, h: d.h, longest, upscale, grade, isMain: idx === 0 });
}));

const ORDER = { unusable: 0, bad: 1, soft: 2 };
rows.sort((a, b) => ORDER[a.grade] - ORDER[b.grade] || b.upscale - a.upscale);

const by = g => rows.filter(r => r.grade === g);
console.log(`display box: ${DISPLAY}px · images checked: ${P.reduce((a, p) => a + p.images.length, 0)}`);
console.log('');
console.log(`  unusable  (<200px, 3x+ upscale) : ${by('unusable').length}   ${by('unusable').filter(r => r.isMain).length} are a product's MAIN photo`);
console.log(`  bad       (200-350px, 2-3x)     : ${by('bad').length}   ${by('bad').filter(r => r.isMain).length} main`);
console.log(`  soft      (350-600px, 1-2x)     : ${by('soft').length}   ${by('soft').filter(r => r.isMain).length} main`);
console.log(`  TOTAL upscaled                  : ${rows.length}`);

const prods = new Set(rows.map(r => r.id));
console.log(`  affecting ${prods.size} products`);

fs.writeFileSync(path.join(__dirname, 'lowres-images.txt'),
  rows.map(r => [r.id, r.src, r.grade, r.upscale, r.w, r.h, r.isMain ? 'MAIN' : 'gallery'].join('|')).join('\n') + '\n');

console.log('\nworst 15:');
rows.slice(0, 15).forEach(r =>
  console.log(`  ${String(r.upscale).padStart(5)}x  ${String(r.w + 'x' + r.h).padStart(9)}  ${r.isMain ? 'MAIN   ' : 'gallery'}  ${r.id}  ${path.basename(r.src)}`));
console.log('\nlist -> tools/lowres-images.txt');
