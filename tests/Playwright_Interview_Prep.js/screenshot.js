//Full page
await page.screenshot({
    path: 'screenshots/home.png',
    fullPage: true
});
//Specific element
await page.getByRole('button', {
    name: 'Login'
}).screenshot({
    path: 'screenshots/login-button.png'
});