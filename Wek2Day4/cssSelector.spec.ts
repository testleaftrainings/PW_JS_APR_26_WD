import test from "@playwright/test";

test('launch browser using page fixture',async({page})=>{
    await page.goto('https://leaftaps.com/opentaps/control/login')
    console.log(await page.title())
    console.log(page.url());
    //await page.waitForTimeout(2000)
    await page.waitForLoadState('domcontentloaded')
    
    //await page.locator('#username').fill('demoCSR2')
    //await page.locator('[id="username"]').fill('demoCSR2')
//await page.locator('input').first().fill('demoCSR2')
//await page.locator("input[name*='USER']").fill("demoCSR2")
await page.locator('label+input').first().fill('demoCSR2')
   // await page.locator('[id="password"]').fill('crmsfa')
   //await page.locator('[name="PASSWORD"]').fill('crmsfa')
   //await page.locator('input').nth(1).fill('crmsfa')
   await page.locator("[id^='pass']").fill('crmsfa')



   // await page.locator('input[class="decorativeSubmit"]').click()
   //await page.locator('input').last().click()
   await page.locator('[name$="WORD"]').click()

    //await page.locator('.decorativeSubmit').click()
})