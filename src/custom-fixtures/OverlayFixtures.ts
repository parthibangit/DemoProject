import { test as base } from '@playwright/test'

type OverLayFixture = {
    randomAdsHandler: void
};

export const overlayFixtures = base.extend<OverLayFixture>({

    randomAdsHandler: [
        async ({page}, use) => {
            const closeButton = page.locator('#popmake-1272 button');
            await page.addLocatorHandler(
                closeButton,
                async () => {
                    await closeButton.click();
                }
            );
            await use();
        },
        { auto: true }
    ]
});