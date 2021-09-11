//codewars solutions

//Credit Card Mask (7 kyu)
function maskify(cc){
  if (cc.length<4)
    return cc
  else
    return cc.length>0 ? Array(cc.length-3).join("#") + cc.slice(cc.length-4) : "";
}



//Keep Hydrated (8 kyu)
function litres(time) {
  return Math.floor(time*0.5)
}



//Isograms (7 kyu)
function isIsogramtwo(str) {
  for (i=0; i<str.length; i++){
    for (j=i+1; j<str.length; j++){
      if (str[j] == str[i]){
        return true
      }
    }
  }
  return false
}



//Get Mean (8 kyu)
function getAverage(marks){
  var sum = 0;
  for(i=0; i<marks.length; i++){
    sum += marks[i];
  }
  return Math.floor(sum / marks.length)
}



//Reversed Words (8 kyu)
function reverseWords(str){
  return str = str.split(' ').reverse().join(' ')
}



//Square(n) Sum (8 kyu)
function squareSum(numbers){
  var square = 0;
  for (i=0; i<numbers.length; i++){
    square += numbers[i]*numbers[i]
  }
  return square
}



//Gravity Flip (8 kyu)
function flip(d, a){
  if (d=="R"){
    return a.sort(function(a,b){return a-b});
  } else if (d=="L") {
    return a.sort(function(a,b){return b-a});
  }
}




//L1:Set Alarm (8 kyu)
function setAlarm(employed, vacation){
  if (employed==true && vacation==false)
    return true
  else
    return false
}




//Multiplication table for number (8 kyu)
function multiTable(number){
  let temp = [];
  let items = '';
  for (i=0; i<=10; i++){
    temp.push(number*i)
  } for (j=1; j<=9; j++){
    items += (`${j} * ${number} = ${temp[j]}\n`)
  }
  items += (`10 * ${number} = ${temp[10]}`)   //this is to remove the last \n
  return items
}

//improved version
function multiTableImproved(number){
  let items = '';
  for (i=1; i<=10; i++){
    items += (`${i} * ${number} = ${i*number}\n`)
  }
  return items.slice(0, -1)   //this removes the last \n at the end!!
}



//Complementary DNA (7 kyu)
function DNAStrand(dna){
  var str = ''
  for (var i=0; i<dna.length; i++){
    dna.charAt(i) == 'A' ? str += 'T' : 
    dna.charAt(i) == 'T' ? str += 'A' : 
    dna.charAt(i) == 'C' ? str += 'G' : 
    dna.charAt(i) == 'G' ? str += 'C' : ''
  }
  return str
}



//Array plus array (8 kyu)
function arrayPlusArray(arr1, arr2) {
  var sum = 0
  for (i in arr1)
    sum += arr1[i]
  for (j in arr2)
    sum += arr2[j]
  return sum
}



//Returning Strings (8 kyu)
function greet(name){
  return `Hello, ${name} how are you doing today?`
}



//Filling an array (part 1) (8 kyu)
function arr(n){
  var array = [];
  for (i=0; i<n; i++){
    array.push(i)
  }
  return array
}



//N-th Power (8 kyu)
function index(array, n){
  return n<array.length ? array[n]**n : -1
}



//A wolf in sheep's clothing (8 kyu)
function warnTheSheep(queue){
  var wolf = queue.indexOf('wolf')
  return queue[wolf+1]=='sheep' ? 
  `Oi! Sheep number ${(queue.length)-(wolf+1)}! You are about to be eaten by a wolf!` : 
  `Pls go away and stop eating my sheep`
 }



//Beginner Series #2 Clock (8 kyu)
function past(h,m,s){
  return mili = h*3600000 + m*60000 + s*1000



//Larger Product or Sum (7 kyu)
function sumOrProduct(array, n){
  var sorted = array.sort(function(a,b){return b-a}).reverse();
  var product = 1;
  var sum = 0;

  for (i=0; i<=n-1; i++){
    product *= sorted[i]
  }

  for (j=sorted.length-1; j>=sorted.length-n; j--){
    sum += sorted[j]
  }

  return sum===product ? 'same' : sum>product ? 'sum' : 'product'
}



//You Can't Code Under Pressure #1 (8 kyu)
function doubleInteger(i) {
  return i*2
}



//Are You Playing Banjo? (8 kyu)
function areYouPlayingBanjo(name) {
  return name[0] === 'r' || name[0] === 'R' ? `${name} plays banjo` : `${name} does not play banjo`
}




//Prime Numbers (6 kyu) - my solution works, but times out. Have to reattempt. 
// function isPrime(num) {
//   if (num === 0 || num === 1 || num < 0){
//     return false
//   } else {
//     for (var i=2; i<num; i++){
//       if (num%i===0){
//         return false
//       }
//     }
//   }
//   return true
// }



//Nth power rules them all!
function modifiedSum(a, n) {
  var calc = 0
  var sum = 0
  for (i=0; i<a.length; i++){
    calc += a[i]**n
    sum += a[i]
  }
  return calc-sum
}



//How many consecutive numbers are needed?
function consecutive(arr){
  arr = arr.sort(function(a,b){return a-b})
  diff = arr[arr.length-1] - arr[0]
  console.log(diff)
  return diff > arr.length ? diff+1-arr.length : 0
}



//Row Weights (7 kyu)
function rowWeights(array){
  var sum1 = 0
  var sum2 = 0
  var newArray = []
  for (i=0; i<array.length; i+=2)
    sum1 += array[i]
    newArray.push(sum1)

  for (j=1; j<array.length; j+=2)
    sum2 += array[j]
    newArray.push(sum2)

  return newArray
}

var array = [50, 60, 70, 80]
console.log(rowWeights(array));



//Maximum Product (7 kyu)
function adjacentElementsProduct(array) {
  var a = array[0]*array[1]
  var b = a

  for (i=0; i<array.length; i++){
    var a = array[i]*array[i+1]
    if (a>b){
      b=a;
    }
  }
  return b
}



//Invert values (8 kyu)
function invert(array) {
  var newArr = [];
  for (i=0; i<array.length; i++){
    newArr.push(array[i]*-1)
  }
  return newArr 
}



//Generate range of integers (8 kyu)
function generateRange(min, max, step){
    var newArr = []
    for (i=min; i<max; i+=step){
      newArr.push(i)
    }
    newArr[newArr.length-1]+step<=max ? newArr.push(max) : ''
    return newArr
}

//better version
function generateRange(min, max, step){
    var newArr = []
    for (i=min; i<=max; i+=step){
      newArr.push(i)
    }
    return newArr
}



//Grasshoper-Summation (8 kyu)
var summation = function (num) {
  var sum = 0
  for (i=0; i<=num; i++){
    sum += i
  }
  return sum
}



//Is he gonna survive? (8 kyu)
function hero(bullets, dragons){
  if (bullets/2 >= dragons){
    return true
  }
  return false
}



//Can we divide it? (8 kyu)
function isDivideBy(number, a, b) {
  return number%a===0 && number%b===0
}



//The falling speed of petals (8 kyu)
function sakuraFall(v) {
  return v>0 ? 400/v : 0
}



//Hello,Name or World! (8 kyu)
function hello(name) {
  if (name== 'undefined' || name == null || name == ''){
    return 'Hello, World!'
  } else {
  name = name.toLowerCase()
  name = name.charAt(0).toUpperCase() + name.slice(1)
  return `Hello, ${name}!`
  }
}



//Beginner Series #4 Cockroach (8 kyu)
function cockroachSpeed(s) {
  return Math.floor(s*27.78)
}



//Grasshopper-If/else syntax debug (8 kyu)
function checkAlive (health) {
  if (health <= 0) {
    return false
  } else {
    return true
  }
}



//Reversed sequence (8 kyu)
function reverseSeq (n){
  var newArr = [];
  for (i=n; i>=1; i--){
    newArr.push(i)
  }
  return newArr
}



//Find the first non-consecutive number (8 kyu)
function firstNonConsecutive (arr) {
  var newArr = []
  var position = 0
  for (i=0; i<arr.length-1; i++){
    newArr.push(arr[i+1]-arr[i])
  }
  position = newArr.indexOf(newArr.find(num => num > 1))
  
  if (arr[position+1] === arr[0]){
    return null
  } else
  return arr[position+1]
  }



//Grasshopper - Function syntax debugging (8 kyu)
function main (verb, noun){
  return `${verb} ${noun}`
}



//Grasshopper-Debug sayHello (8 kyu)
function sayHello(name) {
  return `Hello, ${name}`
}




//Holiday VI-Shark Pontoon (8 kyu)
function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
  dolphin ? sharkSpeed=sharkSpeed/2 : ''
  return pontoonDistance/youSpeed < sharkDistance/sharkSpeed ? 'Alive!' : 'Shark Bait!'
}



//Grasshopper - Debug (8 kyu)
function weatherInfo(temp){
  var c = (temp-32)*(5/9)
  return c > 0 ? `${c} is above freezing temperature` : `${c} is freezing temperature`
}



//Capitalization and Mutability (8 kyu)
function capitalizeWord(word) {
  word = word.toLowerCase();
  word = word.charAt(0).toUpperCase() + word.slice(1);
  return word;
}



//Grasshopper - Messi Goals (8 kyu)
var laLigaGoals = 43
var championsLeagueGoals = 10
var copaDelReyGoals = 5

var totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals



