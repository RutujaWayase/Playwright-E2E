//Upload file

//use setInputFiles().

await page.locator('input[type="file"]')
    .setInputFiles('./files/test.pdf');

//For multiple files:

await page.locator('input[type="file"]')
    .setInputFiles([
        './files/test1.pdf',
        './files/test2.pdf'
    ]);

//If the application opens a file chooser:

const fileChooserPromise = page.waitForEvent('filechooser');


await page.getByRole('button', {
    name: 'Upload'
}).click();


const fileChooser = await fileChooserPromise;


await fileChooser.setFiles('./files/test.pdf');