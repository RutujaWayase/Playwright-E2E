// use the context.waitForEvent('page') or page.waitForEvent('popup') pattern.

// For a new tab:

const newPagePromise = context.waitForEvent('page');


await page.getByText('Open Report').click();


const newPage = await newPagePromise;


await newPage.waitForLoadState();


console.log(await newPage.title());

//For a popup:

const popupPromise = page.waitForEvent('popup');


await page.getByRole('button', {
    name: 'Open'
}).click();


const popup = await popupPromise;


await popup.waitForLoadState();

//The important point is that I wait for the event before performing the action so that I don't miss the new page event.