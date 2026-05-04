import test, { expect } from'@playwright/test'

test('Learning Assertion',async({page})=>{
    await page.goto('https://leafground.com/input.xhtml')
//hard assertion()
const textbox =  page.getByPlaceholder('Babu Manickam')
// await expect(textbox).toBeDisabled()

//soft assertion
await expect.soft(textbox).toBeEnabled()
console.log('Disabled assertion is passed');

//non retry assertion
let pageTitle = 'Input Components'
let expectedtitle = await page.title()
console.log(expectedtitle);

expect.soft(expectedtitle).toBe(pageTitle)
console.log('title is verified');



})