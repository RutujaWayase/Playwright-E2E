//retrieve cookies:

const cookies = await context.cookies();

//Add cookies:

await context.addCookies([
    {
        name: 'session',
        value: 'abc123',
        domain: 'example.com',
        path: '/'
    }
]);

//Clear cookies:

await context.clearCookies();

//This can be useful for authentication, session management, and testing different cookie states.