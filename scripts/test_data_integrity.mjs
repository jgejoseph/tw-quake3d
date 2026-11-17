import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { build } from 'vite';
import { verifyDataDirectory } from './verify-data.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'quake-integrity-'));
try {
  assert.equal(verifyDataDirectory(path.join(root, 'public/data')), 8);
  assert.equal(verifyDataDirectory(path.join(root, 'dist/data')), 8);
  console.log('PASS source and built data: all 8 baseline SHA-256 values');
  fs.mkdirSync(path.join(tmp, 'public'));
  fs.writeFileSync(path.join(tmp, 'index.html'), '<!doctype html><title>integrity fixture</title>');
  // Simulate core.symlinks=false without touching the real checkout/data.
  fs.writeFileSync(path.join(tmp, 'public/data'), '../data');
  await assert.rejects(build({ configFile: path.join(root, 'vite.config.js'), root: tmp, logLevel: 'silent' }), /Data integrity:/);
  console.log('PASS build rejects symlink materialized as a text file');
  fs.unlinkSync(path.join(tmp, 'public/data'));
  fs.symlinkSync(path.join(root, 'data'), path.join(tmp, 'public/data'), 'dir');
  // Source is intact, but a disabled public copy must fail output validation.
  await assert.rejects(build({ configFile: path.join(root, 'vite.config.js'), root: tmp, logLevel: 'silent', build: { copyPublicDir: false } }), /Data integrity:/);
  console.log('PASS build rejects missing output data even with intact source');
  const broken = path.join(tmp, 'broken');
  fs.mkdirSync(broken);
  fs.copyFileSync(path.join(root, 'data/county-2025-03-18.geojson'), path.join(broken, 'county-2025-03-18.geojson'));
  fs.writeFileSync(path.join(broken, 'earthquakes.bin'), 'truncated');
  assert.throws(() => verifyDataDirectory(broken), /SHA-256 mismatch/);
  console.log('PASS data guard rejects corrupt binary content');
} finally {
  fs.rmSync(tmp, { recursive: true, force: true });
}
