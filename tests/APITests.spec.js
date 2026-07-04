const {test, expect} = require('@playwright/test');

var userid;

test("Get users", async ({request}) => {
    const reaponse = await request.get('https://reqres.in/api/users?page=2')
    console.log(await reaponse.json())
    expect(reaponse.status()).toBe(200)
})

test("Create user", async ({request}) => {
    const response = await request.post('https://reqres.in/api/users',
        {
            data: {"name": "john", "job": "engineer"},
            headers: {"Accept": "application/json"}
        }
    );
    console.log(await response.json())
    expect(response.status()).toBe(201)

    var res = await response.json()
    userid = res.id
})

test("Update user", async ({request}) => {
    const response = await request.put('https://reqres.in/api/users'+ userid,
        {
            data: {"name": "john", "job": "SDET"},
            headers: {"Accept": "application/json"}
        }
    );
    console.log(await response.json())
    expect(response.status()).toBe(200)

})

test("Delete user", async ({request}) => {
    const response = await request.delete('https://reqres.in/api/users'+ userid)
    expect(response.status()).toBe(204)
})