import test from "@playwright/test";

test('Dropdown handling',async({page})=>{
    await page.goto('https://leaftaps.com/opentaps/control/logout')
    await page.locator('//input[@id="username"]').fill('demoCSR2')
    await page.locator('//input[@id="password"]').fill('crmsfa')
    await page.locator('//input[@class="decorativeSubmit"]').click()
    await page.locator('//div[@id="label"]').click()
    await page.locator('//a[text()="Leads"]').click()
    await page.locator("//a[text()='Create Lead']").click()
    await page.locator('//input[@id="createLeadForm_companyName"]').fill('Testleaf')
    await page.locator('//input[@id="createLeadForm_firstName"]').fill('Yuvarani')
    await page.locator('//input[@id="createLeadForm_lastName"]').fill('S')
    //dropdown present in select tag we can go for selectOption()
    //by using 3 ways we can able to handle dropdown
    // by using value attribute 
    //by using visible text thats label
    // by using index value
    await page.selectOption('//select[@id="createLeadForm_dataSourceId"]',{value:"LEAD_CONFERENCE"})
    //await page.waitForTimeout(3000)
    await page.locator('//select[@id="createLeadForm_dataSourceId"]').selectOption({value:"LEAD_EMPLOYEE"})
    //await page.waitForTimeout(3000)
    await page.selectOption('//select[@id="createLeadForm_dataSourceId"]',{label:'Existing Customer'})
    //await page.waitForTimeout(2000)
    await page.selectOption('//select[@id="createLeadForm_dataSourceId"]',{index:3})
    //await page.waitForTimeout(2000)

    const dropdown = page.locator('//select[@id="createLeadForm_dataSourceId"]/option')
    const dropdownCount = await dropdown.count()
console.log(`No of value in the dropdown is ${dropdownCount}`);
await page.waitForTimeout(3000)

/* console.log(await dropdown.nth(0).innerText()); //blank
console.log(await dropdown.nth(1).innerText()) //Cold Call
console.log(await dropdown.nth(2).innerText()) //Conference */
for (let index = 0; index < dropdownCount; index++) {
    console.log(await dropdown.nth(index).innerText());
    }

    await page.waitForTimeout(3000)

    await page.locator('//input[@class="smallSubmit"]').click()



})