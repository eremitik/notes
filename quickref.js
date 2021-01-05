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



