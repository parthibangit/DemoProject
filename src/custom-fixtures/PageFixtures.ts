import { test as base } from '@playwright/test';
// import { LoginPage } from '../pages/LoginPage.ts';
// import { HomePage } from '../pages/HomePage.ts';
import { LoginPage, HomePage, EnrollmentPage } from '../pages/IndexPages';

type myPages = {

  loginPage: LoginPage;
  homePage: HomePage;
  enrollmentPage: EnrollmentPage;
}

export const pageClasses = base.extend<myPages>({

  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },

  homePage: async ({ page }, use: (value: HomePage) => Promise<void>) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },

  enrollmentPage: async({ page }, use: (value: EnrollmentPage) => Promise<void>) => {
    const enrollmentPage = new EnrollmentPage(page);
    await use(enrollmentPage);
  },

});