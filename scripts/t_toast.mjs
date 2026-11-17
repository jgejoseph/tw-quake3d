import { chromium } from 'playwright-core';
const b = await chromium.launch({ executablePath:'/usr/bin/google-chrome', args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--no-sandbox'] });
const c = await b.newContext({ viewport:{width:1280,height:800} });
const p = await c.newPage(); await p.goto('http://127.0.0.1:5173/'); await p.waitForFunction(()=>window.__QUAKE_READY__,null,{timeout:120000});
await p.evaluate(()=>{const r=document.getElementById('year'); r.value=1998; r.dispatchEvent(new Event('input'));});
await p.click('#play');
for (let i=0;i<20;i++){ const a=await p.evaluate(()=>{const t=document.getElementById('m7toast');return [performance.now()|0,t.className,getComputedStyle(t).transform,window.__alerts().length]}); console.log(a); await p.waitForTimeout(250);}
await b.close();
