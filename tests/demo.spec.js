// import {test, expect, Page} from '@playwright/test';
// test.beforeEach(async({page}) => {
//     await page.goto('https://www.browserstack.com/');
// });
// test.describe('Demo Test', () => {
//     test('verify Login Error Message', async({page}) => {
//         await page.waitForSelector('text=Sign in', {state:'visible'});
//         await page.locator('text=Sign in').first().click();
//         await page.waitForSelector('#user_email_login');
//         await page.locator('#user_email_login').type('email1@example.com');
//         await page.locator('#user_password').type('examplepassword');
//         await page.locator('#user_submit').click();
        
//     })
// })

import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  // Go to the starting URL before each test
  await page.goto('https://www.browserstack.com/');
});

test.describe('Demo Test', () => {
  test('verify Login Error Message', async ({ page }) => {
    // Click Sign in using built-in locators
    await page.getByRole('link', { name: 'Sign in' }).first().click();
    
    // Fill credentials using .fill() instead of .type()
    await page.locator('#user_email_login').fill('email1@example.com');
    await page.locator('#user_password').fill('examplepassword');
    
    // Crucial: Must await the click action
    await page.locator('#user_submit').click();

    // Verify error message appears using web-first assertions
    const errorMessage = page.locator('.error-msg-container'); // Adjust selector as needed
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toContainText('Invalid password');
  });
});
