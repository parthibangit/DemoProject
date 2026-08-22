import { test, expect } from '../../src/custom-fixtures/MergeFixtures.ts';

test.beforeEach(async ({ loginPage }) => {
    await loginPage.goToLoginPage(process.env.TEST_URL || ' ');
    // await loginPage.login(process.env.EMAIL || ' ', process.env.PASSWORD || '');
});

test('Login into application and verify success', { tag: '@pageFixture' }, async ({ homePage, successMsgTestData }) => {
    await homePage.verifyUserIsOnHomePage();
    expect(successMsgTestData.successMessage.login).toEqual('User has logged in successfully!!');
    await homePage.headerComponent.verifyCompanyLogoPresence();
    console.log('Login success message: ========= ' + successMsgTestData.successMessage.login + ' =============')
});

test('Logout from application and verify success', { tag: '@pageFixture' }, async ({ loginPage, homePage, successMsgTestData }) => {
    await homePage.verifyUserIsOnHomePage();
    await homePage.logout();
    await loginPage.verifyLogoutSuccess();
    console.log('Logout success message: ======== ' + successMsgTestData.successMessage.logout + ' =============')
});

test('Click contact us link on home page header and verify contact us section visibility', { tag: '@pageFixture' }, async ({ homePage }) => {
    // test.setTimeout(5000);
    await homePage.headerComponent.clickContactUsLink();
    await homePage.verifyContactUsSectionIsDisplayed();
});
