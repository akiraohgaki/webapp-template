import { expect, test } from '@playwright/test';

test.describe('Counter', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Counter button', async ({ page }) => {
    await expect(page.locator('button')).toHaveText('Click me!');

    await page.locator('button').click();

    await expect(page.locator('button')).toHaveText('1 Clicked');
  });
});
