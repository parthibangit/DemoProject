import { test as setup } from '../../src/custom-fixtures/MergeFixtures.ts';
import { fetchAuthJsonFile } from '../../src/utils/fileUtils.ts';

setup('Login to application', async({ loginPage, page }) => {

    // Peform login
    await loginPage.goToLoginPage(process.env.TEST_URL || ' ');
    await loginPage.login(process.env.EMAIL || ' ', process.env.PASSWORD || '');

    // Save the cookies and local storage state into the JSON file
    await page.context().storageState({ path: fetchAuthJsonFile()});
});