var a = 2;
function sum(b) {
  return a+b;
}

console.log(sum(10));
var a = 12;
// ES5


function main() {
  var fname = "John";

  function displayName() {
    return fname;
  }

  return displayName();
}


console.log(main());
// console.log(fname);


function outter(x) {
  // var b = 2;
  function inner(y)  {
    return x+y;
  }
  return inner;
}

var add5 = outter(5);
console.log(add5(10));

var add10 = outter(10);
console.log(add10(10));

function counter() {
  var count = 0;
  // function updateCount(val) {
  //   count += val;
  // }
  return {
    increment: function() {
      count += 1;
    },
    decrement: function() {
      count -= 1;
    },
    value: function() {
      return count;
    }
  }
}
var counterOne = counter();
console.log(counterOne.value());
counterOne.increment();
console.log(counterOne.value());
counterOne.increment();
console.log(counterOne.value());
counterOne.decrement();
console.log(counterOne.value());

// var obj = {
//   increment: function() {
//     console.log(1);
//   },
//   decrement: function() {
//     console.log(-1);
//   },
//   value: function() {
//     console.log('count');
//   }
// }

// console.log(obj.increment());

// function aa() {
//   return function bb() {
//     return function cc() {
//       return function  dd() {
//         return true;
//       }
//     }
//   }
// }

var lname = 'Doe';

function getData() {
  var fname = "He";
  return fname+' '+lname;
}

console.log(getData());

function sum(obj) {
  console.dir(Object.keys(obj));
  return Object.keys(obj)
    .reduce((sum,key)=>sum+parseFloat(obj[key]||0),0);
}
sum({a:'a'});