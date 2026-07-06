const {test, expect} = require('@playwright/test')

test('Browser Context Playwright test', async ({browser}) => {
    //chrome - plugins/cookies
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    // css type, fill
    await page.locator("#username").fill("rahulshettyacamdemy");
    await page.locator("[type='password']").fill("Learning@830$3mK2");
    await page.locator("#signInBtn").click();
});

test('Page Playwright test', async ({page}) => {
    await page.goto("https://google.com");
    // get title - assertion
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");
})