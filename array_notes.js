'use strict';

console.log(`

***Iterate through an Array***`)
//Iterate through an Array


//for in loop
let arr = [5, 6, 7, 8, 9, 10]
for (let i in arr){
  console.log(arr[i]) //need to bracket the i
}

//for of loop
for (let i of arr){   //of loop is specifically for cycling through
  console.log(i)      //no need to bracket the i here
}

//forEach method
arr.forEach((val) => {console.log(val)})

//iterator
let it = arr[Symbol.iterator]()
console.log(it.next())

console.log(`

  `)


console.log(`

***Manipulate Arrays***`)
//Manipulate Arrays
let testArr = [1,2,3,4,5]
console.log(testArr)

testArr.push(6)
console.log(testArr)

testArr.splice(1,1,'foo')
console.log(testArr)

testArr.splice(0,1)
console.log(testArr)

testArr.pop()
console.log(testArr)

testArr.unshift(1)
console.log(testArr)

testArr.shift()
console.log(testArr)


console.log(testArr[0])
