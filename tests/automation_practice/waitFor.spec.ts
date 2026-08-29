import {test} from '@playwright/test';


test.describe('Wait for URL, Load State, Selector, and navigation', () => {

    test('Wait for the selectors to load', async({ page }) => {

    // Most of time we don't need to mention these wait methods because auto waiting automatically handle the elements.

    await page.goto('https://practice-automation.com/form-fields/');

    // Waits for the main frame to navigate to the given URL.
    await page.waitForURL('**/form-fields.html');

    // we can pass values as 'load', 'domcontentloaded', and 'networkidle'
    await page.waitForLoadState('load');

    // we can pass values as 'visible', 'hidden', 'attached' and  'detached'
    await page.waitForSelector('name-input', {state:'visible'});

    // we can pass values as 'load', 'domcontentloaded', and 'networkidle'
    // await page.waitForNavigation('load');
    
});

});

