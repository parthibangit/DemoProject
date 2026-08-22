import {test, expect} from "@playwright/test";

test('Take screenshot - Partial/Whole page', {tag: '@screenshot'}, async({ page }) => {

  await page.goto('https://practice-automation.com/form-fields/');
  await page.getByTestId('name-input').fill('Parthiban');
  await page.screenshot({ path: './screenshots/screenshot.png'})
//   await page.screenshot({ path: 'screenshot.png', fullPage: true})
});

test('Take screenshot of element', async({ page }) => {

  await page.goto('https://practice-automation.com/form-fields/');
  await page.locator('id=name-input').screenshot({ path: './screenshots/element_screenshot.png'});
});

test('Take video', async({ page }) => {

  await page.goto('https://practice-automation.com/form-fields/');
  await page.locator('id=name-input').fill('Parthiban');
});