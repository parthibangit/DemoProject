import {Page, Locator, test, expect} from '@playwright/test';
import { BasePage } from './BasePage';

export class EnrollmentPage extends BasePage {
    
    readonly newTabLink: Locator;
    readonly newWindowLink: Locator;
    readonly newTabHeader: string;
    readonly windowPageHeader: Locator;

    constructor(page: Page) {
       super(page);
       this.newTabLink = this.page.locator("//b[text()='New Tab']");
       this.newWindowLink = this.page.locator("//b[text()='New Window']");
       this.newTabHeader = '.wp-block-heading';
       this.windowPageHeader = this.page.getByText('Window Operations');
    };

    async openEnrollmentApplication(): Promise<void> {

        return test.step('Open the enrollment application', async() => {
            await this.page.goto('https://practice-automation.com/window-operations/')
        });
    };

    async verifyNavigationToNewTab(): Promise<void> {

        return test.step('Click new tab link and verify it navigated', async() => {
            const newPage = await this.navigateToChildWindow(this.newTabLink);
            await newPage.waitForLoadState('domcontentloaded');
            await expect(newPage.locator(this.newTabHeader).first()).toHaveText('Start learning');
            await this.closeTheChildWindow(newPage);
            await this.navigateBackToParentWindow();
        });
    };

    async verifywindowOperationHeaderIsDisplayed(): Promise<void> {

        return test.step('Verify window operations header is displayed', async() => {
            await expect(this.windowPageHeader.first()).toBeVisible();
        });
    };
   

};