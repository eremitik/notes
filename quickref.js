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

