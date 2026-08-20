//Playwright supports open Shadow DOM automatically with locators.

//For example:

await page.locator('my-component')
    .getByRole('button', { name: 'Submit' })
    .click();

//Or:

await page.locator('my-component button').click();

// Playwright's CSS selectors and locators can pierce open shadow roots.

// For closed Shadow DOM, normal DOM-based automation cannot directly access the internal elements, so I would look at application-specific alternatives or test the component through its public interface.