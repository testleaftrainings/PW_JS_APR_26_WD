// slice (important method)

let course = 'playwright'

let outputSlice1 = course.slice(2,5)
console.log(outputSlice1); // ayw

let outputSlice2 = course.slice(-2,4) //wrig
console.log(outputSlice2);

let outputSlice3 = course.slice(5,2) // return empty string
console.log(outputSlice3);

/*
notes slice()
start index is included and end index is not included
if start index is greater than end index it will return empty string
negative index is allowed  */

//substring

console.log(course.substring(2,5))

console.log(course.substring(-2,5));//if you give negative index it will be consider as index 0

console.log(course.substring(5,2)); //automatically it swaps behave like (2,5)




