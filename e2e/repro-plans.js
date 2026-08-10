// تشخيص: لماذا يعرض /plans "غير مصرح" للأدمن؟
const { chromium } = require('@playwright/test');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const consoleErrors = [];
  page.on('console', (m) => { if (m.type() === 'error') consoleErrors.push(m.text()); });
  page.on('pageerror', (e) => consoleErrors.push(`pageerror: ${e.message}`));

  // 1) سجّل دخول كأدمن عبر API
  const loginRes = await page.request.post('http://localhost:3000/api/admin/auth/login', {
    data: { email: 'admin@anmat.test', password: 'anmatAdmin123' },
  });
  const token = (await loginRes.json()).data.access_token;

  await page.addInitScript((tok) => { window.localStorage.setItem('token', tok); }, token);

  // 2) افحص ما يحصل عند فتح /plans
  await page.goto('http://localhost:3001/plans', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(8000);

  const bodyText = await page.evaluate(() => document.body.innerText);
  console.log('=== BODY TEXT (plans) ===');
  console.log(bodyText.substring(0, 1500));

  // 3) تحقق من حالة redux permissions عبر الجلب
  const authRes = await page.request.get('http://localhost:3000/api/user/auth', {
    headers: { Authorization: `Bearer ${token}` },
  });
  const authBody = await authRes.json();
  console.log('=== AUTH /api/user/auth ===');
  console.log(JSON.stringify(authBody).substring(0, 800));

  const permRes = await page.request.get('http://localhost:3000/api/user/auth/permissions', {
    headers: { Authorization: `Bearer ${token}` },
  });
  const permBody = await permRes.json();
  console.log('=== PERMISSIONS ===');
  console.log(JSON.stringify(permBody).substring(0, 400));

  // 4) افحص استجابة صفحة الخطأ
  console.log('=== CONSOLE ERRORS ===');
  console.log(consoleErrors.slice(0, 20).join('\n'));

  await browser.close();
})();
