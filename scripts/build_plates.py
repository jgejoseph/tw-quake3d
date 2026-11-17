#!/usr/bin/env python3
"""Build data/plates.json (Slab2 slab surfaces + PB2002 boundaries) and
data/plates_grid.bin (PB2002 plate id per terrain-grid node) for src/plates.js.

Inputs (already downloaded, see data/raw/slab2/SOURCES.md, data/raw/pb2002/SOURCES.md):
  data/raw/slab2/ryu_slab2_dep_02.26.18.xyz   (lon,lat,depth_km negative-down; NaN outside clip mask)
  data/raw/slab2/man_slab2_dep_02.24.18.xyz
  data/raw/pb2002/orig_PB2002_steps.dat.txt  (Bird 2003 steps, with boundary class)
  data/raw/pb2002/PB2002_plates.json         (fraxen GeoJSON conversion of PB2002_plates.dig)
  data/terrain_meta.json                     (grid used for the plate-colour drape)
No third-party Python packages are needed.
"""
import json, os, struct
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
RAW = os.path.join(ROOT, 'data', 'raw')
W, E, S, N = 118.0, 124.0, 20.0, 27.0  # same extent as terrain / quake query

def load_slab(fn):
    pts = {}
    lons, lats = set(), set()
    for line in open(fn):
        x, y, z = line.strip().split(',')
        x = round(float(x), 4); y = round(float(y), 4)
        if x > 180: x -= 360
        if not (W <= x <= E and S <= y <= N):
            continue
        lons.add(x); lats.add(y)
        if z != 'NaN':
            pts[(x, y)] = round(-float(z), 1)  # positive depth (km)
    lons = sorted(lons); lats = sorted(lats)
    dlon = round(lons[1] - lons[0], 4); dlat = round(lats[1] - lats[0], 4)
    depth = []
    for y in lats:          # row 0 = southernmost
        for x in lons:
            depth.append(pts.get((x, y)))
    # trim empty border rows/cols
    cols, rows = len(lons), len(lats)
    r_ok = [r for r in range(rows) if any(depth[r*cols+c] is not None for c in range(cols))]
    c_ok = [c for c in range(cols) if any(depth[r*cols+c] is not None for r in range(rows))]
    r0, r1, c0, c1 = r_ok[0], r_ok[-1], c_ok[0], c_ok[-1]
    out = [depth[r*cols+c] for r in range(r0, r1+1) for c in range(c0, c1+1)]
    v = [d for d in out if d is not None]
    return dict(lon0=lons[c0], lat0=lats[r0], dlon=dlon, dlat=dlat,
                cols=c1-c0+1, rows=r1-r0+1, depth=out,
                valid=len(v), dmin=min(v), dmax=max(v))

def load_steps(fn):
    segs = []  # consecutive steps with same boundary id + class
    for line in open(fn):
        if len(line) < 95: continue
        bid = line[6:11].strip(); cls = line[92:95].strip()
        x0, y0, x1, y1 = (float(line[a:b]) for a, b in [(12,20),(21,28),(29,37),(38,45)])
        inside = lambda x, y: W - 0.5 <= x <= E + 0.5 and S - 0.5 <= y <= N + 0.5
        if not (inside(x0, y0) or inside(x1, y1)):
            continue
        if segs and segs[-1]['id'] == bid and segs[-1]['cls'] == cls and segs[-1]['coords'][-1] == [x0, y0]:
            segs[-1]['coords'].append([x1, y1])
        else:
            segs.append(dict(id=bid, cls=cls, coords=[[x0, y0], [x1, y1]]))
    return segs

def pip(x, y, ring):
    c = False; n = len(ring); j = n - 1
    for i in range(n):
        xi, yi = ring[i]; xj, yj = ring[j]
        if (yi > y) != (yj > y) and x < (xj - xi) * (y - yi) / (yj - yi) + xi:
            c = not c
        j = i
    return c

def plate_grid(meta):
    gj = json.load(open(os.path.join(RAW, 'pb2002', 'PB2002_plates.json')))
    codes = ['PS', 'YA', 'SU', 'ON', 'EU']  # NA polygon spans the antimeridian; not near Taiwan
    rings = {}
    for f in gj['features']:
        c = f['properties']['Code']
        if c in codes:
            g = f['geometry']; polys = [g['coordinates']] if g['type'] == 'Polygon' else g['coordinates']
            rings[c] = [p[0] for p in polys]
    rows, cols = meta['rows'], meta['cols']
    out = bytearray(rows * cols); counts = {}
    for r in range(rows):
        lat = meta['lat_first'] + (meta['lat_last'] - meta['lat_first']) * r / (rows - 1)
        for k in range(cols):
            lon = meta['lon_first'] + (meta['lon_last'] - meta['lon_first']) * k / (cols - 1)
            v = 0
            for i, c in enumerate(codes):
                if any(pip(lon, lat, rg) for rg in rings[c]):
                    v = i + 1; break
            out[r * cols + k] = v; counts[codes[v-1] if v else '-'] = counts.get(codes[v-1] if v else '-', 0) + 1
    return out, codes, counts

if __name__ == '__main__':
    meta = json.load(open(os.path.join(ROOT, 'data', 'terrain_meta.json')))
    ryu = load_slab(os.path.join(RAW, 'slab2', 'ryu_slab2_dep_02.26.18.xyz'))
    man = load_slab(os.path.join(RAW, 'slab2', 'man_slab2_dep_02.24.18.xyz'))
    segs = load_steps(os.path.join(RAW, 'pb2002', 'orig_PB2002_steps.dat.txt'))
    grid, codes, counts = plate_grid(meta)
    with open(os.path.join(ROOT, 'data', 'plates_grid.bin'), 'wb') as f:
        f.write(grid)
    doc = dict(
        source='USGS Slab2 (Hayes et al. 2018, doi:10.5066/F7PV6JNV) ryu 02.26.18 / man 02.24.18; PB2002 (Bird 2003, doi:10.1029/2001GC000252)',
        extent=[W, E, S, N],
        slabs=[dict(id='ryu', model='Slab2 ryu_slab2_dep_02.26.18', **ryu),
               dict(id='man', model='Slab2 man_slab2_dep_02.24.18', **man)],
        boundaries=segs,
        plate_grid=dict(file='plates_grid.bin', rows=meta['rows'], cols=meta['cols'], codes=codes,
                        note='uint8 per terrain node, row 0 = south; 0 = none, i+1 = codes[i]'),
    )
    with open(os.path.join(ROOT, 'data', 'plates.json'), 'w') as f:
        json.dump(doc, f, separators=(',', ':'))
    for s in doc['slabs']:
        print(s['id'], s['cols'], 'x', s['rows'], 'valid', s['valid'], 'depth', s['dmin'], '-', s['dmax'], 'lon0', s['lon0'], 'lat0', s['lat0'], 'd', s['dlon'], s['dlat'])
    for g in segs: print(g['id'], g['cls'], len(g['coords']) - 1, 'steps')
    print('plate grid counts', counts)
