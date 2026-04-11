const {test, expect} = require('@playwright/test');

test('LocateMultipleElements', async({page}) => {
    await page.goto('https://www.demoblaze.com/index.html')

    await page.click('id=login2')

    //provide username - CSS
    //awit page.locator('#loginusername').fill('john')
    await page.fill('#loginusername','pavanol')
    //await page.type('#loginusername', 'pavanol')

    //provide password - CSS
    await page.fill("input[id='loginpassword']", 'test@123')

    //click on login button - XPath
    await page.click("//button[normalize-space()='Log in']")


    /*
    const links = await page.$$('a');

    for(const link of links)
    {
        const linktext = await link.textContent();
        console.log(linktext);

    }
    */
   
    //Locate all the products displayed on home page
    page.waitForSelector("//div[@id='tbodyid']//div//h4/a");

    const products = await page.$$("//div[@id='tbodyid']//div//h4/a")

    for(const product of products)
    {
        const prodName = await product.textContent();
        console.log(prodName);
    }

})