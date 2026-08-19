//For a native HTML <select> element, I use selectOption().

await page.getByLabel('Country')
    .selectOption('India');

Or:

await page.locator('#country')
    .selectOption({ label: 'India' });

//For a custom dropdown built using <div> elements, I treat it like a normal UI component:

await page.getByRole('combobox').click();


await page.getByRole('option', {
    name: 'India'
}).click();

//The important distinction is between native select elements and custom dropdown components.