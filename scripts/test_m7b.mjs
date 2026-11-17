import { chromium } from 'playwright-core';
const url = process.argv[2]||'http://127.0.0.1:5173/', tag = process.argv[3]||'local';
const b = await chromium.launch({ executablePath:'/usr/bin/google-chrome', args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--no-sandbox'] });
const errs=[];
for (const [name,vp,mobile] of [['mobile',{width:390,height:844},true],['desktop',{width:1280,height:800},false]]) {
  const c = await b.newContext({ viewport: vp, isMobile: mobile, hasTouch: mobile });
  const p = await c.newPage(); p.on('pageerror', e=>errs.push(e.message));
  await p.goto(url); await p.waitForFunction(()=>window.__QUAKE_READY__,null,{timeout:120000});
  await p.evaluate(()=>{ window.__log=[]; const r=document.getElementById('year'); r.value=1998; r.dispatchEvent(new Event('input'));
    const tick=()=>{ const a=window.__alerts(); const L=window.__log; const k=a.map(x=>x.text).join('|'); if(!L.length||L[L.length-1].k!==k) L.push({t:performance.now()|0,k,year:window.__state().year}); requestAnimationFrame(tick)}; tick(); });
  // 0.25x 方便截圖，再測 1x 的出現時間
  await p.click('#speed'); await p.click('#speed'); await p.click('#speed'); // 1→2→0.25→0.5? 依序：1,2,0.25
  const sp = await p.evaluate(()=>window.__speed().speed);
  await p.click('#play');
  await p.waitForFunction(()=>window.__alerts().length>0,null,{timeout:30000});
  await p.waitForTimeout(500);
  await p.screenshot({path:`media/m7b_${tag}_${name}.png`});
  await p.waitForTimeout(6000);
  await p.click('#play');
  const log = await p.evaluate(()=>window.__log);
  console.log(name, 'speed', sp, JSON.stringify(log));
  await c.close();
}
console.log('errors', errs); await b.close();
