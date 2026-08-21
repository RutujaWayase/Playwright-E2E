//Run a specific file:

npx playwright test tests/login.spec.js

//Run a specific test by title:

npx playwright test -g "valid login"

//Run a specific project:

npx playwright test --project=chromium

//Run headed:

npx playwright test tests/login.spec.js --headed

//Run in debug mode:

npx playwright test tests/login.spec.js --debug

//Run a specific line:

npx playwright test tests/login.spec.js:25