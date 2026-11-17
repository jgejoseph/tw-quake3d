import assert from 'node:assert/strict';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as THREE from 'three';
import { createServer } from 'vite';

// SSR loads the actual source module with Vite's import.meta.env transform.
// No WebGL/GPU or app __faultPoint helper is used to compute the oracle.
const root = process.argv[2] || fileURLToPath(new URL('../', import.meta.url));
const server = await createServer({ configFile: false, root, server: { middlewareMode: true, hmr: false } });
const originals = new Map(['fetch', 'document', 'innerWidth', 'innerHeight', 'devicePixelRatio'].map(k => [k, Object.getOwnPropertyDescriptor(globalThis, k)]));
try {
  const meta = { rows: 2, cols: 2, lon_first: 120, lon_last: 122, lat_first: 23, lat_last: 24 };
  globalThis.fetch = async url => {
    if (url.endsWith('faults.json')) return { ok: true, json: async () => [{ name: 'fixture', coords: [[121, 23.5], [121.01, 23.5]] }] };
    if (url.endsWith('terrain_meta.json')) return { json: async () => meta };
    if (url.endsWith('terrain_int16.bin')) return { arrayBuffer: async () => new Int16Array(4).buffer };
    throw new Error(`Unexpected fixture request ${url}`);
  };
  globalThis.document = { querySelector: () => ({ width: 480, height: 400 }) };
  globalThis.innerWidth = 480; globalThis.innerHeight = 400; globalThis.devicePixelRatio = 1;
  const { initFaults } = await server.ssrLoadModule(path.join(root, 'src/faults.js'));
  const scene = new THREE.Group(), lid = new THREE.Group(); scene.add(lid);
  const faults = await initFaults({ lid, toX: lon => (lon - 121) * 100, toZ: lat => -(lat - 23.5) * 100, DEPTH_SCALE: 1, TERRAIN_EXAG: 5, LAND_EXAG: 15 });
  faults.setVisible(true);
  const camera = new THREE.PerspectiveCamera(45, 480 / 400, 1, 20000);
  camera.position.set(100, 150, 300); camera.lookAt(0, 0, 0); camera.updateMatrixWorld();
  // The fixture is densified into 0, 0.5, 1 km. Its midpoint is known
  // independently from our input; flat terrain gives y=0+1.8, unchanged.
  for (const lift of [0, 35, 80]) {
    lid.position.set(0, lift, 0);
    // Deliberately do not update matrices: the module must handle fresh input.
    const result = faults.project('fixture', camera);
    lid.updateWorldMatrix(true, false);
    const p = new THREE.Vector3(0.5, 1.8, 0).applyMatrix4(lid.matrixWorld).project(camera);
    const expected = [(p.x + 1) / 2 * 480, (1 - p.y) / 2 * 400];
    assert.ok(Math.hypot(result[0] - expected[0], result[1] - expected[1]) < 1e-4, `project lift=${lift}: ${result} vs independent ${expected}`);
    assert.equal(faults.pick(expected[0], expected[1], camera)?.name, 'fixture', `pick lift=${lift}`);
    console.log(`PASS independent world-space project and pick at lift=${lift}`);
  }
  // Cover the full ancestor matrix, rather than special-casing a Y offset.
  scene.position.set(12, -8, 5); lid.rotation.z = 0.2;
  const result = faults.project('fixture', camera);
  lid.updateWorldMatrix(true, false);
  const p = new THREE.Vector3(0.5, 1.8, 0).applyMatrix4(lid.matrixWorld).project(camera);
  const expected = [(p.x + 1) / 2 * 480, (1 - p.y) / 2 * 400];
  assert.ok(Math.hypot(result[0] - expected[0], result[1] - expected[1]) < 1e-4);
  assert.equal(faults.pick(...expected, camera)?.name, 'fixture');
  console.log('PASS nested parent translation and rotation');
  faults.setVisible(false);
  assert.equal(faults.project('fixture', camera), null);
  assert.equal(faults.pick(...expected, camera), null);
  console.log('PASS hidden faults cannot be projected or picked');
} finally {
  await server.close();
  for (const [name, descriptor] of originals) {
    if (descriptor) Object.defineProperty(globalThis, name, descriptor);
    else delete globalThis[name];
  }
}
