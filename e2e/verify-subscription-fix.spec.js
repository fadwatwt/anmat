// @ts-check
const { test, expect } = require('@playwright/test');
const { BACKEND_URL } = require('./utils/data');

const PLAN_ID = '6a6878d0dcba21bf7c7c846f'; // خطة "الموسعة" (monthly $100 / yearly $400 raw، فعلي $320 بعد خصم 20%)
const SUBSCRIBER = { email: 'blalthmen72@gmail.com', password: 'aA@123456' };

test.describe('إصلاح دورة الفوترة السنوية', () => {
  test('صفحة إدخال البريد تلتقط interval=year في sessionStorage', async ({ page }) => {
    await page.goto(`/register/subscriber/email?plan=${PLAN_ID}&interval=year`);
    await page.waitForFunction(
      () => window.sessionStorage.getItem('anmat_plan_interval') === 'year',
      undefined,
      { timeout: 15000 },
    );
  });

  test('صفحة الخطط تختار السنة افتراضياً عند وجود interval=year', async ({ page }) => {
    const res = await page.request.post(`${BACKEND_URL}/api/user/auth/login`, {
      data: { email: SUBSCRIBER.email, password: SUBSCRIBER.password },
    });
    expect(res.ok()).toBeTruthy();
    const token = (await res.json()).data.access_token;

    await page.addInitScript((tok) => {
      localStorage.setItem('token', tok);
      sessionStorage.setItem('anmat_plan_interval', 'year');
    }, token);

    await page.goto('/account-setup/subscriber/plans');

    // بطاقة الخطة الهدف: السعر السنوي المعروض $400 (خاصة بخطة "الموسعة" فقط)
    const yearlyLabel = page.locator('label').filter({ hasText: '$400' }).first();
    await expect(yearlyLabel).toBeVisible({ timeout: 30000 });
    await expect(yearlyLabel.locator('input[type="radio"]')).toBeChecked();

    // السعر الشهري $100 في نفس البطاقة يجب ألا يكون محدداً
    const monthlyLabel = page.locator('label').filter({ hasText: '$100' }).first();
    await expect(monthlyLabel.locator('input[type="radio"]')).not.toBeChecked();

    // فتح الخروج والتأكد أن مبلغ الفوترة المعروض هو السنوي
    const card = yearlyLabel.locator(
      'xpath=ancestor::div[contains(@class,"max-w-[420px]")][1]',
    );
    await card.locator('button').click();

    await expect(page.getByText('Selected Plan')).toBeVisible({ timeout: 15000 });
    await expect(page.locator('p').filter({ hasText: '$400' }).last()).toBeVisible();
  });

  test('بدون interval تبقى الفوترة الشهرية افتراضية (انحدار)', async ({ page }) => {
    const res = await page.request.post(`${BACKEND_URL}/api/user/auth/login`, {
      data: { email: SUBSCRIBER.email, password: SUBSCRIBER.password },
    });
    const token = (await res.json()).data.access_token;

    await page.addInitScript((tok) => {
      localStorage.setItem('token', tok);
    }, token);

    await page.goto('/account-setup/subscriber/plans');

    const monthlyLabel = page.locator('label').filter({ hasText: '$100' }).first();
    await expect(monthlyLabel).toBeVisible({ timeout: 30000 });
    await expect(monthlyLabel.locator('input[type="radio"]')).toBeChecked();
  });
});
