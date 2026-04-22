//callback is a function  passed as an argument to another function and it's 
//executed later after some task is completed

function greet(name, done, y){
    console.log(`Hello ${name}`);
setTimeout(()=>{

    done() //is going to call done()
    y() // is going to call saveHistory
},2000)
    
}

function done(){
    console.log('Completed');
    
}

function saveHistory(){
    console.log("History is saved successfully");
    
}

greet("Testleaf",done, saveHistory)

setTimeout(console.log("Hello"), 2000);