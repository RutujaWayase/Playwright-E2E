//For a real project, I don't want every test to perform login repeatedly.

// I usually create an authenticated browser state once and reuse it.

// Example:

import { test as setup } from '@playwright/test';


setup('authenticate', async ({ page }) => {


    await page.goto('https://example.com/login');


    await page.getByLabel('Username')
        .fill('testuser');


    await page.getByLabel('Password')
        .fill('password');


    await page.getByRole('button', {
        name: 'Login'
    }).click();


    await page.context().storageState({
        path: 'playwright/.auth/user.json'
    });
});

// Then in configuration:

use: {
    storageState: 'playwright/.auth/user.json'
}

// This allows subsequent tests to start with an authenticated session.

// Why I prefer this approach

// It:

// Reduces execution time.
// Avoids repeated login operations.
// Makes tests independent of the login UI.
// Works well in CI/CD.
// Can support different users/roles using different storage states.

// For example:

//.auth/
   admin.json
   user.json
   manager.json