const {test, expect} = require('@playwright/test')

test('Mouse hover', async ({page}) => {
    await page.goto('https://demo.opencart.com/')

    const desktops = await page.locator('//a[normalize-space()="Desktops"]')
    const mackbook = await page.locator('//a[normalize-space()="Mac (1)"]')

    //mouse hover 
    await desktops.hover()
    await mackbook.hover()

    await page.waitForTimeout(5000)

})