 //It is used to represent both integer and floating-point numbers.
 let phoneNumber: number = 98765456789
 console.log(phoneNumber);

 //It is used to represent text data. It can be enclosed in single quotes, double quotes, or backticks.
 let companyName : string = 'Testleaf'
 console.log(companyName);

 //It is used to represent logical values, which can be either true or false.

let isPlaywright : boolean = true
isPlaywright = false
console.log(isPlaywright);

 //It is a type that represents the absence of a value. A variable that has been declared but not assigned a 
//value is of type undefined.
let success:undefined
console.log(success);

//It is a type that represents the intentional absence of any object value. It is often used to indicate that a 
//variable has no value assigned to it.

let admin:null = null
console.log(admin);

//It is a type that can represent any value. used when are not sure about the datatype.

let value:any = 1234
value = 'Qeagle'
value = true

console.log(value);

//unknown: It is a type that can represent any value, but it is safer than any because it requires type checking before
//using the value.

let info:unknown = 1234
info = 'Playwright'

if(typeof info === 'string'){
console.log(info.toUpperCase());

}else{
    console.log('its not string datatype');
    
}

//It is a type that represents values that never occur. It is used for functions that throw exceptions or have
//infinite loops.

function infiniteLoop() : never{
    while(true){
        console.log('never return any value');
        
    }
}
 
//infiniteLoop()

//tuple: It is a type that represents an array with a fixed number of elements, 
//where each element can have a different type.

let courseDetails:[string,number,boolean] = ['Playwright',100,true]
console.log(courseDetails[0]);
console.log(courseDetails[2]);

//console.log(courseDetails[3]);


