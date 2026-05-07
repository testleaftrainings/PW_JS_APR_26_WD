import { test } from "@playwright/test";

test('Learn to Handle frame',async({page})=>{
    await page.goto('https://leafground.com/frame.xhtml')

    const allframes = page.frames()//returns all frames present in the page
    //main page as top frame{frame0,frame1, frame2....}
    console.log(allframes.length);

    //using for of loop

    for(let tempVal of allframes){
        const url = tempVal.url()
        console.log(`the url of the page is ${url}`);
        
    }

    //based on index to handle frame
    const frame1 =allframes[1]
    await frame1.locator('#Click').click()
    await page.waitForTimeout(2000)
    console.log('frame1 is clicked');

    const frame4 = allframes[4]
    await frame4.locator('#Click').click()
    await page.waitForTimeout(2000)
    console.log('frame4 is clicked');
    
    
    
})