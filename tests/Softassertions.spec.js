const {test, expect} = require('@playwright/test')

test("Soft assertions", async ({page}) => {
    await page.goto("https://www.demoblaze.com/index.html")

    //Hard assertions
   /* 
    await expect(page).toHaveTitle('STORE');
    //await expect(page).toHaveTitle('STORE123');       //negative scenario - test fails and execution stops
    await expect(page).toHaveURL("https://www.demoblaze.com/index.html");
    await expect(page.locator('.navbar-brand')).toBeVisible();

   */ 
   
    //Soft assertions
    await expect.soft(page).toHaveTitle('STORE123');
    await expect.soft(page).toHaveURL("https://www.demoblaze.com/index.html");
    await expect.soft(page.locator('.navbar-brand')).toBeVisible();

    //Even though Soft assertion fails execution continues while foehard assetion it stops

})