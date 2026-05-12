import test from "@playwright/test";
import path from "node:path";


test('upload file using input tag type= file',async({page})=>{
    await page.goto('https://www.leafground.com/file.xhtml')

    //Relative path for single file upload

    /* const fileUpload = page.locator('(//input[@type="file"])[1]')
    await fileUpload.setInputFiles('Utils\\TestLeaf Logo.png')
    await page.waitForTimeout(2000)

    //Relative path for multiple file upload

    const fileUpload1 = page.locator('(//input[@type="file"])[2]')
    await fileUpload1.setInputFiles(['Utils/TestLeaf Logo.png','Utils/Qeagle Logo.png'])
    await page.waitForTimeout(2000) */

    //Absolute path for single file upload
const fileUpload2 = page.locator('(//input[@type="file"])[1]')
await fileUpload2.setInputFiles(path.join(__dirname,'../../Utils/TestLeaf Logo.png'))

////Absolute path for multiple file upload
const fileUpload3 = page.locator('(//input[@type="file"])[2]')
await fileUpload3.setInputFiles([path.join(__dirname,'../../Utils/TestLeaf Logo.png'),
    path.join(__dirname,'../../Utils/Qeagle Logo.png')
])
console.log(__dirname);

})

test.only('upload file using event listner',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/upload')

    //create the listener

    const fileUpload = page.waitForEvent('filechooser') //creating the promise
    await page.locator('//div[@id="drag-drop-upload"]').click()//trigger the upload
    const fUpload = await fileUpload // resolving the promise
    await fUpload.setFiles('Utils/TestLeaf Logo.png')


})