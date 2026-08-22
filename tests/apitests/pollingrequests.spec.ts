import { test, expect, request } from '@playwright/test';

test.only('Polling the request without interval', async ({ request }) => {

   await expect.poll(async () => {

      const getRecordsResponse = await request.get('https://reqres.in/api/collections/products/records?project_id=39033');
      return getRecordsResponse.status();
   }, {
      message: 'Request not executed in given seconds...',
      timeout: 20000,    // Wait up to 20 seconds
   }).toBe(200);
});

test('Polling the request with interval', async ({ request }) => {

   await expect.poll(async () => {

      const getRecordsResponse = await request.get('https://reqres.in/api/collections/products/records?project_id=39033');
      const responseBody = await getRecordsResponse.json();
      return responseBody.data.length;
   }, {
      message: 'Request not completed within specified timeout...',
      timeout: 30000, // Wait up to 30 seconds
      intervals: [1000, 2000, 5000],
   }).toBe(16);
});

test('Polling the request and return the status', async ({ request }) => {

   let responseBodyStatus;

   await expect.poll(async () => {

      const getRecordsResponse = await request.get('https://reqres.in/api/collections/products/records?project_id=39033');
      responseBodyStatus = getRecordsResponse.status();
      return responseBodyStatus;
   }, {
      message: 'Response code not matched...',
      timeout: 30000, // Wait up to 30 seconds
   }).toBe(200);

   console.log(responseBodyStatus);
});