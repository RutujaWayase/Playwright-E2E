const { test: base } = require('@playwright/test');

const test = base.extend({
    loggedInPage: async ({ browser }, use) => {
        const context = await browser.newContext();
        const page = await context.newPage();

        await page.goto('/login');
        // login logic

        await use(page);

        await context.close();
    }
});

module.exports = { test };


//Then use =>

const { test } = require('../fixtures/test');

test('Dashboard test', async ({ loggedInPage }) => {
    await loggedInPage.goto('/dashboard');
});