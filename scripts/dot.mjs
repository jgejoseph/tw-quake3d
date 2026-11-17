import { chromium } from 'playwright-core';
const [BASE, OUT] = process.argv.slice(2);
const b = await chromium.launch({ executablePath:'/usr/bin/google-chrome', args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--no-sandbox'] });
const p = await (await b.newContext({viewport:{width:1280,height:800}})).newPage();
await p.goto(BASE); await p.waitForFunction(()=>window.__QUAKE_READY__,null,{timeout:180000}); await p.waitForTimeout(1000);
// Pratas (東沙) ~116.72E 20.7N
const pr = await p.evaluate(()=>{const LON0=121,LAT0=23.5,KL=111.32*Math.cos(LAT0*Math.PI/180);return [(116.72-121)*KL, -(20.70-23.5)*111.32];});
console.log('pratas scene xz', pr);
await p.screenshot({path:OUT});
await b.close();
