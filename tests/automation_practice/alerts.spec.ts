import {test} from "@playwright/test"

test('Handle the "alert" popup', async({page}) => {

    await page.goto(process.env.POP_UP_URL || '');

    page.on('dialog', async dialog => dialog.accept());

    await page.locator('id=alert').click();
});

test('Handle the "confirmation" popup', async({page}) => {

    await page.goto(process.env.POP_UP_URL || '');

    page.on('dialog', async dialog => {

        console.log(dialog.message())
        await page.waitForTimeout(4000);
        dialog.dismiss();
    });

    await page.locator('#confirm').click();
});

test('Handle the "prompt" popup', async({page}) => {

    await page.goto(process.env.POP_UP_URL || '');

    page.on('dialog', async dialog => {
        await page.waitForTimeout(4000);
        dialog.accept('This is a prompt message');
    });

    await page.locator('#prompt').click();
});