function greet(name) {   //function declaratin 
    console.log("Good Morning");
}

console.log("Hi");
console.log("How are you doing?");

greet();  //function calling

function add(a, b) {   //function declaration
    return a + b;
}
let result = add(5,3);  //function calling with arguments
console.log(result);

function multiply(x, y) {   //function declaration
    return x * y;
}
let multiplyResult = multiply(4, 7);
console.log(multiplyResult);

function square(n) {   //function declaration
    return n * n;
}
let squareResult = square(6);
console.log(squareResult);


//function to check if a number is even 
function isEven(num) {   //function declaration
    return num % 2 === 0;
}
let isEvenResult1 = isEven(10);
let isEvenResult2 = isEven(7);
console.log(isEvenResult1);
console.log(isEvenResult2);

//function to check the factorial of a number
function factorial(n) {   //function declaration
    if (n === 0 || n === 1) {           
        return 1;
    }
    return n * factorial(n - 1);  
}
let factorialResult = factorial(5);
console.log(factorialResult);  //120


//addtion of two numbers using arrow function
const addition=(a,b) => {console.log(a+b);}
addition(8,6);

//multiplication of two numbers using arrow function
const multipli = (a,b) => a*b;
console.log(multiply(4,5));

//division of two numbers using arrow function
const division = (a,b) => a/b;
console.log(division(20,4));  //5


