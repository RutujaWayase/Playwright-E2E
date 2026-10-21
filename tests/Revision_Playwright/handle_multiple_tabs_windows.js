// handle multiple tabs/windows 

//use the context.waitForEvent('page') method to handle a new tab or window opened by an action.

const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.getByRole('link', {
        name: 'Open New Tab'
    }).click()
]);
await newPage.waitForLoadState();
console.log(await newPage.title());

//What if a new tab opens from a popup

//For a popup opened by a specific page, I use page.waitForEvent('popup') instead of the browser context's page event.

const[popup] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('button', {
        name: 'Open Popup'
    }).click()
]);

await popup.waitForLoadState();