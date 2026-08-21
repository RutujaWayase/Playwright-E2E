//By default, Playwright runs tests headless.

//Headed:
npx playwright test --headed
Headless:
npx playwright test

//You can also configure:

use: {
    headless: false
}

//For debugging, I usually use headed mode or:

npx playwright test --debug

//For CI pipelines, headless execution is generally preferred.