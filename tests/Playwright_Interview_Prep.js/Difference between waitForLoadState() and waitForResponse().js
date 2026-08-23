waitForLoadState()	waitForResponse()
Waits for a page loading state	Waits for a specific network response
Related to browser/page lifecycle	Related to API/network activity
load, domcontentloaded, networkidle	URL/status/pattern based
Useful for navigation	Useful for API-driven applications

Example:

await page.waitForLoadState('domcontentloaded');

versus:

await page.waitForResponse(response =>
    response.url().includes('/api/orders') &&
    response.status() === 200
);

Summary:

waitForLoadState() synchronizes with page lifecycle events, whereas waitForResponse() synchronizes with a specific network response.