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

  
11) Assertions =>
Hard nd Soft Assertions

12) Actions =>
Checkboxes and Radio Buttons =>
Using locator.setChecked() is the easiest way to check and uncheck a checkbox or a radio button. This method can be used with input[type=checkbox], input[type=radio] and [role=checkbox] elements
URL: https://playwright.dev/docs/input

await page.locator("//input[@value='female']").check(); //female
    //await page.check("//input[@value='female']");
    await page.getByLabel("Female").check();
    expect(await page.getByLabel("Female")).toBeChecked();
    await expect(await page.locator("//input[@value='female']")).toBeChecked();
    await expect(await page.locator("//input[@value='female']").isChecked()).toBeTruthy();//female

    await expect(await page.locator("//input[@value='male']").isChecked()).toBeFalsy();//male

13) Keyboard => https://playwright.dev/docs/api/class-keyboard

An example of pressing uppercase A

await page.keyboard.press('Shift+KeyA');
// or
await page.keyboard.press('Shift+A');

An example to trigger select-all with the keyboard

await page.keyboard.press('ControlOrMeta+A');

Use Control for Windows machine OS
Use Meta for MAC machine OS


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

14) Playwright Hooks:

beforeEach: This hook is executed before each individual test.
afterEach: This hook is executed after ecah individual test.

beforeAll: This hook is executed once before any of the tests start running.
afterAll: This hook is executed once after all the tests have been run.

![alt text](image-3.png)

15) Screenshot:
Timestamp: Date.now

For ex:
await page.screenshot({ path: 'tests/screenshots/'+ Date.now() + 'HomePage.png'})

await page.screenshot({ path: 'tests/screenshots/' + Date.now() + 'FullPage.png', fullPage:true})

await page.locator('//h4/a[normalize-space()="MacBook"]').screenshot({ path: 'tests/screenshots/' + Date.now() + 'MacBook.png'})

add screenshot: 'on' in playwright.conf file to capture screenshot of all the tests

1) use .screenshot() => to take screenshot for file level/locator
2) add screenshot: on in playwright.conf file under use{} section to get screenshot of all the test runs by default in reports. And use command npx playwright show-report

16) Video: and in playwright.config file
video: "on" / video: "retain-on-failure",

17) Trace: and in playwright.config file
trace: 'on-first-retry', / trace: 'retain-on-failure',

Refer: https://playwright.dev/docs/trace-viewer

Command to trace file => npx playwright show-trace path/to/trace.zip


18) Tags:
@smoke for critical functionality tests

@regression for tests that ensure new changes don’t break existing functionality

@critical for high-priority tests that must pass to ensure the application is stable

commands=> grep will include while --grep-invert will exclude.

npx playwright test tests/Tags.spec.js --project chromium --headed --grep @sanity

npx playwright test tests/Tags.spec.js --project chromium --grep @sanity --grep-invert @reg  

19) Annotations:

test.skip() marks the test as irrelevant. Playwright does not run such a test. Use this annotation when the test is not applicable in some configuration.

test.fail() marks the test as failing. Playwright will run this test and ensure it does indeed fail. If the test does not fail, Playwright will complain.

test.fixme() marks the test as failing. Playwright will not run this test, as opposed to the fail annotation. Use fixme when running the test is slow or crashes.

test.slow() marks the test as slow and triples the test timeout.

Refer: https://playwright.dev/docs/test-annotations 


20) Page Object Models:

![alt text](image-4.png)

21) Reporters: https://playwright.dev/docs/test-reporters

reporter: 'html', //'list', //'line',

 reporter: [['json', {outputFile: 'results.json'}]],

 reporter: [['junit', {outputFile: 'results.xml'}]],

  OR for multiple reporters =>
  reporter: [['list'],
  ['html'],
  ['junit', {outputFile: 'results.xml'}],
  ['json', {outputFile: 'results.json'}]
  ],

Refer => https://playwright.dev/docs/api/class-reporter

