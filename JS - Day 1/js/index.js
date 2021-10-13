//create a variable
var name = "Manish";
var age = "100";
var percentage = 89.8;
var isAlive = true;

//create functions
function sum(a,b) {
  return a+b;
}

//call/execute function
var c = sum(2,3);

//print the values
console.log(c);
console.log(sum(5,3));

//declaring the variable
var hello;

// console.log(hello);

//assigning the values to the variable
hello = "Hello World!!"

//Objects
var info = {
  name: "Something",
  age: 100,
  isAlive: true,
  languages: ['eng', 'hi'],
  user: {
    img: 'https://adad.sdfsadf.com',
    aa: {
      s:'ddd'
    }
  }
};

var a = "name";

//Arrays
var languages = ["Something", 100, true];

// console.log(info.user.aa.s);

// console.log('name==>',typeof name);
// console.log('age==>',typeof age);
// console.log('percentage==>',typeof percentage);
// console.log('isAlive==>',typeof isAlive);
// console.log('info==>',typeof info);
// console.log('languages==>',typeof languages);

//Operators

var n1 = 20;
var n2 = 10;
var n3 = "20";

// console.log(n1*n2);
// console.log(n1/n2);
// console.log(n1%n2);
// console.log(n1-n2);
// console.log(n1+n2);
console.log(++n1); //21
console.log(n1++); //21  || 22
console.log(n1--); //22  || 21
console.log(n1);

console.log(n1 == n3); //just checks the value
console.log(n1 === n3); // checks the value and the datatype
console.log(n1 != n3);
console.log(n1 !== n3);
console.log(n1 >= n3);
