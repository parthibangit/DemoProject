import { test } from '@playwright/test';

/* This will applicable to all the test request in this file only */
test.use({

    baseURL: '',

    /* handles the bearer token authentication */
    extraHTTPHeaders: {
        'x-api-key': process.env.API_KEY ?? '',
        'X-Reqres-Env': 'prod',
        'Content-Type': 'application/json'
    },

    /* handles the basic authentication */
    httpCredentials: {
        username: 'username',
        password: 'password'
    }

});

test('Bearer token authentication', async({ request }) => {

    const response = await request.get('url', {
        headers: {
            'Authorization': 'Bearer token',
            'content-type': 'application/json'
        },
        maxRetries: 2,
        timeout: 7000
    });
});

test('Basic authentication / Preemptive authentication', async({ playwright }) => {

    const requestContext = await playwright.request.newContext({

        httpCredentials: {
            username: '',
            password: ''
        },
    });
    const response = await requestContext.get('');
    console.log(response.headers());
});

test('oauth authentication', async({ request }) => {

    const response = await request.post('', {

        headers: {
          'content-type': 'application/x-www-form-urlencoded'
        },

        form: {
            grant_type: 'client_credentials',       // or 'password'
            client_id: process.env.AUTH_CLIENT_ID!,
            client_secret: process.env.AUTH_CLIENT_SECRET!,
            scope: 'read:data write:data',          // optional
        }
    });
    const parsedResponse = await response.json();
    const token = parsedResponse.token;
});