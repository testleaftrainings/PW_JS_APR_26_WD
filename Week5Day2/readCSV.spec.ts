import test from "@playwright/test";
import { parse } from "csv-parse/sync";
import fs from 'fs'
import path from 'path'



//absolute path

let value:any[] = parse(fs.readFileSync(path.join(__dirname,"../../Utils/leaftaps.csv")),
{columns:true,skip_empty_lines:true})

//relative path

// let value1:any[] = parse(fs.readFileSync("Utils/leaftaps.csv"),{
//     columns:true, skip_empty_lines:true
// })

for(let login of value)
test(`Learn to read CSV file ${login.TestCaseID}`,async({page})=>{
    await page.goto('https://leaftaps.com/opentaps/control/login')
    await page.locator('#username').fill(login.userName)
    await page.locator('#password').fill(login.Password)
    await page.locator('.decorativeSubmit').click()
    await page.locator('//a[contains(text(),"CRM/SFA")]').click()
})