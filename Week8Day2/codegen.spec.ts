import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://login.salesforce.com/?locale=in');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('yuvarani.sekar@testleaf.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Testleaf@2027');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('textbox', { name: 'Verification Code' }).click();
  await page.getByRole('textbox', { name: 'Verification Code' }).click();
  await page.getByRole('textbox', { name: 'Verification Code' }).fill('363978');
  await page.getByRole('button', { name: 'Verify' }).click();
  await page.goto('https://orgfarm-d716fa5b16-dev-ed.develop.lightning.force.com/lightning/page/home');
  await page.getByRole('button', { name: 'App Launcher' }).click();
  await page.getByRole('combobox', { name: 'Search apps and items...' }).click();
  await expect(page.getByRole('button', { name: 'Search' })).toBeVisible();
  await expect(page.getByLabel('Global', { exact: true }).getByRole('list')).toContainText('Chatter');
  await page.getByText('Quarterly Performance', { exact: true }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('searchbox', { name: 'Search...' }).fill('lead');
  await page.getByRole('button', { name: 'Search: lead' }).click();
  await page.getByText('MenuDeveloper EditionShow menu').click();
  await page.getByRole('button', { name: 'App Launcher' }).click();
  await page.getByRole('button', { name: 'View All Applications' }).click();
  await page.getByRole('combobox', { name: 'Search apps or items...' }).click();
  await page.getByRole('combobox', { name: 'Search apps or items...' }).fill('lead');
  await expect(page.getByRole('combobox', { name: 'Search apps or items...' })).toHaveValue('lead');
  await page.locator('div').filter({ hasText: /^Search apps or items\.\.\.ClearAll results for "lead"$/ }).click();
  await expect(page.getByLabel('App Launcher')).toMatchAriaSnapshot(`
    - button "Cancel and close"
    - heading "App Launcher" [level=2]
    - text: Search apps or items...
    - combobox "Search apps or items..." [expanded]
    - button "Clear"
    - text: All results for "lead"
    - button "Visit AppExchange"
    - list:
      - listitem:
        - heading "All Apps" [level=2]:
          - button "All Apps" [expanded]
        - list
      - listitem:
        - heading "All Items" [level=2]:
          - button "All Items" [expanded]
        - list:
          - listitem:
            - link "Leads":
              - /url: /lightning/o/Lead/home
              - paragraph:
                - mark: Lead
                - text: s
    - status
    `);
  await page.getByText('App LauncherSearch apps or').click();
});