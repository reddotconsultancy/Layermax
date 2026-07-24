#!/usr/bin/env node
// Pre-screen for the "one listing, several products" problem.
// Reads image dimensions straight from file headers (no dependencies) and flags:
//   - tiny / thumbnail-sized files that are almost certainly crops, not products
//   - galleries whose images vary wildly in aspect ratio or pixel size, which is the
//     signature of a bundle (separate product shots) rather than one product's angles
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');
process.chdir(ROOT);
global.window = { location: { pathname: '/' } };
const P = require(path.join(ROOT, 'pages', 'products-data.js'));

function dims(file) {
  const fd = fs.openSync(file, 'r');
  const buf = Buffer.alloc(65536);
  const read = fs.readSync(fd, buf, 0, 65536, 0);
  fs.closeSync(fd);
  if (buf.slice(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))) {
    return { w: buf.readUInt32BE(16), h: buf.readUInt32BE(20) };
  }
  if (buf[0] === 0xff && buf[1] === 0xd8) {                       // JPEG: walk the markers
    let i = 2;
    while (i < read - 9) {
      if (buf[i] !== 0xff) { i++; continue; }
      const m = buf[i + 1];
      if (m >= 0xc0 && m <= 0xcf && m !== 0xc4 && m !== 0xc8 && m !== 0xcc) {
        return { h: buf.readUInt16BE(i + 5), w: buf.readUInt16BE(i + 7) };
      }
      i += 2 + buf.readUInt16BE(i + 2);
    }
  }
  return null;
}

const rows = [];
P.filter(p => p.images.length > 1).forEach(p => {
  const info = p.images.map(f => {
    const d = dims(f) || { w: 0, h: 0 };
    return { f, ...d, px: d.w * d.h, ar: d.h ? +(d.w / d.h).toFixed(2) : 0, kb: Math.round(fs.statSync(f).size / 1024) };
  });
  const px = info.map(i => i.px).filter(Boolean);
  const ars = info.map(i => i.ar).filter(Boolean);
  const pxRatio = px.length ? Math.max(...px) / Math.min(...px) : 1;
  const arSpread = ars.length ? Math.max(...ars) - Math.min(...ars) : 0;
  const tiny = info.filter(i => i.px && i.px < 40000);            // < ~200x200
  rows.push({ id: p.id, cat: p.category, n: p.images.length, pxRatio: +pxRatio.toFixed(1), arSpread: +arSpread.toFixed(2), tiny: tiny.length, info });
});

const suspect = rows.filter(r => r.pxRatio >= 4 || r.arSpread >= 0.8 || r.tiny > 0)
  .sort((a, b) => b.n - a.n || b.pxRatio - a.pxRatio);
const clean = rows.filter(r => !suspect.includes(r));

console.log('galleries screened      :', rows.length, '(' + rows.reduce((a, r) => a + r.n, 0) + ' images)');
console.log('flagged for manual view :', suspect.length, '(' + suspect.reduce((a, r) => a + r.n, 0) + ' images)');
console.log('consistent (likely one product, low risk):', clean.length, '(' + clean.reduce((a, r) => a + r.n, 0) + ' images)');
console.log('\nTiny images (<200px — crops/junk, not products):');
let tinyTotal = 0;
rows.forEach(r => r.info.filter(i => i.px && i.px < 40000).forEach(i => { tinyTotal++; }));
console.log('  ', tinyTotal, 'files across', rows.filter(r => r.tiny).length, 'products');

console.log('\nTop flagged galleries:');
suspect.slice(0, 30).forEach(r =>
  console.log(`  ${String(r.n).padStart(2)} imgs | pxRatio ${String(r.pxRatio).padStart(6)} | arSpread ${String(r.arSpread).padStart(5)} | tiny ${r.tiny} | ${r.id}`));

fs.writeFileSync(path.join(__dirname, 'gallery-screen.json'), JSON.stringify({ suspect, clean }, null, 2));
console.log('\nfull data -> tools/gallery-screen.json');
