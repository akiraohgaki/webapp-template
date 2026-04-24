import { expect, test } from '@playwright/test';

test.describe('index page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Counter button', async ({ page }) => {
    await page.getByRole('button', { name: 'Click me' }).click();

    await expect(page.getByRole('button', { name: '1 Clicked' })).toBeVisible();
  });
});
