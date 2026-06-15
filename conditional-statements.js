let age = 17;
if (age >= 18) {
    console.log("You are an adult and you can vote");
} else {
    console.log("You are a minor and you cannot vote");
}

let marks = 95;
if (marks >= 90) {
    console.log("Grade: A");
} else if (marks >= 80) {
    console.log("Grade: B");
} else {
    console.log("Grade: C");
}

let num = -10;
if (num > 0) {
    console.log("The number is positive.");
} else if (num < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}


let time = 14;
let greeting = (time < 12) ? "Good morning!" : "Good afternoon!";
console.log(greeting);

let number = 5;
let result = (number % 2 === 0) ? "Even" : "Odd";
console.log(result);

let x = 20;
if (x % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}   

let marks1 = 85;
let grade = (marks1 >= 90) ? "A" : (marks1 >= 80) ? "B" : "C";
console.log(grade); 


let year = 2020;
let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
console.log(isLeapYear ? "Leap Year" : "Not a Leap Year");  

let day= 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");    
}

let amount = 20000;
let discount = 0;
switch(true){ 
    case amount >= 18000:
        amount = amount - 2000
        break;
    case amount >= 15000:
        amount = amount - 1500
        break;
    case amount >= 10000:
        amount = amount - 1000
        break;
        default: discount = 0;
}

console.log("Discount is: " , discount);
