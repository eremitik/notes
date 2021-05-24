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
