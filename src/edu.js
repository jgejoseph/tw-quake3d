// ---- 地震小知識：情境小卡＋官方連結（內容出處見 docs/edu_cards_draft.md）----
// 小卡內文的事實句都來自氣象署原文；標「網站說明」的是我們網頁自己的設計。
const K = 'https://edu.cwa.gov.tw/PopularScience/kids/ec/';
export const EDU_CARDS = {
  1: { t: '點有大有小，是什麼意思？', b: ['點越大，代表規模越大，也就是地震放出的能量越多。一次地震只有一個規模。', '規模每多 1，能量大約多 32 倍。', '「震度」不一樣，它是各地搖晃的程度，分 0 到 7 級。'],
       l: { u: 'https://edu.cwa.gov.tw/PopularScience/ec/ec_22.html', n: '地震來臨躲不躲？！—何謂震度（氣象署）' } },
  2: { t: '顏色代表什麼？震源和震央有什麼不同？', b: ['地底下岩石開始錯動的地方叫「震源」，它正上方的地面叫「震央」。', '點的顏色代表震源有多深。', '一般來說，震源越淺、離震央越近，搖得越厲害。'],
       l: { u: K + 'ec_1.html', n: '地動天搖何處來？—震央（氣象署兒童地震）' } },
  3: { t: '為什麼台灣這麼多地震？', b: ['台灣位在歐亞板塊和菲律賓海板塊互相碰撞的地方。', '板塊推擠的力量超過岩石能承受的程度，岩石就會破裂、錯動，發生地震。', '根據 2008–2017 年統計，台灣每年大約有 3 萬 2 千次地震，大部分我們感覺不到。'],
       l: { u: K + 'ec_11.html', n: '天搖地動！為什麼台灣這麼多地震？（氣象署兒童地震）' } },
  4: { t: '為什麼東北外海的地震可以這麼深？', b: ['板塊相撞的地方，密度比較大的板塊會往下鑽到另一塊下面，這叫「隱沒」。', '台灣東部地震帶的震源比西部深，可以深到 300 公里左右。', '這筆是網站資料裡最深的：{DEEP} 公里。'],
       l: { u: K + 'ec_5.html', n: '台灣地牛愛翻身—台灣地震帶之分布情形（氣象署兒童地震）' } },
  5: { t: '主震和餘震是什麼？', b: ['一連串有關連的地震裡，規模最大的叫「主震」。', '主震之後接著發生、比較小的一連串地震叫「餘震」。', '所以大地震過後，附近的點常會一下子變多，也要繼續留意。'],
       l: { u: K + 'ec_2.html', n: '地震的變奏組曲─主震、前震、餘震、群震（氣象署兒童地震）' } },
  6: { t: '921 集集大地震', b: ['1999 年的 921 集集大地震是車籠埔斷層活動造成的，地表裂開約 85 公里。', '西部的地震震源比較淺、多在陸地，城鎮又多，所以常造成嚴重災情。'],
       l: { u: K + 'ec_11.html', n: '天搖地動！為什麼台灣這麼多地震？（氣象署兒童地震）' } },
  7: { t: '地震來了怎麼辦？', b: ['記住防震三步驟：趴下、掩護、穩住。先趴下保護頭部，再躲到堅固的桌子下，抓住桌腳。', '不要躲在櫃子旁邊；在高樓不要搭電梯。'],
       l: { u: K + 'ec_14.html', n: '做好準備，地牛翻身我不怕！（氣象署兒童地震）' } },
  8: { t: '山怎麼這麼高？', b: ['為了讓地形看得清楚，網頁把陸地高度放大 15 倍、海底放大 5 倍。', '打開「原始高度」就是真實比例。玉山 3,952 公尺，跟深達 300 多公里的地震比起來其實很小。'],
       l: null, note: '這張是本網站自己的說明（地形放大的設定），沒有外部連結。' },
};
// ---- 地圖標示的 (i) 小卡（內容與出處見 docs/map_info_draft.md）----
const NCDR = 'https://www.ncdr.nat.gov.tw/UploadFile/MessageItem/f7bc875907be41419ba037a851b557a7.pdf';
const GEO = x => `https://twgeoref.gsmma.gov.tw/GipOpenWeb/wSite/ct?ctNode=1233&mp=105&xItem=${x}`;
const PB = '資料：板塊邊界與範圍來自 PB2002 全球板塊模型（Bird, 2003），台灣附近只能示意。';
Object.assign(EDU_CARDS, {
  ryu: { t: '琉球海溝（日本叫「南西諸島海溝」）', b: ['這裡是菲律賓海板塊往北鑽到歐亞板塊下面的地方，這種現象叫「隱沒」。', '往下鑽的板塊在地底越來越深，可以到 200 多公里深。', '這條海溝在日本叫「南西諸島海溝」，沿著琉球群島往東北延伸，北端和日本的「南海海槽」連在一起。', '南海海槽在日本四國、紀伊半島南方的外海，那裡也是菲律賓海板塊往下鑽的地方。'],
         ls: [{ u: NCDR, n: '臺灣地質構造區概述（國家災害防救科技中心，PDF，看 2.7 琉球隱沒帶）' }, { u: 'https://www.jishin.go.jp/main/chousa/kaikou_pdf/hyuganada_2.pdf', n: '日本地震調查研究推進本部：南西諸島海溝的長期評估（日文 PDF）' }, { u: 'https://www.jma.go.jp/jma/kishou/know/jishin/nteq/nteq.html', n: '日本氣象廳：南海海槽地震（日文）' }], d: PB },
  man: { t: '馬尼拉海溝', b: ['這裡的方向和琉球海溝相反：南海的海底板塊往菲律賓海板塊下面鑽。', '海溝從菲律賓呂宋島西邊往北延伸，長約 1,500 公里，大約到北緯 20 度。', '再往北靠近台灣，因為板塊碰撞，海溝的地形就變得不明顯了。'],
         ls: [{ u: GEO(146488), n: '地質百科：馬尼拉海溝（經濟部地質調查及礦業管理中心）' }], d: PB },
  oki: { t: '沖繩海槽', b: ['沖繩海槽是一個海底盆地，從日本九州外海延伸到台灣東北外海，長約 1,100 公里。', '它是菲律賓海板塊往下鑽的過程中，上面的地殼被「拉開」形成的。', '宜蘭到琉球群島一帶的淺地震，以及龜山島附近的地熱和火山活動，都和沖繩海槽的擴張有關。'],
         ls: [{ u: GEO(146482), n: '地質百科：沖繩海槽（經濟部地質調查及礦業管理中心）' }, { u: 'https://scweb.cwa.gov.tw/zh-tw/guidance/faqdetail/54', n: '地震百問 53：台灣地震帶之分布情形（氣象署）' }], d: PB },
  col: { t: '碰撞帶（示意）', b: ['菲律賓海板塊上的呂宋島弧撞上歐亞板塊的大陸邊緣，把地層擠高，形成台灣的高山。', '依官方資料，兩個板塊在陸地上的交界大致在東部的花東縱谷；縱谷東邊的海岸山脈原本是火山島弧。', '注意：地圖上這條黃線來自全球簡化模型，只是示意，畫在西半部，和真正的交界位置不一樣。'],
         ls: [{ u: K + 'ec_5.html', n: '台灣地牛愛翻身—台灣地震帶之分布情形（氣象署兒童地震）' }, { u: 'https://scweb.cwa.gov.tw/zh-tw/guidance/faqdetail/52', n: '地震百問 51：何謂板塊運動？（氣象署）' }, { u: NCDR, n: '臺灣地質構造區概述（國家災害防救科技中心，PDF，看 2.1 海岸山脈）' }], d: PB },
  ps: { t: '菲律賓海板塊', b: ['台灣東南邊的這片海底屬於菲律賓海板塊。', '在台灣東北邊，它往下鑽到歐亞板塊下面（琉球海溝）；在台灣南邊，則是南海的海底板塊鑽到它下面（馬尼拉海溝）。', '地圖只把海面塗色；台灣本島位在兩個板塊的碰撞帶上，不簡單歸給哪一塊。'],
         ls: [{ u: K + 'ec_5.html', n: '台灣地牛愛翻身—台灣地震帶之分布情形（氣象署兒童地震）' }, { u: NCDR, n: '臺灣地質構造區概述（國家災害防救科技中心，PDF）' }], d: PB },
  eu: { t: '歐亞板塊', b: ['地球表面像拼圖，由七大板塊和許多小板塊拼成，歐亞板塊是七大板塊之一。', '南海的海底屬於歐亞板塊的一部分。', '地圖上的藍綠色也包含模型裡幾塊比較小的板塊（揚子、巽他、沖繩），為了好懂合成同一個顏色。'],
         ls: [{ u: K + 'ec_4.html', n: '漂浮的大地—板塊運動（氣象署兒童地震）' }, { u: NCDR, n: '臺灣地質構造區概述（國家災害防救科技中心，PDF，看 2.1）' }], d: PB },
  slab: { t: '地下半透明的面是什麼？', b: ['地底下這片半透明的面，是科學家估算出來「往下鑽的板塊」的上表面。', '面上每一條線代表再深 50 公里，線越多表示鑽得越深。', '這是全球模型，台灣附近的細節不一定準，有些深地震並不在這片面上。'],
         ls: [{ u: 'https://www.sciencebase.gov/catalog/item/5aa1b00ee4b0b1c392e86467', n: 'Slab2 隱沒板塊模型（美國地質調查所 USGS，英文）' }], d: '資料：USGS Slab2（Hayes, 2018, doi:10.5066/F7PV6JNV）。' },
  yushan: { t: '玉山', b: ['玉山是台灣第一高峰，海拔 3,952 公尺，在南投縣、高雄市和嘉義縣交界。', '板塊推擠讓地層變厚、抬升，才有這麼高的山；玉山到現在每年還會長高約 5–7 公釐。', '網頁的地形大約 1.85 公里一格，尖尖的山頂會被平均掉，所以畫面上的山頂比真實的圓、也比較矮。'],
         ls: [{ u: 'https://www.ysnp.gov.tw/StaticPage/Mountain', n: '玉山百岳（玉山國家公園管理處）' }, { u: 'https://www.ysnp.gov.tw/FAQ/C007000?ID=c7939bca-5d9f-4fde-8c82-9931afbc9289&PageIndex=4&PageType=1', n: '玉山的高度為何？（玉山國家公園常見問答）' }] },
  fault: { t: '活動斷層', b: ['活動斷層是「更新世晚期（距今約十萬年）以來曾經活動過，未來可能再度活動的斷層」。', '官方公布的台灣活動斷層分布圖目前有 36 條。自 2025 年 10 月起，不再分成第一類、第二類，每一條都要同等重視。', '這個網頁的斷層線是依官方圖層描繪後簡化的示意位置，不是精確位置，請勿用來判斷某一棟房子或某個地點在不在斷層上。'],
         ls: [{ u: 'https://fault.gsmma.gov.tw/About/', n: '活動斷層的定義（經濟部地質調查及礦業管理中心）' }, { u: 'https://fault.gsmma.gov.tw/About/Fault_map', n: '活動斷層分布圖（經濟部地質調查及礦業管理中心）' }],
         d: '資料：經濟部地質調查及礦業管理中心 2021 1/25,000_臺灣活動斷層分布圖(含名稱)_2021（WMS），本站依其影像描繪簡化示意。' },
});
export const EDU_ORDER = [7, 3, 'fault', 1, 2, 4, 5, 6, 8]; // 「地震來了怎麼辦」放最上面
export const EDU_LINKS = [
  { g: '給小朋友', items: [
    { u: 'https://edu.cwa.gov.tw/PopularScience/kids/ec_cate.html', n: '氣象署數位科普網：兒童地震', d: '用故事講地震，十幾篇都是寫給小朋友看的。' },
    { u: K + 'ec_11.html', n: '為什麼台灣這麼多地震？', d: '板塊、三大地震帶和 921。' },
    { u: K + 'ec_2.html', n: '主震、前震、餘震', d: '大地震後為什麼還會一直搖。' },
    { u: K + 'ec_14.html', n: '做好準備，地牛翻身我不怕！', d: '防震三步驟和避難包要放什麼。' },
  ] },
  { g: '給老師家長', items: [
    { u: 'https://scweb.cwa.gov.tw/zh-tw/guidance/faqdetail/26', n: '氣象署地震百問（線上版）', d: '100 個地震問答，這篇講規模，其他各篇講震度等。' },
    { u: 'https://scweb.cwa.gov.tw/eq100/eq100-all.pdf', n: '地震百問 PDF 全本', d: '整本下載，約 26 MB。' },
    { u: 'https://disaster.moe.edu.tw/', n: '教育部防災教育資訊網', d: '教案、學習單和影片。' },
  ] },
];

