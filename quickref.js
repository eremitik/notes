"use strict"; //this line is commonly used, to not allow for looser interpretter behaviour.


function myLocalScrop(){
	var myVar = 5;
	console.log(myVar);
}
myLocalScrop();
//console.log(myVar); //<-- this will not work



//outerWear is outside of the function, but is GLOBAL so it will apply in all functions, code
var outerWear = 'T-Shirt';
function myOutfit(){
	var outerWear = 'sweater'
	return outerWear;
}
console.log(myOutfit())
console.log(outerWear)



//if you just put return in the function, it will give boolean output
function isLess(a, b){
	return a<b;
}
console.log(isLess(20, 15)) //<-- this will be false



//quick example of code with switch case and if's
var count = 0;
function cc(card){
	switch(card){
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
			count++;
			break;
		case 10:
		case "J":
		case "Q":
		case "K":
		case "A":
			count --;
			break;
	}
	var holdbet = 'Hold'
	if (count > 0){
		holdbet = 'Bet'
	}
	return count + " " + holdbet;
}

cc(2); cc('K'); cc(10); cc('K'); cc('A')
console.log(cc(4))



//you can use .XXX to call for items within an object
var testObj = {
	"hat": "ballcap",
	"shirt": "jersey",
	"shoes": "cleats"
};
console.log(testObj.hat);
console.log(testObj["hat"]) //this gives the same too



//you can pass the argument into a var and call the var within the object
var testObj = {
	10: "ballcap",
	11: "jersey",
	12: "cleats"
};
var itemNumber = 11;
console.log(testObj[itemNumber]); //this give you 'jersey'



//you can add more to the object
var testObj = {
	"hat": "ballcap",
	"shirt": "jersey",
	"shoes": "cleats"
};
testObj.pants = "joggers";
console.log(testObj.pants); // this gives you the new 'joggers'



//to use hasOwnProperty
var myObj = {
	gift: "pony",
	pet: "kitten",
	bed: "sleigh"
};

function checkObj(checkProp) {
	if (myObj.hasOwnProperty(checkProp)){
		return myObj[checkProp];
	} else {
		return "Not Found"
	}
}
console.log(checkObj("hello")) //this will return 'Not Found'
console.log(checkObj("gift")) //this will return 'pony'



//quick demo of objects in json format:
var myStorage = {
	"car": {
		"inside": {
			"glove_box": "maps",
			"passenger_seat": "crumbs"
		},
		"outside": {
			"trunk": "jack"
		}
	}
};

var gloveBoxContents = myStorage.car.inside.glove_box;
console.log(gloveBoxContents) //this will be 'maps'



//example of object as an array and calling for the second item
var myPlants = [
	{
		type: "flowers",
		list: [
			"rose",
			"tulip",
			"dandelion"
		]
	},
	{
		type: "trees",
		list: [
			"fir",
			"pine",
			"birch"
		]
	}
];
var secondTree = myPlants[1].list[1];
console.log(secondTree)					//this will print 'pine'



//add up numbers inside an array
var myArr = [9,10,11,12];
var myTot = 0;
for (var i=0; i<myArr.length; i++){
	myTot += myArr[i];
}
console.log(myTot) //42



//code to multiply through nested arrays
function multiplyAll(arr){
	var product = 1;
	for (var i=0; i<arr.length; i++){
		for (var j=0; j<arr[i].length; j++){
			product *= arr[i][j]
		}
	}
	return product;
}
var product = multiplyAll([[1,2],[3,4],[5,6,7]]);
console.log(product);  //5040



//generate random number between two arguments
function ranRange(min, max){
	return Math.floor(Math.random() * (max - min +1)) + min;
}
var myRand = ranRange(5,15);
console.log(myRand) //will be a random whole number between 5 and 15



//convert string to number
console.log(parseInt('7')) //will be 7



//using ternary operator which replaces if-else
function checkEqual(a,b) {
	return a===b ? 'true my man' : 'falsio fabio';
	// if a equals b, then 'true...' else 'false...'
}
console.log(checkEqual(5,5))  //returns 'true my man'



//compounded ternary operator
function checkSign(num){
	return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}
console.log(checkSign(1)); //returns 'positive'



// 'let' vs. 'var' = when using let, you don't need to type out 'var' again in the script to rename the variable.
// 'let' also is block specific, so if you need the variable to equal something for a quick minute, you can use 'let'
// https://www.youtube.com/watch?v=PkZNo7MFNFg&t=2128s  <-- for more on let vs. var, 2h35m


// 'const' is like 'let', but is read-only. Cannot be changed for the most part. However, it can be mutated
// 'const' variables are usually defined in ALL CAPS to differentiate.

const MATH_PI = 3.14
Object.freeze(MATH_PI) //this will freeze the variable. It CANNOT be changed, mutated, etc. ever again.
console.log(MATH_PI)



function add (x){
  return function(y){
    return x+y
  }
}
const addTwo = add(100)
console.log(addTwo(50))



