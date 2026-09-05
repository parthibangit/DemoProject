import { test, expect, chromium, webkit, Browser, BrowserContext, Page } from '@playwright/test';

test.describe('Login to application - Postive flow', async() => {

   test('Basic test', async() => {
       const browser = await chromium.launch({headless: true, channel: "chrome", slowMo: 2000});
    //    const browser = await webkit.launch();
       console.log('Browser name is: ', browser.browserType().name());
       console.log('Browser version is: ', browser.version());
       const context = await browser.newContext();
       const page = await context.newPage();
       await page.goto('https://practice-automation.com/form-fields/');
   })

    test('Basic test 2', async({browser: Browser, context: BrowserContext, page: Page, browserName, isMobile}) => {

       // browser - It holds the browser instance
       // context - It holds a isolated browser context. It won't share cookies/cache with other browser contexts
       // page - It holds a isolated page in the browser context.
       
   })

   test('Basic test 3', async() => {
       const browser = await chromium.launch({headless: false, channel: "chrome", slowMo: 2000});
       const contextOne = await browser.newContext();
       await contextOne.storageState({path: ''});

       const contextTwo = await browser.newContext();
       await contextTwo.storageState({path: ''});

       const pageOne = await contextOne.newPage();
       await pageOne.goto('https://practice-automation.com/form-fields/');

       const pageTwo = await contextTwo.newPage();
       await pageTwo.goto('https://practice-automation.com/form-fields/');
   })
});
