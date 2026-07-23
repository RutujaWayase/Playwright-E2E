const {test, expect, request} = require('@playwright/test');
const loginPayLoad = {userEmail: "anshika@gmail.com", userPassword: "Iamking@000"};

test.beforeAll(async() => {
    const apiContext = await request.newContext();
    const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
        {
            data: loginPayLoad
        }
    ) //200, 201,
    expect(loginPayLoad.ok()).toBeTruthy();
    const loginResponseJson = loginResponse.json();
    const token = loginResponseJson.token;

});

test.beforeEach( () => 
{

})

//test 1, test2, test3

test('Client App login', async ({page}) => {

    const productName = 'ZARA COAT 3';
    const products = page.locator(".card-body");
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.locator("#userEmail").fill("anshika@gmail.com");
    await page.locator("#userPassword").fill("Iamking@000");
    //await page.locator("#login").click();
    await page.locator("[value='Login']").click();
   // Approach 1: Wait for Network tab =>
   await page.waitForLoadState('networkidle');
   //Approach 2: Directly applying wait to an element
   await page.locator(".card-body b").first().waitFor();
    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles);
    const count = await products.count();
    for(let i=0; i<count; ++i){
        if(await products.nth(i).locator("b").textContent() === productName)
        {
            //add to cart
            await products.nth(i).locator("text= Add To Cart").click();
            break;
        }
    }
    //await page.pause();
    await page.locator("[routerlink*='cart']").click();
    await page.locator("div li").first().waitFor();
    const bool = await page.locator("h3:has-text('Zara Coat 3')").isVisible();
    expect(bool).toBeTruthy();
    await page.locator("text=Checkout").click();

    //await page.locator("[placeholder*='Country']").fill("ind", {delay:100});

    //use pressSequentially() instead of fill()/type()

    await page.locator("[placeholder*='Country']").pressSequentially("ind", {delay:100});

    const dropdown = page.locator(".ta-results");
    await dropdown.waitFor();
    const optionsCount = await dropdown.locator("button").count();
    for(let i=0; i < optionsCount; ++i)
    {
        const text = await dropdown.locator("button").nth(i).textContent();
        if(text === " India")
            //if(text.trim === "India")
            //if(text.includes("India")) ==> but other options also includes "India"
        {
            await dropdown.locator("button").nth(i).click();
            break;
        }
    }
    await page.pause();

})

