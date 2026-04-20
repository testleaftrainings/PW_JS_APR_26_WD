// string declaration -> "", '', ``


//String literal

let companyName = 'qeagle' //- >100
let firstName = 'Testleaf'  //->101

console.log(companyName);
console.log(firstName);

if(companyName === firstName){
    console.log("both in same memory location");
    
}else{
    console.log("its in different memory location");
    
}



//String object

let CompanyNameObj = new String('Testleaf')    //101
let firstNameObj = new String('Testleaf')   //102


//escape sequence

/* \' -> single quote
\n -> for new line 
\t -> tab space  */

let testEsc = 'it\'s a \n regression \t testing'
console.log(testEsc);

// Concatenation using + operator we can able to concatenate string

let testCase = 'create a new Lead'
let testCaseId = 123

let result = testCaseId + "-" +testCase
console.log(result);


//Template literal `${variableName}`

let x = 10
let output = `There are ${x} testcase`
console.log(output);

// string properties and method

let course = 'Playwright'
console.log(`The length of the course is ${course.length}`);

//charAt()

console.log(`the chatAt of 3 of the course is ${course.charAt(3)}`); //y

//indexof()

console.log(`The indexof() w of the course is ${course.indexOf('w')}`);


