// مساعد كتابة تقارير محصّن ضد إعادة تشغيل عامل Playwright:
// تُكتب النتائج تدريجياً إلى ملف تراكمي (JSONL) ثم تُدمج في ملف JSON نهائي.

const fs = require('fs');
const path = require('path');

function record(accPath, chunk) {
  fs.mkdirSync(path.dirname(accPath), { recursive: true });
  fs.appendFileSync(accPath, JSON.stringify(chunk) + '\n');
}

function readAll(accPath) {
  const out = {};
  if (!fs.existsSync(accPath)) return out;
  const lines = fs.readFileSync(accPath, 'utf8').split('\n').filter(Boolean);
  for (const line of lines) {
    try {
      const c = JSON.parse(line);
      for (const k of Object.keys(c)) {
        if (!Array.isArray(c[k])) continue;
        out[k] = out[k] || [];
        out[k].push(...c[k]);
      }
    } catch (e) {
      // ignore malformed lines
    }
  }
  return out;
}

function finalize(accPath, jsonPath, summaryExtra) {
  const results = readAll(accPath);
  const pages = results.pages || [];
  const api = results.apiOperations || [];
  const ui = results.uiOperations || [];
  const modals = results.modals || [];
  const errors = results.errors || [];
  results.summary = Object.assign(
    {
      pagesTotal: pages.length,
      pagesOk: pages.filter((p) => p.ok).length,
      apiTotal: api.length,
      apiOk: api.filter((o) => o.ok).length,
      uiTotal: ui.length,
      uiOk: ui.filter((o) => o.ok).length,
      modalsTotal: modals.length,
      modalsOpened: modals.filter((m) => m.opened).length,
      fatalErrors: errors.length,
    },
    summaryExtra || {},
  );
  fs.mkdirSync(path.dirname(jsonPath), { recursive: true });
  fs.writeFileSync(jsonPath, JSON.stringify(results, null, 2));
  try {
    fs.unlinkSync(accPath);
  } catch (e) {
    // ignore
  }
}

module.exports = { record, finalize };
