import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
  await page.goto('https://leaftaps.com/opentaps/control/login');
  
  
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('demoCSR2');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('crmsfa');
  
  
  await expect(page.getByRole('textbox', { name: 'Username' })).toHaveValue('demoCSR2');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await expect(page.getByRole('textbox', { name: 'Username' })).toHaveValue('demoCSR2');

  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'CRM/SFA' }).click();
  
});