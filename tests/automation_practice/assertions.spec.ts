import {test, expect} from "@playwright/test"

test('basic assertions', { tag: '@assert' }, async({ page }) => {

    await page.goto('https://practice-automation.com/form-fields/');

    const submitButton = page.locator('#submit-btn');

    await expect(submitButton, 'Submit button is not enabled in web page...').toBeEnabled();
    await expect.soft(submitButton).toHaveText('Submit');
});

test('Verify the counts', async({ page }) => {

    await page.goto('https://practice-automation.com/form-fields/');

    const favouriteDrinks = page.locator("//input[@type='checkbox']");

    try {
        await expect(favouriteDrinks, 'Favourite drinks count does not matched... ').toHaveCount(5, {timeout: 3000});       
    }
    catch(error) {
        console.error((error as Error).stack);
        throw error; // if we don't throw error, test marked as passed.
    }
    
});