import { test } from '../../src/custom-fixtures/MergeFixtures.ts';
import { fetchAuthJsonFile } from '../../src/utils/fileUtils.ts';

// each test in this file will use this configuration 
test.use({
    storageState: fetchAuthJsonFile()
});

test.beforeAll( async({loginPage, page}) => {
    
    // Peform login
    await loginPage.goToLoginPage(process.env.TEST_URL || ' ');
    await loginPage.login(process.env.EMAIL!, process.env.PASSWORD!);

    // Save the cookies and local storage state into the JSON file
    await page.context().storageState({ path: fetchAuthJsonFile()});
});

test('Verify navigation of new tab and return back to parent window', async({ enrollmentPage, sqlServer, postgres }) => {

    // Pre-condition of the test - Test data preparation
    let query = "SELECT * from table_name where name='Parthiban'"
    const dbValues: any[] = await sqlServer.getRowsValues(query);
    let value = dbValues[0].userId;

    const userNames: any[] = await sqlServer.getColumnValues(query, 'userName');

    // Action of the test
    await enrollmentPage.openEnrollmentApplication();

    // verify out come previous step
    await enrollmentPage.verifyNavigationToNewTab();
    await enrollmentPage.verifywindowOperationHeaderIsDisplayed();
});