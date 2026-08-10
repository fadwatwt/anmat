// @ts-check
const { defineConfig, devices } = require('@playwright/test');

const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:3001';

/**
 * إعداد Playwright للاختبار الشامل للأدوار الثلاثة (Admin / Subscriber / Employee).
 * لا يشغّل خوادم بنفسه — يفترض أن الواجهة تعمل على FRONTEND_URL.
 */
module.exports = defineConfig({
  testDir: './e2e',
  fullyParallel: false,
  workers: 1,
  timeout: 240000,
  expect: { timeout: 20000 },
  reporter: [
    ['list'],
    ['json', { outputFile: 'test-results-full.json' }],
    ['html', { open: 'never', outputFolder: 'playwright-report-full' }],
  ],
  use: {
    baseURL: FRONTEND_URL,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    viewport: { width: 1440, height: 900 },
    actionTimeout: 20000,
    navigationTimeout: 120000,
  },
  projects: [
    {
      name: 'full-admin',
      testMatch: /admin-full\.spec\.js/,
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'full-subscriber',
      testMatch: /subscriber-full\.spec\.js/,
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'full-employee',
      testMatch: /employee-full\.spec\.js/,
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
