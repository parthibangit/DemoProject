# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: automation_practice\brokenLinks.spec.ts >> 
- Location: tests\automation_practice\brokenLinks.spec.ts:3:5

# Error details

```
Error: apiRequestContext.get: Parse Error: Header overflow
Call log:
  - → GET https://www.youtube.com/c/automateNow
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/153.0.8010.12 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - link "Skip to content" [ref=e2] [cursor=pointer]:
    - /url: "#main"
  - generic [ref=e3]:
    - generic [ref=e4]:
      - banner [ref=e6]:
        - generic [ref=e7]:
          - link [ref=e8] [cursor=pointer]:
            - /url: https://practice-automation.com/
            - img "automateNow Logo" [ref=e9]
          - navigation "Top Menu" [ref=e10]:
            - list [ref=e11]:
              - listitem [ref=e12]:
                - link "Blog" [ref=e13] [cursor=pointer]:
                  - /url: https://automatenow.io/
              - listitem [ref=e14]:
                - link "YouTube" [ref=e15] [cursor=pointer]:
                  - /url: https://www.youtube.com/c/automateNow
      - generic [ref=e17]:
        - heading "Broken Links" [level=1] [ref=e18]
        - navigation [ref=e19]:
          - generic [ref=e20]:
            - link "Home" [ref=e22] [cursor=pointer]:
              - /url: https://practice-automation.com/
            - text: » Broken Links
    - main [ref=e26]:
      - article [ref=e28]:
        - generic [ref=e29]:
          - paragraph [ref=e30]:
            - text: This page has a
            - link "broken link" [ref=e31] [cursor=pointer]:
              - /url: https://practice-automation.com/broken-links/missing-page.html
            - text: .
          - paragraph [ref=e32]:
            - text: In an ideal scenario a website should have no broken links. Therefore, it’s important to ensure that all links are working properly. One way to do that is to verify that the
            - link "HTTP response code" [ref=e33] [cursor=pointer]:
              - /url: https://automatenow.io/http-response-codes-in-api-testing/
            - text: is 200 when the link is clicked.
          - paragraph [ref=e34]: In this case, clicking the link will return a response code of 404 (Not Found). You could write an automated test that checks for the expected response code of 200.
          - paragraph [ref=e35]:
            - strong [ref=e36]: "Tip:"
            - text: "Try using Chrome DevTools and look at the Network tab when you click the link. You should see an entry such as this:"
          - figure [ref=e37]:
            - table [ref=e38]:
              - rowgroup [ref=e39]:
                - row [ref=e40]:
                  - columnheader "Name" [ref=e41]
                  - columnheader "Status" [ref=e42]
              - rowgroup [ref=e43]:
                - row [ref=e44]:
                  - cell "missing-page.html" [ref=e45]
                  - cell "404" [ref=e46]
    - generic [ref=e48]:
      - contentinfo [ref=e49]:
        - complementary [ref=e52]:
          - generic [ref=e56]:
            - paragraph [ref=e58]:
              - link "Learn More" [ref=e59] [cursor=pointer]:
                - /url: https://linktr.ee/automateNow
            - paragraph [ref=e61]:
              - link "About" [ref=e62] [cursor=pointer]:
                - /url: https://automatenow.io/about/
      - generic [ref=e64]: © 2020-2026 - automateNow, LLC. All rights reserved.
  - button "Search Toggler" [expanded] [ref=e67] [cursor=pointer]
  - link "Go to top" [ref=e69] [cursor=pointer]:
    - /url: "#body"
```

# Test source

```ts
  1  | import {test} from '@playwright/test';
  2  | 
  3  | test('', {tag: "@brokenlink"}, async({page, request}) => {
  4  | 
  5  |     await page.goto('https://practice-automation.com/broken-links/');
  6  |     const allLinks =  await page.locator('//a').all();
  7  |     let brokenLinks: string[] = [];
  8  | 
  9  |     for(let link of allLinks) {
  10 |         let linkUrl = await link.getAttribute('href')
  11 |         // @ts-ignore
  12 |         if(linkUrl.includes('https://')) {
> 13 |             const response = await request.get(linkUrl!)
     |                                            ^ Error: apiRequestContext.get: Parse Error: Header overflow
  14 |             if(response.status() !== 200) {
  15 |                 brokenLinks.push(linkUrl!);
  16 |             }
  17 |         }   
  18 |     }
  19 |     console.log('Broken links details are: ', brokenLinks)
  20 | });
```