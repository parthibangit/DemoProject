import {test} from "@playwright/test"

test.describe('Grouping the test to implement hooks concept...', {tag: "@group"}, () => {

    // It will run before all the test begins per worker...
    test.beforeAll( async() => {
        console.log('=========== verification has started... ===========')
        console.log('=========== Scripts are running on '+ process.env.ENV + ' environment... ===========');
    });


    // It will run before each test...
    test.beforeEach( async({browserName}) => {

        console.log('Browser name is: '+ browserName)

        if(browserName === 'chromium') {
            console.log('Tests are running on chrome browser...')
        }
        else {
            console.log('Tests are not running on chrome browser...')
        }

    });

    test('Handle the alert', async({page}) => {

        await page.goto(process.env.POP_UP_URL || ' ');

        page.on('dialog', async dialog => dialog.accept());

        await page.locator('id=alert').click();
    });

    // It will run after each test...
    test.afterEach( async({browserName}) => {

        if(test.info().status === 'passed') {
            console.log('Test ran successfully on '+ browserName)
        }
        else {
            console.log('Test has failed on '+ browserName)
        }
    });

    // It will run after all the test ends per worker...
    test.afterAll( async() => {
        console.log('=========== Verification has ended... ===========')
    });

});