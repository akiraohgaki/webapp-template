import { expect, test } from '@playwright/test';

test.describe('Counter', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Counter button', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Click me' });

    await button.click();

    await expect(button).toHaveText('1 Clicked');
  });
});
