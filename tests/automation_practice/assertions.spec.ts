import {test, expect} from "@playwright/test"

test('basic assertions', { tag: '@smoke' }, async({ page }) => {

    await page.goto('https://practice-automation.com/form-fields/');

    const submitButton = page.locator('#submit-btn');

    await expect(submitButton, 'Submit button is not enabled in web page...').toBeEnabled();
    await expect.soft(submitButton).toHaveText('Submit');
});

test('Verify the counts @smoke', async({ page }) => {

    await page.goto('https://practice-automation.com/form-fields/');

    const favouriteDrinks = page.locator("//input[@type='checkbox']");

    try {
        await expect(favouriteDrinks, 'Favourite drinks count does not matched... ').toHaveCount(10, {timeout: 3000});       
    }
    catch(error) {
        console.error((error as Error).stack);
        throw error; // if we don't throw error, test marked as passed.
    }
});

test('basic assertion types', { tag: '@assert' }, async({ page }) => {

    await page.goto('https://practice-automation.com/form-fields/');

    const submitButton = page.locator('#submit-btn');

    // Basic assertion
    await expect(submitButton, 'Submit button is not enabled in web page...').toBeEnabled();
    await expect(submitButton, 'Submit button is not enabled in web page...').toBeHidden();
    await expect(submitButton, 'Submit button is not enabled in web page...').toBeDisabled();
    await expect(submitButton, 'Submit button is not enabled in web page...').toBeEditable();
    await expect(submitButton, 'Submit button is not enabled in web page...').toBeChecked();
    await expect(submitButton, 'Submit button is not enabled in web page...').toBeVisible();
    expect(submitButton, 'Submit button is not enabled in web page...').toBeTruthy();
    await expect(submitButton, 'Submit button is not enabled in web page...').toBeAttached();

    // has right items in the right order.
    await expect(submitButton, 'Submit button is not enabled in web page...').toHaveText(['Submit', 'Create', 'Touch']);
    await expect(submitButton, 'Submit button is not enabled in web page...').toHaveText('Submit');

    // has some items in the right order
    await expect(submitButton, 'Submit button is not enabled in web page...').toContainText(['Submit', 'Touch']);

    await expect(submitButton, 'Submit button is not enabled in web page...').toHaveCount(10);
    await expect(submitButton, 'Submit button is not enabled in web page...').toHaveValue('Submit');

    // useful to verify the values in dropdown field
    await expect(submitButton, 'Submit button is not enabled in web page...').toHaveValues(['Admin', 'User']);

    // useful to verify the element attribute
    await expect(submitButton, 'Submit button is not enabled in web page...').toHaveAttribute('type', 'input');
    await expect(submitButton, 'Submit button is not enabled in web page...').toHaveClass('submitbutton');
    await expect(submitButton, 'Submit button is not enabled in web page...').toContainClass('submitButton')
});