await page.getByRole('button', {name: 'Login'}).click();

await page.getByRole('button', {name: 'Submit'}).click();
await expect(page.getByText('Order successfully created')).toBeVisible();
//Dynmaic values
await page.getByTestId('order-123').click();
locator.filter() .nth() .first() .last() 

//authentication
await page.goto('/login');
await page.getByLabel('Username').fill('admin');
await page.getByLabel('Password').fill('password');
await page.getByRole('button', {name:'Login'}).click();
await page.context().storagestate({path:'playwright/.auth/user.json'});

use: {
    storagestate: 'playwright/.auth/user.json'
}

class LoginPage() {
    Constructor(page){
        this.page = page;
        this.username = page.getByLabel('Username');
        this.password = page.getByLabel('Password');
        this.loginButton = page.getByRole('button', {name: 'Login'});

    }
    async login(username, password){
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }
}

const loginPage = new LoginPage(page);
await loginPage.login('admin', 'password'); 

//error handling

async function login() {
    try{
        const response = await loginAPI();
        console.log(response);
    }catch(error){
        console.error(error);
    }
}

//exception handling
try{
    const result = await login();
}catch(error){
    console.error(error);
}finally{
    console.log("Exception completed");
}

//throw
if(!username){
    throw new Error("Username is required");
}

//Explicit waits
await page.locator('#username').waitFor({state: 'visible'});
await page.waitForURL('**/dashboard');

//explicit wait => network response:
await page.waitForResponse(response =>
    response.url().incldes('/api/login') &&
    response.status() === 200
);