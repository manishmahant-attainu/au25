var numbers = [1,2,3,4,5,6];
var str = 'hello';

var chaters = '';
for(var i=0; i < 5; i++) { // 0 - 3
  var ch = str[i];
  // console.log(number*number);

  chaters = chaters+' '+ch;
}
console.log(chaters);


// for in
var user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 18,
  k: 'kk'
};

// console.log(user['firstName']);
// console.log(user.lastName);

for( var k in numbers ) {
  // console.log(numbers[k]);
  // console.log(user[k]);
}

// for of
for(var n of str) {
  // console.log(n);
}

//Reference
var mixed = [1, true, 'hello'];
var mixed2 = mixed;

// console.log(mixed[0]);
mixed[0] = 4;

//0,1,2,3,4,5,6,7
mixed[3] = 'world';
mixed.push('hey');
mixed.push('hi');
// console.log(mixed[5]);

mixed.pop();

mixed.splice(2,1);

// console.log(mixed2);
var names = ['A','B','C'];
// console.log(names.values().next());


var numbers = [1,2,3,4,5,6];

//0 1 2 3 4 5
//1 2 3 4 5 6

// var sqNumbers = [];
// create a new array which has square of each number in "numbers" array
// for(var i = 0; i<numbers.length; i++){
//   var num = numbers[i];
//   sqNumbers.push(num*num)
// }

var a = "name";
var b = 1;
var c = true;
var d = [];
var e = {};

var square = function (num,ide,arr) {
  // console.log(ide);
  // console.log(arr);
  return num*num;
}

var cube = function (num,ide,arr) {
  // console.log(ide);
  // console.log(arr);
  return num*num*num;
}

var powerN = function (num,ide,arr) {
  // console.log(ide);
  // console.log(arr);
  return num**(ide+1);
}

var pnnumbers = numbers.map(powerN);
console.log(pnnumbers);
console.log(numbers);


// callback functions
// those functions which are passed as a parameter/argument to anaother function

// var cubeNumbers = numbers.map(cube);
// console.log(cubeNumbers)

// var sqNumbers = [];
// for(var i = 0; i<numbers.length; i++){
//   var num = square(numbers[i],i,numbers);
//   sqNumbers.push(num)
// }

// console.log(sqNumbers);

function sum(a,b) {
  return a+b;
}

sum(2,5);

function callback() {
  console.log('callback is called')
}

function mainFunction(c) {
  console.log('mainFunction is called then');
  console.log(typeof c);
  c();
}

mainFunction(callback);
