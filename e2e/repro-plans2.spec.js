// @ts-check
const { test } = require('@playwright/test');

const BACKEND_URL = 'http://localhost:3000';
const FRONTEND_URL = 'http://localhost:3001';

async function adminToken(request) {
  const res = await request.post(`${BACKEND_URL}/api/admin/auth/login`, {
    data: { email: 'admin@anmat.test', password: 'anmatAdmin123' },
  });
  return (await res.json()).data.access_token;
}

test.describe('repro plans', () => {
  test('navigate to /plans and dump state', async ({ page }) => {
    const token = await adminToken(page.request);
    await page.addInitScript((tok) => { window.localStorage.setItem('token', tok); }, token);

    page.on('console', (m) => { if (m.type() === 'error') console.log('CONSOLE ERR:', m.text().substring(0, 200)); });
    page.on('pageerror', (e) => console.log('PAGE ERR:', e.message.substring(0, 300)));

    await page.goto(`${FRONTEND_URL}/plans`, { waitUntil: 'domcontentloaded' });

    for (let i = 0; i < 6; i++) {
      await page.waitForTimeout(5000);
      const state = await page.evaluate(() => {
        const main = document.querySelector('main');
        const h1 = document.querySelector('h1');
        return {
          url: location.pathname,
          hasMain: !!main,
          mainVisible: main ? main.offsetParent !== null : false,
          h1: h1 ? h1.innerText : null,
          bodyStart: document.body.innerText.substring(0, 120),
          token: localStorage.getItem('token') ? 'present' : 'missing',
        };
      });
      console.log(`T+${(i + 1) * 5}s:`, JSON.stringify(state));
    }
  });
});
