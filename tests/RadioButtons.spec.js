const {test, expect} = require('@playwright/test')

test('handle radio button', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    //Radio button
    await page.locator("//input[@value='female']").check(); //female
    //await page.check("//input[@value='female']");
    await page.getByLabel("Female").check();
    expect(await page.getByLabel("Female")).toBeChecked();
    await expect(await page.locator("//input[@value='female']")).toBeChecked();
    await expect(await page.locator("//input[@value='female']").isChecked()).toBeTruthy();//female

    await expect(await page.locator("//input[@value='male']").isChecked()).toBeFalsy();//male


    await page.waitForTimeout(5000); //pausing code
})