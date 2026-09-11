import { test, expect } from '@playwright/test';

test('Handling the random ads in page', async({page}) => {

     /* always add handler before all operations.
       This will trigger only if playwight has any actions or assertions */
    await page.addLocatorHandler(
        page.locator('#popmake-1272 button'),  
        async() => {
            await page.locator('#popmake-1272 button').click();
        }
    );
    await page.goto('https://practice-automation.com/ads/');
    await page.waitForTimeout(8000);
    await expect(page.locator('.breadcrumb_last')).toBeVisible();
});