import { test, expect } from '@playwright/test';

test('search', async ({ page }) => {
    // Buka website
    await page.goto('https://magento.softwaretestingboard.com');

    // Cari searchbox
    const searchBox = await page.locator('input[name="q"]');
    await searchBox.fill('jacket');
    await searchBox.press('Enter');

    // memastikan hasil search memiliki kata jacket
    const resultsTitle = await page.locator('h1.page-title');
    await expect(resultsTitle).toHaveText('Search results for:  \'jacket\'');
});
