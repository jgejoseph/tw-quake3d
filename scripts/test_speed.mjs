import { chromium } from 'playwright-core';
const b = await chromium.launch({ executablePath:'/usr/bin/google-chrome', args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--no-sandbox'] });
const errs=[];
for (const [name,vp,mobile] of [['mobile',{width:390,height:844},true],['desktop',{width:1280,height:800},false]]) {
  const c = await b.newContext({ viewport: vp, isMobile: mobile, hasTouch: mobile });
  const p = await c.newPage(); p.on('pageerror', e=>errs.push(e.message));
  await p.goto(process.argv[2]||'http://127.0.0.1:5173/'); await p.waitForFunction(()=>window.__QUAKE_READY__,null,{timeout:120000});
  const yr = () => p.evaluate(()=>window.__state().year);
  const out={};
  for (const sp of [1,2,0.25,0.5,1]) {
    if (sp!==1 || Object.keys(out).length) await p.click('#speed');
    const s = await p.evaluate(()=>window.__speed());
    await p.click('#play'); await p.waitForTimeout(200); const y0=await yr();
    await p.waitForTimeout(2800); const y1=await yr(); await p.click('#play');
    out[`${s.speed}x`]={stepMs:s.stepMs, yearsIn2_8s:y1-y0, label:await p.textContent('#speed')};
    await p.evaluate(()=>{const r=document.getElementById('year'); r.value=r.min; r.dispatchEvent(new Event('input'));});
  }
  // 播放中切速
  await p.click('#play'); await p.waitForTimeout(500); await p.click('#speed'); out.switchWhilePlaying=await p.evaluate(()=>({...window.__speed(), playing:window.__state().playing}));
  await p.click('#play');
  await p.screenshot({path:`media/speed_${name}.png`});
  console.log(name, JSON.stringify(out));
  await c.close();
}
console.log('errors', errs); await b.close();
