const {When, Then, Given} = require('@cucumber/cucumber')
const {POManager} = require('../../tests/CoursePlaywright/pageObjects/POManager'); //'../../.. /pageobjects/POManager');
 const {test, expect, playwright} = require('@playwright/test');

Given('a login to Ecommerce application with {username} and {password}', async function(username,password) => {
  // Step: Given a login to Ecommerce application with "anshika@gmail.com" and "Iamking@000"
  // From: features\Ecommerce.feature:5:1
  const browser = await playwright.chromium.launch();
  const context = await browser.newContext();
    const page = await context.newPage();

  const poManager = new POManager(page);
    //js file- Login js, DashboardPage
     const products = page.locator(".card-body");
     const loginPage = poManager.getLoginPage();
     await loginPage.goTo();
     await loginPage.validLogin(data.username,data.password);
});

When('Add {string} to Cart', async function(string) => {
  // Step: When Add "ZARA COAT 3" to Cart
  // From: features\Ecommerce.feature:6:1
  const dashboardPage = poManager.getDashboardPage();
     await dashboardPage.searchProductAddCart(data.productName);
     await dashboardPage.navigateToCart();
});

Then('Verify {string} is displayed in the Cart', async ({}, arg) => {
  // Step: Then Verify "ZARA COAT 3" is displayed in the Cart
  // From: features\Ecommerce.feature:7:1
  const cartPage = poManager.getCartPage();
    await cartPage.VerifyProductIsDisplayed(data.productName);
    await cartPage.Checkout();
});

When('Enter valid details and Place the Order', async ({}) => {
  // Step: When Enter valid details and Place the Order
  // From: features\Ecommerce.feature:8:1
  const ordersReviewPage = poManager.getOrdersReviewPage();
    await ordersReviewPage.searchCountryAndSelect("ind","India");
    const orderId = await ordersReviewPage.SubmitAndGetOrderId();
   console.log(orderId);
});

Then('Verify order is present in the OrderHistory', async ({}) => {
  // Step: Then Verify order is present in the OrderHistory
  // From: features\Ecommerce.feature:9:1
  await dashboardPage.navigateToOrders();
   const ordersHistoryPage = poManager.getOrdersHistoryPage();
   await ordersHistoryPage.searchOrderAndSelect(orderId);
   expect(orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();

});