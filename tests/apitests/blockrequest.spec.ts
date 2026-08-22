import { test, expect } from '@playwright/test';

// serial - If one test fails, all subsequent tests in the file are immediately skipped.
// parallel - Force all tests in this file to run in parallel
// default - Opts out of global parallelization; runs sequentially
// retries - Failed tests will run once again
// timeout - Each test has 5 seconds timeout
test.describe.configure({mode: 'parallel', retries: 1, timeout: 5000});

test('Block the request to simulate the API error', { tag: "@network" }, async ({ page }) => {

    // Block the URL to simulate the API error
    await page.route('**/form-fields/', async (route) => {

        // based on our need we can pass as 'failed', 'timedout', 'internetdisconnected'
        await route.abort('timedout');
    });

    await page.goto('https://practice-automation.com/form-fields/');

    // verify checkbox is hidden
    await expect(page.locator("//input[@type='checkbox']")).toBeHidden();
});

test('Simulate the 500 error', { tag: "@network" }, async ({ page }) => {

    await page.route('**/form-fields/', async (route) => {

        await route.fulfill({
            status: 403,
            contentType: 'application/json',
            body: JSON.stringify({ message: '403 / Access Denied' })
        });
    });

    await page.goto('https://practice-automation.com/form-fields/');

    // verify checkbox is hidden
    await expect(page.locator("//input[@type='checkbox']")).toBeHidden();
});