//map method all in one
var arr = ['a', 'b', 'c']
var newArr = arr.map(function (value, index, array){
  console.log(array)
  return `${index} :${value}! ${this.name}`
}, {
  name: 'dom',
  age: 55
})
console.log(newArr)



//.sort
XXXX.sort(function(a,b){return a-b})



//reverse loop
for (i=n; i>=1; i--)



//objects
Object.keys(xxx)      //array of keys
Object.values(xxx)    //array of values
Object.entries(xxx)   //array of the object



//length of string within array
array[#][0].length    //# is the position of string in array



//get a number within a number
n.toString().charAt(#)  //# is the position of the number you want in the number



//get length of a number
n.toString().length     



//object dot and bracket notation
obj['xxx']        //this is better as can input a variable instead
obj.xxx



//splicing, which is replacing something in an array
testArr.splice(0,1,'foo')   //0 is the position, 1 is the # of values to replace, 'foo' is what you inject



//add properties to object
obj['xxx'] = '#'            //xxx is the new key, # is the value
obj.xxx = '#'



//loop through an object
for (key in xxx)
  console.log(key, xxx[key])    //



//combine values in an array into one string
newArr.join('')



//split a number into its individual numbers
n.toString().split('')
`${n}`.split('')        //quicker



//.map
XXX.split(' ').map(Number)  //for converting string into array of numbers



//is whole number or not
n === parseInt(n, 10)       //the 10 is the radix, i.e. base 10 (2 is binary, 16 hexadecimal, etc.)



//forEach loop
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
days.forEach(function(day, index){console.log(`${day} is ${index+1}/7 out of the week.`)})



//calling nested functions
console.log(XXX(a)(b))    //you can double up the vars, without renaming a var first then passing through



//reduce method
newArr.reduce((a,b)=>a+b,0)   //the ',0' at the end catches errors when there are no values in the newArr



//using i in for loop as counter
for (i=0; n>X; i++){
  foobar
} return i;    //foobar does what you want, and at the end just return i as its counting



//stringify number quickly
`${num}`      //no need to type .toString() 



//memo for counting duplicate in string or number
/*create a list first, of counting each occurance of character with a for loop.
One you have the list, you can filter out characters with more than one occurance. See codewars 'Counting Duplicates'*/



//finding repeated or duplicate character or letter in a string or number
for(var i=0; i<word.length; i++){
  if(word.lastIndexOf(word[i]) !== word.indexOf(word[i]))  //finds unique position from behind, and if its NOT equal to position from front, the char is repeated. 



//another way to only leave unique values using higher order functions
var nonUnique = "ababdefegg";
var unique = nonUnique.split('').filter(function(item, i, ar){ return ar.indexOf(item) === i; }).join('');



//comparing two arrays, and trying to find unique values
function array_diff(a, b) {
  return a.filter(function(i){return b.indexOf(i) === -1})}   //when i is not found in array b, indexOf will give -1 as result.
/*for loop format too*/
for(var i=0; i<a.length; i++){
        if(b.indexOf(a[i]) === -1)



//clever way to update two values within for loop
var result = [], last
for (var i = 0; i < it.length; i++) {
    if (it[i] !== last) {
      result.push(last = it[i])



//for loop which has a variable within the loop condition
for(var i=1, sum=0; sum<m; sum+=i*i*i, i++);    //the sum gets incrementally calc'd, no need to declare below the for loop
    return sum===m ? (i-1) : -1;



//to breakup string into pairs of characters
  for (i=0; i<str.length; i+=2)
    pairs.push(str.substring(i,i+2))  //this pushes pairs of characters into an array, i.e. ['ab', 'cd', 'e']



//when you want to loop through array, so every posibble iteration
  for (i=0; i<numbers.length; i++){
    for (j=i+1; j<numbers.length; j++){}}   // for [1,2,3], this would loop through: 1,2  1,3  2,3  



//convert string array to numbers with .map
let newArr = XYZ.map(Number)



//to chop or separate string into n-length characters, words or numbers
  for (i=0; i<d.length; i+=8){
    newArr.push(d.substring(i,i+8))



//to chop or separate array into n-length characters in each array
  let k=0
  while (k<arr.length){
    ansArr.push(arr.slice(k,k+=n))
  }



//for chopping and more looping examples, look at Multiplication tables solutions from codewars.



//ternary operation, with multiple outcomes for each t/f condition
foobar test ? (a result, b result) : (c result, d result)



// quick demo of calling methods without '.' way
let name = 'Mikio'
let method = 'toUpperCase'
console.log(name[method]())



// quick demo of closure
let inner = (x) => console.log(x)
let cb = (func) => {
  arg = 'woohoo'
  func(arg)
}
console.log(cb(inner))



// no need for another return after ':' here, as the return is implied. 
memoize = (func) => {
    let cache = {}
      return (...args) => cache[`${args}`]
        ? cache[`${args}`] 
        : cache[`${args}`] = func(...args)
            
      /*  
      return (...args) => {
        if (cache[`${args}`]) {
          cache[`${args}`]
        } else {
          return cache[`${args}`]  = func(...args)
        }
      }
      */
 }
