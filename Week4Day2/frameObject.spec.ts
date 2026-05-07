import { test } from "@playwright/test";

test('Learn to handle frame object',async({page})=>{
    await page.goto('https://leafground.com/frame.xhtml')

    //single frame
    const frameref = page.frame({url:'https://leafground.com/default.xhtml'})
    await frameref?.locator('#Click').click()

    //nested frame
    const framref1 = page.frame({name:"frame2"})
    await framref1?.locator('#Click').click()
})