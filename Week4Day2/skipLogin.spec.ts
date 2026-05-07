import test from "@playwright/test";

test.use({storageState:'data/leafTaps.json'})
test('Skip the login using storagestate',async({page})=>{
    await page.goto('https://leaftaps.com/crmsfa/control/main?externalLoginKey=EL282888283590')//home page url should be give
    await page.locator("//a[text()='Leads']").click()
})