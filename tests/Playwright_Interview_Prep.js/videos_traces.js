//In playwright.config.js:

import { defineConfig } from '@playwright/test';


export default defineConfig({
    use: {
        video: 'retain-on-failure',
        trace: 'retain-on-failure'
    }
});

/*Trace is particularly useful for debugging because it can capture:

Actions
Screenshots
DOM snapshots
Network activity
Console information
*/

//Generally use:

trace: 'retain-on-failure'