"use strict";
let user1 = {
    firstName: 'yuvarani', // firstname -> key and yuvarani is value
    lastName: 's',
    mobileNumber: 5678909876
};
console.log(user1.firstName);
console.log(user1.lastName);
console.log(user1.mobileNumber);
//explicit inference in object
let user2 = {
    firstName: 'yuvarani',
    lastName: 's',
    mobNumber: 987656767,
};
console.log(user2.mobNumber);
let user3 = {
    firstName: 'yuvarani',
    "last Name": 's',
    "#mobNumber": 987656767,
};
console.log(user3["#mobNumber"]);
console.log(user3["last Name"]);
