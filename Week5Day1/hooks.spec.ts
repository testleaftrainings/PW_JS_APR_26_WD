import test from "@playwright/test";

test.describe.parallel("runs the tastcase in serial mode",async()=>{

    test.beforeAll('data Connectivity',async()=>{
        console.log('Runs before all tests');
        
    })
    test.beforeEach('login functionality',async({page})=>{
        console.log('Runs before each test');
        await page.goto('https://login.salesforce.com/?locale=in')
        await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com')
        await page.locator('#password').fill('TestLeaf@2025')
        await page.locator('#Login').click()
        
    })

    test('click on Accounts module',async({page})=>{
        await page.locator('//span[text()="Accounts"]').click()
    })
    test('click on contacts module',async({page})=>{
        await page.locator('//span[text()="Contacts"]').click()
    })

    test.afterEach('print the status and title of the test',async({page},testinfo)=>{
        console.log('run after each test');
        console.log(testinfo.status);
        console.log(testinfo.title);
        })

        test.afterAll('tearown and final report',async()=>{
            console.log('Runs after all the test');
            
        })
})