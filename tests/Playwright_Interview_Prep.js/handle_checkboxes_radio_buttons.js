//Checkbox
await page.getByLabel('Remember Me').check();

//Verify:

await expect(
    page.getByLabel('Remember Me')
).toBeChecked();

//Uncheck:

await page.getByLabel('Remember Me').uncheck();
//Radio button
await page.getByLabel('Female').check();

//Verify:

await expect(
    page.getByLabel('Female')
).toBeChecked();

//Playwright automatically waits for the element to become actionable.