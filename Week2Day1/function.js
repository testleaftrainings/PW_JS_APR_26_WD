/* Functions type
Named function
Function expression
Arrow function
 */

//Named function
launchBrowser()
function launchBrowser(){
    console.log("Browser launched");
    
}

//launchBrowser()

//Function expression
//funExp()
let funExp = function(){
    return "Hello team i an function expression";
    
}
let a = funExp()
console.log(a)



let funArrow = ()=>{
    console.log("Hello team am a arrow function");
    
}

funArrow()

//arrow function
//console.log(arrow(2,7))
const arrow = (a,b)=> {
    return a*b
}

console.log(arrow(2,7))
