import { test, expect } from '@playwright/test';


// localStorage: Stays saved even if you close the browser or open a new tab.
// sessionStorage: Deletes automatically when you close the tab or window.

test('set local storage item', async ({ page }) => {

    // Add script to run before any page scripts
    await page.addInitScript(() => {
        localStorage.setItem('theme', 'dark');
        sessionStorage.setItem('userSession', 'active123');
    });

    // Go to your app
    await page.goto('https://example.com');
});

test('read and write storage during test', async ({ page }) => {

    await page.goto('https://example.com');

    // Write to localStorage while page is open
    await page.evaluate(() => {
        localStorage.setItem('token', 'abc-123-xyz');
    });

    // Read from localStorage
    const token = await page.evaluate(() => {
        return localStorage.getItem('token');
    });

    expect(token).toBe('abc-123-xyz');
});