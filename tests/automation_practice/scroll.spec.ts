import {test} from "@playwright/test"

test.beforeEach( async( {page}) => {

    await page.goto('https://practice-automation.com/form-fields/');
});

test('scroll to element automatically', async({page}) => {

    await page.getByTestId('submit-btn').click();
});

test('scroll to element if needed', async({page}) => {

    await page.getByTestId('submit-btn').scrollIntoViewIfNeeded();
});

test.afterEach( async( {page} ) => {
    
    await page.close();
});