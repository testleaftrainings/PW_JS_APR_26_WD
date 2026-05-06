import test from "@playwright/test";

test('Learn to handle Alert',async({page})=>{

    page.on('dialog',async(alert)=>{
        //page.on is an event listner to listne for user interaction like click to capture the alert
        /* Step1 : alert local variable captures the simple alert object */
        const message = alert.message() // TO get the message of the alert
        console.log(message);

        const alertType = alert.type() // TO get the type of alert
        console.log(alertType);
       // await page.waitForTimeout(3000)
        if(alertType==='confirm'){
            
            await alert.accept() //to click ok button to accept the alert
        }else if(alertType==='prompt'){
            await alert.accept('Welcome to Testleaf')
        }else{
            await alert.dismiss() // to click cacel button to dismiss the alert
        }
        
        
    })
    await page.goto('https://leafground.com/alert.xhtml')
    await page.locator('(//span[text()="Show"])[1]').click() //simple alert click event to invoke an alert
    await page.waitForTimeout(3000)
    await page.locator("(//span[text()='Show'])[2]").click() // confirm alert //click event to invoke an alert
    await page.waitForTimeout(3000)
    await page.locator("(//span[text()='Show'])[5]").click() // prompt alert //click event to invoke an alert
    await page.waitForTimeout(3000)
})

test.only('Learn to handle Alert ',async({page})=>{

    page.once('dialog',async(alert)=>{
        //page.once is an event listner to listne for user interaction like click to capture the alert
        //Only one alert is handled using page.once remaining alerts are auto dismissed 

        const message = alert.message()
        console.log(message);

        const alertType = alert.type()
        console.log(alertType);
       // await page.waitForTimeout(3000)
        if(alertType==='confirm'){
            
            await alert.accept() //to click ok button 
        }else if(alertType==='prompt'){
            await alert.accept('Welcome to Testleaf')
        }else{
            await alert.dismiss() // to click cacel button 
        }
        
        
    })
    await page.goto('https://leafground.com/alert.xhtml')
    await page.locator('(//span[text()="Show"])[1]').click()
    await page.waitForTimeout(3000)
    await page.locator("(//span[text()='Show'])[2]").click()
    await page.waitForTimeout(3000)
    await page.locator("(//span[text()='Show'])[5]").click()
    await page.waitForTimeout(3000)
})