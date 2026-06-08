import test from "@playwright/test";

test.use({
    geolocation:{latitude:12.9879251, longitude:77.4571518},
    permissions:['geolocation','notifications']
})
test('Geolocation mocking',async({page})=>{
    await page.goto('https://www.google.com/maps')
    await page.locator('.sVuEFc').first().click()
    await page.waitForTimeout(5000)
})