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
// console.log(c);
// console.log(sum(5,3));

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
// console.log(++n1); //21
// console.log(n1++); //21  || 22
// console.log(n1--); //22  || 21
// console.log(n1);

// console.log(n1 == n3); //just checks the value
// console.log(n1 === n3); // checks the value and the datatype
// console.log(n1 != n3);
// console.log(n1 !== n3);
// console.log(n1 >= n3);

var employeeId = '351';
var employeeName = 'Takeshi';
var employeeAge = 20;
var employeeAddress = 'Home';

// console.log(employeeId !== null);
// console.log(employeeId !== undefined);
// console.log(employeeId.length === 0); //1st correct ans

//Is my 'employeeId' empty ?
// console.log(!employeeId); //false

//Is my 'employeeId' and "employeeName" empty ?
// console.log(' 1 variables ',employeeId);

// console.log(' 2 variables ',employeeId && employeeName); //Takeshi

// console.log(' 3 variables ',employeeId && employeeName && employeeAge); //Takeshi

// console.log(' 4 variables ',employeeId && employeeName && employeeAge && employeeAddress); //Takeshi

//Is my 'employeeId' or "employeeName" empty ?
// console.log(employeeId || employeeName); // 351

//If all variables are having values then print true else print false ?
var isAllVarsNotEmpty = !!employeeId && !!employeeName && !!employeeAge;
// console.log(isAllVarsNotEmpty);

var isAllVarsNotEmptys = !(!employeeId || !employeeName || !employeeAge);
// console.log(isAllVarsNotEmptys);

var t3 = '';
var t1 = 'hello';
var t2 = 'world';
var t4 =  '';

//hello world
// var t3 = t1+' '+t2+' '+'!!!';

t3 += t1; // t3 = t3 + t1 = hello
t3 += ' '; // t3 = t3 + ' ' = 'hello '
t3 += t2; // t3 = t3 + t2 = 'hello world'

// console.log(t3)

// Conditions in JS
if(!(!t1 || !t4)) {
  //console.log('Data is OK')
} else {
  //console.log('Data is 404')
}

if(!t1) {
  // console.log('t1 is missing value')
} else if(!t4) {
  // console.log('t4 is missing value')
} else {
  // console.log('Data is OK')
}

var firstName = 'Ram';
var lastName =  '';

var fullName = !lastName ?
  (true  ? '' : '') :
  firstName+' '+lastName;

// console.log(fullName);