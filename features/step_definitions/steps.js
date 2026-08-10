const {When, Then, Given} = require('@cucumber/cucumber')
const {POManager} = require('../../tests/CoursePlaywright/pageObjects/POManager'); //'../../.. /pageobjects/POManager');
 const {expect} = require('@playwright/test');
 const playwright = require('@playwright/test');

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
     const products = page.locator(".card-body");
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

Then('Verify {string} is displayed in the Cart', async (productName) => {
  // Step: Then Verify "ZARA COAT 3" is displayed in the Cart
  // From: features\Ecommerce.feature:7:1
  const cartPage = this.poManager.getCartPage();
    await cartPage.VerifyProductIsDisplayed(productName);
    await cartPage.Checkout();
});

When('Enter valid details and Place the Order', async ({}) => {
  // Step: When Enter valid details and Place the Order
  // From: features\Ecommerce.feature:8:1
  const ordersReviewPage = this.poManager.getOrdersReviewPage();
    await ordersReviewPage.searchCountryAndSelect("ind","India");
    const orderId = await ordersReviewPage.SubmitAndGetOrderId();
   console.log(orderId);
});

Then('Verify order is present in the OrderHistory', async ({}) => {
  // Step: Then Verify order is present in the OrderHistory
  // From: features\Ecommerce.feature:9:1
  await this.dashboardPage.navigateToOrders();
   const ordersHistoryPage = this.poManager.getOrdersHistoryPage();
   await ordersHistoryPage.searchOrderAndSelect(orderId);
   expect(orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();

});