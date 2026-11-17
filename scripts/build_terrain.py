import re, json, numpy as np
src='/workspace/tw-quake3d/data/raw/etopo2022_30s_bed_tw_stride2.ascii'
t=open(src).read()
body=t.split('z.z[421][361]')[1]
zpart, rest = body.split('z.lat')
rows=[l for l in zpart.strip().splitlines() if l.startswith('[')]
z=np.array([[float(v) for v in l.split(',')[1:]] for l in rows],dtype=np.float32)
lat=np.array([float(v) for v in rest.split('z.lon')[0].split('\n',1)[1].replace('\n','').split(',') if v.strip()])
lon=np.array([float(v) for v in rest.split('z.lon')[1].split('\n',1)[1].replace('\n','').split(',') if v.strip()])
assert z.shape==(len(lat),len(lon)), (z.shape,len(lat),len(lon))
zi=np.round(z).astype('<i2')
zi.tofile('/workspace/tw-quake3d/data/terrain_int16.bin')
meta=dict(source='NOAA NCEI ETOPO 2022 v1 30 arc-second bedrock elevation (OPeNDAP subset, stride 2 = 60 arc-second spacing)',
  url=open('/workspace/tw-quake3d/data/raw/etopo_url.txt').read().strip(),
  rows=int(z.shape[0]), cols=int(z.shape[1]), dtype='int16 little-endian, meters, row-major, row 0 = southernmost lat',
  lat_first=float(lat[0]), lat_last=float(lat[-1]), lon_first=float(lon[0]), lon_last=float(lon[-1]),
  zmin=int(zi.min()), zmax=int(zi.max()))
json.dump(meta,open('/workspace/tw-quake3d/data/terrain_meta.json','w'),indent=1,ensure_ascii=False)
print(meta)
