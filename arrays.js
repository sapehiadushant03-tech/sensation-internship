let arr = [2,10,50, "A" , 62, true];

//accessing array elements
console.log(arr[2]);  //50

//uploading an element
arr[4] = 65;
console.log(arr[4]);  

//adding an element
arr.push("26");
console.log(arr[6]);  

arr.unshift(32);
console.log(arr[0]); 

//delete an element
arr.pop();     //to delete from end
arr.shift();   //to delete from starting
console.log(arr); 

//traverse or print

for (let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

arr.forEach(i => {console.log(i);});

//to check if the array contains a specific element
console.log(arr.includes(50));  

//to check the index of an element
console.log(arr.indexOf("A"));



function printElements(arr) {
    for (let i=0; i<arr.length; i++){
        console.log(arr[i]);
    }
}

const students = ["Aayush", "Vaibhav", "Keshav", "Dushant"];
printElements(students);

printElements(arr);


//function to find the even numbers in an array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function findEvenNumbers(array) {
    let evenNumbers = [];
    array.forEach(numbers => {
        if (numbers % 2 === 0) {
            evenNumbers.push(numbers);
        }  
    });
    return evenNumbers;
}
console.log(findEvenNumbers(numbers));  



function searchElement(arr, ele) {
    for (let i=0; i< arr.length; i++){
        if (arr[i] === ele) {
        console.log("Element found at index: " , i);
        }
    }
}       
let myarray= [2,6,3,1,7,18,9];
searchElement(myarray, 5); 
searchElement(myarray, 7); 