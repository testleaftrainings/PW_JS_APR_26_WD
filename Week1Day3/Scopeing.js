// scope defines where a variable is accessible in your code


//global scope can be accessed anywhere
let y = 60
var a = 10
function test(){
    console.log(a);
    console.log(y);
    }
    
test()
console.log(a);

//function scope 
//var is function scope

function demo(){
    var x = 20
    console.log("inside the function",x);

    if(true){
        let z = 50
        console.log("Accessing z inside the block",z);
        console.log("Accessing x inside the block",x);
        
        
    }
   // console.log("Accessing z inside the function and ouside the block",z);
    
    //demo()
}
demo()
//console.log(x, "outside the function");

// block scope {} let , const is block scope


if(true){
    var b = 30
    const c = 40
    console.log("Accessing b and c value inside the block", b, c);
    
}
console.log("Accessing b outside the block",b);
//console.log("");



