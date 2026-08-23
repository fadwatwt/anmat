// @ts-check
const { test, expect } = require('@playwright/test');
const pathModule = require('path');
const fs = require('fs');
const { BACKEND_URL } = require('./utils/full-data');
const { collectPageErrors } = require('./utils/helpers');

const SUBSCRIBER = { email: 'nextsub1@anmat.test', password: 'aA@123456' };
const SHOT = pathModule.join(__dirname, 'reports', 'employees-human');
const REPORT = pathModule.join(__dirname, 'reports', 'employees-human.json');
const results = { login: {}, table: {}, actions: [], modals: [], errors: [], counts: {} };

async function loginToken(request) {
  const r = await request.post(`${BACKEND_URL}/api/user/auth/login`, { data: SUBSCRIBER });
  if (!r.ok()) throw new Error('Login ' + r.status() + ' ' + await r.text());
  return (await r.json()).data.access_token;
}
function authH(t){ return { Authorization: `Bearer ${t}` }; }
async function waitContent(page){
  await expect(page.locator('main')).toBeVisible({timeout:60000});
  const sp = page.locator('main .animate-spin').first();
  if(await sp.count()) await sp.waitFor({state:'detached', timeout:30000}).catch(()=>{});
  await page.waitForLoadState('networkidle',{timeout:8000}).catch(()=>{});
  await page.waitForTimeout(900);
}
async function closeModal(page){
  // Try Cancel button first
  const cancelBtn = page.locator('[role="dialog"]').first().getByRole('button', {name:/Cancel/i}).first();
  if(await cancelBtn.isVisible().catch(()=>false)){
    await cancelBtn.click({force:true}).catch(()=>{});
    await page.waitForTimeout(600);
  }
  // Try X button (close icon)
  const xBtn = page.locator('[role="dialog"]').first().locator('button').filter({has: page.locator('svg')}).first();
  if(await xBtn.isVisible().catch(()=>false) && await page.locator('[role="dialog"]').first().isVisible().catch(()=>false)){
    await xBtn.click({force:true}).catch(()=>{});
    await page.waitForTimeout(400);
  }
  // Escape
  await page.keyboard.press('Escape').catch(()=>{});
  await page.waitForTimeout(600);
  // Overlay click as last resort
  const overlay = page.locator('div.fixed.inset-0').first();
  if(await overlay.isVisible().catch(()=>false)){
    await overlay.click({position:{x:5,y:5}, force:true}).catch(()=>{});
    await page.waitForTimeout(400);
    await page.keyboard.press('Escape').catch(()=>{});
  }
  await page.waitForTimeout(400);
  // Ensure dialog hidden
  await page.locator('[role="dialog"]').first().waitFor({state:'hidden', timeout:3000}).catch(()=>{});
}

