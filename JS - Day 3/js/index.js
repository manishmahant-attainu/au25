
function canHaveDL(age) {
  // switch (age) {
  //   case age>=18:

  //     break;

  //   default:

  //     break;
  // }
  if(age >= 18) {
    return true;
  } else {
    return false;
  }
}

console.log(canHaveDL(18));

function getBtnColor(status) {
  // if(status === 'danger') {
  //   return 'red';
  // } else if(status === 'warning') {
  //   return 'yellow';
  // } else if(status === 'primary') {
  //   return 'blue';
  // } else if(status === 'success') {
  //   return 'green';
  // } else {
  //   return 'grey';
  // }
  var output = 'grey';
  switch (status) {
    case 'alert':
    case 'danger':
      output = 'red';
      break;
    case 'warning':
      output = 'yellow';
      break;
    case 'primary':
      output =  'blue';
      break;
    case 'success':
      output =  'green';
      break;
    default:
      break;
  }
  return output;
}
console.log(getBtnColor('alert'));

// get number of people who are eligible for getting a DL
// age >= 18
var ages = [ 10, 15, 18, 12, 23, 30, 5 ];
//ages[2]
// iterate through the array
// while || for loops

//While
var i = 7;
var numberOfPeople = 0;
var numberOfPeopleNotEligible = 0;
while(i < 7) {
  //perform whatever is written here
  if(ages[i] >= 18) {
    numberOfPeople += 1;
  }
  ages[i] >= 18 ?
    numberOfPeople++ : // numberOfPeople = numberOfPeople + 1;
    numberOfPeopleNotEligible++;
  //ages[0]
  //after performing the task increase the value of i
  i++;
}
console.log('while loop ended');
console.log(numberOfPeople);

var arr = [ 10, 20, 15 ];

//loop will run atleast 1 time
do {
  //calculate the length  of the array and  store it in a variable;

  //perform whatever is written here
  if(ages[i] >= 18) {
    numberOfPeople += 1;
  }
  ages[i] >= 18 ?
    numberOfPeople++ : // numberOfPeople = numberOfPeople + 1;
    numberOfPeopleNotEligible++;
  //ages[0]
  //after performing the task increase the value of i
  i++;
}
while(i < 7)
