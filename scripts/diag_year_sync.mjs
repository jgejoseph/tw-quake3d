// Observation only: cross-year visibility has no defined correctness rule.
import fs from 'node:fs';
import path from 'node:path';
import { chromium } from 'playwright-core';
const base = process.argv[2];
const directory = process.env.SHOT_DIR || 'test-results';
fs.mkdirSync(directory, { recursive: true });
const output = path.join(directory, 'year-sync-diagnostic.json');
const report = { status: 'incomplete', base, viewport: { width: 390, height: 844, deviceScaleFactor: 2 }, sample_interval_ms: 100, samples: [], note: 'Observations only; year differences are not a failure. Durations use sampled intervals and may include browser scheduling gaps.' };
let browser;
try {
  browser = await chromium.launch({ executablePath: process.env.CHROME_PATH || '/usr/bin/google-chrome', args: ['--no-sandbox', '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
  const page = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, deviceScaleFactor: 2 });
  await page.goto(base, { timeout: 120000 });
  await page.waitForFunction(() => window.__autoplay, null, { timeout: 180000 });
  await page.evaluate(() => {
    // Show the top-10 panel during autoplay so red-frame years are observable.
    if (!document.getElementById('rank').classList.contains('open')) document.getElementById('rankBtn').click();
    window.__yearDiag = { samples: [], start: performance.now(), start_year: window.__state().year };
    const year = s => { const m = String(s || '').match(/(?:19|20)\d{2}/); return m ? Number(m[0]) : null; };
    window.__yearDiag.timer = setInterval(() => {
      const big = document.getElementById('bigYear'), toast = document.getElementById('m7toast');
      const visible = el => { const s = getComputedStyle(el); return s.display !== 'none' && s.visibility !== 'hidden' && Number(s.opacity) > 0; };
      const rankOpen = document.getElementById('rank').classList.contains('open');
      const rank = rankOpen ? [...document.querySelectorAll('#rankList li.live')].map(el => year(el.textContent)).filter(x => x !== null) : [];
      window.__yearDiag.samples.push({ t_ms: Math.round(performance.now() - window.__yearDiag.start), big_year: visible(big) ? year(big.textContent) : null, toast_year: toast.classList.contains('show') && visible(toast) ? year(toast.textContent) : null, rank_open: rankOpen, rank_years: rank });
    }, 100);
  });
  try { await page.waitForFunction(() => window.__state().year >= 1999, null, { timeout: 90000 }); report.end_reason = 'reached_1999'; }
  catch (error) { report.end_reason = 'observation_timeout'; report.detail = String(error); }
  const observed = await page.evaluate(() => { clearInterval(window.__yearDiag.timer); return { samples: window.__yearDiag.samples, start_year: window.__yearDiag.start_year, end_year: window.__state().year }; });
  report.samples = observed.samples;
  report.start_year = observed.start_year;
  report.end_year = observed.end_year;
  report.observation_window_ms = report.samples.length > 1 ? report.samples.at(-1).t_ms - report.samples[0].t_ms : 0;
  report.max_sample_gap_ms = report.samples.reduce((max, sample, i) => i ? Math.max(max, sample.t_ms - report.samples[i - 1].t_ms) : max, 0);
  report.status = 'observed';
  const comparisons = {
    big_to_toast: s => s.big_year !== null && s.toast_year !== null && s.big_year !== s.toast_year,
    big_to_rank: s => s.big_year !== null && s.rank_years.some(y => y !== s.big_year),
    toast_to_rank: s => s.toast_year !== null && s.rank_years.some(y => y !== s.toast_year),
    any: s => new Set([s.big_year, s.toast_year, ...s.rank_years].filter(y => y !== null)).size > 1,
  };
  for (const [label, isDifferent] of Object.entries(comparisons)) {
    let count = 0, duration = 0, previous = false;
    for (let i = 0; i < report.samples.length; i++) {
      const different = isDifferent(report.samples[i]);
      if (different && !previous) count++;
      if (different && i + 1 < report.samples.length) duration += report.samples[i + 1].t_ms - report.samples[i].t_ms;
      previous = different;
    }
    report[label + '_different'] = { episodes: count, sampled_duration_ms: duration, right_censored: previous };
  }
} catch (error) { report.error = String(error); }
finally {
  await browser?.close();
  fs.writeFileSync(output, JSON.stringify(report, null, 2) + '\n');
  console.log('DIAG', JSON.stringify({ status: report.status, end_reason: report.end_reason, samples: report.samples.length, big_to_toast: report.big_to_toast_different, big_to_rank: report.big_to_rank_different, toast_to_rank: report.toast_to_rank_different, any: report.any_different, file: output, error: report.error }));
  // An unavailable diagnostic is reported separately; it is never included in assertion failures.
  if (report.status !== 'observed') process.exitCode = 2;
}
