import { chromium } from 'playwright-core';
const BASE=process.argv[2]; const R=[]; const ok=(n,c,v)=>{ const r=[c?'PASS':'FAIL',n,JSON.stringify(v)]; R.push(r); console.log(r.join(' | ')); };
const b=await chromium.launch({executablePath:process.env.CHROME_PATH||'/usr/bin/google-chrome',args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--no-sandbox','--autoplay-policy=user-gesture-required']});
try {
const errs=[]; const hook=p=>{p.on('pageerror',e=>errs.push(e.message));p.on('console',m=>{if(m.type()==='error')errs.push(m.text())});};
// desktop
const d=await (await b.newContext({viewport:{width:1280,height:800}})).newPage(); hook(d);
await d.goto(BASE,{timeout:120000,waitUntil:'domcontentloaded'}); await d.waitForFunction(()=>window.__QUAKE_READY__,null,{timeout:180000});
const pre=await d.evaluate(()=>({playing:__state().playing,year:__state().year,intro:window.__introState}));
await d.waitForFunction(()=>window.__autoplay,null,{timeout:20000});
const a0=await d.evaluate(()=>({ap:window.__autoplay,s:__state(),hist1990:null}));
ok('autoplay starts at 1990, muted',a0.ap.year0===1990&&a0.s.playing&&a0.s.sound===false,{pre,ap:a0.ap,year:a0.s.year,scope:a0.s.scope,yearText:await d.evaluate(()=>yearText.textContent)});
await d.waitForTimeout(3000); const a1=await d.evaluate(()=>__state());
ok('desktop 1280: top-10 open by default with 10 rows for 1990 range',await d.evaluate(()=>__state().rankOpen&&document.querySelectorAll('#rankList li').length===10&&rankScope.textContent.startsWith('1990')),await d.evaluate(()=>({open:__state().rankOpen,n:document.querySelectorAll('#rankList li').length,scope:rankScope.textContent})));
ok('autoplay advances',a1.playing&&a1.year>a0.s.year,{y0:a0.s.year,y1:a1.year,text:await d.evaluate(()=>yearText.textContent+' '+countText.textContent)});
const lay=await d.evaluate(()=>{const r=e=>{const b=document.querySelector(e).getBoundingClientRect();return [Math.round(b.left),Math.round(b.top),Math.round(b.right),Math.round(b.bottom)]};
 const panel=document.getElementById('panel');return {soundInPanel:panel.contains(document.getElementById('sound')),allInPanel:panel.contains(document.getElementById('allData')),viewsInPanel:panel.contains(document.querySelector('.views')),
 bar:r('#mapbar .in'),compass:r('#compass'),home:r('#homeBtn'),panel:r('#panel'),bigYear:r('#bigYear'),title:document.getElementById('sound').closest('label').title,
 icon:[...document.querySelectorAll('.sndI')].map(e=>getComputedStyle(e).display)}});
ok('desktop: toggles in map toolbar, not left panel',!lay.soundInPanel&&!lay.allInPanel&&!lay.viewsInPanel&&lay.bar[2]<lay.home[0]&&lay.bar[0]>lay.panel[2],lay);
await d.screenshot({path:(process.env.SHOT_DIR||'test-results')+'/v0510_desktop.png'});
await d.click('#sound'); await d.waitForTimeout(600); const s1=await d.evaluate(()=>({on:__state().sound,tones:__state().tones,icon:[...document.querySelectorAll('.sndI')].map(e=>getComputedStyle(e).display)}));
await d.click('#sound'); await d.waitForTimeout(300); const s2=await d.evaluate(()=>__state().sound);
ok('toolbar sound toggle drives audio.on',s1.on===true&&s1.tones>=1&&s2===false,{s1,off:s2});
await d.click('#sound'); await d.waitForTimeout(300); await d.screenshot({path:(process.env.SHOT_DIR||'test-results')+'/v0510_desktop_soundon.png'}); await d.click('#sound');
const flyPre=await d.evaluate(()=>__state().playing); await d.click('#rankList li:nth-child(1)'); await d.waitForTimeout(1200);
const fl=await d.evaluate(()=>({playing:__state().playing,selected:__state().selected,marker:!!__state().marker,card:__card()?.shown}));
ok('top-10 click during autoplay: stops play, flies, marks, opens card',flyPre&&!fl.playing&&fl.selected===0&&fl.marker&&fl.card,{flyPre,...fl});
await d.click('#rankClose'); await d.waitForTimeout(300); const cl=await d.evaluate(()=>__state().rankOpen);
await d.click('#rankBtn'); await d.waitForTimeout(500); const ro=await d.evaluate(()=>__state().rankOpen);
ok('✕ closes, left button reopens',cl===false&&ro===true,{afterClose:cl,afterReopen:ro});
const lr=await d.evaluate(()=>{const r=e=>{const b=document.querySelector(e).getBoundingClientRect();return [Math.round(b.left),Math.round(b.top),Math.round(b.right),Math.round(b.bottom)]};return {bar:r('#mapbar .in'),home:r('#homeBtn'),compass:r('#compass'),rank:r('#rank')}});
ok('rank open: toolbar clear of home/compass',lr.bar[2]<lr.home[0],lr); await d.screenshot({path:(process.env.SHOT_DIR||'test-results')+'/v0510_desktop_rank.png'}); await d.click('#rankClose');
await d.click('#allData'); await d.waitForTimeout(500); const all=await d.evaluate(()=>({scope:__state().scope,playing:__state().playing,text:yearText.textContent}));
ok('顯示全部資料 in toolbar restores 1935 range',all.scope.y0===1935,all); await d.click('#allData');
// resize to narrow and back
// innerWidth can update before the resize handlers finish relocating controls.
// Wait for the existing DOM criterion, retaining the original 20s bound.
await d.setViewportSize({width:390,height:800}); await d.waitForFunction(()=>innerWidth===390&&document.getElementById('panel').contains(document.getElementById('sound'))&&document.getElementById('panel').contains(document.querySelector('.views')),null,{timeout:20000}); const nb=await d.evaluate(()=>({sp:document.getElementById('panel').contains(document.getElementById('sound')),vp:document.getElementById('panel').contains(document.querySelector('.views'))}));
await d.setViewportSize({width:1280,height:800}); await d.waitForFunction(()=>innerWidth===1280&&!document.getElementById('panel').contains(document.getElementById('sound'))&&!document.getElementById('panel').contains(document.querySelector('.views')),null,{timeout:20000}); const nb2=await d.evaluate(()=>document.getElementById('panel').contains(document.getElementById('sound')));
ok('resize across breakpoint moves controls back/forth',nb.sp&&nb.vp&&!nb2,{narrow:nb,desktopAgain:nb2});
// mobile
// Desktop assertions are complete. Release its still-rendering scene before
// mobile input checks: two SwiftShader scenes can starve tap delivery in CI.
await d.context().close();
const m=await (await b.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true,deviceScaleFactor:2})).newPage(); hook(m);
await m.goto(BASE,{timeout:120000,waitUntil:'domcontentloaded'}); await m.waitForFunction(()=>window.__QUAKE_READY__,null,{timeout:180000}); await m.waitForFunction(()=>window.__autoplay,null,{timeout:20000});
const m0=await m.evaluate(()=>({ap:window.__autoplay,s:__state(),bar:getComputedStyle(document.getElementById('mapbar')).display,soundInPanel:document.getElementById('panel').contains(document.getElementById('sound')),icons:[...document.querySelectorAll('.sndI')].map(e=>getComputedStyle(e).display)}));
await m.waitForTimeout(5000); const m1=await m.evaluate(()=>__state());
ok('mobile: loads, autoplays from 1990 muted, advances; controls stay in panel',m0.ap.year0===1990&&!m0.s.sound&&m1.playing&&m1.year>m0.s.year&&m0.bar==='none'&&m0.soundInPanel,{year0:m0.ap.year0,y1:m1.year,bar:m0.bar,soundInPanel:m0.soundInPanel,icons:m0.icons});
await m.screenshot({path:(process.env.SHOT_DIR||'test-results')+'/v0510_mobile.png'});
await m.tap('#collapse'); await m.waitForTimeout(300); await m.tap('#sound'); await m.waitForTimeout(400); const ms=await m.evaluate(()=>__state().sound);
ok('mobile: top-10 closed by default',m0.s.rankOpen===false,{rankOpen:m0.s.rankOpen});
ok('mobile panel sound switch still works',ms===true,{on:ms}); await m.screenshot({path:(process.env.SHOT_DIR||'test-results')+'/v0510_mobile_panel.png'});
await m.context().close();
// 大年份 vs 紅色提示（M7／前 10 名）：等自動播放播到第一個 M7（1999 集集），量測框是否重疊
const banner=async(pg,label,shot)=>{ const g=await (await pg.waitForFunction(()=>{const t=document.getElementById('m7toast'); if(!t.classList.contains('show')||getComputedStyle(t).visibility!=='visible'||+getComputedStyle(t).opacity<0.9) return false;const R=e=>{if(!e||getComputedStyle(e).display==='none'||getComputedStyle(e).visibility==='hidden')return null;const b=e.getBoundingClientRect();return [Math.round(b.left),Math.round(b.top),Math.round(b.right),Math.round(b.bottom)]};
  return {year:R(document.getElementById('bigYear')),yearText:bigYear.textContent,toast:R(document.getElementById('m7toast')),toastText:m7toast.textContent,bar:R(document.querySelector('#mapbar .in')),rank:R(document.getElementById('rank').classList.contains('open')?document.getElementById('rank'):null),compass:R(document.getElementById('compass')),home:R(document.getElementById('homeBtn')),labels:[...document.querySelectorAll('.m7label')].map(R).filter(Boolean),live:document.querySelectorAll('#rankList li.live').length}},null,{timeout:90000,polling:100})).jsonValue();
 const X=(a,b)=>!!(a&&b&&a[0]<b[2]&&b[0]<a[2]&&a[1]<b[3]&&b[1]<a[3]);
 const hits={yearToast:X(g.year,g.toast),yearBar:X(g.year,g.bar),yearRank:X(g.year,g.rank),toastBar:X(g.toast,g.bar),toastRank:X(g.toast,g.rank),yearLabel:g.labels.some(l=>X(g.year,l)),toastLabel:g.labels.some(l=>X(g.toast,l)),toastCompass:X(g.toast,g.compass),toastHome:X(g.toast,g.home),yearCompass:X(g.year,g.compass)};
 ok(label+': big year and red banner both visible, no overlap',g.year&&g.toast&&!Object.values(hits).some(Boolean),{...g,hits});
 await pg.screenshot({path:shot}); };
{ const q=await (await b.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true,deviceScaleFactor:2})).newPage(); hook(q); await q.goto(BASE,{timeout:120000}); await q.waitForFunction(()=>window.__autoplay,null,{timeout:180000}); await banner(q,'mobile',(process.env.SHOT_DIR||'test-results')+'/v0510b_banner_mobile.png'); await q.close(); }
for(const w of [1920,1280]){ const q=await (await b.newContext({viewport:{width:w,height:w===1920?1080:800}})).newPage(); hook(q); await q.goto(BASE,{timeout:120000}); await q.waitForFunction(()=>window.__autoplay,null,{timeout:180000});
 ok(`desktop ${w}: top-10 open by default`,await q.evaluate(()=>__state().rankOpen),{});
 await banner(q,`desktop ${w}`,(process.env.SHOT_DIR||'test-results')+`/v0510b_banner_${w}.png`); await q.close(); }
ok('no console/page errors',errs.length===0,errs);
process.exitCode = R.some(r => r[0] === 'FAIL') ? 1 : 0;
} finally { await b.close(); }
