import { chromium } from 'playwright-core';
const b = await chromium.launch({ executablePath:'/usr/bin/google-chrome', args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--no-sandbox'] });
const p = await (await b.newContext({viewport:{width:1280,height:800}})).newPage(); await p.goto('http://127.0.0.1:5173/'); await p.waitForFunction(()=>window.__QUAKE_READY__,null,{timeout:120000});
await p.evaluate(()=>{ const cb=[...document.querySelectorAll('input[type=checkbox]')].find(c=>c.parentElement.textContent.includes('顯示全部')); if(cb){cb.click();} });
await p.waitForTimeout(500);
await p.click('#rankOpen').catch(()=>{});
console.log(JSON.stringify(await p.evaluate(()=>window.__state().rank),null,0));
await b.close();