const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
export const eduBtn = (n, text = 'i') => `<button type="button" class="ei${text === 'i' ? '' : ' wide'}" data-edu="${n}" aria-label="小知識：${esc(EDU_CARDS[n].t)}" title="${esc(EDU_CARDS[n].t)}"><b>i</b>${text === 'i' ? '' : ` ${esc(text)}`}</button>`;

export function initEdu({ deepKm = () => null } = {}) {
  // 設定面板裡的「地震小知識」
  const sec = document.getElementById('eduList');
  sec.innerHTML = `<div class="eh">小卡（點一下打開）<button type="button" id="eduSnd" class="snd" aria-pressed="true" title="滑過小卡的提示音">${SND_ICON}<span>提示音</span></button></div>`
    + EDU_ORDER.map(n => `<button type="button" class="et" data-edu="${n}"><b>i</b>${esc(EDU_CARDS[n].t)}</button>`).join('')
    + EDU_LINKS.map(g => `<div class="eh">${g.g}</div>` + g.items.map(x => `<p><a href="${x.u}" target="_blank" rel="noopener">${esc(x.n)}</a>：${esc(x.d)}</p>`).join('')).join('')
    + `<p class="en">說明交給官方：小卡只用氣象署原文改寫成白話，想知道更多請點連結。</p>`;
  initHoverSound(sec);
  // 彈出小卡
  const wrap = document.createElement('div'); wrap.id = 'eduPop'; wrap.hidden = true;
  wrap.innerHTML = `<div class="box" role="dialog" aria-modal="true" aria-labelledby="eduT"><button type="button" class="x" aria-label="關閉">✕</button><h3 id="eduT"></h3><div class="eb"></div><div class="ef"></div></div>`;
  document.body.appendChild(wrap);
  const box = wrap.querySelector('.box');
  let cur = null, openedAt = 0;
  const open = n => {
    const c = EDU_CARDS[n]; if (!c) return; cur = n;
    const dk = deepKm();
    wrap.querySelector('h3').textContent = c.t;
    wrap.querySelector('.eb').innerHTML = c.b.map(s => `<p>${esc(s.replace('{DEEP}', dk == null ? '312' : String(Math.round(dk))))}</p>`).join('');
    const L = c.ls || (c.l ? [c.l] : []);
    wrap.querySelector('.ef').innerHTML = (L.length ? `<a href="${L[0].u}" target="_blank" rel="noopener">想知道更多 →</a><span>${esc(L[0].n)}</span>`
      + L.slice(1).map(x => `<span class="more"><a href="${x.u}" target="_blank" rel="noopener">${esc(x.n)}</a></span>`).join('') : `<span>${esc(c.note)}</span>`)
      + (c.d ? `<span class="src">${esc(c.d)}</span>` : '');
    openedAt = performance.now(); wrap.hidden = false; box.querySelector('.x').focus({ preventScroll: true });
  };
  const close = () => { wrap.hidden = true; cur = null; };
  wrap.addEventListener('click', e => { if (e.target.closest('.x') || (!box.contains(e.target) && performance.now() - openedAt > 400)) close(); }); // 剛打開時忽略觸控補發的 click，避免一開就關 // 點外面或 ✕ 關閉
  addEventListener('keydown', e => { if (e.key === 'Escape' && !wrap.hidden) close(); });
  document.addEventListener('click', e => { const b = e.target.closest('[data-edu]'); if (!b) return; e.preventDefault(); e.stopPropagation(); const v = b.dataset.edu; open(/^\d+$/.test(v) ? +v : v); });
  window.__edu = () => cur === null ? null : { n: cur, title: wrap.querySelector('h3').textContent, body: wrap.querySelector('.eb').textContent, link: wrap.querySelector('.ef a')?.href || null, links: [...wrap.querySelectorAll('.ef a')].map(a => a.href), src: wrap.querySelector('.ef .src')?.textContent || null };
  window.__eduOpen = open; window.__eduClose = close;
  return { open, close };
}

