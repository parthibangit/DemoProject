import { test } from '../../src/custom-fixtures/MergeFixtures.ts';
import { fetchLoginJsonFile } from '../../src/utils/fileUtils.ts';

fetchLoginJsonFile().forEach(value => {

    test(`User login with incorrect email as ${value.username}` , async({loginPage}) => {
       loginPage.goToLoginPage(process.env.TEST_URL || '');
       loginPage.login(value.username, value.password);
    });
})