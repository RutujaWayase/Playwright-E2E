const {test, expect} = require('@playwright/test')

//only
test.only('test1', async({page}) => {
    console.log('this is test1')
})
//skip 
test.skip('test2', async({page}) => {
    console.log('this is test2')
})

test('test3', async({page, browserName}) => {
    console.log('this is test3')
    if(browserName==='chromium'){
        test.skip()
    }
})

//Fixme
test('test4', async({page}) => {
    test.fixme()
    console.log('this is test 4..')
})

//Fail
test('test5', async({page}) => {
    test.fail() //exp
    console.log('this is test5...')
    //expect(1).toBe(1); //act  =========> test will fail //If both exp & actual are same then test will fail
    expect(1).toBe(2); // ===============> test will pass //If both exp & actual are different i.e. failed then test will pass
})

//Fail
test('test6', async({page, browserName}) => {
    console.log('this is test6....')
    if(browserName==='firefox')
    {
        test.fail() //exp
    }
})

//slow()

test('test7', async({page}) => {
    //test.slow(); //by default it will increse time by 3 times
    test.setTimeout(5000);
    await page.goto('https://www.demoblaze.com/index.html')
    console.log('this is test 7....')
})
 