import { test, expect, Page, Locator } from '@playwright/test';

export class HeaderComponent {

    readonly page: Page;
    readonly companyLogo: Locator;
    readonly contactUsLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.companyLogo = this.page.getByAltText('Website for automation practice');
        this.contactUsLink = this.page.locator("//a[@href='/contact_us']");
    };

    async clickContactUsLink() {
        // If test step is declared, it will shown in html report.
        return test.step('Click contact us link on header', async () => {
            await this.contactUsLink.click();
        });
    };

    async verifyCompanyLogoPresence() {
        return test.step('Verify the company logo presence in header', async () => {
            await expect(this.companyLogo).toBeVisible();
        });
    };

}