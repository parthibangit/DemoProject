import { expect, test } from "@playwright/test";

test('Selectors - property, CSS, and XPATH', async ({ page }) => {

  await page.goto('https://practice-automation.com/form-fields/');

  // using locator method
  await page.locator('id=name-input').fill('Parthiban Subburam');

  // passing css selector directly to the method
  await page.fill('#name-input', 'Parthiban Subburam');

  // passing XPATH selector directly to the method
  await page.fill("//input[@id='name-input']", 'Parthiban Subburam');

});

test('CSS Selectors - Starts with, ends with and contains', async ({ page }) => {

  await page.goto('https://practice-automation.com/form-fields/');

  // using starts with function '^'
  const countOne = await page.locator('input[id^=drink]').count();

  // using ends with function '$'
  const countTwo = await page.locator('input[name$=drink]').count();

  // using contains function '*'
  const countThree = await page.locator('input[id*=drink]').count();

  expect([countOne, countTwo, countThree], 'Counts does not matched').toEqual([5, 5, 5]);

});

test('Built-in Selectors @built', async ({ page }) => {

  await page.goto('https://practice-automation.com/form-fields/');

  // It is useful when we have to element which has 'label' tag
  await page.getByLabel('Password').fill('Test123')

  // It is useful when we have to element which has 'data-testid' attribute
  await page.getByTestId('email').fill('test123@gmail.com')

  // It is useful when we have to element which has 'placeholder' attribute
  await page.getByPlaceholder('Enter message here').fill('This is for testing purpose...');

  // It is useful when we have to element which has 'text'
  await page.getByText('What is your favorite color?').textContent();

  // It is useful when we have to element which has 'title' attribute
  await page.getByTitle('').textContent();

  // It is useful when we have to locate image which has 'alt' attribute
  await page.getByAltText('automateNow Logo');

  // It is useful when we have to locate element based on role
  await page.getByRole('checkbox', { name: 'Water' }).click();

});

test('Find the total elements @count', async ({ page }) => {

  await page.goto('https://practice-automation.com/form-fields/');

  await page.waitForSelector('//label[contains(@for, "color")]', { state: 'visible' });
  const totalElements = page.locator('//label[contains(@for, "color")]');

  console.log(`Total elements are ${await totalElements.count()}`);
});

test('Loop through each element @loop', async ({ page }) => {

  await page.goto('https://practice-automation.com/form-fields/');

  const totalElements = page.locator('//label[contains(@for, "color")]');

  // Iterate the elements and click the element using for loop.
  const arrayOfElements = await totalElements.all();

  for (let element of arrayOfElements) {
    let text = await element.textContent()
    if (text === 'Blue') {
      await element.click();
      console.log('Desired element has been clicked...');
      break;
    }
  }

  // Iterate the elements and print the element text using for each.
  const arrayText = await totalElements.allTextContents();
  arrayText.forEach((text, index) => {
    console.log(`${index} element text is ${text}`)
  })
});