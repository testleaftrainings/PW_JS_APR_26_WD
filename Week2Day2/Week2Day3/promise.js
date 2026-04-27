// promise is used when a task takes time to finish

//const { resolve } = require("node:dns");


let myPromise = new Promise((resolve,reject)=>{
    console.log("promise in pending state");
    
let success = false

if(success){
    resolve("Task completed successfully")
}else{
    reject("Task failed")
}
})

myPromise.then((result)=>{
    console.log(result);
    
}).catch((error)=>{
    console.log(error);
    
})