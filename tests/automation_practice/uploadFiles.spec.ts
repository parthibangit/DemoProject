import {test, expect} from "@playwright/test"
import path from "node:path";

test('Upload files if we have type as file', {tag: "@upload"}, async({ page }) => {

    await page.goto('https://practice-automation.com/file-upload/');

    // if the element has attribute "type" as "file" then we can directly use this method.
    await page.locator('id=file-upload').setInputFiles('Practice.docx');

    // Upload multiple files
    await page.locator('id=file-upload').setInputFiles(['Practice.docx', 'Practice2.docx']);
});

test('Upload files if we do not have type as file', {tag: "@uploadFile"}, async({ page }) => {

    await page.goto('https://practice-automation.com/file-upload/');

    // const fileChooserPromise = page.waitForEvent('filechooser');
    // await page.locator('id=file-upload').click();
    // const fileChooser = await fileChooserPromise;
    // await fileChooser.setFiles('Practice.docx');

    const [fileChooser] = await Promise.all([
        page.waitForEvent('filechooser'),
        page.locator('id=file-upload').click()
    ]);
    await fileChooser.setFiles('Practice.docx');

});