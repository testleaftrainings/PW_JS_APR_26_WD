import { test } from "@playwright/test";

test("Learn to handle frame using framelocator",async({page})=>{
    await page.goto('https://leafground.com/frame.xhtml')

    //frameLocator().locator().click()

    //single frame

    await page.frameLocator('//iframe[@src="default.xhtml"]').locator('#Click').click()

    //nested frame -> outer frame -> inner frame  -> locator
})