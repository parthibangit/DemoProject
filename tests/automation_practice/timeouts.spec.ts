import { test, expect } from '@playwright/test';

// Each test in this file takes 9 seconds to test.
test.describe.configure({ timeout:9000 });

test('First test', async({ page }) => {

    // This test takes only two second to run - If it takes more than 2 second then it will mark as failed.
    test.setTimeout(2000);

    await page.goto('https://practice-automation.com/form-fields/', {timeout: 6000});

    const nameField = page.getByTestId('name-input');
    await nameField.fill('Parthiban', {timeout: 5000});       // action time out
    await expect(nameField).toBeEditable({timeout: 3000});    // If it takes more than 3 second then test will be marked as failed.
});

test('Second test', async({ page }) => {

    page.waitForTimeout(10000);
    await page.goto('https://practice-automation.com/form-fields/');
});