import {test, expect} from '@playwright/test';

test('Form Fields test', { tag: '@basics'}, async({page}) => {

    await page.goto('');
    await page.getByTestId('Login').fill('sarathipartha04@gmail.com');
    await page.getByTestId('password').fill('password');
    await page.getByText('login').click();
    expect(page.getByLabel('Success Message')).toBeVisible();
    expect(page.getByLabel('Success Message')).toContainText('User logged in successfully...');
    await page.getByTestId('password').inputValue();
});

test('Refresh, back and forward', async({page}) => {

    await page.reload();
    await page.goBack();
    await page.goForward();
})

test('CSS selectors', async({page}) => {

    await page.goto('');
    await page.locator("input[class^=new-class]").count();
    await page.locator('input[class$=new-class]').textContent();
    await page.locator('input[class*=new-class]').allTextContents();
})

test('handle the alert', async({page}) => {

    await page.goto('')
    page.on('dialog', async dialog => {
      dialog.message();
      dialog.accept();
      dialog.dismiss();
    })

    await page.locator('').click()

})

test('handle the multi tab/windows', async({page}) => {

    await page.goto('');
    const [newtab] = await Promise.all([
      await page.context().waitForEvent('page'),
      await page.locator('').click() 
    ]);
    await page.waitForLoadState('domcontentloaded');
    expect(newtab.getByTestId('')).toBeVisible();
    await newtab.close();
    await page.bringToFront();
})

test('upload the file/files', async({page}) => {

    await page.goto('');
    await page.locator("//input[@type='file']").setInputFiles('fileName.doc');
    await page.locator("//input[@type='file']").setInputFiles(['fileName.doc', 'fileName2.doc']);
    
    const [fileChooser] = await Promise.all([
        await page.waitForEvent('filechooser'),
        await page.locator('').click()
    ]);

    fileChooser.setFiles('fileName.doc');
    fileChooser.setFiles(['fileName.doc', 'fileName2.doc']);
})