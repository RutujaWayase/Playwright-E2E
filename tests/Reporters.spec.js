const {test, expect} = require('@playwright/test');

test('Test1', async ({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page).toHaveTitle('OrangeHRM');
})
test('Test2', async ({page}) => {
    await page.goto('https://www.opencart.com/');
    await expect(page).toHaveTitle('OpenCart - Open Source Shopping Cart Solution');
})
test('Test3', async ({page}) => {
    await page.goto('https://www.nopcommerce.com/en');
    await expect(page).toHaveTitle('Free and open-source eCommerce platform. ASP.NET Core based shopping cart. - nopCommerce');
})