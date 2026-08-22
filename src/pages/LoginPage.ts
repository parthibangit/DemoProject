import { test, expect, Page, Locator } from '@playwright/test';

export class LoginPage {

    readonly page: Page;
    readonly emailAddress: Locator
    readonly password: Locator
    readonly loginButton: Locator

    constructor(page: Page) {
        this.page = page;
        this.emailAddress = this.page.locator("//input[@data-qa='login-email']");
        this.password = this.page.locator("//input[@data-qa='login-password']");
        this.loginButton = this.page.locator("//button[@data-qa='login-button']");
    }

    async goToLoginPage(url: string) {
        await this.page.goto(url);
    }

    async login(email: string, password: string) {
        // If test step is declared, it will shown in html report.
        return test.step('Log into application by providing login credentials', async () => {
            await this.emailAddress.fill(email);
            await this.password.fill(password);
            await this.loginButton.click();
        });
    }

    async verifyLogoutSuccess() {
        await expect(this.loginButton, 'Login button is not visible').toBeVisible();
        await expect(this.page).toHaveTitle('Automation Exercise - Signup / Login')
    }

}