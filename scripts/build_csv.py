# 合併 data/raw/cwa/cwa_YYYY.csv（Big5）-> data/earthquakes.csv（UTF-8）
import glob, csv, io
rows=[]; bad=0
for f in sorted(glob.glob('/workspace/tw-quake3d/data/raw/cwa/cwa_*.csv')):
    txt=open(f,'rb').read().decode('big5',errors='replace')
    r=csv.reader(io.StringIO(txt)); next(r,None)
    for x in r:
        if len(x)<5: bad+=1; continue
        if not x[0].strip(): bad+=1; continue
        try: rows.append((x[0].strip(), float(x[1]), float(x[2]), float(x[3]), float(x[4])))
        except ValueError: bad+=1
# 氣象署開放資料平台 E-A0073-001 地震目錄（JSON，目前只有 2026 年、規模 3 以上）
import json
for f in sorted(glob.glob('/workspace/tw-quake3d/data/raw/cwa_opendata/E-A0073-001_*.json')):
    for e in json.load(open(f))['cwaopendata']['Dataset']['Catalog']['EarthquakeInfo']:
        try: rows.append((e['OriginTime'][:19].replace('T',' '), float(e['EpicenterLongitude']), float(e['EpicenterLatitude']), float(e['LocalMagnitude']), float(e['FocalDepth'])))
        except (KeyError, ValueError): bad+=1
# E-A0073-002 年度地震目錄（XML，規模 3 以上）：只用來補 2025-03-01 06:36:10 之後（地震活動彙整查不到的部分）
import re
LAST_SCWEB = '2025-03-01 06:36:10'
for f in sorted(glob.glob('/workspace/tw-quake3d/data/raw/cwa_opendata/CWA-EQ-Catalog-*.xml')):
    for blk in re.findall(r'<EarthquakeInfo>(.*?)</EarthquakeInfo>', open(f, encoding='utf-8').read(), re.S):
        g = lambda k: re.search(f'<{k}[^>]*>([^<]+)', blk).group(1).strip()
        try:
            t = g('OriginTime')[:19].replace('T', ' ')
            if t <= LAST_SCWEB: continue
            if not (118 <= float(g('EpicenterLongitude')) <= 124 and 20 <= float(g('EpicenterLatitude')) <= 27): continue  # 與原查詢範圍一致
            rows.append((t, float(g('EpicenterLongitude')), float(g('EpicenterLatitude')), float(g('LocalMagnitude')), float(g('FocalDepth'))))
        except (AttributeError, ValueError): bad+=1
rows.sort(key=lambda t:t[0])
seen=set(); out=[]
for t in rows:
    if t in seen: continue
    seen.add(t); out.append(t)
with open('/workspace/tw-quake3d/data/earthquakes.csv','w',newline='') as fo:
    w=csv.writer(fo); w.writerow(['datetime','lon','lat','magnitude','depth_km'])
    for t in out: w.writerow([t[0], f'{t[1]:g}', f'{t[2]:g}', f'{t[3]:g}', f'{t[4]:g}'])
mags=[t[3] for t in out]; deps=[t[4] for t in out]
print(f'rows={len(out)} dup_removed={len(rows)-len(out)} bad={bad}')
print('time', out[0][0], '->', out[-1][0])
print('mag', min(mags), max(mags), 'depth', min(deps), max(deps))
print('lon', min(t[1] for t in out), max(t[1] for t in out), 'lat', min(t[2] for t in out), max(t[2] for t in out))
