import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';

// Fixed scientific-data baseline at 588cf4a. Updating this manifest requires
// separate approval for a data change; do not regenerate it during a build.
const expected = JSON.parse(fs.readFileSync(new URL('./data-sha256.json', import.meta.url), 'utf8'));
export function verifyDataDirectory(directory) {
  if (!fs.existsSync(directory) || !fs.statSync(directory).isDirectory()) {
    throw new Error(`Data integrity: ${directory} must be a directory (check public/data symlink checkout)`);
  }
  for (const [name, hash] of Object.entries(expected)) {
    const file = path.join(directory, name);
    if (!fs.existsSync(file) || !fs.statSync(file).isFile()) throw new Error(`Data integrity: missing file ${file}`);
    const actual = createHash('sha256').update(fs.readFileSync(file)).digest('hex');
    if (actual !== hash) throw new Error(`Data integrity: SHA-256 mismatch for ${file}`);
  }
  return Object.keys(expected).length;
}

export function dataIntegrityPlugin() {
  let config;
  return {
    name: 'verify-scientific-data',
    apply: 'build',
    configResolved(resolved) { config = resolved; },
    buildStart() { verifyDataDirectory(path.join(config.publicDir, 'data')); },
    closeBundle() { verifyDataDirectory(path.resolve(config.root, config.build.outDir, 'data')); },
  };
}
