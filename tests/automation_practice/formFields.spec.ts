import {test, expect} from '@playwright/test';
import { StringUtils } from '../../src/utils/stringUtils.ts';

test.describe.configure({mode: 'parallel'}); 

test.use({
  headless: false,
  ignoreHTTPSErrors: true,
  screenshot: 'only-on-failure',
  permissions:[]
});

test('Input fields test', {tag: "@inputs"}, async({ page }) => {

  const userFirstName: string = StringUtils.firstName();

  await page.goto('https://practice-automation.com/form-fields/');

  //Fill the input field - fill method automatically clear the input field
  await page.getByTestId('name-input').fill(userFirstName);

    // Clear the input field before fill
  await page.getByTestId('name-input').clear();

  // type the value one by one as emulating user typing - it will not clear the field automatically
  await page.getByTestId('name-input').type(userFirstName);

});

test('Checkbox and radio selection', async({ page }) => {

  await page.goto('https://practice-automation.com/form-fields/');

  // Check the checbox
  await page.getByRole('checkbox', {name: 'Water'}).check();

  // uncheck the checkbox
  await page.getByTestId('drink1').uncheck();

  // assert the checkbox to be selected
  expect(page.getByTestId('drink1')).toBeChecked();

  // Check the radio button
  await page.locator('id=color1').check();

});

test('Drop down selection', async({ page }) => {

  await page.goto('https://practice-automation.com/form-fields/');
  
  // Select the value by label 
  await page.getByTestId('automation').selectOption({label: 'Yes'});

  // Select the value by value 
  await page.getByTestId('automation').selectOption({value: 'yes'});

    // Select the value by label 
  await page.getByTestId('automation').selectOption({index: 0});

  // Select multi values in drop down
  await page.getByTestId('automation').selectOption(['Yes', 'No'])

});

test('Click operations', {tag : "@click"}, async({ page }) => {

  await page.goto('https://practice-automation.com/click-events/');

  // basic click
  await page.getByText('Cat').click();

  // double click
  await page.getByText('Dog').dblclick();

  // hover the element
  await page.getByText('Pig').hover();
  
  // Right click
  await page.getByText('Cow').click({button: 'right'});
});

test('Finding elements based on index or filter', async({ page }) => {

    await page.goto('https://practice-automation.com/form-fields/');

    // Click the first element from matching elements
    await page.locator("//input[@type='checkbox']").nth(0).click();

    // Click the first and last element using first and last function
    await page.locator("//input[@type='checkbox']").first().click();
    await page.locator("//input[@type='checkbox']").last().click();

    // Click the element based on the text
    await page.locator("//input[@type='checkbox']").filter({ hasText: 'Coffee' }).click();
});

test('Refresh, Go back and Go forward in the browser', async({ page }) => {

  await page.goto('https://practice-automation.com/form-fields/');

  // Refresh the browser
  await page.reload();

  // go back
  await page.goBack();

  // go forward
  await page.goForward();
});

test('Verify element presence, enabled, disabled, hidden, editable and checked status', async({page}) => {

  await page.goto('https://practice-automation.com/click-events/');

  const isElementVisible  = await page.getByText('Cat').isVisible();
  const isElementEnabled  = await page.getByText('Cat').isEnabled();
  const isElementDisabled = await page.getByText('Cat').isDisabled();
  const isElementHidden = await page.getByText('Cat').isHidden();
  const isElementEditable = await page.getByText('Cat').isEditable();
  const isElementChecked = await page.getByText('Cat').isChecked();
});

test.skip('Key press events', async({page}) => {

  // Press using press()
  await page.getByText('Cat').press('Enter');

  // Press using keyboard
  await page.keyboard.press('PageDown');
});

