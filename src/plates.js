// 板塊疊圖（預設關閉）：USGS Slab2 隱沒板塊上緣曲面 + PB2002 地表板塊邊界與板塊著色。
// 由 main.js 呼叫 initPlates()；不改動任何既有物件。資料由 scripts/build_plates.py 產生。
import * as THREE from 'three';

export const PLATE_COLORS = { PS: '#ff6fd8', EU: '#33d6e8' };  // 菲律賓海板塊 / 歐亞板塊（含 PB2002 的揚子、巽他、沖繩微板塊）
// ON-PS 西段在 PB2002 是轉形斷層（CTF、OTF），不是海溝。圖例與此線共用顏色與名稱。
export const PLATE_TRANSFORM = { color: '#8d98a8', label: '轉形斷層' };
const LINE_STYLE = {
  'ON-PS': { color: '#ffffff', label: '琉球海溝', at: [123.6, 23.45], edu: 'ryu' },
  'PS/SU': { color: '#ffffff', label: '馬尼拉海溝', at: [120.32, 21.05], edu: 'man' },  // 依 Jo 要求北移以利辨識；線本身沿用 PB2002
  'YA-ON': { color: '#b6ff7a', label: '沖繩海槽', at: [123.2, 25.05], edu: 'oki' },
  'PS-YA': { color: '#ffd166', label: '碰撞帶（示意）', at: [120.43, 21.85], edu: 'col' },
  'YA-SU': { color: '#8899aa', label: null },
};
const PLATE_OF_CODE = { PS: 'PS', YA: 'EU', SU: 'EU', ON: 'EU', EU: 'EU' };

function makeLabel(text, color, scale = 1) {
  const fs = 44, pad = 12;
  const c = document.createElement('canvas'); const g = c.getContext('2d');
  g.font = `bold ${fs}px system-ui, "Noto Sans TC", sans-serif`;
  c.width = Math.ceil(g.measureText(text).width) + pad * 2; c.height = fs + pad * 2;
  g.font = `bold ${fs}px system-ui, "Noto Sans TC", sans-serif`;
  g.fillStyle = 'rgba(8,12,20,0.6)'; g.fillRect(0, 0, c.width, c.height);
  g.fillStyle = color; g.textBaseline = 'middle'; g.fillText(text, pad, c.height / 2);
  const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace;
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, depthTest: false, depthWrite: false, transparent: true }));
  const h = 14 * scale; s.scale.set(h * c.width / c.height, h, 1); s.renderOrder = 10;
  return s;
}

