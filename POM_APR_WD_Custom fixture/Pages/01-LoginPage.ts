/// <reference types="node" />
/* Actions performed for login page
load url
enter credentials
click login button */

import { chromium, Page } from "@playwright/test";


export class LoginPage{

lpage:Page // global property

constructor(page:Page){
this.lpage = page
}

async LoadUrl(url:string){
await this.lpage.goto(url)
}

async EnterCredentials(username:string, password:string){
await this.lpage.locator('//input[@id="username"]').fill(username)
await this.lpage.locator('//input[@id="password"]').fill(password)
}

async clickOnLogin(){
await this.lpage.locator('//input[@class="decorativeSubmit"]').click()

}

async CloseBroser(){
    await this.lpage.close()
    
}

}

// async function doLogin(){

//     const browser = await chromium.launch({headless:false})
//     const context = await browser.newContext()
//     const page = await context.newPage()

//     const lp = new LoginPage(page)
//     await lp.LoadUrl('https://leaftaps.com/opentaps/control/login')
//     await lp.EnterCredentials('demoCSR2','crmsfa')
//     await lp.clickOnLogin()
//     await lp.CloseBroser()
// }
// doLogin()
