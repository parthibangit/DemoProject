import { test, expect, Page, Locator } from '@playwright/test'
import { HeaderComponent } from './HeaderComponent.ts';

export class HomePage {

    readonly page: Page;
    readonly headerComponent: HeaderComponent;
    readonly logoutButton: Locator;
    readonly testCasesTitle: Locator;
    readonly contactUsSection: Locator;

    constructor(page: Page) {
        this.page = page;
        this.headerComponent = new HeaderComponent(page);
        this.logoutButton = this.page.locator('.fa-lock');
        this.testCasesTitle = this.page.locator('.title > b');
        this.contactUsSection = this.page.locator('.contact-form> .title');
    }

    async verifyUserIsOnHomePage() {
        // If test step is declared, it will shown in html report.
        return test.step('Verify user is on home page', async () => {
            await expect(this.logoutButton, 'Logout button is not visible').toBeVisible();
            await expect(this.page).toHaveTitle('Automation Exercise');
        });
    }

    async logout() {
        await this.logoutButton.click();
    }

    async verifyTestCaseTitleIsDisplayed() {
        // If test step is declared, it will shown in html report.
        return test.step('Verify the test case title visibility in test cases page', async () => {
            await expect(this.testCasesTitle).toBeVisible();
        });
    }

    async verifyContactUsSectionIsDisplayed() {
        // If test step is declared, it will shown in html report.
        return test.step('Verify the contact us title visibility in contact us page', async () => {
            await expect(this.contactUsSection).toBeVisible();
        });
    }

}