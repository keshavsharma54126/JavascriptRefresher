//Numbers
const score = 345;
console.log(score)

const balance = new Number(100)
console.log(balance)

console.log(balance.toString())
console.log(typeof(balance.toString()))

console.log(balance.toFixed(2));//basically to fix the precision value after decimal here it is after 2 places after decimal

const otherNumber = 23.25234
console.log(otherNumber.toPrecision(3));

const hundreds = 10000000
console.log(hundreds.toLocaleString())

//for indian standards
console.log(hundreds.toLocaleString('en-IN'))

//++++++++++++++++++ Maths +++++++++++++++++//

console.log(Math)
//absolute value
console.log(Math.abs(-3))

//round
console.log(Math.round(5.3))
console.log(Math.floor(2.5))
console.log(Math.ceil(234.4))

console.log(Math.min(2,5,6,23,23))
console.log(Math.max(23,2345,51324,65))
console.log(Math.random()) 

//building a dice using random
let dice = Math.ceil((Math.random()*5))
 console.log(dice)

//to get a random value between min and max using math random function 

const min =10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1)+min))
