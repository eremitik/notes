// 1108. Defanging an IP Address (easy)
var defangIPaddr = function(address) {
  let newAddy = address.split('')
  let newArr = []
  for(let i=0; i<newAddy.length; i++){
      address[i] === '.' ? newArr.push('[.]') : newArr.push(address[i])
  }
  return newArr.join('')
}



// 1480. Running Sum of 1d Array (easy)
var defangIPaddr = function(address) {
  let newAddy = address.split('')
  let newArr = []
  for(let i=0; i<newAddy.length; i++){
      address[i] === '.' ? newArr.push('[.]') : newArr.push(address[i])
  }
  return newArr.join('')
}



// 1431. Kids With the Greatest Number of Candies (easy)
var kidsWithCandies = function(candies, extraCandies) {
  let newArr = []
  let maxCandies = Math.max(...candies)
  for (let i=0; i<candies.length; i++){
      newArr.push((candies[i]+extraCandies) >= maxCandies )
  }
  return newArr
}



// 1470. Shuffle the Array (easy)
var shuffle = function(nums, n) {
  let newArr = []
  for (let i=0; i<(nums.length/2); i++){
      newArr.push(nums[i], nums[i+n])
  }
  return newArr
}



// 1672. Richest Customer Wealth (easy)
var maximumWealth = function(accounts) {
  let newArr = []
  for(let i=0; i<accounts.length; i++){
      newArr.push(accounts[i].reduce((a,b)=>a+b))
      }
   return Math.max(...newArr)
}



// 1512. Number of Good Pairs
var numIdenticalPairs = function(nums) { 
  let sum = 0 
  for (let i=0; i<nums.length; i++){
      for (let j=i+1; j<nums.length; j++){
          nums[i] === nums[j] ? sum++ : null
      } 
  } 
  return sum
}



// 771. Jewels and Stones
var numJewelsInStones = function(jewels, stones) {
  let check = 0
  for (let i=0; i<stones.length; i++){
      for (let j=0; j<jewels.length; j++){
          if(stones.charAt(i) === jewels.charAt(j)){
              check++
          }   
      }
  }
  return check
}   



// 1773. Count Items Matching a Rule
var countMatches = function(items, ruleKey, ruleValue) {
  let index, count = 0

  ruleKey === "type" ? index=0 :
      ruleKey === "color" ? index=1 :
      ruleKey === "name" ? index=2 : null

  for (let i=0; i<items.length; i++){
      items[i][index] === ruleValue ? count++ : null
  }
  return count
}



// 1281. Subtract the Product and Sum of Digits of an Integer
var subtractProductAndSum = function(n) {
  let num = n.toString().split('').map(Number)
  let prod = num.reduce((a,b)=>a*b)
  let sum = num.reduce((c,d)=>c+d)
  return prod - sum
}



// 1678. Goal Parser Interpretation
var interpret = function(command) {
  let word = ''
  for (let i=0; i<command.length; i++){
      command.charAt(i) === 'G' ? word += 'G' :
          (command.charAt(i) === "(" && command.charAt(i+1) === ")") ? word += 'o' :
          (command.charAt(i) === "(" && command.charAt(i+1) === "a") ? word += 'al' : null
  }
  return word
}



// 1389. Create Target Array in the Given Order
var createTargetArray = function(nums, index) {
  let newArr = []
  for (let i=0; i<nums.length; i++){
      newArr.splice(index[i], 0, nums[i])
  }
  return newArr
}



// 1662. Check If Two String Arrays are Equivalent
var arrayStringsAreEqual = function(word1, word2) {
  let w1 = word1.reduce((a,b) => a+b)
  let w2 = word2.reduce((c,d) => c+d)
  return w1 === w2
}



// 1365. How Many Numbers Are Smaller Than the Current Number
var smallerNumbersThanCurrent = function(nums) {
  let newArr = []
  for (let i=0; i<nums.length; i++){
          let count = 0
      for (let j=0; j<nums.length; j++){
          nums[i]>nums[j] ? count++ : null
      }
      newArr.push(count)
  }
  return newArr
}



// 1732. Find the Highest Altitude
var largestAltitude = function(gain) {
  let points = 0
  let newArr = []
  for (let i=0; i<gain.length+1; i++){
      newArr.push(points)
      points = points+gain[i]
  }
  return Math.max.apply(false, newArr)
}



// 1295. Find Numbers with Even Number of Digits
var findNumbers = function(nums) {
  let count = 0
  for (let i=0; i<nums.length; i++){
      nums[i].toString().length % 2 === 0 ? count+=1 : null
  }
  return count
}   



// 709. To Lower Case
var toLowerCase = function(str) {
  return str.toLowerCase()
}



// 1880. Check if Word Equals Summation of Two Words
const isSumEqual = (fw, sw, tw) => {
let foo = Number([...fw].map(v => v.charCodeAt() - 97).join(''))
        + Number([...sw].map(v => v.charCodeAt() - 97).join(''))
let bar = Number([...tw].map(v => v.charCodeAt() - 97).join(''))
return foo === bar
}

// DRY applied
const isSumEqual = (fw, sw, tw) => {
const findNum = (x) => Number([...x].map(v => v.charCodeAt() - 97).join(''))
return findNum(fw) + findNum(sw) === findNum(tw)
}


// 1528. Shuffle String
const restoreString = (s, indices) => {
let word = ''
let sArr = s.split('')
for (let i=0; i<indices.length; i++) {
  for (let j=0; j<indices.length; j++) {
    i === indices[j] ? word += sArr[j] : null
  }
}
return word
}


// 1342. Number of Steps to Reduce a Number to Zero
const numberOfSteps = (num) => {
let count = 0
const reduce = (n) => n === 0 
  ? null : n%2===0 
  ? (count++, reduce(n/2)) : (count++, reduce(n-1))
reduce(num)
return count
}


// 1832. Check if the Sentence is Pangram
const checkIfPangram = (s) => {
let alphabet = {
  a: 0,
  b: 0,
  c: 0,
  d: 0,
  e: 0,
  f: 0,
  g: 0,
  h: 0,
  i: 0,
  j: 0,
  k: 0,
  l: 0,
  m: 0,
  n: 0,
  o: 0,
  p: 0,
  q: 0,
  r: 0,
  s: 0,
  t: 0,
  u: 0,
  v: 0,
  w: 0,
  x: 0,
  y: 0,
  z: 0,
}
for (let i=0; i<s.length; i++){
  alphabet[s[i]] = 1
}
return Object.values(alphabet).reduce((a,b) => a+b) === 26
}
