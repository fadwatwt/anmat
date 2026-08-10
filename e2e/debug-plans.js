// @ts-check
const { chromium } = require('@playwright/test');
(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ baseURL: 'http://localhost:3002' });
  const page = await ctx.newPage();
  page.on('response', (r) => {
    if (r.status() >= 400) console.log('HTTP', r.status(), r.url().slice(0, 160));
  });
  page.on('pageerror', (e) => console.log('PAGE-ERR:', String(e).slice(0, 600)));

  const res = await page.request.post('http://localhost:3000/api/user/auth/login', {
    data: { email: 'blalthmen72@gmail.com', password: 'aA@123456' },
  });
  const token = (await res.json()).data.access_token;

  await page.addInitScript((tok) => {
    localStorage.setItem('token', tok);
    sessionStorage.setItem('anmat_plan_interval', 'year');
  }, token);

  await page.goto('/account-setup/subscriber/plans');
  await page.waitForTimeout(10000);
  console.log('FINAL URL:', page.url());
  const html = await page.evaluate(() => document.body.innerText.slice(0, 400));
  console.log('BODY:', JSON.stringify(html));
  await browser.close();
})();
