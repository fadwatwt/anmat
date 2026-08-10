// @ts-check
const { defineConfig, devices } = require('@playwright/test');

const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:3002';

module.exports = defineConfig({
  testDir: './e2e',
  fullyParallel: false,
  workers: 1,
  timeout: 180000,
  reporter: [['list']],
  use: {
    baseURL: FRONTEND_URL,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    viewport: { width: 1440, height: 900 },
    actionTimeout: 15000,
    navigationTimeout: 180000,
  },
  projects: [
    {
      name: 'verify',
      testMatch: /verify-subscription-fix\.spec\.js/,
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
