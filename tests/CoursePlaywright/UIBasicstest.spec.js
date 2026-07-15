const {test, expect} = require('@playwright/test')

test('Browser Context Playwright test', async ({browser}) => {
    //chrome - plugins/cookies
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());

    // css type, fill

    // positive scenario
    // await page.locator("#username").fill("rahulshettyacamdemy");
    // await page.locator("[type='password']").fill("Learning@830$3mK2");
    // await page.locator("#signInBtn").click();

    // negative scenario
    await page.locator("#username").fill("rahulshetty");
    await page.locator("[type='password']").fill("learning");
    await page.locator("#signInBtn").click();
    //webdriverwait
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText('Incorrect');
});

test('Page Playwright test', async ({page}) => {
    await page.goto("https://google.com");
    // get title - assertion
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");
})



test.only('Browser Context - Validating Error login', async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const userName = page.locator('#username');
    const password = page.locator('#password');
    const signIn = page.locator('#signInBtn');
    const cardTitles = page.locator(".card-body a");
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title()); 

    //css 
    await userName.fill("rahulshetty");
    await page.locator("[type='password']").fill("learning");
    await signIn.click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText('Incorrect');

    //type - fill 
    await userName.fill("");
    await userName.fill("rahulshettyacademy");
    await password.fill("Learning@830$3mK2");
    await signIn.click();
    //console.log(await page.locator(".card-body a").first().textContent());
    //console.log(await page.locator( ).nth(1).textContent());
    const allTiltles = await cardTitles.allTextContents();

    console.log(allTiltles);

})