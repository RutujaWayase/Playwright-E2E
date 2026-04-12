# Playwright-E2E
Playwright E2E

Playwright installation:
https://playwright.dev/docs/intro
node js
vs code

Install playwright:
1) Use command 'npm init playwright@latest'
2) Check playwright version installed using command: npm playwright -v
3) Choose language to use playwright Typescript/Javascript => By default its selected as TypeScript
4) Choose JS
5) Installation
    <img width="962" height="676" alt="image" src="https://github.com/user-attachments/assets/e9a69828-6e5e-446c-88a1-8d60c3f846a8" />
    
6) Usefull Commands:
   <img width="697" height="616" alt="image" src="https://github.com/user-attachments/assets/1a548737-ff6d-4757-a96b-f334575d3ea7" />
   
7) Project created:
   <img width="357" height="527" alt="image" src="https://github.com/user-attachments/assets/8a32d51c-f093-446f-b43b-fd2d1f70c08c" />

8) Testfile example:
    <img width="900" height="522" alt="image" src="https://github.com/user-attachments/assets/d9ba0be3-e92d-4ace-8c3e-be599da3b944" />

9) Files:    package.json => node project management file
   playwright.config.js => playwright configuration
   tests => we can all the playwright tests

  npm playwright -v => return installed version of playwright
  
  Playwright can be istalled from vscode plugin
10)  Command to run playwright tests: "npx playwright test"
 <img width="1212" height="940" alt="image" src="https://github.com/user-attachments/assets/7547eca1-e88d-4eba-bc55-a6e5ac00c11f" />

11) By default tests are executed in headless mode. => Default command => npx playwright test
12) To executed tests in headed mode => Use command => npx playwright test --headed <img width="1291" height="972" alt="image" src="https://github.com/user-attachments/assets/a15e09d3-1691-423a-ac11-997d8a0c70b2" />

13) Report => <img width="732" height="118" alt="image" src="https://github.com/user-attachments/assets/52df8908-d8f5-4ec7-a09a-7a3e22e44410" />
   <img width="1695" height="791" alt="image" src="https://github.com/user-attachments/assets/3e832b2d-0a03-4225-b30e-8470550e8314" />

14) Run playwright => npx playwright test (Headless Mode - Default) ; npx playwright test --headed (Headed Mode) ; npx playwright show-report (HTML Report)

15) To run specific test use command => npx playwright test HomePageTest.spec.js

16) Example =>            const {test, expect} = require ('@playwright/test');

test ('Home Page', async({page}) => {
    await page.goto('https://www.demoblaze.com/index.html');

    const pageTitle = page.title();
    console.log('Page title is:', pageTitle);

    await expect(page).toHaveTitle('STORE');

    const pageURL = page.url();
    console.log('Page URL is:', pageURL);

    await expect(page).toHaveURL('https://www.demoblaze.com/index.html');
    await page.close();
})

17) To test on specific browser for example chrome use command =>npx playwright test HomePageTest.spec.js --project=chromium

18) How to Create and Run Playwright Tests:

npx playwright test => runs all tests on all browsers in headless mode

npx playwright test MyTest.spec.js => runs a specific test file

npx playwright test MyTest.spec.js --project=chromium => runs on specific browser

npx playwright test MyTest.spec.js --project=chromium --headed => runs in headed mode

npx playwright test Mytest.spec.js --project=chromium --headed --debug => runs in debug mode


19) **Locating Elements in Playwright**

property
css
xpath

Locate single element =>

link/button =>

await page.locator('locator').click()
await page.click('locator');

inputbox =>

await page.locator('locator').fill('value')
await page.locator('locator').type('value')

await page.fill('locator', 'value')
await page.type('locator', 'value') 

Locate multiple web elements =>

const elements = await page.$$(locator)

![alt text](image.png)

Multiple Locators => 
![alt text](image-1.png)

20) **Built - in locators** =>

page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element besed on its data - testid attribute.

URL = https://playwright.dev/docs/locators

21) **Test generator: Codegn** => automatically generate test and locators.

npx playwright codegen -o tests/mytest.spec.js

npx playwright codegen --target javascript

npx playwright codegen --browser chromium

npx playwright codegen --device "iPhone 13"

List of devices supported => use command for ex: npx playwright codegen --device "iPhone12"
![alt text](image-2.png)
 
Viewport =>

npx playwright codegen –viewport-size “1280, 720”   --> for x & y coordinates

URL: https://playwright.dev/docs/codegen 

  
11) 

