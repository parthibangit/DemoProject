import {test} from "@playwright/test"

test('Drag the element from one place to another place', async({page}) => {

    await page.goto('https://practice-automation.com/gestures/');

    await page.locator('id=dragMe').dragTo(page.locator('id=div2'));
});

test('Drag the element from source to target', async({page}) => {

    await page.goto('https://practice-automation.com/gestures/');

    const source = page.locator('id=dragMe');
    const target = page.locator('id=div2');

    await source.dragTo(target);
});