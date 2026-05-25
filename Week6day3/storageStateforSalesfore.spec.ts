import { test } from "@playwright/test";

test('Learn stoarge state',async({page})=>{


await page.goto('https://login.salesforce.com/?locale=in')
    await page.getByAltText('Salesforce login').click()
   // await page.getByRole('textbox',{name:'Username'}).fill('dilipkumar.rajendran@testleaf.com')
   await page.getByText('Username',{exact:true}).fill('yuvarani.sekar@testleaf.com')
   await page.getByLabel('Password').fill('Testleaf@2027')
   await page.getByRole('button',{name:'Log In'}).click()
   await page.waitForTimeout(15000)

   await page.context().storageState({path:'data/salesforcelogin.json'})

   })