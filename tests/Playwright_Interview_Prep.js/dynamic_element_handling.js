// A few patterns I use in real test suites
// Pattern 1, assert before and after a state change
// typescript

await expect(page.getByRole('button', { name: 'Save' })).toBeEnabled();
await page.getByRole('button', { name: 'Save' }).click();
await expect(page.getByText('Saved')).toBeVisible();
//Pattern 2, scope the search to a container
//typescript

const modal = page.getByRole('dialog', { name: 'Edit profile' });
await modal.getByLabel('Display name').fill('Alex');
await modal.getByRole('button', { name: 'Update' }).click();
//Pattern 3, wait for the content that actually matters
//typescript

await page.getByRole('button', { name: 'Load more' }).click();
await expect(page.getByText('Showing 40 of 40')).toBeVisible();