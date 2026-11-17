import { chromium } from 'playwright-core';
const b = await chromium.launch({ executablePath:'/usr/bin/google-chrome', args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--no-sandbox'] });
for (const w of [390,360]) {
const c = await b.newContext({ viewport:{width:w,height:844}, isMobile:true, hasTouch:true });
const p = await c.newPage(); await p.goto('http://127.0.0.1:5173/'); await p.waitForFunction(()=>window.__QUAKE_READY__,null,{timeout:120000});
await p.evaluate(()=>{const r=document.getElementById('year'); r.value=1994; r.dispatchEvent(new Event('input'));});
await p.click('#speed'); await p.click('#speed');
await p.screenshot({path:`/workspace/tw-quake3d/media/speed_bar_${w}.png`, clip:{x:0,y:740,width:w,height:104}});
await c.close();}
await b.close();
