const user = {
  name: "Aayush",
  age: 20,
  gender: "male"
};

// Accessing 
console.log (user.name);  
console.log(user["name"]);
console.log (user.age);

//Updating
user.name = "Aayush Patial";
user.age = 21;
console.log(user);

//Adding
user.city = "Mohali";
console.log(user.city);

//Delete
delete user.gender;
console.log(user.gender);

//pronting all elements
for (let key in user){
    console.log(key + ":" + user[key]);
}

//New Objects :
const student ={
    name:"Vikram Singh",
    marks: 89,
    roll_no :12401596,
    email : "gabbar8965@gmail.com ",
    age: 18,
    department: "Computer Science and Applications",
    gender: "Male"
}

// Accessing :
console.log(student.name);

//Updating :
student.email = "Vikramsingh@gmail.com";
console.log(student.email);
 

//Adding :
student.city = "Kangra";
console.log(student.city);


//Delete :
delete student.gender ;
console.log(student.gender);

for (let list in student){
    console.log(list + ":" + student[list]);
}

const multiStudents = [
    {
        name : "Dushant Sapehia",
        Roll_no : 12405689,
        department : "Computer Science and Applications",
        age :20,
        email : "Dushantsapehia@gmail.com"
    },
    {
        name: "Keshav jamwal",
        age:20,
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

console.log(multiStudents[0]);