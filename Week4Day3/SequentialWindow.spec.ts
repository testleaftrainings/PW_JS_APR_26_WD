import { test } from "@playwright/test";

test('Sequential way of handling window',async({page,context})=>{
    await page.goto('https://www.amazon.in')
    const searchBox = page.locator('//input[@id="twotabsearchtextbox"]')
    await searchBox.fill('phones')
    await searchBox.press('Enter')

    //start listening for event new window and creating promise 
    let parentWindow = context.waitForEvent('page')
    //click the product
    await page.locator('(//h2[@class="a-size-medium a-spacing-none a-color-base a-text-normal"])[1]').click()
    //capture the child window and resolve promise
    const childWindow = await parentWindow

    const price = await 
    childWindow.locator('(//div[@class="a-section a-spacing-none aok-align-center aok-relative apex-core-price-identifier"])[1]').innerText()
console.log(price);

console.log(`Title of child page ${await childWindow.title()}`);
console.log(`Title of parent page ${await page.title()}`);



//await childWindow.close()

await page.bringToFront()

//await childWindow.bringToFront()
//await childWindow.locator('').fill('')

await page.locator("(//a[text()='Bestsellers'])[1]").click()

await page.waitForTimeout(4000)




})