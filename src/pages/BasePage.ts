import {Page, Locator} from '@playwright/test';

export class BasePage {

    protected page: Page;

    constructor(page: Page) {
       this.page = page;
    }

    async acceptAlert(): Promise<void> {
       this.page.on('dialog', async dialog => dialog.accept());
    };

    async dismissAlert(): Promise<void> {
       this.page.on('dialog', async dialog => dialog.dismiss());
    };

    async navigateToChildWindow(clickElementLocator: Locator): Promise<Page> {
        
        const [newPage] = await Promise.all([
           this.page.waitForEvent('popup'),
           clickElementLocator.click(),
        ]);
        return newPage;
    };

    async navigateBackToParentWindow(): Promise<void> {
         await this.page.bringToFront();
    };

    async closeTheChildWindow(page: Page): Promise<void> {
        await page.close();
    };


};
