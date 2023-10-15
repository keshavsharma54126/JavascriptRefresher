const name = "hitesh-hc";
const repoCount = 50

console.log(name +repoCount + "value");

//new syntax with string literal
console.log(`Hello my name is ${name} and my repo count is${repoCount}`)

//one more syntax to declare string
const gameName = new String('keshav')
console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('a'))

//some more methods

const newName = name.substr(0,5)
console.log(newName)

let sliceName = name.slice(0,4)
console.log(sliceName)
sliceName = name.slice(-7,4);
console.log(sliceName)

//trim and replace methods
const newString = "  keshav  "
console.log(newString)
console.log(newString.trim());

const url = "https://keshav.com/keshav%20choudhary"
url.replace('%20','-')
console.log(url.replace('%20','-'))

//includes
console.log(url.includes('keshav'))

//split
const string1 = "my-name-keshav-sharma"
console.log(name.split('-'))