// ---- 小卡滑過：發光（CSS）＋很輕的科技感提示音（Web Audio 即時合成，無音檔）----
// 只在滑鼠裝置、使用者先點過頁面之後才出聲；可用「提示音」開關靜音，選擇記在 localStorage
const SND_KEY = 'tq3d.hoverSound';
const SND_ICON = '<svg viewBox="0 0 16 16" width="13" height="13" aria-hidden="true"><path d="M2 6h3l4-3v10L5 10H2z" fill="currentColor"/><path class="w" d="M11 5.5a3.5 3.5 0 0 1 0 5M12.8 3.6a6 6 0 0 1 0 8.8" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/><path class="m" d="M11 6l4 4M15 6l-4 4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>';
function initHoverSound(sec) {
  let on = true; try { on = localStorage.getItem(SND_KEY) !== '0'; } catch {}
  let ctx = null, gestured = false, last = 0, plays = 0;
  const btn = sec.querySelector('#eduSnd');
  const show = () => { btn.setAttribute('aria-pressed', String(on)); btn.classList.toggle('off', !on); btn.title = on ? '滑過小卡的提示音：開（點一下靜音）' : '滑過小卡的提示音：關（點一下打開）'; };
  show();
  btn.addEventListener('click', e => { e.stopPropagation(); on = !on; try { localStorage.setItem(SND_KEY, on ? '1' : '0'); } catch {} show(); });
  const mark = () => { gestured = true; };
  addEventListener('pointerdown', mark, { capture: true, once: true }); addEventListener('keydown', mark, { capture: true, once: true });
  const canHover = () => matchMedia('(hover: hover) and (pointer: fine)').matches;
  const blip = () => {
    const C = window.AudioContext || window.webkitAudioContext; if (!C) return;
    if (!ctx) ctx = new C();
    if (ctx.state !== 'running') ctx.resume().catch(() => {});
    const t0 = ctx.currentTime + 0.005, out = ctx.createGain(); out.gain.value = 0.05; out.connect(ctx.destination); // 音量很小
    const tone = (f0, f1, at, dur, type, vol) => {
      const o = ctx.createOscillator(), g = ctx.createGain(); o.type = type;
      o.frequency.setValueAtTime(f0, t0 + at); o.frequency.exponentialRampToValueAtTime(f1, t0 + at + dur * 0.7);
      g.gain.setValueAtTime(0.0001, t0 + at); g.gain.exponentialRampToValueAtTime(vol, t0 + at + 0.004); g.gain.exponentialRampToValueAtTime(0.0001, t0 + at + dur);
      o.connect(g).connect(out); o.start(t0 + at); o.stop(t0 + at + dur + 0.02);
    };
    tone(2200, 3300, 0, 0.05, 'triangle', 0.9);   // 很短的上揚「嘀」
    tone(4400, 4400, 0.028, 0.06, 'sine', 0.35);   // 細細的高音尾巴
    plays++;
  };
  sec.querySelectorAll('.et').forEach(b => b.addEventListener('pointerenter', e => {
    if (e.pointerType !== 'mouse' || !canHover() || !on || !gestured) return;
    const now = performance.now(); if (now - last < 120) return; last = now; // 快速滑過不連發
    try { blip(); } catch (err) { console.warn('hover blip', err); }
  }));
  window.__hoverSound = () => ({ on, gestured, plays, ctx: ctx ? ctx.state : null, stored: (() => { try { return localStorage.getItem(SND_KEY); } catch { return null; } })() });
}
