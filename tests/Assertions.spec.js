const {test, expect} = require('@playwright/test')

test('AssertionsTest', async ({page}) => {
    //open an url
    await page.goto('https://demo.nopcommerce.com/register')

    //1) expect(page).toHaveURL()     Page has URL
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

    //2) expect(page).toHaveTitle()   Page has title
    await expect(page).toHaveTitle('nopCommerce demo store. Register')

    //3) expect(locator).toBeVIsible()   Element is visible
    const logoElement = await page.locator('.header-logo')
    await expect(logoElement).toBeVisible()

    //4) expect(locator).toBeEnabled()   Control is enabled
    const searchStoreBox = await page.locator('#small-searchterms')
    await expect(searchStoreBox).toBeEnabled()



})
