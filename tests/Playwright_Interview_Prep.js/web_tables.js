// I prefer locating the required row based on its unique data rather than using row indexes.

// Example:

const row = page.locator('tr').filter({
    hasText: 'Rutuja'
});


await row.getByRole('button', {
    name: 'Edit'
}).click();

//For a table:

const rows = page.locator('table tbody tr');


const count = await rows.count();


for (let i = 0; i < count; i++) {
    const text = await rows.nth(i).innerText();


    if (text.includes('Rutuja')) {
        await rows.nth(i)
            .getByRole('button', { name: 'Edit' })
            .click();


        break;
    }
}

//However, if the table has semantic structure, I prefer using locators such as:

page.getByRole('row').filter({
    hasText: 'Rutuja'
});

//This is generally more maintainable.