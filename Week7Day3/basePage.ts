import { Page } from '@playwright/test';

export interface IBasePage {
  Ipage: Page;
  url: string;
  expectLoaded(): Promise<void>; // Every page must define its own load check
}