//Area or Perimeter (8 kyu)
const areaOrPerimeter = function(l , w) {
  return l===w ? l*w : (l*2)+(w*2)
};



//Maximum Multiple (7 kyu)
function maxMultiple(divisor, bound){
  let n = Math.floor(bound/divisor)
  return n *= divisor
}



//Jumping Number (Special Numbers Series #4) (7 kyu)
function jumpingNumber(n){
  for(i=0; i<n.toString().length-1; i++){
    if (Math.abs(n.toString().charAt(i+1) - n.toString().charAt(i)) !== 1){
      return 'Not!!'
    }
  }
  return "Jumping!!"
}



//Training JS #5: Basic data types--Object (8 kyu)
function animal(obj){
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`
}



//Welcome! (8 kyu)
var db = {
  english: 'Welcome',
  czech: 'Vitejte',
  danish: 'Velkomst',
  dutch: 'Welkom',
  estonian: 'Tere tulemast',
  finnish: 'Tervetuloa',
  flemish: 'Welgekomen',
  french: 'Bienvenue',
  german: 'Willkommen',
  irish: 'Failte',
  italian: 'Benvenuto',
  latvian: 'Gaidits',
  lithuanian: 'Laukiamas',
  polish: 'Witamy',
  spanish: 'Bienvenido',
  swedish: 'Valkommen',
  welsh: 'Croeso'
}


function greet(language) {
  return db[language] ? db[language] : 'Welcome'
  }



//Testing 1-2-3 (7 kyu)
var number=function(array){
  var newArr = [];
  for (i=0; i<array.length; i++){
    newArr.push(`${i+1}: ${array[i]}`)
  }
  return newArr
}



//Make a function that does arithmetic! (7 kyu)
function arithmetic(a, b, operator){
  return operator === 'add' ? a+b : operator === 'subtract' ? a-b : operator === 'multiply' ? a*b : a/b
}



//Who is the killer? (7 kyu)
function killer(suspectInfo, dead) {
  for (let key in suspectInfo)
    for (let name in suspectInfo[key])
    if (dead[0] === suspectInfo[key][name] || dead[1] === suspectInfo[key][name]){
      return key
    }
}

//alternate solution
function killer(suspectInfo, dead) {
  for (let key in suspectInfo)
    for (i=0; i<suspectInfo[key].length; i++)
      for (j=0; j<dead.length; j++)
        if (suspectInfo[key][i] === dead[j])
          return key
}



//Check the exam (8 kyu)
function checkExam(array1, array2) {
  var tally = 0
  for (i=0; i<array1.length; i++){
    array1[i] === array2[i] ? tally += 4 : array2[i] === "" ? tally += 0 : tally -= 1
  }
  return tally<0 ? 0 : tally
}



//Valid spacing (7 kyu)
function validSpacing(s) {
  var broken = 0
  s.charAt(0) === " " ? broken += 1 : s.charAt(s.length-1) === " " ? broken += 1 : broken += 0

  for (i=0; i<s.length; i++){
    (s.charAt(i) + s.charAt(i+1) ) === "  " ? broken += 1 : broken += 0
  }
  return broken>=1 ? false : true
}



//Dominant array elements (7 kyu)
function solve(arr){
  newArr = []
  for (i=0; i<arr.length; i++){
    var highest = arr[i]
    for (j=i+1; j<arr.length; j++){
    if (highest < arr[j]){
      highest = arr[j]
      i = j
      }
    }
    newArr.push(highest)
    for (k=0; k<newArr.length; k++){
    }
  }
  newArr = [...new Set(newArr)]
  return newArr
};

//alternative
function solve(arr){
  let newArr = [arr[arr.length-1]]
  for (i=arr.length; i>=0; i--){
      if (arr[i]>newArr[0]){
        newArr.unshift(arr[i])
      }
  }
  return newArr
};



 //Special Number (Special Number Series #5) (7 kyu)
function specialNumber(n){
  if (n.toString().length>1){
    for(i=0; i<n.toString().length; i++){
      if(n.toString().charAt(i) === '6' || 
        n.toString().charAt(i) === '7' || 
        n.toString().charAt(i) === '8' || 
        n.toString().charAt(i) === '9')
        return "NOT!!"
    }
  } else if (n===6 || n===7 || n===8 || n===9){
      return "NOT!!"
  }
  return "Special!!"
}



//Will there be enough space? (8 kyu)
function enough(cap, on, wait) {
  return cap>=on+wait ? 0 : on+wait-cap
}



//Switch it Up!
function switchItUp(n){
  let dict = {
    '0': 'Zero',
    '1': 'One',
    '2': 'Two',
    '3': 'Three',
    '4': 'Four',
    '5': 'Five',
    '6': 'Six',
    '7': 'Seven',
    '8': 'Eight',
    '9': 'Nine'
  }

  return dict[n]
}



//Parse float (8 kyu)
function parseF(s) {
  let a = parseFloat(s)
  return a===undefined || isNaN(a)===true ? null : parseFloat(s)
}



//String repeat (8 kyu)
function repeatStr (n, s) {
  let word = ''
  for (i=1; i<=n; i++){
    word += s
  }
  return word
}



//Replace all items
function replaceAll(seq, find, replace) {
  var newArr = []
  var newStr = '' 
  if (typeof seq[0]==='string'){
    for (j=0; j<seq.length; j++){
      seq.charAt(j)===find ? newStr += replace : newStr += seq.charAt(j)
      }
  } else {
    for (i=0; i<seq.length; i++){
      seq[i]===find ? newArr.push(replace) : newArr.push(seq[i])
      }
  }
  return typeof seq[0]==='string' ? newStr : newArr
}



//Vowel Count (7 kyu)
function getCount(str) {
  var vowelsCount = 0;
  var vowels = ['a', 'e', 'i', 'o', 'u']
  for (i=0; i<str.length; i++){
    var control = str.charAt(i)
    for (j=0; j<vowels.length; j++){
      control===vowels[j] ? vowelsCount += 1 : vowelsCount += 0
    }
  }
  return vowelsCount;
}



//Mumbling (7 kyu)
function accum(s) {
  let newArrA = []
  let newArrB = []
  for (i=0; i<s.length; i++){
    newArrA.push(s.charAt(i).toLowerCase().repeat(i+1))
      }
  for (j=0; j<newArrA.length; j++){
    newArrB.push(newArrA[j].charAt(0).toUpperCase() + newArrA[j].slice(1))
  }
  return newArrB.join('-')
}

//better version
function accum(s){
  let newArr = []
  for (i=0; i<s.length; i++){
    newArr.push(s.charAt(i).toUpperCase() + s.charAt(i).toLowerCase().repeat(i))
  }
  return newArr.join('-')
}



//Highest and Lowest (7 kyu)
function highAndLow(numbers){
  var newArr = numbers.split(' ').map(Number) //don't fully understand this yet
  newArr.sort(function(a,b){return a-b})
  var str = ''
  str += newArr[newArr.length-1] + ' ' + newArr[0]
    return str
}



//Even or Odd (8 kyu)
function even_or_odd(n) {
  n = Math.abs(n)
  return n%2===0 ? 'Even' : 'Odd'
}



//Sum of positive (8 kyu)
function positiveSum(arr) {
  var tally=0
  for (i=0; i<=arr.length; i++){
    arr[i]>0?tally+=arr[i]:''
  } 
  return tally
}




//Get the Middle Character (7 kyu)
function getMiddle(s){
  var n = s.length
  return n%2===0 ? s.charAt((n/2)-1) + s.charAt(n/2) : s.charAt(n/2)
}



//Opposite number (8 kyu)
function opposite(n) {
  return n*-1
}



//Remove First and Last Character (8 kyu)
function removeChar(str){
  var newStr = ''
  for(i=1; i<str.length-1; i++){
    newStr += str.charAt(i)
  }
  return newStr
};



//Descending Order (7 kyu)
function descendingOrder(n){
  var newArr = []
  var newNum = 0
  for (i=0; i<=n.toString().length; i++){
    newArr.push(n.toString().charAt(i))
  }
  newArr = newArr.sort(function(a,b){return b-a})
  newNum = newArr.join('')
  return parseInt(newNum)
}



//Return Negative (8 kyu)
function makeNegative(n) {
  return n<0 ? n : n*-1
}



//Remove String Spaces
function noSpace(x){
  let newStr = ''
  for (i=0; i<x.length; i++){
    x.charAt(i) === ' ' ? '' : newStr += x.charAt(i)
  }
  return newStr
}



//Square Every Digit (7 kyu)
function squareDigits(num){
  let newArr = []
  for (i=0; i<num.toString().length; i++){
    newArr.push(num.toString().charAt(i)*num.toString().charAt(i))
  }
  return parseInt(newArr.join(''))
}



//Convert boolean values to strings 'Yes' or 'No' (8 kyu)
function boolToWord( bool ){
  return bool ? 'Yes' : 'No'
}



//Shortest Word (7 kyu)
function findShort(s){
  let words = s.split(' ').sort(function(a,b){return a.length-b.length})
  return words[0].length
}



//You're a square! (7 kyu)
function isSquare(n){
  return parseInt(Math.sqrt(n),10)===(Math.sqrt(n)) ? true : false
}



//Exes and Ohs (7 kyu)
function XO(str) {
    let xcount = 0
    let ocount = 0
    for (i=0; i<str.length; i++){
      str.toLowerCase().charAt(i)==='x' ? xcount+=1 : str.toLowerCase().charAt(i)==='o' ? ocount+=1 : ''
    }
    return xcount===ocount
}



//Beginner Series #3 Sum of Numbers (7 kyu)
function getSum( a,b ){
  var tally = 0
  if (a<b){
    for(i=a; i<=b; i++){
      tally += i
      }
    } else if (b<a) {
      for (j=b; j<=a; j++){
        tally += j
        }
    }
  return a===b?a:tally
}



//Growth of a Population (7 kyu)
function nbYear(p0, percent, aug, p) {
  for (i=0; p0<p; i++){
    p0 += (p0*(percent/100))+aug
    console.log(p0)
  }
  return i
}



//List Filtering (7 kyu)
function filter_list(l) {
  let newArr = []
  for(i=0; i<l.length; i++){
    typeof l[i]==='number' ? newArr.push(l[i]) : ''
  }
  return newArr
}



//Reversed Strings (8 kyu)
function solution(str){
  let newStr = ''
  for(i=str.length; i>=0; i--){
    newStr+=str.charAt(i)
  }
  return newStr
}



//Counting sheep... (8 kyu)
function countSheeps(arr) {
  let counter = 0
  for(i=0; i<arr.length; i++){
    arr[i]===true ? counter+=1 : ''
  }
  return counter
}



//Convert a Number to a String! (8 kyu)
function numberToString(n) {
  return n.toString()
}



//Sum of two lowest positive integers (7 kyu)
function sumTwoSmallestNumbers(n) {  
  let foo = n.sort(function(a,b){return a-b})[0]
  let bar = n.sort(function(a,b){return a-b})[1]
  return foo + bar
}



//Find the next perfect square! (7 kyu)
function findNextSquare(sq) {
  return Number.isInteger(Math.sqrt(sq)) ? (Math.sqrt(sq)+1)*(Math.sqrt(sq)+1) : -1
}



//Century From Year (8 kyu)
function century(year) {
  var check = parseInt(year.toString().charAt(0))
  var length = year.toString().length

  if (length===4) {
    check = parseInt(year.toString().charAt(0)+year.toString().charAt(1))
  } else if (length===3) {
    check = parseInt(year.toString().charAt(0))
  }
  return check>=year/100 ? check : Math.floor(year/100)+1
}

//easier version
function century(year){
  return Math.ceil(year/100)
}



//Is n divisible by x and y? (8 kyu)
function isDivisible(n, x, y) {
  return n%x===0 && n%y===0
}



//Convert number to reversed array of digits (8 kyu)
function digitize(n) {
  var str = n.toString()
  var newArr = []
  for (i=0; i<str.length; i++){
    newArr.unshift(parseInt(str.charAt(i)))
  }
  return newArr
}



//Basic Mathematical Operations
function basicOp(op, n1, n2){
  return op==='+'?n1+n2:op==='-'?n1-n2:op==='*'?n1*n2:n1/n2
}



//Conver a String to a Number! (8 kyu)
var stringToNumber = function(str){
  return parseInt(str)
}



//Printer Errors (7 kyu)
function printerError(s) {
    var denom = s.length
    var num = 0
    var dict = ['n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    for (i=0; i<denom; i++){
      control = s.charAt(i)
      for (j=0; j<dict.length; j++){
        control===dict[j]?num+=1:''
      }
    }
    return `${num}/${denom}`
}



//Abbreviate a Two Word Name (8 kyu)
function abbrevName(name){
  var newName = ''
  newName = name.split(' ')
  return `${newName[0].toUpperCase().charAt(0)}.${newName[1].toUpperCase().charAt(0)}`
}



//Multiples of 3 or 5 (6 kyu)
function solution(number){
  var newArr = []
  for (i=number-1; i>0; i--){
    i%3===0 && i%5===0 ? newArr.push(i) : i%3===0 ? newArr.push(i) : i%5===0 ? newArr.push(i) : ''
  }
  return newArr.reduce((a,b)=>a+b,0)
}



//Find the odd int (6 kyu)
function findOdd(a) {
  var list = {}
  for (i=0; i<a.length; i++){
    if (!list[a[i]])  //search if value from 'a' is a key in list already
      list[a[i]]=0    //if not already in list, add property as 'a[i]': 0
      list[a[i]]++    //add 1 to the value for everytime a[i] shows up
  }
  for (key in list){
    if (list[key]%2!==0){
      return parseInt(key)
    }
  }
}



//Categorize New Member (7 kyu)
function openOrSenior(data){
  var newArr = []
  for (i=0; i<data.length; i++){
    if (data[i][0]>=55 && data[i][1]>7){
      newArr.push('Senior')
    } else {
      newArr.push('Open')
    }
  }
  return newArr
}



//Is this a triangle? (7 kyu)
function isTriangle(a,b,c){
  return (a+b)>c && (a+c)>b && (b+c)>a ? true : false
}



//A Needle in the Haystack (8 kyu)
function findNeedle(haystack) {
  var pos = 0
  for (i=0; i<haystack.length; i++){
    haystack[i]==='needle' ? pos=i : ''
  }
  return `found the needle at position ${pos}`
}



//Friend or Foe? (7 kyu)
function friend(friends){
  var newArr = []
  friends.filter(function(elem){
    elem.length===4 ? newArr.push(elem) : ''
  })
  return newArr
}



//Sum of Digits/Digital Root (6 kyu)
function digital_root(n) {
  if (n.toString().length===1){
    return n
  } else {
    var newArr = []
    for(i=0; i<n.toString().length; i++){
      newArr.push(parseInt(n.toString().charAt(i)))
      }
      n = newArr.reduce(function(a,b){
        return a+b
      })
      return digital_root(n)
    }
    return n
}



//Persistent Bugger. (6 kyu)
function persistence(n) {
  var count = 0
  while (n>9){
    count++
    n = n.toString().split('').reduce((a,b)=>a*b)
  }
  return count
}



//Sum of odd numbers (7 kyu)
function rowSumOddNumbers(n) {
  var num = n*n-(n-1)
  var newArr = []
  for (i=0; i<n; i++){
    newArr.push(num+(i*2))
  }
  return newArr.reduce((a,b)=>a+b)
}

console.log(rowSumOddNumbers(4))



//Stop gninnipS My sdroW! (6 kyu)
function spinWords(str){
  var newArr = str.split(' ')
  var retArr = []
  for (var i=0; i<newArr.length; i++){
    newArr[i].length>=5 ? retArr.push(newArr[i].split('').reverse().join('')) : retArr.push(newArr[i])
  }
  return retArr.join(' ')
}



//Counting Duplicates (6 kyu) - count duplicate characters in a string or word
function duplicateCount(text){
  var str = `${text}`.toLowerCase()
  var dict = {}
  var count = 0

  //create list to count each letter
  for (var i=0; i<str.length; i++){
    var control = str.charAt(i)
    if (dict[control]){
      dict[control]++
    } else {
      dict[control] = 1
    }
  }

  //count how many are more than 1 occurance
  for (val in dict){
    dict[val]>1 ? count++ : ''
  }
  return count
}



//Find the Parity Outlier (6 kyu)
function findOutlier(integers){
  var countEven = []
  var countOdd = []

  for (i=0; i<integers.length; i++){
    integers[i]%2===0 ? countEven.push(integers[i]) : countOdd.push(integers[i])
  }
  return countEven.length>countOdd.length ? parseInt(countOdd.join(',')) : parseInt(countEven.join(','))
}



//Who likes it? (6 kyu)
function likes(names) {
  var n = names.length
  return n===0 ? 'no one likes this' : 
  n===1 ? `${names[0]} likes this` : 
  n===2 ? `${names[0]} and ${names[1]} like this` : 
  n===3 ? `${names[0]}, ${names[1]} and ${names[2]} like this` : 
  n>3 ? `${names[0]}, ${names[1]} and ${n - 2} others like this` : ''
}



//Duplicate Encoder (6 kyu)
function duplicateEncode(word){
  var str = word.toLowerCase()
  var newList = {}
  var newWord = ''
  for (i=0; i<str.length; i++){
    if (newList[str.charAt(i)]){
      newList[str.charAt(i)]++
    } else {
      newList[str.charAt(i)] = 1
    }
  }
  for (j=0; j<str.length; j++){
    newList[str.charAt(j)]===1 ? newWord+='(' : newWord+=')'
  }
  return newWord
}



//Take a Ten Minute Walk (6 kyu)
function isValidWalk(walk) {
  var norSou = 0
  var easWes = 0
  var list = {n: -1,
              s: 1,
              e: -1,
              w: 1}

  for (i=0; i<walk.length; i++){
    walk[i]==='n' || walk[i]==='s' ? norSou += list[walk[i]] : ''
    walk[i]==='e' || walk[i]==='w' ? easWes += list[walk[i]] : ''
  }
  return walk.length===10 && norSou===0 && easWes===0 ? true : false
}



//Array.diff (6 kyu)
function arrayDiff(a, b) {
  var newArr = []
  a.filter(function(i){
    b.indexOf(i) === -1 ? newArr.push(i) : ''})
  return newArr
}



//Your order, please (6 kyu)
function order(words){
  var newArr = words.split(' ')
  var dict = {}
  var retArr = []
  var newStr = []
  
  for (word in newArr){
    var wordy = newArr[word]
    if (!dict[wordy]) dict[wordy] = ''
    for (l in newArr[word]){
      if (parseInt(newArr[word][l])>0){
        dict[wordy] = parseInt(newArr[word][l]-1)
          }
        }
      }
  
  for (pos in dict){
    retArr.push([pos, dict[pos]])
    retArr.sort(function(a,b){return a[1]-b[1]})  //this sorts the dict by the property values
    }
  
  for (i in retArr){
    newStr.push(retArr[i][0])
    }

  return newStr.join(' ')
}



//Replace With Alphabet Position (6 kyu)
function alphabetPosition(text) {
  var letters = text.toLowerCase().split('')
  var newArr = []
  var answer = []
  var dict = {
    "a": 1,
    "b": 2,
    "c": 3,
    "d": 4,
    "e": 5,
    "f": 6,
    "g": 7,
    "h": 8,
    "i": 9,
    "j": 10,
    "k": 11,
    "l": 12,
    "m": 13,
    "n": 14,
    "o": 15,
    "p": 16,
    "q": 17,
    "r": 18,
    "s": 19,
    "t": 20,
    "u": 21,
    "v": 22,
    "w": 23,
    "x": 24,
    "y": 25,
    "z": 26
  }
  for (l in letters)
    if (dict[letters[l]] !== undefined || dict[letters[l]] !== null){newArr.push(dict[letters[l]])}

  for (i=0; i<newArr.length; i++){
    if (newArr[i] !== undefined){answer.push(newArr[i])}
  }
  return answer.join(' ')
}



//Create Phone Number (6 kyu)
function createPhoneNumber(n){
  return `(${n[0]}${n[1]}${n[2]}) ${n[3]}${n[4]}${n[5]}-${n[6]}${n[7]}${n[8]}${n[9]}`  
}

//better one
function better(a){
  var format = '(xxx) xxx-xxxx'
  for (i=0; i<a.length; i++){
    format = format.replace('x', a[i])
  }
  return format
}



//Playing with digits (6 kyu)
function digPow(n, p){
  var newArr = n.toString().split('').map(Number)
  var powers = []
  var tally = 0

  for (i=0; i<n.toString().length; i++){
    powers.push(p+i)
  }

  for (j=0; j<newArr.length; j++){
    tally += Math.pow(newArr[j],powers[j])
  }

  return Number.isInteger(tally/n) ? tally/n : -1
}



//Dubstep (6 kyu)
function songDecoder(song){
  var newSong = song.replace(/WUB/gi, ' ').trim()
  var newSong = newSong.split(' ')
  var newArr = []
  
  for (word in newSong)
    newSong[word] === '' ? '' : newArr.push(newSong[word])
  return newArr.join(' ')
}

//better version
function SongDecoder(song){
  return song.replace(/(WUB)+/g, ' ').trim()
}



//IQ Test (6 kyu)
function iqTest(n){
  //put n into an array so easier to play with
  var temp = n.toString().split(' ')
  var newArr = []
  for (num in temp){newArr.push(Number(temp[num]))}

  //setup check if array has more even or odd numbers
  var answer = 0
  var odd = 0
  var even = 0
  for (value in newArr)
    newArr[value]%2===0 ? even++ : odd++

  //find the position of even number if array has more odd numbers, and visa-versa
  if (even<odd) {
    for (i=0; i<temp.length; i++){if (temp[i]%2===0){answer = i+1}}
  } else {
    for (i=0; i<temp.length; i++){if (temp[i]%2!==0){answer = i+1}}
  }
  return answer
}




//Unique In Order (6 kyu)
var uniqueInOrder=function(iterable){
  var newArr = []
  var retArr = []
  typeof iterable==='string' ? newArr = iterable.split('') : newArr = iterable

  for(i=0; i<newArr.length; i++){
    newArr[i] !== newArr[i+1] ? retArr.push(newArr[i]) : ''
  }

  return retArr
}



//Build a pile of Cubes (6 kyu)
function findNb(m) {
    var count = 0
    var tally = 0
    for (i=1; i<Math.pow(m,1/4); i++){if (tally<m){tally+=i*i*i; count++}} 

    var checker = 0
    for (j=count; j>0; j--){checker+=j*j*j}
    return m===checker ? count : -1
}



//Equal Sides Of An Array (6 kyu)
function findEvenIndex(arr){
  var fArr = []
  var bArr = []
  var pos = arr.length + 1

  var test = 0
  for(i=0; i<arr.length; i++){
    fArr.push(test+arr[i])
    test=test+arr[i]
  }

  var testy = 0
  for (j=arr.length-1; j>=0; j--){
    bArr.unshift(testy+arr[j])
    testy=testy+arr[j]
  }

  for (k=0; k<fArr.length; k++){fArr[k]===bArr[k] ? pos=k : ''}
  return pos>arr.length ? -1 : pos
}



Find the unique number (6 kyu)
function findUniq(arr) {
  var obj = {}
  for (i=0; i<arr.length; i++){!obj[arr[i]] ? obj[arr[i]]=1 : obj[arr[i]]++}
  
  //very convoluted way to find the smaller value in the object
  return Object.entries(obj)[1][1] < Object.entries(obj)[0][1] ? 
                                Number(Object.entries(obj)[1][0]) : 
                                Number(Object.entries(obj)[0][0])
}



//Find the missing letter (6 kyu)
function findMissingLetter(array){
  var dict = {
    "a": 1,
    "b": 2,
    "c": 3,
    "d": 4,
    "e": 5,
    "f": 6,
    "g": 7,
    "h": 8,
    "i": 9,
    "j": 10,
    "k": 11,
    "l": 12,
    "m": 13,
    "n": 14,
    "o": 15,
    "p": 16,
    "q": 17,
    "r": 18,
    "s": 19,
    "t": 20,
    "u": 21,
    "v": 22,
    "w": 23,
    "x": 24,
    "y": 25,
    "z": 26
  }

  //convert alphabet to numerical position
  var check = []
  for (i=0; i<array.length; i++){check.push(dict[array[i].toLowerCase()])}

  //check the non-sequential number in numerical position
  var ans = 0
  for (j=0; j<check.length-1; j++){check[j+1]===check[j]+1 ? '' : ans=check[j+1]-1}
  
  //match the letter to the corresponding non-sequential number
  var letter = ''
  for (let key in dict){dict[key]===ans ? letter=key : ''}
 
  //return the non-sequential letter in upper or lower case form
  return array[0]===array[0].toUpperCase() ? letter.toUpperCase() : letter.toLowerCase()
}
//could have used '.charCodeAt()' method to shorten process.



//Are they the "same"? (6 kyu)
function comp(arr1, arr2){
  arr1!==null ? arr1=arr1.sort((a,b)=>a-b) : ''
  arr2!==null ? arr2=arr2.sort((a,b)=>a-b) : ''

  var newArr = []
  for (n in arr2){
    newArr.push(Math.sqrt(arr2[n]))
  }

  var count = 0
  for (i=0; i<newArr.length; i++){
    arr1[i]===newArr[i] ? count++ : ''
  }

  return arr1===null || arr2===null ? false : 
        count===arr2.length ? true : false
}



//Format a string of names like 'Bart, Lisa & Maggie'. (6 kyu)
function list(names){
  var newArr = []
  var newStr = ''
  var front = ''
  for (i=0; i<names.length; i++){newArr.push(names[i]['name'])}
  for (j=0; j<newArr.length-2; j++){front += `${newArr[j]}, `} 
  
  return newArr.length===0 ? newStr :
          newArr.length===1 ? newStr += newArr[0] :
          newArr.length===2 ? newStr += `${newArr[0]} & ${newArr[1]}` : 
          newArr.length > 2 ? `${front}${newArr[newArr.length-2]} & ${newArr[newArr.length-1]}` : ''
}



//Is a number prime? (6 kyu) - finally passed, adding sqrt to the arg loop worked.
function isPrime(num) {
  if (num<=1){
    return false
  } else {
    for (var i=2; i<=Math.sqrt(num); i++){
      if (num%i===0){
        return false
      }
    }
  }
  return true
}



//Convert string to camel case (6 kyu)
function toCamelCase(str){
  let newVar = []
  let newArr = []
  str.split('-')[0]!==str ? newVar = str.split('-') : newVar = str.split('_')
    newArr.push(newVar[0])
  
  for (i=1; i<newVar.length; i++){
    newArr.push(newVar[i].charAt(0).toUpperCase()+newVar[i].slice(1))
  }
  
  return newArr.join('')
}



//Split Strings (6 kyu)
function solution(str){
  var pairs = [];
  if (str===''){
    return []
  } else {
  var last = str.charAt(str.length-1) + '_'
  }

  for (i=0; i<str.length; i+=2){
    pairs.push(str.substring(i,i+2))
  }

  if (pairs[pairs.length-1].length===1){
    pairs.pop()
    pairs.push(last)
  }
  return pairs
}

console.log(solution(''))



//Does my number look big in this? (6 kyu)
function narcissistic(value) {
  var newArr = value.toString().split('')
  var power = newArr.length
  var newAns = []
  for (i=0; i<newArr.length; i++){
    newAns.push(Math.pow(newArr[i], power))
  }
  var newValue = newAns.reduce((a,b)=>a+b)
  return newValue===value ? true : false
}



//Roman Numerals Decoder (6 kyu)
function solution(roman){
  let dict = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  let newArr = roman.split('')
  let sum = 0
  for (i=0; i<newArr.length; i++){sum+=dict[newArr[i]]}
  dict[newArr[newArr.length-2]]<dict[newArr[newArr.length-1]] ? sum-=(dict[newArr[newArr.length-2]]*2) : ''
  return sum
}



//Two Sum (6 kyu)
function twoSum(numbers, target) {
  let newArr = []
  for (i=0; i<numbers.length; i++){
    for (j=i+1; j<numbers.length; j++){
    numbers[i] + numbers[j] === target ? newArr.push(i, j) : ''
    }
  }
  return newArr
}



//Decode the Morse code (6 kyu)
decodeMorse = function(morseCode){
  var morse = {
  '.-': 'A',
  '-...': 'B',
  '-.-.': 'C',
  '-..': 'D',
  '.': 'E',
  '..-.': 'F',
  '--.': 'G',
  '....': 'H',
  '..': 'I',
  '.---': 'J',
  '-.-': 'K',
  '.-..': 'L',
  '--': 'M',
  '-.': 'N',
  '---': 'O',
  '.--.': 'P',
  '--.-': 'Q',
  '.-.': 'R',
  '...': 'S',
  '-': 'T',
  '..-': 'U',
  '...-': 'V',
  '.--': 'W',
  '-..-': 'X',
  '-.--': 'Y',
  '--..': 'Z',
  '   ': ' ',
  '...---...': 'SOS',
  '-.-.--': '!',
  '.-.-.-': '.'

  }
  var newArr = morseCode.split(' ')
  var word = []
  for (i=0; i<newArr.length; i++){
    morse[newArr[i]] === undefined ? word.push(' ') : word.push(morse[newArr[i]])
  }
  return word.join('').split('  ').join(' ').trim()
}



//Count characters in your string (6 kyu)
function count (string) {  
  let newObj = {}
  for (i=0; i<string.length; i++){
    if (newObj[string[i]]){
      newObj[string[i]]++
    } else {
      newObj[string[i]] = 1
    }
  }
  return newObj
}



//Good vs Evil (6 kyu)
function goodVsEvil(good, evil){
  let goodV = [1, 2, 3, 3, 4, 10]
  let evilV = [1, 2, 2, 2, 3, 5, 10]

  let goodT = good.split(' ').map(Number)
  let evilT = evil.split(' ').map(Number)

  let goodP = 0
  let evilP = 0

  for (i=0; i<goodT.length; i++){goodP +=goodT[i]*goodV[i]}
  for (j=0; j<evilT.length; j++){evilP +=evilT[j]*evilV[j]}

  return  goodP>evilP ? 'Battle Result: Good triumphs over Evil' : 
          goodP<evilP ? 'Battle Result: Evil eradicates all trace of Good' : 
          goodP===evilP ? 'Battle Result: No victor on this battle field' : null
}



//Length of missing array (6 kyu)
function getLengthOfMissingArray(arr) {
  if (arr === null  || arr.length === 0 || arr[1] === null || arr[0] === null){return 0} 

  let newArr = []
  for (i=0; i<arr.length; i++){newArr.push(arr[i].length)}
  
  let tot = 0
  let max = Math.max(...newArr)
  let min = Math.min(...newArr)
  for (j=min; j<=max; j++){tot+=j}
  
  return Math.min(...newArr) ===0 ? 0 : tot - newArr.reduce((a,b)=>a+b)  
}



//Triple trouble (6 kyu)
function tripledouble(num1, num2) {
  let newArr1 = num1.toString().split('')
  let check1 = []

  let newArr2 = num2.toString().split('')
  let check2 = []


  for (i=0; i<newArr1.length; i++){
    newArr1[i]===newArr1[i+1] && newArr1[i]===newArr1[i+2] ? check1.push(Number(newArr1[i])) : null
  }

  for (j=0; j<newArr2.length; j++){
    newArr2[j]===newArr2[j+1] ? check2.push(Number(newArr2[j])) : null
  }

  let compare = check1.filter((number)=>check2.includes(number))
  return compare[0] != undefined ? 1 : 0
}



//Valid Phone Number (6 kyu)
function validPhoneNumber(phoneNumber){
  let newArr = phoneNumber.split('')
  let check = 0

  newArr[0] === '(' ? check+=1 : null
  newArr[1] >= 0    ? check+=1 : null
  newArr[2] >= 0    ? check+=1 : null
  newArr[3] >= 0    ? check+=1 : null
  newArr[4] === ')' ? check+=1 : null
  newArr[5] === ' ' ? check+=1 : null
  newArr[6] >= 0    ? check+=1 : null
  newArr[7] >= 0    ? check+=1 : null
  newArr[8] >= 0    ? check+=1 : null
  newArr[9] === '-' ? check+=1 : null
  newArr[10] >= 0   ? check+=1 : null
  newArr[11] >= 0   ? check+=1 : null
  newArr[12] >= 0   ? check+=1 : null
  newArr[13] >= 0   ? check+=1 : null

  return newArr.length===14 ? (check===14 ? true : false) : false
}



//Count of positives / sum of negatives (8 kyu)
function countPositivesSumNegatives(input) {
  let count = 0
  let negatives = 0
  let answer = []

  let positive = []
  let negative = []


  for (n in input){
    input[n]<1 ? negative.push(input[n]) : count++
  }

  input===null || input[0]===undefined ? answer=[] : answer.push(count)
  negative[0]===undefined ? null : answer.push(negative.reduce((a,b)=>a+b))

  return answer
}



//New Cashier Does Not Know About Space or Shift (6 kyu)
function getOrder(input) {

  let newArr = []

  dict = {
    'bur': 'Burger',
    'fri': 'Fries',
    'chi': 'Chicken',
    'piz': 'Pizza',
    'san': 'Sandwich',
    'oni': 'Onionrings',
    'mil': 'Milkshake',
    'cok': 'Coke'
  }

  order = {
    'Burger': 0,
    'Fries': 0,
    'Chicken': 0,
    'Pizza': 0,
    'Sandwich': 0,
    'Onionrings': 0,
    'Milkshake': 0,
    'Coke': 0
  }

  for (i=0; i<input.length-2; i++){
    for (key in dict){
    input[i]+input[i+1]+input[i+2]===key ? newArr.push(dict[key]) : null
    }
  }

  for (k=0; k<newArr.length; k++){
    order[newArr[k]] ? order[newArr[k]]++ : order[newArr[k]] = 1
  }
  
  let str = (
    'Burger '     .repeat(order['Burger'])+
    'Fries '      .repeat(order['Fries'])+
    'Chicken '    .repeat(order['Chicken'])+
    'Pizza '      .repeat(order['Pizza'])+
    'Sandwich '   .repeat(order['Sandwich'])+
    'Onionrings ' .repeat(order['Onionrings'])+
    'Milkshake '  .repeat(order['Milkshake'])+
    'Coke '       .repeat(order['Coke'])
    )

  return str.trim()
  
}



//Data Reverse (6 kyu)
function dataReverse(data) {
  let d = data.join('')
  let newArr = []
  for (i=0; i<d.length; i+=8){
    newArr.push(d.substring(i,i+8))
  }
  return newArr.reverse().join('').split('').map(j=>Number(j))
}



//Multiplication Tables (6 kyu)
function multiplicationTable(row,col){
  let newArr = []
  for (i=1; i<=row; i++){
    for (j=1; j<=col; j++){
        newArr.push(i*j)
    }
  }

  let ansArr = []
  let k=0
  while (k<newArr.length){
    ansArr.push(newArr.slice(k,k+=col))
  }

  return ansArr
}



//Multiplication table (6 kyu)
multiplicationTable = function(size) {
  let result = [];
  for (i=0; i<size; i++) {
    result[i] = [];
    for (j=0; j<size; j++) {
      result[i].push((i+1)*(j+1));
    }
  }
  return result;
}



//Coordinates Validator (6 kyu)
function isValidCoordinates(coordinates){
  let arr = coordinates.split(',')
  let x = arr[0]
  let y = arr[1]
  let z = arr[2]
  let count = 0

  xLength = x.toString().length
  for (i=0; i<xLength; i++){
    x.toString().charAt(i) === 'e' ? count+=1 : null
  }

  yLength = y.toString().length
  for (j=0; j<yLength; j++){
    y.toString().charAt(j) === 'e' ? count+=1 : null
  }

  isNaN(x) || isNaN(y) ? count+=1 : null
  Math.abs(x) >= 0 && Math.abs(x) <= 90 ? null : count+=1
  Math.abs(y) >= 0 && Math.abs(y) <= 180 ? null : count+=1
  z === undefined ? null : count+=1
  return count>0 ? false : true
}



// Sum consecutives (6 kyu)
function sumConsecutives(s) {
  let result = []
  let counter = 1;

  for (i=0; i<s.length; i++){
    s[i]===s[i+1] ? counter++ : (result.push(s[i]*counter), counter=1)
  }
  return result
}



//Detect Pangram (6 kyu)
function isPangram(string){
  let count = 0
  let dict = {
    "a": 0,
    "b": 0,
    "c": 0,
    "d": 0,
    "e": 0,
    "f": 0,
    "g": 0,
    "h": 0,
    "i": 0,
    "j": 0,
    "k": 0,
    "l": 0,
    "m": 0,
    "n": 0,
    "o": 0,
    "p": 0,
    "q": 0,
    "r": 0,
    "s": 0,
    "t": 0,
    "u": 0,
    "v": 0,
    "w": 0,
    "x": 0,
    "y": 0,
    "z": 0,
  }
  for (i=0; i<string.length; i++){string[i] === " " || string[i]==="." ? null : dict[string.toLowerCase()[i]]++}
  for (ltr in dict){dict[ltr]===0 ? count++ : null}
  return count>0 ? false : true
  }



  //Build Tower (6 kyu)
function towerBuilder(nFloors) {
  let newArr = []
  for (i=1; i<=nFloors; i++){
    newArr.push(
      " ".repeat(nFloors-i) + 
      "*".repeat(i*2-1) + 
      " ".repeat(nFloors-i)
      )
  }
  return newArr
}



//Find the divisors! (8 kyu)
function divisors(integer) {
  let newArr = []
  for (i=2; i<integer; i++){
    integer % i === 0 ? newArr.push(i) : null
  }
  return newArr[0] === undefined ? `${integer} is prime` : newArr
};



//Odd or Even? (7 kyu)
function oddOrEven(array) {
  let sum = 0
  array.length === 0 ? null : sum = array.reduce((a,b)=>a+b)
  return sum % 2 === 0 ? 'even' : 'odd'
}



//Maximum Length Difference (7 kyu)
function mxdiflg(a1, a2) {
  let arr1 = []
  let arr2 = []

  for (str in a1){arr1.push(a1[str].length)}
  for (str in a2){arr2.push(a2[str].length)}

  let max1 = Math.max(...arr1) - Math.min(...arr2)
  let max2 = Math.max(...arr2) - Math.min(...arr1)

  let ans = Math.max(max1, max2) 

  return ans === -Infinity ? -1 : ans
}



//Beginner Series #1 School Paperwork (8 kyu)
function paperwork(n, m) {
  return n<0 || m<0 ? 0 : n*m
}



//Find the stray number (7 kyu)
function stray(n) {
  let dict = {}
  for (i=0; i<n.length; i++){
    if (dict[n[i]]){
      dict[n[i]]++
    } else {
      dict[n[i]] = 1
    }
  }
  let ans = 0
  for (val in dict){
    dict[val] === 1 ? ans=val : null
  }
  return Number(ans)
}



//Sum of a sequence (7 kyu)
const sequenceSum = (b, e, s) => {
  let sum = 0
  for (i=b; i<=e; i+=s){sum += i}
  return b>e ? 0 : sum
};



//Fake Binary (8 kyu)
function fakeBin(x){
  let num = ''
  for (n in x){Number(x[n])<5 ? num += 0 : num += 1}
  return num
}



..Simple multiplication (8 kyu)
function simpleMultiplication(n) {
  return n%2===0 ? n*8 : n*9
}



//Round up to the next multiple of 5 (7 kyu)
function roundToNext5(n){
  return n>0 ? Math.ceil(n/5)*5 : Math.floor(Math.abs(n/5))*-5
}



//Will you make it? (8 kyu)
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return distanceToPump <= mpg*fuelLeft
};



//Convert a string to an array (8 kyu)
function stringToArray(string){
  return string.split(' ')
}



//Double Char (8 kyu)
function doubleChar(str) {
  let newStr = ''
  for (i=0; i<str.length; i++){newStr += (str[i]+str[i])}
  return newStr
}



//Count the Monkeys! (8 kyu)
function monkeyCount(n) {
  let newArr = []
  for (i=1; i<=n; i++){
    newArr.push(i)
  }
  return newArr
}



//Grasshopper-Grade Book (8 kyu)
function getGrade (s1, s2, s3) {
  let grade = (s1+s2+s3)/3
  return grade < 60 ? 'F' : 
          grade >= 60 & grade < 70 ? 'D' :
          grade >= 70 & grade < 80 ? 'C' :
          grade >= 80 & grade < 90 ? 'B' :        
          grade >= 90 & grade <= 100 ? 'A' : null
}



//Sum Mixed Array (8 kyu)
function sumMix(x){
  let newArr = []
  for (num in x){newArr.push(Number(x[num]))}
  return newArr.reduce((a,b)=>a+b)
}



//Total amount of points (8 kyu)
function points(games) {
  let count = 0
  for (i=0; i<games.length; i++){
    games[i].charAt(0)>games[i].charAt(2) ? count += 3 : 
    games[i].charAt(0)<games[i].charAt(2) ? null : count += 1
  }
  return count
}



//Sort the odd (6 kyu)
function sortArray(array) {
  let odd = []
  let even = []
  let ans = []
  for (i=0; i<array.length; i++){
    array[i]%2===0 ? even.push(array[i]) : odd.push(array[i])
  }
  odd.sort((a,b)=>a-b)

  for (j=0; j<array.length; j++){
    array[j]%2===0 ? ans.push(even.shift()) : ans.push(odd.shift())
  }
  return ans
}



//Two to One (7 kyu)
function longest(s1, s2) {
  return s1.concat(s2).replace(/(.)(?=.*\1)/g,"").split('').sort().join('')
}



//Sum without highest and lowest number (8 kyu)
function sumArray(array) {
  if (array === null || array[0] === undefined || array.length === 1 || array.length === 2){
    return 0
  } else {
  let newArr = array.sort((a,b)=>a-b)
    newArr.pop()
    newArr.shift()
    return newArr.reduce((a,b)=>a+b)
  }
}



//Beginner-Lost Without a Map (8 kyu)
function maps(x){
  return x.map((a)=>a*2)
}



// You only need one - Beginner (8 kyu)
function check(a, x) {
  let count = 0
  for (n in a){a[n]===x ? count++ : null}
  return count>0
}



// Find the smallest integer in the array (8 kyu)
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
    }
}



// Calculate average (8 kyu)
function find_average(array) {
  let sum = 0
  for (n in array){
    sum+=array[n]
  }
  return sum / array.length
}


// Do I get a bonus? (8 kyu)
function bonusTime(salary, bonus) {
  return bonus ? `£${salary*10}` : `£${salary}`
}


// Rock Paper Scissors! (8 kyu)
const rps = (p1, p2) => {
  console.log(p1,p2)
  return p1===p2 ? 'Draw!' : 
        (p1[0]==='s' && p2[0]==='p') || 
        (p1[0]==='p' && p2[0]==='r') || 
         p1[0]==='r' && p2[0]==='s' ? 'Player 1 won!' : 'Player 2 won!'
};



// Count the smiley faces! (6 kyu)
function countSmileys(arr) {
  let count = 0
  let dictArr = [':)',':-)',':~)',  ':D',':-D',':~D',  ';)', ';-)',';~)', ';D',';-D',';~D']
  for (n in arr){
    let control = arr[n]
    for (i in dictArr){
      control===dictArr[i] ? count++ : null
    }
  }
  return count
}



// Delete occurrences of an element if it occurs more than n times (6 kyu)
function deleteNth(arr,n){
  let dict = {}
  let newArr = []
  for (i=0; i<arr.length; i++){
    if (!dict[arr[i]]){
      dict[arr[i]] = 1
      newArr.push(arr[i])
    } else if (dict[arr[i]] && dict[arr[i]]<n){
      dict[arr[i]] += 1
      newArr.push(arr[i])
    }
  }
  return newArr
}



// Jenny's secret message (8 kyu)
function greet(name){
  if(name === "Johnny"){
    return "Hello, my love!";
    }
  return "Hello, " + name + "!";
}



// Calculate BMI (8 kyu)
function bmi(weight, height) {
  let bmi = weight / height**2
  return bmi <= 18.5 ? 'Underweight' : bmi <= 25 ? 'Normal' : bmi <= 30 ? 'Overweight' : 'Obese'
}



// Smallest unused ID (8 kyu)
function nextId(ids){
  ids = ids.sort((a,b)=>a-b).filter((c,d)=>ids.indexOf(c)===d)
  let ans = []
  for (i=0; i<ids.length; i++){
    ids[i] != i ? ans.push(i) : null
  } 
  return ans[0] === undefined ? ids[ids.length-1] + 1 : ans[0]
}



// DNA to RNA Conversion (8 kyu)
function DNAtoRNA(dna) {
  let ans = ''
  for (ltr in dna){
    dna[ltr]==='T' ? ans += 'U' : ans += dna[ltr]
  }
  return ans
}



// Convert a Boolean to a String (8 kyu)
function booleanToString(b){
  return b===true ? 'true' : 'false'
}



// Sum Numbers (8 kyu)
function sum (numbers) {
  let count = 0
  for (let i=0; i<numbers.length; i++){
    count += numbers[i]
  }
  return count
  
  /* reduce method
  return numbers.reduce((a,b) => a+b)
  */
  
};



// How good are you really? (8 kyu)
function betterThanAverage(cp, yp) {
  return (cp.reduce((a,b)=>a+b)/cp.length)<yp
}



// Difference of Volumes of Cuboids (8 kyu)
function findDifference(a, b) {
  function multiply (c) {
    return c.reduce((y,z)=>y*z)
  }
  return Math.abs(multiply(a) - multiply(b))
}

/* *** better version
find_difference=(a, b)=>(c=(a,b)=>a*b,Math.abs(a.reduce(c) - b.reduce(c))) */



// All Star Code Challenge #18 (8 kyu)
function strCount(str, letter){  
  count = 0
  for (i=0; i<str.length; i++){
    str.charAt(i) === letter ? count ++ : null
  }
  return count
}



// FIXME: Replace all dots (8 kyu)
var replaceDots = function(str) {
  return str.replace(/[.]/g, '-');
}



// Quarter of the year (8 kyu)
const quarterOf = (month) => {
  let dict = {'1': 1, '2': 1, '3': 1, '4': 2, '5': 2, '6': 2, '7': 3, '8': 3, '9': 3, '10': 4, '11': 4, '12': 4}
    return dict[month]
}



// Super Duper Easy (8 kyu)
problem = (x) => typeof(x)==='string' ? "Error" : x*50+6



// Parse nice int from char problem (8 kyu)
function getAge(inputString){
  return Number(inputString.charAt(0))
}
  


// Are arrow functions odd? (8 kyu)
odds = (n) => n.filter(n => n%2);

 
  
// Aspect Ratio Cropping - Part 1 (8 kyu)
  function aspectRatio(x,y){
	return [Math.ceil(y*(16/9)), y]
}



// Grasshopper-Basic Function Fever
function addFive(num) {
  var total = num + 5
  return total
}


	
// NBA full 48 minutes average (8 kyu)
function pointsPer48(ppg, mpg) {
  let x = Math.round((48/mpg*ppg)*10)/10
  return x>0 ? x : 0
}



// Find the position! (8 kyu)
function position(letter){                                                      
  let dict = "abcdefghijklmnopqrstuvwxyz".split('');
  return `Position of alphabet: ${dict.indexOf(letter.toLowerCase())+1}`                                 
}    

	
	
// Simple Fun #1: Seats in Theater (8 kyu)
function seatsInTheater(nCols, nRows, col, row) {                                 
  return (nCols-col+1)*(nRows-row)                                            
}

	
// MakeUpperCase (8 kyu)
function makeUpperCase(str){
  return str.toUpperCase()
}

	
	
// CSV representation of array (8 kyu)
function toCsvText(array) {                                  
    let test = ''                                            
    for (let i=0; i<array.length; i++){                      
        test += array[i] + (i===(array.length-1) ? '' : '\n')
    }                                                        
    return test                                              
}                                                            

// one liner
toCsvText = (array) => array.join('\n')

	
	
// Sum of differences in array (8 kyu)
function sumOfDifferences(arr){                 
    let s = arr.sort((a,b)=>b-a)                
    return arr.length>0 ? s[0]-s[s.length-1] : 0
}                                               


	
// USD=>CNY
function usdcny(usd) {                               
    return `${(usd*6.75).toFixed(2)} Chinese Yuan`   
}                                                    



// SpeedCode #2 - Array Madness
function arrayMadness(a,b) {                      
    let sumA = 0                                  
    let sumB = 0                                  
                                                  
    for(let num in a){sumA += Math.pow(a[num],2)} 
    for(let num in b){sumB += Math.pow(b[num],3)} 
                                                  
    return sumA>sumB                              
}                                                 

	

// My head is at the wrong end! (8 kyu)
function fixTheMeerkat(arr) {         
    let newArr = []                   
    newArr.push(arr[2],arr[1],arr[0]) 
    return newArr                     
}                                     

	
	
// Lario and Muigi Pipe Problem
function pipeFix(n){                            
    let newArr = []                             
    for (let i = n[0]; i<+n[n.length-1]+1; i++){
        newArr.push(i)                          
    }                                           
    return newArr                               
}            
	
	

// Drink about (8 kyu)
function peopleWithAgeDrink(old){
    return old<14 ? "drink toddy" :
        14<=old && old<18 ? "drink coke" :
        18<=old && old<21 ? "drink beer" :
        21<=old ? "drink whisky" : ''
}


	
// Function 3 - multiplying two numbers
multiply = (x,y) => x*y

	
	
// Transportation on vacation (8 kyu)
function rentalCarCost(d) {
    return d>=7 ? d*40-50 : d>=3 ? d*40-20 : d*40
}

	
	
// Beginner - Reduce but Grow (8 kyu)
const grow = x => x.reduce((a,b)=>a*b)



// Sum The Strings (8 kyu)
const sumStr = (a,b) => `${Number(a)+Number(b)}`


// Pre-FizzBuzz Workout #1 (8 kyu)
function preFizz(n){
    let newArr = []
    for (let i=1; i<=n; i++){
        newArr.push(i)
    }
    return newArr
}

	

// Grasshopper - Personalized Message (8 kyu)
const greet = (name, owner) => name === owner ? `Hello boss` : `Hello guest`



// Stringy Strings (8 kyu)
function stringy(size) {
    let str = ''
    for(let i=0; i<size; i++){
        i%2 === 0 ? (str += 1) : (str += 0)
    }
    return `${str}`
}



// Short Long Short (8 kyu)
function solution(a, b){
    return a.length>b.length ? b+a+b : a+b+a
}

	

// Take the Derivative (8 kyu)
const derive = (c,e) => `${c*e}x^${e-1}`


// Find the Difference in Age betwen Oldest and Youngest Family Members
function differenceInAges(ages){
    let newArr = []
    let sorted = ages.sort((a,b)=>b-a)
    newArr.push(sorted[sorted.length-1], sorted[0], sorted[0]-sorted[sorted.length-1])
    return newArr
}



// Consecutive strings (6 kyu)
function longestConsec(strarr, k) {
    let newArr = []
    for (i=0; i<strarr.length; i++){
        k<=0 ? newArr='' : newArr.push(strarr.slice(i, i+k).reduce((a,b)=>a+b))
    }

    let longest = 0
    let word = ''
    for (j=0; j<newArr.length; j++){
        newArr[j].length > longest ? (word=newArr[j], longest=newArr[j].length) : null
    }
    return strarr.length<k || k<0 ? '' : word
}


	
// Simple Encryption #1 - Alternating Split (6 kyu)
function encrypt(text, n){
    if(text===null){
        return text
    } else if(n>0){
        let word1 = ''
        let word2 = ''
        for (let i=0; i<text.length; i++){
            i%2===0 ? word2+=(text[i]) : word1+=(text[i])
        }
        let ans = word1+word2
        return encrypt(ans, n-1)
    } else if(n<=0){
        return text
    }
}

function decrypt(eText, n){
    if(eText===null){
        return eText
    } else if(n>0){
        let mid = eText.length/2
        let word1 = eText.slice(0, mid).split('')
        let word2 = eText.slice(mid).split('')
        let ans = ''
        for (let i=0; i<mid; i++){
            ans+=(word2[i]?word2[i]:null)+(word1[i]?word1[i]:'')
        }
        return decrypt(ans,n-1)
    } else if(n<=0){
        return eText
    }
}

	
	
// Bouncing Balls (6 kyu)
function bouncingBall(h,b,w){
    console.log(h,b,w)
    let obs = 1
    let newH = h
    for (i=0; i<h; i++){
        newH*b>w ? (obs+=2,(newH = newH*b)) : null
    }
    return b===1 || (h*b)<w || (h===b && b===w) ? -1 : obs
}

	

// Write Number in Expanded Form (6 kyu)
function expandedForm(num){
    let newArr = `${num}`.split('') 
    let ansArr = []
    for(let i=0; i<newArr.length; i++){
        newArr[i]>0 ? ansArr.push(newArr[i]+(`0`.repeat(newArr.length-1-i))) : null
    } 
    return ansArr.join(' + ') 
}



Make the Deadfish swim (6 kyu)
function parse(data) {
    let newArr = []
    let ans = 0
    for(let x in data){
        data[x] === 'i' ? ans++ :
        data[x] === 'd' ? ans-- :
        data[x] === 's' ? ans=Math.pow(ans,2) :
        data[x] === 'o' ? newArr.push(ans) : null
    }
    return newArr
}



// Count by X (8 kyu)
function countBy(x,n){
    let newArr = []
    for(let i=1; i<n+1; i++){
        newArr.push(x*i)
    }   
    return newArr
}   



// Disemvowel Trolls (7 kyu)
const disemvowel = str => str.replace(/[aeiou]/gi,'')
/*
	/ - start regexp
	[] - put conditional chars in here
	/ - start params
	g - global - replace all symbols, not just the first char
	i - case insensitive
*/


// Number of People in the Bus (7 kyu)
var number = function(busStops){
    let sum = 0
    for (let i=0; i<busStops.length; i++){
        sum += (busStops[i][0] - busStops[i][1])
    }
    return sum
}



// Remove anchor from URL (7 kyu)
const removeUrlAnchor = (url) => url.split('#').shift()



// Removing Elements (8 kyu)
function removeEveryOther(arr){
    let newArr = []
    for (let i=0; i<arr.length; i+=2){
        newArr.push(arr[i])
    }
    return newArr
}


// Opposites Attract (8 kyu)
const lovefunc = (f1,f2) => (f1+f2)%2>0


// What is between? (8 kyu)
function between(a,b) {
    let newArr = []
    for (let i=a; i<=b; i++){
        newArr.push(i)
    }
    return newArr
}

	
// Get Nth Even Number (8 kyu)
const nthEven = n => n*2-2


// Squash the bugs (8 kyu)
function findLongest(str){

    let spl = str.split(' ')
    let longest = 0

    for (let i=0; i<spl.length; i++){
        if(spl[i].length>longest){
            longest = spl[i].length
        }
    }
    return longest
}


// Sort and Start (8 kyu)
function twoSort(s) {
    let sorted = s.sort()[0]
    let word = ''
    for (let i=0; i<sorted.length; i++){
        if(i<sorted.length-1){
        word += sorted.charAt(i) + '***'
        } else if(i===sorted.length-1){
            word += sorted.charAt(i)
        }
    }
    return word
}


// 101 Dalmatians - squash the bugs, not the dogs!
function howManyDalmatians(number){
  
  var dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
  
  return number <= 10 ? dogs[0] : 
  number <= 50 ? dogs[1] : 
  number === 101 ? dogs[3] : 
  dogs[2]

}

	
// The Feast of Many Beasts (8 kyu)
function feast(beast, dish){
    let bFirst = beast.charAt(0)
    let bLast = beast.charAt(beast.length-1)
    let dFirst = dish.charAt(0)
    let dLast = dish.charAt(dish.length-1)

    return bFirst === dFirst && bLast === dLast
}

	
// Remove exclamation marks (8 kyu)
const removeExclamationMarks = (s) => s.replace(/!/g,'')


// Cat years, Dog years (8 kyu)
var humanYearsCatYearsDogYears = function(humanYears) {
    let cat = 0
    let dog = 0
    
    humanYears >= 2 ? (cat += 24, dog += 24) :
    humanYears === 1 ? (cat += 15, dog += 15) : null

    const calculate = (n, yrs) => {
        let sum = 0
        for (let i=n-2; i>0; i--){
            sum += yrs
        }
        return sum
    }
    
    cat += calculate(humanYears, 4)
    dog += calculate(humanYears, 5)
  
    return [humanYears, cat, dog]

}


// Template Strings (8 kyu)
const TempleStrings = (obj, feature) => obj + ' are ' + feature


// The Wide-Mouthed frog! (8 kyu)
const mouthSize = (animal) => animal.toLowerCase() === "alligator" ? "small" : "wide"


// Miles per gallon to kilometers per liter (8 kyu)
const converter = (mpg) => Math.round(mpg/(4.54609188/1.609344) * 100) / 100


// Keep up the hoop (8 kyu)
const hoopCount = (n) => n>=10 ? "Great, now move on to tricks" : "Keep at it until you get it"


// Volume of a Cuboid (8 kyu)
class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length*width*height
  }
}


// Holiday VIII - Duty Free (8 kyu)
const dutyFree = (normPrice, discount, hol) => Math.floor(hol/(normPrice*discount/100))


// Grasshopper - Terminal game move function (8 kyu)
const move = (p, r) => p+r*2


// Cound Odd Numbers below n (8 kyu)
const oddCount = (n) => Math.floor(n/2)


// Drone Fly-By (8 kyu)
function flyBy(lamps, drone){
    let res = ''
    if (drone.length>lamps.length){
        res += 'o'.repeat(drone.length-1)
        return res
    } else {
        res +=  'o'.repeat(drone.length)
        res +=  'x'.repeat(lamps.length-drone.length)
        return drone.length>drone.length ? null : res
    }
}


// Powers of 2 (8 kyu)
function powersOfTwo(n) {
    let arr = []
    for (let i=0; i<n+1; i++){
        arr.push(Math.pow(2,i))
    }
    return arr
}

	
// Thinkful - Logic Drills: Traffic light (8 kyu)
const updateLight = (curr) => curr === "green" ? "yellow" : curr === "yellow" ? "red" : "green"


// Is this my tail? (8 kyu)
const correctTail = (b,t) => b.charAt(b.length-1) === t


// To square(root) or not to square(root) (8 kyu)
function squareOrSquareRoot(array){
    let newArr = []
    for (let i=0; i<array.length; i++){
        Number.isInteger(Math.sqrt(array[i])) ? newArr.push(Math.sqrt(array[i])) : newArr.push(Math.pow(array[i],2))
    }
    return newArr
}

	
// Sentence Smash (8 kyu)
const smash = (words) => words.join(' ')


// Enumerable Magic #25 - Take the First N Elements (8 kyu)
const take = (arr, n) => arr.slice(0,n)


// Third Angle of a Triangle (8 kyu)
const otherAngle = (a, b) => 180-a-b


// Reverse List Order (8 kyu)
const reverseList = (list) => list.reverse()


// Twice as old (8 kyu)
const twiceAsOld = (d, s) => Math.abs(d-s*2)


// Expressions Matter (8 kyu)
function expressionMatter(a,b,c) {
    let sum = a+b+c
    let mult = a*b*c
    let one = a*(b+c)
    let sec = (a+b)*c
    return Math.max(sum, mult, one, sec)
}   


// How many lightsabers do you own? (8 kyu)
const howManyLightsabersDoYouOwn = (name) => name==="Zach" ? 18 : 0


// Basic variable assignment (8 kyu)
var a = "code";
var b = "wa.rs";
var name = a + b;

	
// Multiple of Index (8 kyu)
function multipleOfIndex(arr){
    let newArr = []
    for (let i=0; i<arr.length; i++){
        arr[i]%i === 0 ? newArr.push(arr[i]) : null
    }
    return newArr
}
	

// Watermelon (8 kyu)
const divide = (weight) => weight===2 ? false : (weight-2)%2 === 0


// Grasshopper - Messi goals function (8 kyu)
const goals = (llg, cdg, clg) => llg+cdg+clg


// Get Planet Name By ID (8 kyu)
function getPlanetName(id){
  let planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']
  return planets[id-1]
}


// Reversing Words in a String (8 kyu)
function reverse(str){
    let newArr = str.split(' ')
    let revArr = []
    for (let i=newArr.length-1; i>=0; i--){
        revArr.push(newArr[i])
    }
    return revArr.join(' ')
}

	
// Unfinished Loop - Bug Fixing #1 (8 kyu)
function createArray(num){
    let newArr = [];
    for (let i=1; i<num+1; i++){
        newArr.push(i)
    }
    return newArr
}


// Is it event (8 kyu)
const testEven = (n) => n%2 === 0


// Well of Ideas - Easy Version (8 kyu)
function well(x) {
  let countGood = 0
  let countBad = 0
  for (let i=0; i<x.length; i++){
    x[i] === 'good' ? countGood++ :
      x[i] === 'bad' ? countBad++ : null
  }
  return countGood === 0 ? 'Fail!' :
    countGood === 1 || countGood === 2 ? 'Publish!' :
    countGood >= 3 ? 'I smell a series!' : null
}

	
// What's the real floor? (8 kyu)
function getRealFloor(n) {
  return n<=0 ? n :
    n<13 ? n-1 :
    n>13 ? n-2 : null
}

	
// Grasshopper - Array Mean (8 kyu)
const findAverage = (n) => n.reduce((a,b) => a+b)/n.length


// 5 without numbers (8 kyu)
const unusualFive = () => "fivey".length


// String repeat (8 kyu)
pragma solidity ^0.4.19;

contract Repeater {
    function multiply(uint8 repeat, string pattern) view public returns (string) {
        uint pattern_length = bytes(pattern).length;
        bytes memory result = new bytes(pattern_length * repeat);
        
        for (uint i=0; i<pattern_length*repeat; i++) {
            result[i] = bytes(pattern)[i % pattern_length];
        }
        
        return string(result);
    }
}
	
	
// Regex validate PIN code (7 kyu)
function validatePIN (pin) {
  let pinArr = pin.split('')
  let check = 0
  for (let j=0; j<pinArr.length; j++){
    (pinArr[j] >= '0' && pinArr[j] <= '9') ? null : check++
  }
  return (pinArr.length == 4 || pinArr.length == 6) && check == 0
}


// Dollars and Cents (8 kyu)
const formatMoney = (amt) => `$${amt.toFixed(2)}`


// Don't give me five! (7 kyu) 
function dontGiveMeFive (s, e) {
     let newArr = []
     for (let i=s; i<=e; i++) {
       i.toString().slice(-1) == 5 || i == 5 || i.toString().charAt(0) == 5 ? null : newArr.push(i)
     }
     return newArr.length
   } 


// If you can't sleep, just count sheep!! (8 kyu)
// practicing recursion
const countSheep = (num) => {
  let ans = []
  generate = (n) => {
    ans.unshift(n + " sheep...")
    n != 1 ? generate(n-1) : null
  }
  generate(num)
  return ans.join('')
}
// simpler way is:
const countSheep = (n) => [...Array(n)].map((_,i) => `${i+1} sheep...`).join('')


// Alan Partridge II - Apple Turnover (8 kyu)
const apple = x => x*x>1000 ? "It's hotter than the sun!!" : "Help yourself to a honeycomb Yorkie for the glovebox."


// Reverse words (7 kyu)
const reverseWords = (str) => str.split(" ").map(word => word.split('').reverse().join('')).join(' ')


// All Star Code Challenge #1 (7 kyu)
const sumPPG = (p1, p2) => p1.ppg + p2.ppg


// Ones and Zeros (7 kyu)
const binaryArrayToNumber = arr => arr.reverse().map((x,i) => x === 1 ? Math.pow(2, i) : 0).reduce((a,b) => a+b)


// Sum of the first nth term of Series (7 kyu)
function SeriesSum(n) {
  let newArr = [1]
  for (let i=1; i<n; i++) {
    newArr.push(1/(i*3+1))
  }
  return n===0 ? '0.00' : newArr.reduce((a,b)=>a+b).toFixed(2)
}

	
// String ends with? (7 kyu)
const solution = (str, ending) => ending === (str.slice(str.length - ending.length))


// Bit Counting (6 kyu)
const countBits = n => n.toString(2).split('').map(num => Number(num)).reduce((a,b)=>a+b)


// Returning Strings (8kyu) - SQL
SELECT CONCAT('Hello, ', name, ' how are you doing today?') AS greeting FROM person


// Keep Hydrated! (8 kyu) - SQL
SELECT id, hours, FLOOR(hours * 0.5) AS liters FROM cycling
