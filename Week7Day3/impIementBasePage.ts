import { Page, Locator, expect } from '@playwright/test';
import { IBasePage } from './basePage';

export class LoginPage implements IBasePage {
  // Fulfill interface properties
  readonly Ipage: Page;
  readonly url = '/login';


  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;

  constructor(Lpage: Page) {
    this.Ipage = Lpage;
    this.usernameInput = Lpage.locator('#username');
    this.passwordInput = Lpage.locator('#password');
    this.loginButton = Lpage.locator('button[type="submit"]');
  }

  //  Fulfill interface method
  async expectLoaded(): Promise<void> {
    await expect(this.Ipage).toHaveURL(this.url);
    await expect(this.usernameInput).toBeVisible();
  }

 
  async login(user: string, pass: string): Promise<void> {
    await this.usernameInput.fill(user);
    await this.passwordInput.fill(pass);
    await this.loginButton.click();
  }
}