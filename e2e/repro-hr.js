const { chromium } = require('@playwright/test');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  page.on('console', (m) => { if (m.type() === 'error') console.log('CONSOLE ERR:', m.text().substring(0, 300)); });
  page.on('pageerror', (e) => console.log('PAGE ERR:', e.message.substring(0, 500)));

  const loginRes = await page.request.post('http://localhost:3000/api/user/auth/login', {
    data: { email: 'nextsub1@anmat.test', password: 'aA@123456' },
  });
  const token = (await loginRes.json()).data.access_token;
  await page.addInitScript((tok) => { window.localStorage.setItem('token', tok); }, token);

  await page.goto('http://localhost:3002/hr', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(15000);
  const state = await page.evaluate(() => ({
    url: location.pathname,
    hasMain: !!document.querySelector('main'),
    bodyStart: document.body.innerText.substring(0, 300),
    bodyLen: document.body.innerText.length,
    errOverlay: !!document.querySelector('[role="alert"], nextjs-portal'),
  }));
  console.log(JSON.stringify(state, null, 2));
  await browser.close();
})();
