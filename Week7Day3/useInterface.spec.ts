import { test } from '@playwright/test';
import { LoginPage } from './impIementBasePage';

test('User can log in successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await page.goto('/login');
  await loginPage.expectLoaded(); // Enforced by the interface
  await loginPage.login('testuser', 'securepassword123');
});