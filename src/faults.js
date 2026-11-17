// 活動斷層疊圖（預設關閉）：依地礦中心 WMS 影像描繪簡化，僅供示意。
import * as THREE from 'three';
import { Line2 } from 'three/examples/jsm/lines/Line2.js';
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';

const COLOR_A = new THREE.Color('#ff3b30');
const COLOR_B = new THREE.Color('#ffc14d');
const LIFT = 1.8;
const STEP = 0.8; // 沿線加密間距（公里）

export async function initFaults({ lid, toX, toZ, DEPTH_SCALE, TERRAIN_EXAG, LAND_EXAG = TERRAIN_EXAG }) {
  const [doc, tmeta, tbuf] = await Promise.all([
    fetch(import.meta.env.BASE_URL + 'data/faults.json').then(r => { if (!r.ok) throw new Error('faults.json ' + r.status); return r.json(); }),
    fetch(import.meta.env.BASE_URL + 'data/terrain_meta.json').then(r => r.json()),
    fetch(import.meta.env.BASE_URL + 'data/terrain_int16.bin').then(r => r.arrayBuffer()),
  ]);
  const tz = new Int16Array(tbuf);
  const { rows, cols, lat_first, lat_last, lon_first, lon_last } = tmeta;
  let real = false;
  const hY = h => h / 1000 * DEPTH_SCALE * (real ? 1 : (h > 0 ? LAND_EXAG : TERRAIN_EXAG));
  const rawAt = (lon, lat) => {
    const fx = (lon - lon_first) / (lon_last - lon_first) * (cols - 1), fy = (lat - lat_first) / (lat_last - lat_first) * (rows - 1);
    const x0 = Math.max(0, Math.min(cols - 2, Math.floor(fx))), y0 = Math.max(0, Math.min(rows - 2, Math.floor(fy)));
    const ax = Math.min(1, Math.max(0, fx - x0)), ay = Math.min(1, Math.max(0, fy - y0));
    const z = (r, k) => tz[r * cols + k];
    return ((z(y0, x0) * (1 - ax) + z(y0, x0 + 1) * ax) * (1 - ay) + (z(y0 + 1, x0) * (1 - ax) + z(y0 + 1, x0 + 1) * ax) * ay);
  };

  const group = new THREE.Group(); group.visible = false; lid.add(group);
  const mat = new LineMaterial({
    color: 0xffffff, vertexColors: true, linewidth: 3, transparent: true, opacity: 1,
    depthTest: false, depthWrite: false, dashed: false, worldUnits: false,
  });
  // 選取某條斷層時：選到的（同名所有線段）用流動色、略粗；其他變灰、半透明、不流動
  const matSel = new LineMaterial({ color: 0xffffff, vertexColors: true, linewidth: 4.5, transparent: true, opacity: 1, depthTest: false, depthWrite: false, dashed: false, worldUnits: false });
  const matDim = new LineMaterial({ color: 0x888888, vertexColors: false, linewidth: 2, transparent: true, opacity: 0.45, depthTest: false, depthWrite: false, dashed: false, worldUnits: false });
  const mats = [mat, matSel, matDim];
  let selected = null;
  const syncRes = () => {
    const c = document.querySelector('canvas');
    const w = c && c.width && c.height ? c.width : innerWidth * devicePixelRatio, h = c && c.width && c.height ? c.height : innerHeight * devicePixelRatio;
    for (const m of mats) m.resolution.set(w, h);
  };
  syncRes();

  const densify = coords => {
    const out = [];
    for (let i = 0; i < coords.length; i++) {
      const a = coords[i];
      if (i === 0) { out.push(a); continue; }
      const b = coords[i - 1];
      const d = Math.hypot((a[0] - b[0]) * 101.3, (a[1] - b[1]) * 111.32);
      const n = Math.max(1, Math.ceil(d / STEP));
      for (let j = 1; j <= n; j++) {
        const t = j / n;
        out.push([b[0] + (a[0] - b[0]) * t, b[1] + (a[1] - b[1]) * t]);
      }
    }
    return out;
  };

  const items = [];
  const refits = [];
  for (const f of doc) {
    const ll = densify(f.coords);
    if (ll.length < 2) continue;
    const raw = ll.map(([lon, lat]) => rawAt(lon, lat));
    const xz = ll.map(([lon, lat]) => [toX(lon), toZ(lat)]);
    const n = ll.length;
    const pos = new Float32Array(n * 3);
    const col = new Float32Array(n * 3);
    const along = new Float32Array(n);
    const writePos = () => {
      let acc = 0;
      for (let i = 0; i < n; i++) {
        if (i) acc += Math.hypot(xz[i][0] - xz[i - 1][0], xz[i][1] - xz[i - 1][1]);
        pos[i * 3] = xz[i][0]; pos[i * 3 + 1] = hY(raw[i]) + LIFT; pos[i * 3 + 2] = xz[i][1];
        along[i] = acc;
      }
    };
    writePos();
    const geom = new LineGeometry();
    geom.setPositions(pos);
    geom.setColors(col);
    const line = new Line2(geom, mat);
    line.computeLineDistances();
    line.renderOrder = 6;
    line.userData.name = f.name;
    group.add(line);
    items.push({ name: f.name, line, pos, col, along, n, geom });
    refits.push(() => { writePos(); geom.setPositions(pos); });
  }

  const paint = t => {
    for (const it of items) {
      if (selected !== null && it.name !== selected) continue; // 變灰的不用更新顏色
      for (let i = 0; i < it.n; i++) {
        const w = 0.5 + 0.5 * Math.sin(it.along[i] * 0.22 - t * 1.2);
        it.col[i * 3] = COLOR_A.r + (COLOR_B.r - COLOR_A.r) * w;
        it.col[i * 3 + 1] = COLOR_A.g + (COLOR_B.g - COLOR_A.g) * w;
        it.col[i * 3 + 2] = COLOR_A.b + (COLOR_B.b - COLOR_A.b) * w;
      }
      it.geom.setColors(it.col);
    }
  };
  paint(0);

  const setVisible = v => { group.visible = !!v; };
  const setSelected = name => {
    name = name && items.some(it => it.name === name) ? name : null;
    if (name === selected) return;
    selected = name;
    for (const it of items) {
      const on = name !== null && it.name === name;
      it.line.material = name === null ? mat : on ? matSel : matDim;
      it.line.renderOrder = on ? 7 : 6;
    }
  };
  const setReal = v => { if (real === !!v) return; real = !!v; refits.forEach(fn => fn()); };
  const tick = now => {
    syncRes();
    if (group.visible) paint(now * 0.001);
  };

  const _m = new THREE.Matrix4();
  const pick = (cx, cy, camera, maxPx = 14) => {
    if (!group.visible) return null;
    camera.updateMatrixWorld();
    group.updateWorldMatrix(true, false);
    _m.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse).multiply(group.matrixWorld);
    const e = _m.elements, W = innerWidth, H = innerHeight;
    const proj = (x, y, z) => {
      const w = e[3] * x + e[7] * y + e[11] * z + e[15]; if (w <= 0) return null;
      return [((e[0] * x + e[4] * y + e[8] * z + e[12]) / w + 1) / 2 * W, (1 - (e[1] * x + e[5] * y + e[9] * z + e[13]) / w) / 2 * H];
    };
    let best = null, bs = maxPx;
    for (const it of items) {
      let prev = null;
      for (let i = 0; i < it.n; i++) {
        const s = proj(it.pos[i * 3], it.pos[i * 3 + 1], it.pos[i * 3 + 2]);
        if (!s || !prev) { prev = s; continue; }
        const [ax, ay] = prev, [bx, by] = s;
        const vx = bx - ax, vy = by - ay, l2 = vx * vx + vy * vy;
        const t = l2 > 0 ? Math.max(0, Math.min(1, ((cx - ax) * vx + (cy - ay) * vy) / l2)) : 0;
        const d = Math.hypot(cx - (ax + vx * t), cy - (ay + vy * t));
        if (d < bs) { bs = d; best = { name: it.name, d }; }
        prev = s;
      }
    }
    return best;
  };

  const project = (name, camera) => {
    if (!group.visible) return null;
    camera.updateMatrixWorld();
    group.updateWorldMatrix(true, false);
    _m.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse).multiply(group.matrixWorld);
    const e = _m.elements, W = innerWidth, H = innerHeight;
    const it = items.find(x => x.name === name) || items[0];
    if (!it) return null;
    const mid = (it.n / 2) | 0;
    const x = it.pos[mid * 3], y = it.pos[mid * 3 + 1], z = it.pos[mid * 3 + 2];
    const w = e[3] * x + e[7] * y + e[11] * z + e[15]; if (w <= 0) return null;
    return [((e[0] * x + e[4] * y + e[8] * z + e[12]) / w + 1) / 2 * W, (1 - (e[1] * x + e[5] * y + e[9] * z + e[13]) / w) / 2 * H];
  };

  const names = [...new Set(items.map(it => it.name))];
  return { setVisible, setReal, setSelected, selected: () => selected, tick, pick, project, names, count: items.length };
}
