const {When, Then, Given} = require('@cucumber/cucumber')
const {POManager} = require('../../tests/CoursePlaywright/pageObjects/POManager'); //'../../.. /pageobjects/POManager');
 const {expect} = require('@playwright/test');
 const playwright = require('@playwright/test');
const { sign } = require('node:crypto');

Given('a login to Ecommerce application with {string} and {string}', {timeout: 100*1000}, async function(username,password) {
  // Step: Given a login to Ecommerce application with "anshika@gmail.com" and "Iamking@000"
  // From: features\Ecommerce.feature:5:1
  const browser = await playwright.chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
    const page = await context.newPage();

  this.poManager = new POManager(page);
    //js file- Login js, DashboardPage
     const products = this.page.locator(".card-body");
     const loginPage = this.poManager.getLoginPage();
     await loginPage.goTo();
     await loginPage.validLogin(username,password);
});

When('Add {string} to Cart', async function(productName) {
  // Step: When Add "ZARA COAT 3" to Cart
  // From: features\Ecommerce.feature:6:1
  this.dashboardPage = this.poManager.getDashboardPage();
     await this.dashboardPage.searchProductAddCart(productName);
     await this.dashboardPage.navigateToCart();
});

Then('Verify {string} is displayed in the Cart', async function(productName) {
  // Step: Then Verify "ZARA COAT 3" is displayed in the Cart
  // From: features\Ecommerce.feature:7:1
  const cartPage = this.poManager.getCartPage();
    await cartPage.VerifyProductIsDisplayed(productName);
    await cartPage.Checkout();
});

When('Enter valid details and Place the Order', async function({}) {
  // Step: When Enter valid details and Place the Order
  // From: features\Ecommerce.feature:8:1
  const ordersReviewPage = this.poManager.getOrdersReviewPage();
    await ordersReviewPage.searchCountryAndSelect("ind","India");
    const orderId = await ordersReviewPage.SubmitAndGetOrderId();
   console.log(orderId);
});

Then('Verify order is present in the OrderHistory', async function({})  {
  // Step: Then Verify order is present in the OrderHistory
  // From: features\Ecommerce.feature:9:1
  await this.dashboardPage.navigateToOrders();
   const ordersHistoryPage = this.poManager.getOrdersHistoryPage();
   await ordersHistoryPage.searchOrderAndSelect(orderId);
   expect(orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();

});

/*
 Given('a login to Ecommerce2 application with {string} and {string}', async function (username, password) {
           // Write code here that turns the phrase above into concrete actions
           const userName = this.page.locator('#username');
           const signIn = this.page.locator("#signInBtn");
           await this.page.goto("https://rahulshettyacademy.com/loginpagePractise/");
           console.log(await this.page.title());
           //css
           await userName.type(username);
           await this.page.locator("[type='password']").type(password);
           await signIn.click();
         });
*/

Given(
    'a login to Ecommerce2 application with {string} and {string}',
    async function (username, password) {

        const userName = this.page.locator('#username');
        const passwordField = this.page.locator("[type='password']");
        const signIn = this.page.locator('#signInBtn');

        await this.page.goto(
            'https://rahulshettyacademy.com/loginpagePractise/'
        );

        console.log(await this.page.title());

        await userName.fill(username);
        await passwordField.fill(password);

        await signIn.click();
    }
);

/*
 Then('Verify Error message is displayed', async function () {
           // Write code here that turns the phrase above into concrete actions
           console.log(await this.page.locator("[style*='block']").textContent());
           await expect(this.page.locator("[style*='block']")).toContainText('Incorrect')
         });         
*/

Then(
    'Verify Error message is displayed',
    { timeout: 100 * 1000 },
    async function () {

        const errorMessage = this.page.locator("[style*='block']");

        await expect(errorMessage).toContainText('Incorrect', {
            timeout: 10000
        });

        console.log(
            'Error message:',
            await errorMessage.textContent()
        );
    }
);

