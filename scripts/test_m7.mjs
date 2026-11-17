import { chromium } from 'playwright-core';
const url = process.argv[2]||'http://127.0.0.1:5173/', tag = process.argv[3]||'local';
const b = await chromium.launch({ executablePath:'/usr/bin/google-chrome', args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--no-sandbox'] });
const errs=[];
for (const [name,vp,mobile] of [['mobile',{width:390,height:844},true],['desktop',{width:1280,height:800},false]]) {
  const c = await b.newContext({ viewport: vp, isMobile: mobile, hasTouch: mobile, deviceScaleFactor: 1 });
  const p = await c.newPage(); p.on('pageerror', e=>errs.push(e.message));
  await p.goto(url); await p.waitForFunction(()=>window.__QUAKE_READY__,null,{timeout:120000});
  // 從 1999 開始播（1x），集集地震 9/21 約在 0.7*0.71 秒
  await p.evaluate(()=>{const r=document.getElementById('year'); r.value=1998; r.dispatchEvent(new Event('input'));});
  await p.click('#play');
  let seen=null, shot=false;
  const t0=Date.now();
  while (Date.now()-t0<6000) {
    const a = await p.evaluate(()=>({alerts:window.__alerts(), toast:document.getElementById('m7toast').className, toastText:document.getElementById('m7toast').textContent, year:window.__state().year}));
    if (a.alerts.length && !shot) { seen=a; await p.waitForTimeout(1500); await p.screenshot({path:`media/m7_${tag}_${name}.png`}); shot=true; }
    await p.waitForTimeout(150);
  }
  await p.click('#play');
  await p.waitForTimeout(4500);
  const after = await p.evaluate(()=>({alerts:window.__alerts().length, toast:document.getElementById('m7toast').className}));
  // 不在播放時拖拉年份不應出現
  await p.evaluate(()=>{const r=document.getElementById('year'); r.value=1999; r.dispatchEvent(new Event('input'));});
  await p.waitForTimeout(500);
  const scrub = await p.evaluate(()=>window.__alerts().length);
  console.log(name, JSON.stringify({seen, after, scrub}));
  await c.close();
}
console.log('errors', errs); await b.close();
