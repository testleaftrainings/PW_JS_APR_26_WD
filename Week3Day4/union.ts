// union type
//alias name for datatype


type userInput = string | number | boolean

let username : userInput = 'support@testleaf.com'
username = 975456789
//username = true

console.log(username);

//alias name for values

type supportedBrowser = "chrome" | "firefox" | "msedge"

function invokeBrowser(browserName:userInput){
console.log(browserName);

}
invokeBrowser('msedge')
invokeBrowser('chrome')
invokeBrowser(123)
invokeBrowser(true)
//invokeBrowser('safari')
