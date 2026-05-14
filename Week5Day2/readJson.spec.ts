import test from "@playwright/test";
import readData from "../../Utils/leaftaps.json"

test.describe.serial('running in serial mode',()=>{

for(let value of readData){
test(`Learn to read json file ${value.TestCaseId}`,async({page})=>{

    await page.goto('https://leaftaps.com/opentaps/control/login')
    await page.locator('#username').fill(value.userName)
    await page.locator('#password').fill(value.password)
    await page.locator('.decorativeSubmit').click()
    await page.locator('//a[contains(text(),"CRM/SFA")]').click()


})
}
})

let data = readData[0]
test(`learn to read single json file ${data.TestCaseId}`,async({page})=>{
    await page.goto('https://leaftaps.com/opentaps/control/login')
    await page.locator('#username').fill(data.userName)
    await page.locator('#password').fill(data.password)
    await page.locator('.decorativeSubmit').click()
    await page.locator('//a[contains(text(),"CRM/SFA")]').click()
})