import test from "@playwright/test";
import { logADefectInJira } from "./after_hooks_jiraticket";

test('Test to record a specific bug',async({page})=>{
    await page.goto('https://login.salesforce.com/?locale=in')
    await page.getByAltText('Salesforce login').click()
   // await page.getByRole('textbox',{name:'Username'}).fill('dilipkumar.rajendran@testleaf.com')
   await page.getByText('Username',{exact:true}).fill('yuvarani.sekar@testleaf.com')
   await page.getByLabel('Password').fill('Testleaf@2027')
   await page.getByRole('button',{name:'button1'}).click()
   await page.waitForTimeout(20000)
})

test.afterEach('Fetch the test status',async({},testinfo)=>{
    await logADefectInJira(testinfo)
})