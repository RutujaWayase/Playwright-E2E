const {test, expect} = require('@playwright/test');

test.only('Browser contxt-validation error login', async ({page}) => {
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.locator("#userEmail").fill("anshika@gmail.com");
    await page.locator("#userPassword").fill("Iamking@000");
    //await page.locator("#login").click();
    await page.locator("[value='Login']").click();
   // Approach 1: Wait for Network tab =>
   // await page.waitForLoadState('networkidle');
   //Approach 2: Directly applying wait to an element
   await page.locator(".card-body b").first().waitFor();
    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles);

})