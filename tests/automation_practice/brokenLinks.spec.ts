import {test} from '@playwright/test';

test('', {tag: "@brokenlink"}, async({page, request}) => {

    await page.goto('https://practice-automation.com/broken-links/');
    const allLinks =  await page.locator('//a').all();
    let brokenLinks: string[] = [];

    for(let link of allLinks) {
        let linkUrl = await link.getAttribute('href')
        // @ts-ignore
        if(linkUrl.includes('https://')) {
            const response = await request.get(linkUrl!)
            if(response.status() !== 200) {
                brokenLinks.push(linkUrl!);
            }
        }   
    }
    console.log('Broken links details are: ', brokenLinks)
});