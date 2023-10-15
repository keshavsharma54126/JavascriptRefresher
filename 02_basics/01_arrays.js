// arrays and playing with them

//declaration
//in js as there it is dynnamically typed we can include all primittive data types
const myArr = [0,2,3,4,56,true,"hitesh"]

//javascript arrays are resizable just like cpp vectors
//dynamically typed can contain all datatypes

//accessiing an element by its index
console.log(myArr[0])

//interview impoortant - in arrays whenever you copy shallow copy is created with same reference 
// means if you change something in the memory of the array it will reflect on the array
//deep copy is when if you copy and any change in the copied thing is not reflected in the original 

//Array methods are very important 

const myHeroes = ["shaktiman","naagraj"]
const myArr2 = new Array(1,3,5,65)
console.log(myArr[4])


myArr.push(35)//push method pushes the value to the end of the array

console.log(myArr)
myArr.push(8)
console.log(myArr)

myArr.pop()//removes the last value from the array
console.log(myArr)

myArr.unshift(30)//it pushes the value at the start of the array
console.log(myArr)

myArr.shift()//pops from the font of the array
console.log(myArr)

console.log(myArr.length)//length property of the array

console.log(myArr.includes('hitesh'))//this will give a boolean value if the element in the includes is present or not
console.log(myArr.indexOf(3))//gives the index of the value inside the argument

const newArr = myArr.join()//will convert the array into string
console.log(newArr)
console.log(typeof(newArr))


//slice ,splice

console.log("a",myArr);

const myn1 = myArr.slice(1,3)//does not manipulate the original array
console.log(myn1);
console.log("b",myArr)

const myn2 = myArr.splice(1,3)//manipulates the original array and is similar to slice just it also includes the upper bound character

console.log(myn1)
console.log(myn2)
console.log("b",myArr)





