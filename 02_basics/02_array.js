const marvelHeroes = ["thor","ironman","spiderman"]
const dcHeroes = ["superman","flash","batman"]

// marvelHeroes.push(dcHeroes)//this will not join the array instead it will take the dcHeroes as a single element 
// console.log(marvelHeroes)

//if we use concat then it will give us a new array altogether so we have to hold it inside a new variable but it will conate the two arrays 

const newHeroes = marvelHeroes.concat(dcHeroes)
console.log(newHeroes)

//now comes the spread operator basically dropping something in a glass and it spreads in the glass
const allNewHeroes = [...marvelHeroes, ...dcHeroes]
console.log(allNewHeroes)

//how to handle complicated nested arrays like below
const arr1 = [1,2,3,[4,5,6],7,[6,7,8,[5,6]]]
//we can flatten the above array into a single one
const flatarr1 = arr1.flat(Infinity)
console.log(flatarr1)

//whenver we recieve data we get some different datatype but we have to convert into array like below

console.log(Array.isArray("keshav"))
console.log(Array.from("hitesh"))
console.log(Array.from({name:"keshav"}))//we can convert the object to array but this will return an empty array
//because it does not know which thing(key,value) to make array from hence we have to specify like belo

let score1 = 100
let score2 = 299
let score3 = 234

console.log(Array.of(score1,score2,score3))

