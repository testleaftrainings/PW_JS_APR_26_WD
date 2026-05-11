import test from "@playwright/test";

test('Handling multiple window',async({page,context})=>{
    await page.goto('https://www.leafground.com/window.xhtml')

    //playwright starts listening for new tab and immediately perform the click action

    const [parentPage] = await Promise.all([context.waitForEvent('page'),
        page.locator("//span[text()='Open Multiple']").click()
    ])

    //[parentPage] = parent page, ch1, ch2
const count = parentPage.context().pages() //Returns all open pages in the context.
//console.log(count);


console.log(count.length); // total no of pages = 3


//variables used to store specific child page
let dashboard : any
let webtable : any

for(let i =0; i<count.length; i++){
await page.waitForLoadState('domcontentloaded')

const title = await count[i].title()
console.log(title);

//if title matches dashbord
//store that page object in dashboard variable
if(title==='Dashboard'){
    dashboard = count[i]
}
else if(title==='Web Table'){
    webtable = count[i]
}
}
await dashboard.locator('//input[@id="email"]').fill('admin@testleaf.com')

await webtable.locator('//input[@placeholder="Search"]').fill('Russia')

await page.waitForTimeout(5000)

})