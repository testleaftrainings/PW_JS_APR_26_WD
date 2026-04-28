/* const browser = await chromium.launch({channel:'msedge',headless:false})
    const context = await browser.newContext()
    const page = await context.newPage() 
    Page Fixture:
No need to create browser/page manually, it is automatically handled by 
the playwright page fixture

    */


import test from "@playwright/test";

test('launch browser using page fixture',async({page})=>{
    await page.goto('https://leaftaps.com/opentaps/control/login')
    await page.waitForTimeout(3000)
})