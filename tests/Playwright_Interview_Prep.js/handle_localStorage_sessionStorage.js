//access localStorage using browser-side JavaScript:

await page.evaluate(() => {
    localStorage.setItem('token', 'abc123');
});

//Read it:

const token = await page.evaluate(() => {
    return localStorage.getItem('token');
});

//For sessionStorage:

await page.evaluate(() => {
    sessionStorage.setItem('key', 'value');
});

//Important: storageState can preserve cookies and local storage, but session storage is not persisted by storageState in the same way.