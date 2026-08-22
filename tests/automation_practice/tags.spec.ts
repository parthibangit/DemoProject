import {test, expect} from '@playwright/test';

test('Input fields test', { tag: '@smoke' }, async({ page }) => {

  await page.goto('https://practice-automation.com/form-fields/');
  await expect(page).toHaveTitle('Form Fields | Practice Automation')

});

test('Checkbox selection',  { tag: ['@smoke', '@regression'] }, async({ page }) => {

  await page.goto('https://practice-automation.com/form-fields/');
  await expect(page).toHaveTitle('Form Fields | Practice Automation')

});

test('Radio button selection', { tag: '@e2e' },  async({ page }) => {

  await page.goto('https://practice-automation.com/form-fields/');
  await expect(page).toHaveTitle('Form Fields | Practice Automation')

});

test('Drop down selection', { tag: '@drop' },  async({ page }) => {

  await page.goto('https://practice-automation.com/form-fields/');
  await expect(page).toHaveTitle('Form Fields | Practice Automation')

});