// array declaration

const numArray = [1,4,6,64,9,8]
//index 0,1,2,3,4,5
//length 1,2,3,4,5,6
//length
console.log(numArray.length);
//to check index value
console.log(numArray.indexOf(4));
// replace the number
console.log(numArray[2]='welcome');
console.log(numArray);

console.log(numArray[7]);

let fruits = ['apple', 'banana', 'cherry'];
   console.log(fruits.indexOf('cherry'));

   //numArray = [ 1, 4, 'welcome', 64, 9, 8 ]
   //includes()
   console.log(numArray.includes('welcome'));


   //push() is used add 1 or more elements to the end of the Array.
  numArray.push("hello","testleaf");
   console.log(numArray);

   //pop() is used to remove only one element from the end of an array
   numArray.pop()
   console.log(numArray);

   //shift() is used to remove only one element from the start of the array

numArray.shift()
console.log(numArray);


//unshift() is used to add 1 or more elements at the beginning of the Aray

numArray.unshift("Testleaf","qeagle")
console.log(numArray);

//slice

console.log(numArray.slice(4));
console.log(numArray.slice(4,7));

//splice()
/* syntax:
array.splice(startIndex, deleteCount, item1, item2, ...) */

//numArray [ 'Testleaf', 'qeagle', 4, 'welcome', 64, 9, 8, 'hello' ]
numArray.splice(3,3,45,76,88)
console.log(numArray);//[ 'Testleaf', 45, 76, 88, 'welcome', 64, 9, 8, 'hello' ]





   
   






