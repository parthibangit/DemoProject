import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

test('Download the file', async({page}) => {

    await page.goto('https://practice-automation.com/file-download/');

    const [download] = await Promise.all([
      page.waitForEvent('download'),
      page.locator('.wpdm-download-link').nth(0).click()
    ]);

    // fetch the downloaded file name
    const downloadedFileName = download.suggestedFilename();

    // fetch the absolute path for the downloads folder
    const targetPath = path.resolve(__dirname, '../../downloads', downloadedFileName);

    // const targetPath = path.join(downloadsDir, downloadedFileName);

    // save the file in root downloads folder
    await download.saveAs(targetPath);

    // verify the file available in root downloads folder
    expect(fs.existsSync(targetPath)).toBeTruthy();

})