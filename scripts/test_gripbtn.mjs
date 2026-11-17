import { chromium } from 'playwright-core';
const b = await chromium.launch({ executablePath:'/usr/bin/google-chrome', args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--no-sandbox'] });
const errs=[];
const run = async (vp, mobile) => {
  const c = await b.newContext({ viewport: vp, isMobile: mobile, hasTouch: mobile, deviceScaleFactor: mobile?2:1 });
  const p = await c.newPage(); p.on('pageerror', e=>errs.push(e.message));
  await p.goto(process.argv[2]||'http://127.0.0.1:5173/'); await p.waitForFunction(()=>window.__QUAKE_READY__,null,{timeout:120000});
  const st = () => p.evaluate(()=>({collapsed:document.getElementById('panel').classList.contains('collapsed'), btn:document.getElementById('collapse').textContent, grip:getComputedStyle(document.getElementById('grip')).display, top:document.getElementById('panel').scrollTop}));
  const r={start:await st()};
  if (mobile) {
    await p.tap('#collapse'); r.opened=await st();
    await p.evaluate(()=>{const x=document.getElementById('panel'); x.scrollTop=x.scrollHeight;});
    await p.waitForTimeout(300);
    await p.screenshot({path:'media/live024_open_bottom.png'});
    await p.tap('#grip'); await p.waitForTimeout(300); r.afterGrip=await st();
    await p.screenshot({path:'media/live024_after.png'});
  }
  await c.close(); return r;
};
console.log('mobile', JSON.stringify(await run({width:390,height:844},true)));
console.log('desktop', JSON.stringify(await run({width:1280,height:800},false)));
console.log('errors', errs);
await b.close();
