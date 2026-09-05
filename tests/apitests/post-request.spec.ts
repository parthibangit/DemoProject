import createRecordsJson from '../../src/api-objects/requestbody/CreateRecords.json';
import { CreateRecords } from '../../src/api-objects/pojo/requestpojo/CreateRecords.ts';
import { CreateRecordResponseType } from '../../src/types/responseType.ts';
import { CreateRecordResponseSchema } from '../../src/api-objects/pojo/responsepojo/CreateRecordsResponse.ts';
import { test, expect } from '../../src/custom-fixtures/MergeFixtures.ts';
import { listRecordQueryParam } from '../../src/types/queryParamType.ts';
import { createRecordPayload } from '../../src/utils/payloadFactoryUtils.ts';

test.use({

    extraHTTPHeaders: {
        'x-api-key': process.env.API_KEY!,
        'X-Reqres-Env': 'prod',
        'Content-Type': 'application/json'
    }
});

test('Create a record using json file and fetch it again', { annotation: { type: 'story', description: 'RE-6182' }, tag: "@create" }, async ({ request }) => {

    const recordsResponse = await request.post('https://reqres.in/api/collections/products/records?project_id=39033',
        {
            headers: {
                'x-api-key': process.env.API_KEY || ' ',
                'X-Reqres-Env': 'prod',
                'Content-Type': 'application/json'
            },
            data: createRecordsJson
        });
    const recordsResponseBody = await recordsResponse.json();
    let recordId = recordsResponseBody.data.id;

    // Use template literal to interpolate recordId and send a GET to fetch the created record
    const getRecordResponse = await request.get(`https://reqres.in/api/collections/products/records/${recordId}?project_id=39033`, {
        headers: {
            'x-api-key': process.env.API_KEY || ' ',
            'X-Reqres-Env': 'prod'
        }
    });

    // Deserialize into your TypeScript Type
    const getRecordResponseBody: CreateRecordResponseType = await getRecordResponse.json();
    console.log('response body is: ', JSON.stringify(getRecordResponseBody, null, 4));
    expect(getRecordResponseBody.data.id).toBe(recordId);
});

test('Create record using pojo class and delete it', async ({ request }) => {

    // Setup the request payload using pojo class
    const createRecordPojoObj = new CreateRecords();
    createRecordPojoObj.setName = "Samsung mobile";
    createRecordPojoObj.setPrice = 250;
    createRecordPojoObj.setCategory = "Electronics";
    createRecordPojoObj.setInStock = true;

    // Send post request to create a record using query param
    const recordsResponse = await request.post('https://reqres.in/api/collections/products/records',
        {
            data: createRecordPojoObj.toJson(),
            params: { project_id: 39033 }
        }
    );

    /* Parsing the response to fetch value
      'as' simply deserialize the JSON and will not throw any error when the response types mismatches
       Typescript blindly trust the user and will not validate the payload.
       Issue happens when we fetch the value and use it in script. */
    const recordsResponseBody = await recordsResponse.json() as CreateRecordResponseType;
    let recordId = recordsResponseBody.data.id;
    console.log('Response is ', recordsResponseBody);
    console.log('Record id is: ', recordId)

    // use template literal to interpolate recordId and send a GET to fetch the created record
    const getRecordDeleteResponse = await request.delete(`https://reqres.in/api/collections/products/records/${recordId}?project_id=39033`);
    expect(getRecordDeleteResponse.status()).toBe(204);
});

test('Create record using pojo class and deserialise the response using zod validation library', async ({ request }) => {

    // Setup the request payload using pojo class
    const createRecordPojoObj = new CreateRecords();
    createRecordPojoObj.setName = "Samsung mobile";
    createRecordPojoObj.setPrice = 250;
    createRecordPojoObj.setCategory = "Electronics";
    createRecordPojoObj.setInStock = true;

    // Send post request to create a record using query param
    const recordsResponse = await request.post('https://reqres.in/api/collections/products/records',
        {
            data: createRecordPojoObj.toJson(),
            params: { project_id: 39033 }
        }
    );

    // below zod parse will validate the response types and throw zod type error if there is any mismatching types
    const recordResponseBody = await recordsResponse.text();
    const parsedResponseSchema = CreateRecordResponseSchema.parse(JSON.parse(recordResponseBody));
    console.log('Response is ', parsedResponseSchema);
    expect(parsedResponseSchema.data.data.name).toEqual(createRecordPojoObj.getName);
});

test('Create record using service', { tag: "@postRecord" }, async ({ recordService }) => {

    // Pre-condition of the test - Setup data and query param
    const createRecordPojoObj = new CreateRecords();
    createRecordPojoObj.setName = "Test mobile";
    createRecordPojoObj.setPrice = 250;
    createRecordPojoObj.setCategory = "Electronics";
    createRecordPojoObj.setInStock = true;

    const queryParam: listRecordQueryParam = { project_id: 39033 };


    // Action of the test - sending post request
    const recordResponse = await recordService.createRecord(createRecordPojoObj.toJson(), queryParam);

    // verify outcome of action step 
    const recordJsonResponse = await recordResponse.json();
    const parsedResponseSchema = CreateRecordResponseSchema.parse(recordJsonResponse);
    expect(parsedResponseSchema.data.data.name).toEqual(createRecordPojoObj.getName);
});

test('Create record and delete it using service', { tag: "@deleteRecord" }, async ({ recordService }) => {

    // Pre-condition of the test - Setup data and query param
    const createRecordReq = createRecordPayload({ in_stock: false });
    const queryParam: listRecordQueryParam = { project_id: 39033 };


    // Action of the test - sending post request
    const recordResponse = await recordService.createRecord(createRecordReq, queryParam);
    const recordJsonResponse = await recordResponse.json();
    const parsedResponseSchema = CreateRecordResponseSchema.parse(recordJsonResponse);
    const recordId = parsedResponseSchema.data.id;

    // Action of the test - sending delete request
    const deleteResponse = await recordService.deleteRecord(recordId, queryParam);

    // Verify outcome of delete action step
    expect(deleteResponse.status()).toBe(204);
});