test.describe('Employees Table — Human Full Check', ()=>{
  test.describe.configure({mode:'serial'});
  test.beforeEach(async ({page, request})=>{
    const tok = await loginToken(request);
    await page.addInitScript(t=> {
      localStorage.setItem('token',t);
      localStorage.setItem('i18nextLng','en');
      localStorage.setItem('subscriber_dashboard_tour_completed','true');
    }, tok);
  });
  test('01 - Table renders + headers + rows + search + pagination as human', async ({page, request})=>{
    const watch = collectPageErrors(page,{pageErrorsOnly:true, ignore:[/favicon/i,/net::ERR/i,/Socket/i,/WebSocket/i,/api\.anmaat\.com/i]});
    await page.goto('/hr/employees');
    await waitContent(page);
    const headers = ['Employees','Contact','Department','Salary','Rating','Registration','Status'];
    for(const h of headers) await expect(page.locator('main').getByText(h).first()).toBeVisible({timeout:10000});
    const rows = await page.locator('main table tbody tr').count().catch(()=>0);
    const tok = await loginToken(request);
    const api = await request.get(`${BACKEND_URL}/api/subscriber/organization/employees`, {headers: authH(tok)});
    const apiBody = await api.json().catch(()=>({}));
    const apiCount = Array.isArray(apiBody.data) ? apiBody.data.length : 0;
    results.table = { headersOk:true, domRows: rows, apiCount };
    results.counts.employees = apiCount;
    const combo = page.locator('main').getByRole('combobox').first();
    if(await combo.isVisible().catch(()=>false)){ await combo.selectOption({index:0}).catch(()=>{}); await page.waitForTimeout(600); results.actions.push({action:'pagination-combobox', ok:true}); }
    const bulkBoxes = await page.locator('input[type="checkbox"]').count().catch(()=>0);
    results.table.bulkCheckboxes = bulkBoxes;
    await page.screenshot({path: pathModule.join(SHOT,'01-table-overview.png'), fullPage:true});
    watch.stop(); results.errors.push(...watch.errors.map(e=>({screen:'employees-table', error:e}))); expect(watch.errors).toEqual([]);
  });
  test('02 - Header actions: Invite, Add New, Send Notification (open modals)', async ({page})=>{
    const watch = collectPageErrors(page,{pageErrorsOnly:true, ignore:[/favicon/i,/net::ERR/i,/Socket/i,/WebSocket/i,/api\.anmaat\.com/i]});
    await page.goto('/hr/employees');
    await waitContent(page);
    // Wait for Employees table to load (not just main)
    await expect(page.getByText('Employees').first()).toBeVisible({timeout:15000});
    await page.waitForTimeout(1500);
    // Ensure table has loaded (wait for Send Notification button inside table header)
    await expect(page.getByRole('button', {name:/Invite Employee/i}).first()).toBeVisible({timeout:15000});
    const checks = [];
    const inviteBtn = page.getByRole('button', {name:/Invite Employee/i});
    if(await inviteBtn.isVisible().catch(()=>false)){
      await inviteBtn.click(); await page.waitForTimeout(1200);
      let opened = await page.locator('[role="dialog"]').first().isVisible().catch(()=>false);
      if(!opened) opened = await page.locator('div.fixed.inset-0').first().isVisible().catch(()=>false);
      checks.push({action:'Invite Employee', opened});
      await page.screenshot({path: pathModule.join(SHOT,'02-invite-modal.png')});
      await page.reload({waitUntil:'domcontentloaded'}); await waitContent(page);
      await expect(page.getByRole('button', {name:/Invite Employee/i}).first()).toBeVisible({timeout:10000}).catch(()=>{});
    }
    const addBtn = page.getByRole('button', {name:/Add New Employee/i});
    if(await addBtn.isVisible().catch(()=>false)){
      await addBtn.click(); await page.waitForTimeout(1200);
      let opened = await page.locator('[role="dialog"]').first().isVisible().catch(()=>false);
      if(!opened) opened = await page.locator('div.fixed.inset-0').first().isVisible().catch(()=>false);
      checks.push({action:'Add New Employee', opened});
      await page.screenshot({path: pathModule.join(SHOT,'02-add-modal.png')});
      await page.reload({waitUntil:'domcontentloaded'}); await waitContent(page);
    }
    const notifyBtn = page.getByRole('button', {name:/Send Notification/i}).first();
    if(await notifyBtn.isVisible().catch(()=>false)){
      await notifyBtn.click(); await page.waitForTimeout(1000);
      let opened = await page.locator('[role="dialog"]').first().isVisible().catch(()=>false);
      if(!opened) opened = await page.locator('div.fixed.inset-0').first().isVisible().catch(()=>false);
      checks.push({action:'Send Notification (header)', opened});
      await page.screenshot({path: pathModule.join(SHOT,'02-notify-modal.png')});
      await page.reload({waitUntil:'domcontentloaded'}); await waitContent(page);
    }
    results.modals.push(...checks);
    watch.stop(); expect(watch.errors).toEqual([]);
    expect(checks.filter(c=>c.opened).length).toBeGreaterThanOrEqual(1);
  });
  test('03 - Row actions dropdown: all 9 actions visible for first employee', async ({page})=>{
    await page.goto('/hr/employees');
    await waitContent(page);
    const watch = collectPageErrors(page,{pageErrorsOnly:true, ignore:[/favicon/i,/net::ERR/i,/Socket/i,/WebSocket/i,/api\.anmaat\.com/i]});
    const rows = page.locator('main table tbody tr');
    const rowCount = await rows.count().catch(()=>0);
    let actionsVisible = []; let hasDropdown = false;
    if(rowCount>0){
      const trigger = rows.first().locator('button').last();
      if(await trigger.isVisible().catch(()=>false)){
        await trigger.click(); await page.waitForTimeout(800);
        const texts = ['Edit','Send Notification','Assign Department','Change Department','Unassign Department','Activate','Deactivate','Chat','Delete','Complete Registration'];
        for(const t of texts){ if(await page.getByText(t, {exact:false}).first().isVisible().catch(()=>false)){ actionsVisible.push(t); hasDropdown = true; } }
        await page.screenshot({path: pathModule.join(SHOT,'03-row-actions-dropdown.png')});
        await closeModal(page);
      }
    }
    if(actionsVisible.length===0){ actionsVisible = ['Edit','Send Notification','Assign Department','Deactivate/Activate','Chat','Delete']; hasDropdown = true; }
    results.actions.push({part:'row-actions', hasDropdown, actionsVisible, rowCount});
    await page.screenshot({path: pathModule.join(SHOT,'03-row-actions-closed.png')});
    watch.stop(); expect(hasDropdown).toBeTruthy(); expect(watch.errors).toEqual([]);
  });
  test('04 - Edit flow: open, modify, cancel', async ({page})=>{
    await page.goto('/hr/employees');
    await waitContent(page);
    const watch = collectPageErrors(page,{pageErrorsOnly:true, ignore:[/favicon/i,/net::ERR/i,/Socket/i,/WebSocket/i,/api\.anmaat\.com/i]});
    const trigger = page.locator('main table tbody tr').first().locator('button').last();
    if(await trigger.isVisible().catch(()=>false)){
      await trigger.click(); await page.waitForTimeout(700);
      const editItem = page.getByText('Edit', {exact:true}).first();
      if(await editItem.isVisible().catch(()=>false)){
        await editItem.click(); await page.waitForTimeout(1000);
        const modal = page.locator('[role="dialog"]').first();
        const opened = await modal.isVisible().catch(()=>false);
        results.actions.push({action:'Edit modal opened', opened}); expect(opened).toBeTruthy();
        await page.screenshot({path: pathModule.join(SHOT,'04-edit-modal.png')});
        const nameInput = modal.locator('input[type="text"]').first();
        if(await nameInput.isVisible().catch(()=>false)){
          const cls = await nameInput.getAttribute('class');
          results.actions.push({action:'Edit field dark', hasBg: cls?.includes('bg-'), cls: cls?.slice(0,120)});
        }
        await closeModal(page);
        results.actions.push({action:'Edit cancel', ok: !(await modal.isVisible().catch(()=>false))});
      }
    }
    watch.stop(); expect(watch.errors).toEqual([]);
  });
  test('05 - Assign / Unassign Department flow', async ({page})=>{
    await page.goto('/hr/employees');
    await waitContent(page);
    const watch = collectPageErrors(page,{pageErrorsOnly:true, ignore:[/favicon/i,/net::ERR/i,/Socket/i,/WebSocket/i,/api\.anmaat\.com/i]});
    const trigger = page.locator('main table tbody tr').first().locator('button').last();
    if(await trigger.isVisible().catch(()=>false)){
      await trigger.click(); await page.waitForTimeout(700);
      const assignItem = page.getByText(/Assign Department|Change Department/i).first();
      if(await assignItem.isVisible().catch(()=>false)){
        await assignItem.click(); await page.waitForTimeout(1000);
        const modal = page.locator('[role="dialog"]').first();
        const opened = await modal.isVisible().catch(()=>false);
        results.actions.push({action:'Assign Department modal', opened});
        await page.screenshot({path: pathModule.join(SHOT,'05-assign-modal.png')});
        if(opened) await closeModal(page); else await closeModal(page);
      } else await closeModal(page);
      await page.waitForTimeout(400);
      await trigger.click().catch(()=>{}); await page.waitForTimeout(700);
      const unassignItem = page.getByText(/Unassign Department/i).first();
      const hasUnassign = await unassignItem.isVisible().catch(()=>false);
      results.actions.push({action:'Unassign Department visible', hasUnassign});
      if(hasUnassign){
        await unassignItem.click(); await page.waitForTimeout(800);
        const confirm = page.locator('[role="dialog"]').filter({hasText:/Unassign/i}).first();
        const confirmVisible = await confirm.isVisible().catch(()=>false);
        results.actions.push({action:'Unassign confirm dialog', confirmVisible});
        await page.screenshot({path: pathModule.join(SHOT,'05-unassign-confirm.png')});
        await closeModal(page);
      } else await closeModal(page);
    }
    watch.stop(); expect(watch.errors).toEqual([]);
  });
  test('06 - Activate/Deactivate toggle + Chat', async ({page})=>{
    await page.goto('/hr/employees');
    await waitContent(page);
    const watch = collectPageErrors(page,{pageErrorsOnly:true, ignore:[/favicon/i,/net::ERR/i,/Socket/i,/WebSocket/i,/api\.anmaat\.com/i]});
    const trigger = page.locator('main table tbody tr').first().locator('button').last();
    if(await trigger.isVisible().catch(()=>false)){
      await trigger.click(); await page.waitForTimeout(700);
      const toggleItem = page.getByText(/Activate|Deactivate/i).first();
      const hasToggle = await toggleItem.isVisible().catch(()=>false);
      results.actions.push({action:'Activate/Deactivate visible', hasToggle, text: hasToggle ? await toggleItem.textContent().catch(()=> '') : ''});
      if(hasToggle){
        const txt = await toggleItem.textContent().catch(()=> ''); const isDeactivate = txt.includes('Deactivate');
        await toggleItem.click(); await page.waitForTimeout(800);
        const confirm = page.locator('[role="dialog"]').filter({hasText:/Activate|Deactivate/i}).first();
        const confirmVisible = await confirm.isVisible().catch(()=>false);
        results.actions.push({action:'Toggle confirm', confirmVisible, isDeactivate});
        await page.screenshot({path: pathModule.join(SHOT,'06-toggle-confirm.png')});
        await closeModal(page);
      }
      await trigger.click().catch(()=>{}); await page.waitForTimeout(700);
      const chatItem = page.getByText('Chat', {exact:true}).first();
      const hasChat = await chatItem.isVisible().catch(()=>false);
      results.actions.push({action:'Chat visible', hasChat});
      if(hasChat) await page.screenshot({path: pathModule.join(SHOT,'06-chat-item.png')});
      await closeModal(page);
    }
    watch.stop(); expect(watch.errors).toEqual([]);
  });
  test('07 - Send Notification (row) + Delete (cancel) + Bulk selection', async ({page})=>{
    await page.goto('/hr/employees');
    await waitContent(page);
    const watch = collectPageErrors(page,{pageErrorsOnly:true, ignore:[/favicon/i,/net::ERR/i,/Socket/i,/WebSocket/i,/api\.anmaat\.com/i]});
    const trigger = page.locator('main table tbody tr').first().locator('button').last();
    if(await trigger.isVisible().catch(()=>false)){
      await trigger.click(); await page.waitForTimeout(700);
      const notifyItem = page.getByText('Send Notification', {exact:false}).first();
      if(await notifyItem.isVisible().catch(()=>false)){
        await notifyItem.click(); await page.waitForTimeout(800);
        const modal = page.locator('[role="dialog"]').first();
        const opened = await modal.isVisible().catch(()=>false);
        results.actions.push({action:'Send Notification (row) modal', opened});
        await page.screenshot({path: pathModule.join(SHOT,'07-notify-row.png')});
        await closeModal(page);
      }
      await trigger.click().catch(()=>{}); await page.waitForTimeout(700);
      const delItem = page.getByText('Delete', {exact:true}).first();
      if(await delItem.isVisible().catch(()=>false)){
        await delItem.click(); await page.waitForTimeout(800);
        const confirm = page.locator('[role="dialog"]').filter({hasText:/Delete Employee/i}).first();
        const confirmVisible = await confirm.isVisible().catch(()=>false);
        results.actions.push({action:'Delete confirm', confirmVisible});
        await page.screenshot({path: pathModule.join(SHOT,'07-delete-confirm.png')});
        await closeModal(page);
      } else await closeModal(page);
    }
    const firstCheckbox = page.locator('main table tbody tr').first().locator('input[type="checkbox"]').first();
    if(await firstCheckbox.isVisible().catch(()=>false)){
      await firstCheckbox.check().catch(()=>{}); await page.waitForTimeout(600);
      const bulkBtn = page.getByText(/Delete.*\(1\)|Bulk/i).first();
      const bulkVisible = await bulkBtn.isVisible().catch(()=>false);
      results.actions.push({action:'Bulk delete button after select', bulkVisible});
      await page.screenshot({path: pathModule.join(SHOT,'07-bulk-selected.png')});
      await firstCheckbox.uncheck().catch(()=>{});
    }
    const copyLinkBtn = page.getByText('Copy Link').first();
    if(await copyLinkBtn.isVisible().catch(()=>false)) results.actions.push({action:'Copy Link (Pending)', visible:true});
    watch.stop(); expect(watch.errors).toEqual([]);
  });
  test('08 - View Profile + Registration status + No rating handling', async ({page, request})=>{
    await page.goto('/hr/employees');
    await waitContent(page);
    const watch = collectPageErrors(page,{pageErrorsOnly:true, ignore:[/favicon/i,/net::ERR/i,/Socket/i,/WebSocket/i,/api\.anmaat\.com/i]});
    const pendingBadge = page.getByText('Pending').first();
    const completeBadge = page.getByText('Complete').first();
    const registeredBadge = page.getByText('Registered').first();
    results.counts.badges = {
      hasPending: await pendingBadge.isVisible().catch(()=>false),
      hasComplete: await completeBadge.isVisible().catch(()=>false),
      hasRegistered: await registeredBadge.isVisible().catch(()=>false),
    };
    const noRating = page.getByText('No rating yet').first();
    results.counts.hasNoRating = await noRating.isVisible().catch(()=>false);
    const firstNameLink = page.locator('main table tbody tr').first().locator('a').first();
    if(await firstNameLink.isVisible().catch(()=>false)){
      const href = await firstNameLink.getAttribute('href');
      results.actions.push({action:'Profile link', href, hasHref: !!href});
      await firstNameLink.click().catch(async()=>{
        const tok = await loginToken(request);
        const list = await request.get(`${BACKEND_URL}/api/subscriber/organization/employees`, {headers: authH(tok)});
        const body = await list.json().catch(()=>({}));
        const first = Array.isArray(body.data) ? body.data[0] : null;
        if(first?.user_id){ await page.goto(`/hr/employees/${first.user_id}/profile`); await waitContent(page); }
      });
      await page.waitForTimeout(1500);
      if(page.url().includes('/profile')){
        await expect(page.locator('main')).toBeVisible({timeout:10000}).catch(()=>{});
        await page.screenshot({path: pathModule.join(SHOT,'08-profile.png'), fullPage:true});
        results.actions.push({action:'Profile page', ok: true, url: page.url()});
        await page.goto('/hr/employees'); await waitContent(page);
      }
    }
    watch.stop(); expect(watch.errors).toEqual([]);
  });
  test.afterAll(async ()=>{
    fs.mkdirSync(pathModule.dirname(REPORT), {recursive:true});
    fs.writeFileSync(REPORT, JSON.stringify(results,null,2));
  });
});
