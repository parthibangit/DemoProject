import {test} from "@playwright/test"

test('handle the frame with frame', async({page}) => {

    await page.goto('https://practice-automation.com/iframes/');

    // should pass only if 'name' attribute or iframe url
    const frame =  page.frame('top-iframe')

    // @ts-ignore
    await frame.locator('.navbarSearchContainer_Bca1').click();
});

test('handle the frame with framelocator', async({page}) => {

    await page.goto('https://practice-automation.com/iframes/');

    // should pass only if 'id' attribute and XPATH
    const searchBox =  page.frameLocator('id=iframe-1').locator('.navbarSearchContainer_Bca1');
    // const searchBox =  page.frameLocator("//iframe[@name='top-iframe']").locator('.navbarSearchContainer_Bca1');

    await searchBox.click();
});