import {test, expect} from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { log } from 'node:console';

test('test', async ({page}) => {

    //Login
    const login = new LoginPage();
    await login.gotoLoginPage();
    await login.login('pavanol', 'test@123')
    await page.waitForTimeout(3000)

    //Home

    //Cart

})