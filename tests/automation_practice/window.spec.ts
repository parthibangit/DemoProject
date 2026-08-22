import {test} from "@playwright/test"

test('Handle the "new window / tab"', async({page}) => {

    await page.goto('https://practice-automation.com/window-operations/');

    const windowPromise = page.waitForEvent('popup');

    await page.locator("//b[text()='New Tab']").click();

    const newWindow = await windowPromise;

    const newWindowTitle = await newWindow.locator("//h2[@class='wp-block-heading']").textContent();
    console.log('Title is: ' + newWindowTitle);

    await newWindow.getByAltText('REST Assured tutorials').isVisible();
});

test('Handle the "new window / tab" and switch back to parent tab', async({page}) => {

    await page.goto('https://practice-automation.com/window-operations/');

    const [newTab] = await Promise.all([
        page.context().waitForEvent('page'),
        page.locator("//b[text()='New Window']").click(),
    ]);


    await newTab.waitForLoadState();
    const newWindowTitle = await newTab.locator("//h2[@class='wp-block-heading']").textContent();
    console.log('Title is: ' + newWindowTitle);

    await newTab.getByAltText('REST Assured tutorials').isVisible();

    // close the new tab
    await newTab.close();

    // Return to the parent tab
    await page.bringToFront();

    console.log(await page.locator("//b[text()='New Window']").textContent());
});

test('Advance way to handle to multiple windows', async({page}) => {

    await page.goto('https://practice-automation.com/window-operations/');

    await page.locator("//b[text()='New Tab']").click();

    const totalTabs = page.context().pages();
    console.log('Total number of pages: ' + totalTabs.length)

    for(const tab of totalTabs) {
       if(await tab.title() === 'automateNow | The Best FREE Software Online Training Platform') {
          await tab.bringToFront();
          const newWindowTitle = await tab.locator("//h2[@class='wp-block-heading']").textContent();
          console.log('Title is: ' + newWindowTitle); 
          tab.close();
          break;      
        }
    }

    // Switching back to parent window/tab
    totalTabs[0].bringToFront();

    console.log(await page.locator("//b[text()='New Window']").textContent());
});