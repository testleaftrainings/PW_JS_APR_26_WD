import test, { expect } from '@playwright/test'

test('Visual Regression', async ({ page }) => {
    await page.goto('https://www.flipkart.com/')
    const image = await page.screenshot()
    expect(image).toMatchSnapshot()
})

test.only('visual regression for leaftaps',async({page})=>{
    await page.goto('https://leaftaps.com/opentaps/control/login')
    let snap = await page.screenshot()
    expect(snap).toMatchSnapshot()
})