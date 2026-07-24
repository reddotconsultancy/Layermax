#!/usr/bin/env node
// Removes owner-rejected images from the product galleries and deletes the files.
//   node tools/apply-image-deletions.js "10,13,14" [--dry]
// Numbers are the ones shown in ownerview/index.html.
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');
process.chdir(ROOT);
const DRY = process.argv.includes('--dry');
const arg = process.argv[2];
if (!arg) { console.error('usage: node tools/apply-image-deletions.js "10,13,14"'); process.exit(1); }

const flagged = fs.readFileSync(path.join(__dirname, 'flagged-images.txt'), 'utf8')
  .split('\n').map(l => l.trim()).filter(Boolean)
  .map(l => { const [id, src, reason] = l.split('|'); return { id, src, reason }; });
const ORDER = ['destroyed-or-empty', 'flat-no-detail', 'mostly-black', 'tiny-crop'];
const sorted = flagged.sort((a, b) => ORDER.indexOf(a.reason) - ORDER.indexOf(b.reason) || a.id.localeCompare(b.id));

const picks = arg.split(',').map(s => +s.trim()).filter(Boolean).sort((a, b) => a - b);
const targets = picks.map(n => {
  const f = sorted[n - 1];
  if (!f) throw new Error('no image numbered ' + n);
  return { n, ...f };
});

global.window = { location: { pathname: '/' } };
const P = require(path.join(ROOT, 'pages', 'products-data.js'));

const drop = new Set(targets.map(t => t.src));
const changed = [];
let removedRefs = 0;
P.forEach(p => {
  if (!Array.isArray(p.images)) return;
  const keep = p.images.filter(f => !drop.has(f));
  if (keep.length === p.images.length) return;
  if (keep.length === 0) { console.error('REFUSING: would empty gallery for ' + p.id); process.exit(1); }
  removedRefs += p.images.length - keep.length;
  const primaryWent = !keep.includes(p.img);
  p.images = keep;
  if (primaryWent) p.img = keep[0];
  changed.push({ id: p.id, now: keep.length, primaryRepointed: primaryWent });
});

if (!DRY) {
  const src = fs.readFileSync('pages/products-data.js', 'utf8');
  const start = src.indexOf('const PRODUCTS = [');
  const end = src.lastIndexOf('];');
  fs.writeFileSync('pages/products-data.js',
    src.slice(0, start + 'const PRODUCTS = '.length) +
    JSON.stringify(P, null, 2).replace(/\n/g, '\r\n') +
    src.slice(end + 1));
}

// delete the files, but only once no product still points at them
const stillUsed = new Set();
P.forEach(p => (p.images || []).forEach(f => stillUsed.add(f)));
let deleted = 0, freed = 0, skipped = [];
targets.forEach(t => {
  if (stillUsed.has(t.src)) { skipped.push(t.src); return; }   // shared with another product
  if (!fs.existsSync(t.src)) return;
  freed += fs.statSync(t.src).size;
  if (!DRY) fs.unlinkSync(t.src);
  deleted++;
});

console.log(DRY ? '=== DRY RUN ===' : '=== APPLIED ===');
console.log('  images selected      :', targets.length);
console.log('  gallery entries removed:', removedRefs, 'across', changed.length, 'products');
console.log('  files deleted        :', deleted, '(' + (freed / 1024).toFixed(0) + ' KB)');
if (skipped.length) { console.log('  kept on disk (still used elsewhere):'); skipped.forEach(s => console.log('    ' + s)); }
console.log('\n  products touched:');
changed.forEach(c => console.log(`    ${c.id} → ${c.now} images${c.primaryRepointed ? '  (main photo repointed)' : ''}`));
