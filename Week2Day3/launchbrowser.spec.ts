import test, { chromium, firefox, webkit } from "@playwright/test";

test('launch browser',async()=>{
    const browser = await chromium.launch({channel:'msedge',headless:false})
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto("https://leaftaps.com/opentaps/control/login")
    await page.waitForTimeout(3000)
console.log( await page.title());

    
    

})
test('launch firefox browser',async()=>{

    const browser1 = await firefox.launch({headless:false})
    const context1 = await browser1.newContext()
    const page1 = await context1.newPage()
    await page1.goto('https://www.google.com/')
})

test('launch webkit browser',async()=>{

    const browser2 = await webkit.launch({headless:false})
    const context2 = await browser2.newContext()
    const page2 = await context2.newPage()
    await page2.goto('https://www.google.com/')
})
// npx playwright test filename.spec.ts