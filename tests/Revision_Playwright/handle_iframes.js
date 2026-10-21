// . Playwright provides frameLocator() to locate and interact with elements inside an iframe.


const frame = page.frameLocator('#payment-frmae');
await frame.locator('#card-number').fill('123445678654321');
await frame.locator('#expiry').fill('12/28');
await frame.getByRole('button', {name: 'Pay'}).click();

/*
What is the difference between frameLocator() and frame()?
- frameLocator() is useful for locating and interacting with elements inside a frame through chained locators.
- frame() retrieves a Frame object by name or URL, which is useful when I need to work directly with the frame object.
*/