export async function initPlates({ scene, lid, toX, toZ, DEPTH_SCALE, TERRAIN_EXAG, LAND_EXAG = TERRAIN_EXAG }) {
  const [doc, tmeta, tbuf, pbuf] = await Promise.all([
    fetch(import.meta.env.BASE_URL + 'data/plates.json').then(r => r.json()),
    fetch(import.meta.env.BASE_URL + 'data/terrain_meta.json').then(r => r.json()),
    fetch(import.meta.env.BASE_URL + 'data/terrain_int16.bin').then(r => r.arrayBuffer()),
    fetch(import.meta.env.BASE_URL + 'data/plates_grid.bin').then(r => r.arrayBuffer()),
  ]);
  const tz = new Int16Array(tbuf), pid = new Uint8Array(pbuf);
  const { rows, cols, lat_first, lat_last, lon_first, lon_last } = tmeta;
  let real = false;  // 原始高度模式（1:1）
  const hY = h => h / 1000 * DEPTH_SCALE * (real ? 1 : (h > 0 ? LAND_EXAG : TERRAIN_EXAG));  // 與 main.js 地形相同的高程換算
  const rawAt = (lon, lat) => {  // 雙線性內插地形高（公尺）
    const fx = (lon - lon_first) / (lon_last - lon_first) * (cols - 1), fy = (lat - lat_first) / (lat_last - lat_first) * (rows - 1);
    const x0 = Math.max(0, Math.min(cols - 2, Math.floor(fx))), y0 = Math.max(0, Math.min(rows - 2, Math.floor(fy)));
    const ax = Math.min(1, Math.max(0, fx - x0)), ay = Math.min(1, Math.max(0, fy - y0));
    const z = (r, k) => tz[r * cols + k];
    return ((z(y0, x0) * (1 - ax) + z(y0, x0 + 1) * ax) * (1 - ay) + (z(y0 + 1, x0) * (1 - ax) + z(y0 + 1, x0 + 1) * ax) * ay);
  };

  const refits = [];  // 原始高度切換時重算貼地高度
  const surface = new THREE.Group(); surface.visible = false; lid.add(surface);   // 隨「地形上抬」移動
  const deep = new THREE.Group(); deep.visible = false; scene.add(deep);          // 與震源同座標，不上抬

  // 1) 地表板塊著色：貼在地形上方的半透明網格
  {
    const pos = new Float32Array(rows * cols * 3), col = new Float32Array(rows * cols * 4);
    const cPS = new THREE.Color(PLATE_COLORS.PS), cEU = new THREE.Color(PLATE_COLORS.EU);
    const codes = doc.plate_grid.codes;
    for (let r = 0; r < rows; r++) {
      const lat = lat_first + (lat_last - lat_first) * r / (rows - 1);
      for (let k = 0; k < cols; k++) {
        const lon = lon_first + (lon_last - lon_first) * k / (cols - 1), i = r * cols + k;
        pos[i * 3] = toX(lon); pos[i * 3 + 1] = hY(tz[i]) + 0.6; pos[i * 3 + 2] = toZ(lat);
        const p = pid[i] ? PLATE_OF_CODE[codes[pid[i] - 1]] : null;
        const c = p === 'PS' ? cPS : cEU;
        col[i * 4] = c.r; col[i * 4 + 1] = c.g; col[i * 4 + 2] = c.b; col[i * 4 + 3] = p && tz[i] <= 0 ? 1 : 0;  // 陸地不著色：PB2002 是全球簡化模型，台灣本島位在碰撞帶上，不能簡單歸給任一板塊
      }
    }
    const idx = []; for (let r = 0; r < rows - 1; r++) for (let k = 0; k < cols - 1; k++) {
      const a = r * cols + k, b = a + 1, d = a + cols, e = d + 1; idx.push(a, d, b, b, d, e);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setAttribute('color', new THREE.BufferAttribute(col, 4));
    g.setIndex(idx);
    const m = new THREE.MeshBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.28, side: THREE.DoubleSide, depthWrite: false });
    const mesh = new THREE.Mesh(g, m); mesh.renderOrder = 4; surface.add(mesh);
    refits.push(() => { for (let i = 0; i < rows * cols; i++) pos[i * 3 + 1] = hY(tz[i]) + 0.6; g.attributes.position.needsUpdate = true; });
  }

  // 2) PB2002 板塊邊界線（貼地形）＋標籤
  // 琉球海溝（ON-PS）西段的 CTF／OTF 依資料裡的 cls 與原步驟端點分開，不改座標、也不重畫 OCB 海溝段。
  const byId = {}, labels = [];  // labels：可點的 3D 標籤（點了打開對應的 (i) 小卡）
  const transformParts = [];
  for (const s of doc.boundaries) {
    if (s.id === 'ON-PS' && (s.cls === 'CTF' || s.cls === 'OTF')) transformParts.push(s.coords);
    else (byId[s.id] ||= []).push(s.coords);
  }
  for (const [id, parts] of Object.entries(byId)) {
    const st = LINE_STYLE[id] || { color: '#8899aa' };
    const pts = [], raw = [];
    for (const cs of parts) for (let i = 0; i < cs.length - 1; i++) {
      const [x0, y0] = cs[i], [x1, y1] = cs[i + 1];
      const n = Math.max(1, Math.ceil(Math.hypot(x1 - x0, y1 - y0) / 0.02));   // 加密後才能貼合地形
      for (let j = 0; j < n; j++) {
        const t0 = j / n, t1 = (j + 1) / n;
        const a = [x0 + (x1 - x0) * t0, y0 + (y1 - y0) * t0], b = [x0 + (x1 - x0) * t1, y0 + (y1 - y0) * t1];
        const ha = rawAt(a[0], a[1]), hb = rawAt(b[0], b[1]); raw.push(ha, hb);
        pts.push(toX(a[0]), hY(ha) + 1.2, toZ(a[1]), toX(b[0]), hY(hb) + 1.2, toZ(b[1]));
      }
    }
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
    const l = new THREE.LineSegments(g, new THREE.LineBasicMaterial({ color: st.color, transparent: true, opacity: 0.95, depthWrite: false }));
    l.renderOrder = 5; surface.add(l);
    refits.push(() => { const P = g.attributes.position; for (let i = 0; i < raw.length; i++) P.array[i * 3 + 1] = hY(raw[i]) + 1.2; P.needsUpdate = true; });
    if (st.label) { const s = makeLabel(st.label, st.color, 0.85); s.userData.edu = st.edu; labels.push(s); s.position.set(toX(st.at[0]), 22, toZ(st.at[1])); surface.add(s); refits.push(() => { s.position.y = real ? 6 : 22; }); }
  }
  // 轉形斷層：相接的步驟合成一條灰虛線。端點沿用 plates.json，不另切經度。
  {
    const chains = [];
    for (const cs of transformParts) {
      const prev = chains[chains.length - 1];
      const join = prev && prev[prev.length - 1][0] === cs[0][0] && prev[prev.length - 1][1] === cs[0][1];
      if (join) prev.push(...cs.slice(1));
      else chains.push(cs.slice());
    }
    for (const cs of chains) {
      const seq = [], raw = [];
      for (let i = 0; i < cs.length - 1; i++) {
        const [x0, y0] = cs[i], [x1, y1] = cs[i + 1];
        const n = Math.max(1, Math.ceil(Math.hypot(x1 - x0, y1 - y0) / 0.02));
        for (let j = i === 0 ? 0 : 1; j <= n; j++) {
          const t = j / n, lon = x0 + (x1 - x0) * t, lat = y0 + (y1 - y0) * t, h = rawAt(lon, lat);
          raw.push(h); seq.push(toX(lon), hY(h) + 1.2, toZ(lat));
        }
      }
      const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(seq, 3));
      const mat = new THREE.LineDashedMaterial({ color: PLATE_TRANSFORM.color, dashSize: 18, gapSize: 12, transparent: true, opacity: 0.95, depthWrite: false });
      const l = new THREE.Line(g, mat); l.computeLineDistances(); l.renderOrder = 5; surface.add(l);
      refits.push(() => { const P = g.attributes.position; for (let i = 0; i < raw.length; i++) P.array[i * 3 + 1] = hY(raw[i]) + 1.2; P.needsUpdate = true; l.computeLineDistances(); });
    }
  }
  for (const [name, color, lon, lat, key] of [['菲律賓海板塊', PLATE_COLORS.PS, 123.0, 21.6, 'ps'], ['歐亞板塊', PLATE_COLORS.EU, 119.2, 25.9, 'eu']]) {
    const s = makeLabel(name, color, 1.3); s.userData.edu = key; labels.push(s); s.position.set(toX(lon), 30, toZ(lat)); surface.add(s); refits.push(() => { s.position.y = real ? 8 : 30; });
  }

  // 3) Slab2 隱沒板塊上緣曲面：深度 1:1（與震源相同，不套地形誇張倍率）
  const slabColor = { ryu: PLATE_COLORS.PS, man: PLATE_COLORS.EU };
  for (const sl of doc.slabs) {
    const { lon0, lat0, dlon, dlat, cols: C, rows: R, depth } = sl;
    const pos = new Float32Array(C * R * 3);
    for (let r = 0; r < R; r++) for (let k = 0; k < C; k++) {
      const i = r * C + k, d = depth[i];
      pos[i * 3] = toX(lon0 + k * dlon); pos[i * 3 + 1] = d == null ? 0 : -d * DEPTH_SCALE; pos[i * 3 + 2] = toZ(lat0 + r * dlat);
    }
    const idx = [], ok = i => depth[i] != null;
    for (let r = 0; r < R - 1; r++) for (let k = 0; k < C - 1; k++) {
      const a = r * C + k, b = a + 1, d = a + C, e = d + 1;
      if (ok(a) && ok(d) && ok(b)) idx.push(a, d, b);
      if (ok(b) && ok(d) && ok(e)) idx.push(b, d, e);
    }
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setIndex(idx); g.computeVertexNormals();
    const mesh = new THREE.Mesh(g, new THREE.MeshLambertMaterial({ color: slabColor[sl.id], transparent: true, opacity: 0.3, side: THREE.DoubleSide, depthWrite: false }));
    mesh.renderOrder = 1; deep.add(mesh);
    // 每 50 km 等深線，幫助判讀曲面深度
    const seg = [], lv = [];
    for (let z = 50; z < sl.dmax; z += 50) lv.push(z);
    const P = (i, j) => [lon0 + j * dlon, lat0 + i * dlat];
    for (let r = 0; r < R - 1; r++) for (let k = 0; k < C - 1; k++) {
      const q = [[r, k], [r, k + 1], [r + 1, k + 1], [r + 1, k]];
      const v = q.map(([i, j]) => depth[i * C + j]); if (v.some(x => x == null)) continue;
      for (const z of lv) {
        const hits = [];
        for (let e = 0; e < 4; e++) {
          const v0 = v[e], v1 = v[(e + 1) % 4]; if ((v0 < z) === (v1 < z)) continue;
          const t = (z - v0) / (v1 - v0), [i0, j0] = q[e], [i1, j1] = q[(e + 1) % 4];
          const [lo, la] = P(i0 + (i1 - i0) * t, j0 + (j1 - j0) * t); hits.push(toX(lo), -z * DEPTH_SCALE, toZ(la));
        }
        if (hits.length >= 6) seg.push(...hits.slice(0, 6));
      }
    }
    const cg = new THREE.BufferGeometry(); cg.setAttribute('position', new THREE.Float32BufferAttribute(seg, 3));
    const cl = new THREE.LineSegments(cg, new THREE.LineBasicMaterial({ color: slabColor[sl.id], transparent: true, opacity: 0.55, depthWrite: false }));
    cl.renderOrder = 1; deep.add(cl);
  }

  const setVisible = v => { surface.visible = v; deep.visible = v; };
  const setReal = v => { if (real === !!v) return; real = !!v; refits.forEach(f => f()); };
  // 點 3D 標籤：用 Raycaster 打 Sprite，回傳小卡代號（沒點到回 null）
  const ray = new THREE.Raycaster(), ndc = new THREE.Vector2();
  const pickLabel = (cx, cy, camera) => {
    if (!surface.visible) return null;
    ndc.set(cx / innerWidth * 2 - 1, -(cy / innerHeight) * 2 + 1); ray.setFromCamera(ndc, camera);
    const hit = ray.intersectObjects(labels, false)[0];
    return hit ? hit.object.userData.edu : null;
  };
  const labelScreen = camera => labels.map(s => { const v = new THREE.Vector3(); s.getWorldPosition(v); v.project(camera); return { edu: s.userData.edu, x: (v.x + 1) / 2 * innerWidth, y: (1 - v.y) / 2 * innerHeight, z: v.z }; });
  return { setVisible, setReal, pickLabel, labelScreen, slabs: doc.slabs.map(s => ({ id: s.id, valid: s.valid, dmax: s.dmax })), boundaries: Object.keys(byId) };
}
