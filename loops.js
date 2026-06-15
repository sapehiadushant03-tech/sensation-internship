let i = 6;  //entry controlled
while (i <= 5) {
  console.log(i);
  i++;
}

let x=5;   //exit controlled
do {
  console.log(x);
  x++;
} while (x < 5);

for (let y = 1; y <= 20; y++) {
    console.log(y);
}

for (let z = 20; z >= 1; z--) {
    console.log(z);
}

//code for producing the square of numbers from 1 to 20 using while loop
console.log("Squares of numbers from 1 to 20:");
let num = 1;
while (num <= 20) {
    console.log(num + " squared is " + (num * num));
    num++;
}
