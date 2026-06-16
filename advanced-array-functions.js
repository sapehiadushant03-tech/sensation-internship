let numbers =[20,5,4,12,14];

//square
let sqr = numbers.map((num) => num*num*num);
console.log(sqr);

//filter
let even = numbers.filter((num) => num % 2=== 0);
console.log(even);

const persons = [
    {
        name : "Dushant Sapehia",
        Roll_no : 12405689,
        department : "Computer Science and Applications",
        age :20,
        email : "Dushantsapehia@gmail.com"
    },
    {
        name: "Keshav jamwal",
        age:21,
        Roll_no:12405874,
        department : "Computer Science and Applications",
        email: "keshavjamwal4585@gmail.com"
    },
    {
        name : "Vaibhav thakur",
        age : 20,
        Roll_no:12405263,
        department : "Computer Science and Applications",
        email: "vaibhu2345@gmail.com"
    },
    {
        name : "Aayush patial",
        age: 20,
        Roll_no: 102401596,
        department: "Computer Science and Applications",
        email:"thakuraayush1522@gmail.com"
    }
]

let new_array = persons.filter((i) => i.age > 18);
console.log(new_array);

//find
let array = persons.find((i) => i.Roll_no == 102401596);
console.log(array);

//to give a portion (dosen't modify origional array)
let elements = [2,61,23,0,78,54];
console.log(elements.slice(1,4));

 //to delete elements (modifies origional array)
elements.splice(2,2);   
console.log(elements);