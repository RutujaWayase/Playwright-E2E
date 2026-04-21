const {test, expect} = require('@playwright/test')
const { url } = require('node:inspector')

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

    //5) expect(locator).toBeChecked()   Radio/Checkbox is checked

    //radio button
    const maleRadioButton = await page.locator('#gender-male')
    await maleRadioButton.click() //select radio button
    await expect(maleRadioButton).toBeChecked()

    //checkbox
    const newsletterCheckbox = await page.locator('#Newsletter')
    await expect(newsletterCheckbox).toBeChecked()

    //6) expect(locator).toHaveAttribue()    Element has attribute
    const regButton = await page.locator('#register-button')
    await expect(regButton).toHaveAttribute('type', 'submit')

    //7) expect(locator).toHaveText()       Element matches text
    await expect(await page.locator('.page-title h1')).toHaveText('Register')

    //8) expect(locator).toContainText()    Element contains text
    await expect(await page.locator('.page-title h1')).toContainText('Reg')

    //9) expect(locator).toHaveValue(value)    Input has a value
    const emailInput = await page.locator('#Email')
    await emailInput.fill('test@demo.com');
    await expect(emailInput).toHaveValue('test@demo.com')

    //10) expect(locator).toHaveCount()    List of elements has given length
    const options = await page.locator('select[nme="DataOfBirthMonth"] option')
    await expect(options).toHaveCount(13)

/*
    For negative assertion use 'not'
    Ex: expect(page).toHaveURL()     Page has URL
        expect(page).not.toHaveURL()  Page not to have url

        expect(locator).toHaveCount()    List of elements has given length
        expect(locator).not.toHaveCount()    List of elements has not given length

*/ 

})
