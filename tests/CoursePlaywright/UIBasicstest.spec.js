const {test, expect} = require('@playwright/test');
const { text } = require('node:stream/consumers');

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



test('Browser Context - Validating Error login', async ({browser}) => {
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

test('UI Controls', async ({page}) => {
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const userName = page.locator('#username');
    const password = page.locator('#password');
    const signIn = page.locator('#signInBtn');
    const documentlink = page.locator("[href*='documents-request']");
    const dropdown = page.locator("select.form-control");
    await dropdown.selectOption("Consultant");
    await page.locator(".radiotextsty").last().click();
    await page.locator("#okayBtn").click();
    console.log(await page.locator(".radiotextsty").last().isChecked());
    await expect(page.locator(".radiotextsty").last()).toBeChecked();
    await page.locator("#terms").click();
    await expect(page.locator("#terms")).toBeChecked();
    await page.locator("#terms").uncheck();
    expect(await page.locator("#terms").isChecked()).toBeFalsy();
    await expect(documentlink).toHaveAttribute("class", "blinkingText");

    //assertion

    //await page.pause();
})

test('@Child windows handle', async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const userName = page.locator('#username');
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentlink = page.locator("[href*='documents-request']");

    //Javascript array
    const [newPage] = await Promise.all([
        context.waitForEvent('page'), //listen for any new page pending, rejected, fulfilled
        documentlink.click(), //new page is opened
    ])
    
    const text = await newPage.locator("//p[@class='im-para red']").textContent();
    console.log(text);
    const arrayText = text.split("@");
    const domain = arrayText[1].split(" ")[0];
    console.log(domain);
    await page.locator("#username").fill(domain);
    //await page.pause();
    console.log(await page.locator("#username").inputValue());

})