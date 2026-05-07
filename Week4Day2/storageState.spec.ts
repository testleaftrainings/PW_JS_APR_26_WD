import test from "@playwright/test";

test("Learn storage state",async({page})=>{
    await page.goto('https://leaftaps.com/opentaps/control/login')
    await page.locator('#username').fill('demoCSR2')
    await page.locator('#password').fill('crmsfa')
    await page.locator('.decorativeSubmit').click()
    await page.locator('#label').click()
    await page.context().storageState({path:'data/leafTaps.json'})
})