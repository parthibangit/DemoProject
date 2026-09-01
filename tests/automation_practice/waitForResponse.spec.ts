import {expect, test} from '@playwright/test';

test('Wait for the response', async({page}) => {

   await page.goto('https://practice-automation.com');

   const [response] = await Promise.all([
      page.waitForResponse(res => res.url().includes('**/form-fields/') && res.status() === 200),
      page.getByRole('button', {name: 'Raise a request'}).click()
   ])

   const responseBody = response.json();
   console.log(responseBody);
});

test('Wait for the response status - Recommended approach', async({page}) => {

   await page.goto('https://practice-automation.com');

   const [response] = await Promise.all([
      page.waitForResponse(res => res.url().includes('**/form-fields/') && res.status() === 200),
   ])

   expect(response.status()).toBe(200);
   page.getByRole('button', {name: 'Raise a request'}).click()

});

test('Wait for the request information', async({page}) => {

   await page.goto('https://practice-automation.com');

   const [response] = await Promise.all([
      page.waitForRequest(request => request.url().includes('**/form-fields/') && request.method() === 'GET'),
   ])

   page.getByRole('button', {name: 'Raise a request'}).click()

});