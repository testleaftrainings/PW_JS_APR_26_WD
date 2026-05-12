import test from "@playwright/test";
import path from "node:path";

test("Learn file download",async({page})=>{
    await page.goto('https://www.leafground.com/file.xhtml')
    //create event listner
    const fDown = page.waitForEvent('download')
    await page.locator("//span[text()='Download']").click()
    //click action trigger the download
    const fileDownload = await fDown// resolve the promise
    //relative path
    await fileDownload.saveAs(`data/${fileDownload.suggestedFilename()}`)
    await fileDownload.saveAs( `data/AprPW.png`)

    //absolute path
    await fileDownload.saveAs(path.join(__dirname,'../../data',fileDownload.suggestedFilename()))
})