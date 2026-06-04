import test, { devices } from "@playwright/test";

test.use({
        ...devices['iPhone 12 Pro']
    })

test('device Emulation',async({page})=>{

    
    await page.goto('https://www.amazon.in/')
    await page.waitForTimeout(3000)
})