import {test, expect} from '@playwright/test';

test.describe.configure({mode: 'default'})

// We can use 'locale' to override the default language of the browser for file level/describe level
test.use({
   
    headless: false,
    locale: 'fr-FR',
    timezoneId: 'Europe/Paris'
})

test('Test multi language', async({page}) => {

   await page.goto('https://www.european-agency.org/');
})
