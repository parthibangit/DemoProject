import {test, expect} from '../../src/custom-fixtures/MergeFixtures';
import { listRecordQueryParam } from '../../src/types/queryParamType.ts';

// It will ignore the https certificate issues only for this file tests.
test.use({
    ignoreHTTPSErrors: true,
    baseURL: 'https://automationexercise.com/api/productsList'
});

test('Send get request to fetch product list', async ({ request }) => {

    const productListResponse = await request.get('')

    // Print the response body
    const responseText: string = await productListResponse.text();
    const responseBody = await productListResponse.body();
    // console.log('Response body is: '+ responseBody);

    // Fetch and print the headers values
    const responseHeaders = productListResponse.headers();
    console.log('Content type is : ', responseHeaders['content-type']);
    console.log('Server name is : ', responseHeaders['server']);

    // verify the status code
    expect(productListResponse.status()).toBe(200);
    expect(productListResponse.status()).toBeTruthy(); // shortcut to test the status code
    expect(productListResponse.statusText()).toBe('OK');
});

test.only('Send get request and parsing the response body', async ({ request }) => {

    const productListResponse = await request.get('https://automationexercise.com/api/productsList')

    // Beautify the response body
    const response = await productListResponse.json();
    const prettyResponse = JSON.stringify(response, null, 2);
    console.log('Pretty response is: '+ prettyResponse);

    // parsing the response body
    const responseCode = response.responseCode;
    console.log('Response code is: ' + responseCode);

    //parsing and fetch the array objects from response
    const productsObject = response.products;
    console.log('First Product object is: ', productsObject[0]);

    // verify the response body values
    expect(response.responseCode).toBe(200);
    expect(response).toHaveProperty('responseCode', 200);
    expect(response).toHaveProperty('products[0].category.category', 'Tops');   // to check nested properties, use . operator
    // expect(productListResponse).toBe('OK');
});

test('Send get request to fetch product list using services', {tag: "@listRecords"}, async ({ recordService }) => {

    // Pre-condition of the test - setup the query param information
    const queryParam:listRecordQueryParam = { project_id: 39033};

    // Action of the test - sending request
    const recordsResponse = await recordService.getRecords(queryParam);

    // verify the outcome of the action step
    expect(recordsResponse.status()).toBe(200);
    expect(recordsResponse.status()).toBeTruthy(); // shortcut to test the status code
    expect(recordsResponse.statusText()).toBe('OK');
});