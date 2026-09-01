import { test } from '@playwright/test';
import path from 'path';
import fs from 'fs';

test.describe('File attachments api', async () => {

    test.describe.configure({
        mode: 'default',
        retries: 0,
        timeout: 7000
    });

    test.use({
        ignoreHTTPSErrors: true
    });

    test('Attach the pdf file via post api', async ({ request }) => {

        // Define the path of the file
        const filePath = path.resolve(__dirname, '../src/test-data/file.pdf');

        // Read the file as a buffer or stream
        const fileStream = fs.createReadStream(filePath);

        // Send post request with attachments
        request.post('URL', {
            headers: {
                'Authorization': 'bearer token',
                // Do NOT manually set 'Content-Type': 'multipart/form-data'. 
                // Playwright will automatically generate it with the correct boundary.
            },
            multipart: {
                file: {
                    name: 'file.pdf',
                    mimeType: 'application/pdf',
                    buffer: fileStream,
                },
                // You can also pass additional text fields alongside the file
                description: 'Monthly report document'
            }
        });
    });

    test('Attach the image file via post api', async ({ request }) => {

        // Define the path of the file
        const filePath = path.resolve(__dirname, './test-data/file.png');

        // Read the file as a buffer or stream
        const fileStream = fs.createReadStream(filePath);

        // Send post request with attachments
        request.post('URL', {
            headers: {
                'Authorization': 'bearer token',
                // Do NOT manually set 'Content-Type': 'multipart/form-data'. 
                // Playwright will automatically generate it with the correct boundary.
            },
            multipart: {
                file: {
                    name: 'file.png',
                    mimeType: 'image/png',
                    buffer: fileStream,
                },
                // You can also pass additional text fields alongside the file
                description: 'Screenshot of monthly report'
            }
        });
    });

});