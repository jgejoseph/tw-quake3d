import { chromium } from 'playwright-core';
const url = process.argv[2]||'http://127.0.0.1:5173/', tag = process.argv[3]||'local';
const b = await chromium.launch({ executablePath:'/usr/bin/google-chrome', args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--no-sandbox'] });
const errs=[];
for (const [name,vp,mobile] of [['mobile',{width:390,height:844},true],['desktop',{width:1280,height:800},false]]) {
  const c = await b.newContext({ viewport: vp, isMobile: mobile, hasTouch: mobile });
  const p = await c.newPage(); p.on('pageerror', e=>errs.push(e.message));
  await p.goto(url); await p.waitForFunction(()=>window.__QUAKE_READY__,null,{timeout:120000});
  const get = () => p.evaluate(()=>({text:document.getElementById('bigYear').textContent, on:document.getElementById('bigYear').classList.contains('on'), year:window.__state().year}));
  const idle = await get();
  await p.evaluate(()=>{const r=document.getElementById('year'); r.value=1998; r.dispatchEvent(new Event('input'));});
  await p.click('#play'); await p.waitForTimeout(1200);
  const playing = await get();
  await p.waitForFunction(()=>window.__alerts().length>0,null,{timeout:30000}); await p.waitForTimeout(300);
  await p.screenshot({path:`media/year_${tag}_${name}.png`});
  await p.click('#play');
  console.log(name, JSON.stringify({idle, playing}));
  await c.close();
}
console.log('errors', errs); await b.close();
