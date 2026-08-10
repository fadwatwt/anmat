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

for (const route of ['/translations', '/money-receiving']) {
  test(`dump ${route}`, async ({ page }) => {
    const token = await adminToken(page.request);
    await page.addInitScript((tok) => { window.localStorage.setItem('token', tok); }, token);
    page.on('pageerror', (e) => console.log('PAGE ERR:', e.message.substring(0, 300)));
    await page.goto(`${FRONTEND_URL}${route}`, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(25000);
    const state = await page.evaluate(() => {
      const main = document.querySelector('main');
      return {
        url: location.pathname,
        hasMain: !!main,
        mainVisible: main ? main.offsetParent !== null : false,
        bodyStart: document.body.innerText.substring(0, 250),
        errOverlay: !!document.querySelector('[role="alert"], nextjs-portal'),
      };
    });
    console.log(route, JSON.stringify(state, null, 2));
  });
}
