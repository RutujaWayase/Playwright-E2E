import {test, expect} from '@playwright/test';

test('page screenshot', async ({page}) => {
    await page.goto('https://demo.opencart.com/')
    await page.waitForTimeout(20000)
    //await page.waitForSelector('//a[normalize-space()="Desktops"]')
    await page.screenshot({ path: 'tests/screenshots/'+ Date.now() + 'HomePage.png'})
});

test('Full page screenshot', async ({page}) => {
    await page.goto('https://demo.opencat.com/')
    await page.screenshot({ path: 'tests/screenshots/' + Date.now() + 'FullPage.png', fullPage:true})
});

test('Element screenshot', async ({page}) => {
    await page.goto('https://demo.opencart.com/')
    await page.locator('//h4/a[normalize-space()="MacBook"]').screenshot({ path: 'tests/screenshots/' + Date.now() + 'MacBook.png'})
});