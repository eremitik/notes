'use strict';

console.log(`

***Iterate over an Object***`)
//Iterate over an Object
let student1 = {
  firstName: 'Steven',
  lastName: 'Hancock',
  student: true,
  quiz1: 90,
  q2: 70,
  q3: '85',
  quiz4: 100,
  quiz5: 0
};

for (let key in student1){
  console.log(key);             //returns the key names, like firstName, lastName, etc.
  console.log(student1[key]);   //returns the values of each 'key'
};

//cleaner version
for (let key in student1){             
  console.log(key, student1[key]);   
};

console.log(Object.keys(student1))    //returns an array of elements
console.log(Object.values(student1))  //returns an array of values
console.log(Object.entries(student1)) //makes an array of an array

const getScores = function(obj) {
  return Object.values(obj).filter(val => !isNaN(val) && typeof val !== 'boolean');
};
let scores = getScores(student1);
console.log(scores)


console.log(`

  `)








console.log(`

***Iterate over the Properties of an Object + Childen Objects***`)
//Iterate over the Properties of an Object + Childen Objects
let person = {
  firstName: 'Steven',
  lastName: 'Hancock',
  email: 'foo@bar.com',
  type: {
    type1: 'admin',
    type2: 'user'
  },
  active: true,
  address: {
    street:{
      street1: '100 N. Main',
      street2: 'Apt. #4'
    },
    city: 'Lehi',
    zip: 10001
  }
};

//doesn't get values in child object
for (let key in person){
  console.log(key, person[key])
}





console.log(`

***look through child object:`)
//will look through the child object and give value
const isObject = function(val){
  if (val === null){
    return false;
  }
  return (typeof val === 'object');
}

for (let val in person){
  if (isObject(person[val])){
    for (let val2 in person[val]){
      console.log(val2, person[val][val2])
    }
  } else {
    console.log(val, person[val]);
  }
}




console.log(`

***function for looking through object all the way through:`)
//function to look through objects for child objects
const objProps = function(obj){
  for (let val in obj){
    if (isObject(obj[val])){
      objProps(obj[val]);
    } else {
      console.log(val, obj[val]);
    }
  }
}

objProps(person);








console.log(`

***accessing properties in Objects***`)
//Ways of accessing properties in Objects
const benjaminButton = {
  age: 25,
  family: { son: 'Benadict Button'},
  'favorite-songs': ['We are young', 'Young love', 'We aint getting older'],
  '5yearPlan': 'Get younger'
}
const age = benjaminButton.age;     //dot method, returns 25
console.log(age)

const son = benjaminButton.family.son;
console.log(son)

const granddaughter = benjaminButton?.family?.daughter?.granddaughter; //returns undefined, as granddaughter isn't there. The '?' acts as ifs
console.log(granddaughter)

const faveSongs = benjaminButton['favorite-songs']; //square brackets method
const myKey = '5yearPlan';
console.log(benjaminButton[myKey]);

const {family: oldFamily} = benjaminButton; //destructuring method
console.log(oldFamily)









console.log(`

***adding key-value pair into an object***`)
//Adding key-value pairs into an object
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

foods.bananas = 13
foods['grapes'] = 35
foods.strawberries = 27
console.log(foods)
console.log(foods.strawberries)
console.log(foods['strawberries'])

let strwbrrs = 'strawberries'
console.log(foods[strwbrrs])







/*Good links:
https://javascript.info/object#square-brackets
*/




