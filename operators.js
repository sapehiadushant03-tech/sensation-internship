// Arithmetic operators
let a = 10;
let b = 5;
let c = 5;
let d = "5";

console.log("Addition: " + (a + b));        // Output: 15
console.log("Subtraction: " + (a - b));     // Output: 5
console.log("Multiplication: " + (a * b));  // Output: 50
console.log("Division: " + (a / b));        // Output: 2
console.log("Modulus: " + (a % b));         // Output: 0

// Comparison operators
console.log(c == d);   // true  (because the values are both 5)
console.log(c === d);  // false (because c is a number and d is a string)
console.log(c != d);   // false (because they are equal, so "not equal" is false)
console.log(c > d);    // false (5 is not greater than 5)
console.log(c < d);    // false (5 is not less than 5)
console.log(c >= d);   // true  (5 is equal to 5)
console.log(c <= d);   // true  (5 is equal to 5)

// Assignment operators
a += 10;                // This is the same as a = a + 10
console.log(a);         // Output: 20

// Logical operators
let x = true;
let y = false;
console.log(x && y);  // false (both must be true)
console.log(x || y);  // true (at least one must be true)
console.log(!x);      // false (negation)

//increment and decrement operators
let count = 0;
count++; // count is now 1
console.log(count); // Output: 1

//ternary operator
let age = 18;
let canVote = (age >= 18) ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canVote); // Output: Yes, you can vote.



