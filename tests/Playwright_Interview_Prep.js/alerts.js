//Accept alert
page.on('dialog', async dialog => {
    console.log(dialog.message());
    await dialog.accept();
});
//Dismiss
page.on('dialog', async dialog => {
    await dialog.dismiss();
});
//Prompt
page.on('dialog', async dialog => {
    await dialog.accept('Rutuja');
});

//For a one-time dialog:

page.once('dialog', async dialog => {
    await dialog.accept();
});