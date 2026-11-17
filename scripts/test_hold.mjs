import { chromium } from 'playwright-core';
const url = process.argv[2]||'http://127.0.0.1:5173/', tag = process.argv[3]||'local';
const b = await chromium.launch({ executablePath:'/usr/bin/google-chrome', args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--no-sandbox'] });
const errs=[];
for (const [name,vp,mobile] of [['mobile',{width:390,height:844},true],['desktop',{width:1280,height:800},false]]) {
  const c = await b.newContext({ viewport: vp, isMobile: mobile, hasTouch: mobile });
  const p = await c.newPage(); p.on('pageerror', e=>errs.push(e.message));
  await p.goto(url); await p.waitForFunction(()=>window.__QUAKE_READY__,null,{timeout:120000});
  await p.evaluate(()=>{const r=document.getElementById('year'); r.value=1998; r.dispatchEvent(new Event('input'));});
  await p.click('#play');
  // sample in-page every 50ms for 6s
  const samples = await p.evaluate(()=>new Promise(res=>{const out=[];const t0=performance.now();const iv=setInterval(()=>{const a=window.__alerts();out.push({t:Math.round(performance.now()-t0),y:document.getElementById('bigYear').textContent,a:a.map(x=>x.text).join('|')});if(performance.now()-t0>6000){clearInterval(iv);res(out);}},50);}));
  const withAlert = samples.filter(s=>s.a);
  const yrs = [...new Set(withAlert.map(s=>s.y+' :: '+s.a))];
  console.log(name, 'alert samples', withAlert.length, 'year/alert combos:', JSON.stringify(yrs));
  console.log(name, 'year timeline', JSON.stringify(samples.filter((s,i)=>i===0||s.y!==samples[i-1].y).map(s=>[s.t,s.y])));
  await c.close();
}
// screenshot during alert, desktop
const c = await b.newContext({ viewport:{width:1280,height:800} }); const p = await c.newPage();
await p.goto(url); await p.waitForFunction(()=>window.__QUAKE_READY__,null,{timeout:120000});
await p.evaluate(()=>{const r=document.getElementById('year'); r.value=1998; r.dispatchEvent(new Event('input'));});
await p.click('#play'); await p.waitForFunction(()=>window.__alerts().length>0,null,{timeout:30000}); await p.waitForTimeout(900);
await p.screenshot({path:`media/hold_${tag}_desktop.png`});
console.log('errors', errs); await b.close();
