//ES5 old version  of JS
//ECMASCRIPT 2009-2015 ES5
//ES6 - ECMAScript2015
//accepted parameters
function sum(a,b) {
  console.log(a,b);
  return a + b;
}

// console.log(new sum(2,5))

//passed arguments
// console.log(sum(1,3));

var person = {
  fname: "HH",
  age: 20,
  isEmployed: true,
  languages: ['en', 'hi'],
  profile: {
    about: 'Very good person'
  },
  greet: function g() {
    return 'Hello hi!!'
  },
  sum(a,b) {
    return a + b;
  }
}

// console.log(person['age']);
// console.log(person.greet());
// console.log(person['greet']());
// console.log(person.sum(2,4));

// function abc() {
//   abc();
// }

//Use functions as a class also
function User(userName) {
  var getName = function () {
    return userName
  }
  this.greet = function g() {
    return 'Hello!! '+getName();
  }
  this.newyKey = '';
}

var prakash = new User('Prakash');
ali = new User('Ali');

console.log(prakash);
console.log(ali.greet());

languages = '123';
console.log(languages);

