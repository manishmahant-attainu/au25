// console.dir(String);
// console.dir(Number);

function sum(a,b) {
  return a+b;
}

// console.dir(sum);

// console.dir(Object);

// console.dir(Array);

var fName = "John";

// console.dir(fName.length);

var person = {
  fname: 'John',
};

//var numbers = [ 1, 2, 3 ];

// numbers.join = function (a) {
//   console.log(a);
// }
//console.dir(numbers);
//console.dir(numbers.join(', '));

//console.dir(person);
// console.dir(person.join(' anystring '));

var rollnumber = '1234567654';
//console.log(rollnumber.length);
//console.dir(Number.isNaN(rollnumber));

var names = [ 'deepak', 'ali', 'amanjot' ];
//console.log(names.join(' '));

//prototype

//String
//Number
//Object
//Array

var employee = {
  fname: 'John',
  a:{
    b: {
      d: function () {
        return this;
      }
    },
    c : function()  {
      return this;
    }
  }
};
var e = employee.a.b.d;
console.log(e());

console.log(employee.a.b.d());

employee.age = 50;
employee['lname'] = 'Doe';
// console.log(employee);

var age = 10;
employee.ageTwoMultiple = function ()  {
  // console.log(this);
  return 2*this.age;
};

console.log(employee);

var twoMultiple = employee.ageTwoMultiple;
console.log(twoMultiple());

console.log(employee.ageTwoMultiple());

var a = [1];
var b = [1];

// console.log(a === b);


function hammingDistance(str1,str2) {
  if(str1.length !== str2.length) {
    return  0;
  }
  var distance = 0;
  for(var i=0; i<str1.length;i++){
    if(str1[i] !== str2[i])  {
      distance +=1;
    }
  }
  return distance;
}

function hammingDistanceHtml() {
  var str1 = document.getElementById('input1').value;
  var str2 = document.getElementById('input2').value;
  if(str1.length !== str2.length) {
    return  0;
  }
  var distance = 0;
  for(var i=0; i<str1.length;i++){
    if(str1[i] !== str2[i])  {
      distance +=1;
    }
  }
  document.getElementById('str1').innerText = str1;
  document.getElementById('str2').innerText = str2;
  document.getElementById('output').innerText = distance;
}

document.getElementById('str1').innerText = '<span>hello</span>';

// console.log(hammingDistance('equality','equalize'));
