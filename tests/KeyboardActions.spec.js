const {test, expect} = require('@playwright/test')

test('Keyboard actions', async ({page}) => {
    await page.goto("https://gotranscript.com/text-compare")

    //await page.locator('[name="text1"]').fill("welcome to automation");

    await page.type('[name="text1"]', 'welcome to automation')

    //Ctrl + A ---> Select the text
    await page.keyboard.press('Control+A')
    //for MAC OS machine use Meta+A

    
    //Ctrl + C ---> Copy the text
    await page.keyboard.press('Control+C')

    //Tab ---> Tab
    await page.keyboard.down('Tab')
    await page.keyboard.up('Tab')

    //Ctrl + V  ---> Paste the text
    await page.keyboard.press('Meta+V')

    await page.waitForTimeout(5000);


})