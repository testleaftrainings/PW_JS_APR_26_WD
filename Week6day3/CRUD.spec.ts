import { test } from "@playwright/test";
import { CreateLead, fetchLead, generateToken } from "./apiUtility";

test.use({storageState:'data/salesforcelogin.json'})

test('Integrate UI with API',async({page,request})=>{
    await generateToken(request)
    await CreateLead(request)
    let lName = await fetchLead(request)

    await page.goto('https://orgfarm-d716fa5b16-dev-ed.develop.lightning.force.com/lightning/page/home')
    /* await page.goto('https://login.salesforce.com/?locale=in')
    await page.getByAltText('Salesforce login').click()
   // await page.getByRole('textbox',{name:'Username'}).fill('dilipkumar.rajendran@testleaf.com')
   await page.getByText('Username',{exact:true}).fill('yuvarani.sekar@testleaf.com')
   await page.getByLabel('Password').fill('Testleaf@2027')
   await page.getByRole('button',{name:'Log In'}).click()
   await page.waitForTimeout(15000) */
   await page.getByTitle('App Launcher',{exact:true}).click()
   await page.waitForTimeout(3000)
   await page.waitForLoadState('domcontentloaded')
   await page.getByLabel('View All Applications',{exact:true}).click()
   await page.getByPlaceholder('Search apps or items...').fill('lead')
    await page.getByText('Lead',{exact:true}).click()
    const searchBox = page.getByPlaceholder('Search this list...',{exact:true})

    await searchBox.fill(lName)
    await searchBox.press('Enter')

    await page.waitForTimeout(3000)

})