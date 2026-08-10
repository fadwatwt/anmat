// @ts-check
const { test } = require('@playwright/test');
const BACKEND_URL = 'http://localhost:3000';
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:3002';

async function token(request) {
  const res = await request.post(`${BACKEND_URL}/api/user/auth/login`, {
    data: { email: 'nextsub1@anmat.test', password: 'aA@123456' },
  });
  return (await res.json()).data.access_token;
}

test('dump /hr state', async ({ page }) => {
  const t = await token(page.request);
  await page.addInitScript((tok) => { window.localStorage.setItem('token', tok); }, t);
  page.on('console', (m) => { if (m.type() === 'error') console.log('CONSOLE ERR:', m.text().substring(0, 300)); });
  page.on('pageerror', (e) => console.log('PAGE ERR:', e.message.substring(0, 500)));
  await page.goto(`${FRONTEND_URL}/hr`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(15000);
  const state = await page.evaluate(() => ({
    url: location.pathname,
    hasMain: !!document.querySelector('main'),
    bodyStart: document.body.innerText.substring(0, 300),
    bodyLen: document.body.innerText.length,
    errOverlay: !!document.querySelector('[role="alert"], nextjs-portal'),
  }));
  console.log(JSON.stringify(state, null, 2));
});
