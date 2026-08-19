const downloadPromise = page.waitForEvent('download');

await page.getByRole('button', {
    name: 'Download'
}).click();

const download = await downloadPromise;

await download.saveAs('./downloads/report.pdf');

//Can also verify the downloaded file:

console.log(download.suggestedFilename());