import { test as base } from '@playwright/test';

// Extend the test with login functionality
export const test = base.extend({
    // Define authenticated page for tests requiring login
    authenticatedPage: async ({ page }, use) => {
        // Navigate to login page
        await page.goto('http://localhost:3000/login');

        // Login with test credentials
        await page.fill('input[type="text"]', 'testuser');
        await page.fill('input[type="password"]', 'password123');
        await page.click('button[type="submit"]');

        // Wait for navigation to complete
        await page.waitForURL('http://localhost:3000/');

        // Use the authenticated page
        await use(page);
    },
});

export { expect } from '@playwright/test';
