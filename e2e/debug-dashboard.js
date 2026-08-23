// @ts-check
const { test, expect } = require('@playwright/test');
test('debug dashboard charts', async ({ page }) => {
  await page.goto('/dashboard');
  await expect(page.locator('main')).toBeVisible({timeout:30000});
  await page.waitForTimeout(5000);
  // capture console logs
  page.on('console', msg=> console.log('LOG',msg.text()));
  // evaluate
  const info = await page.evaluate(async () => {
    const tokens = localStorage.getItem('token');
    const headers = tokens ? {Authorization: 'Bearer '+tokens} : {};
    // try to get redux state? just check DOM
    const doughnut = document.querySelector('[data-tour="tasks-summary"]');
    const dept = document.querySelector('[data-tour="departments"]');
    return {
      doughnutHTML: doughnut ? doughnut.innerHTML.slice(0,2000) : 'not found',
      deptHTML: dept ? dept.innerHTML.slice(0,2000) : 'not found',
      svgCount: document.querySelectorAll('svg').length,
      rechartWrappers: document.querySelectorAll('.recharts-wrapper').length,
      body: document.body.innerHTML.slice(0,1000)
    }
  });
  console.log(JSON.stringify(info,null,2));
  await page.screenshot({path:'e2e/reports/debug-dashboard.png', fullPage:true});
});
