import test from "@playwright/test";

test('Handling dynamic dropdown',async({page})=>{
    //example dynamic dropdown
await page.goto('https://www.leafground.com/select.xhtml')
await page.locator("//label[text()='Select Country']").click()
    await page.locator('//li[text()="Germany"]').click()
})