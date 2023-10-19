//for of(array specific loops) basically 

const arr = [1,2,3,5,6]

for (const itr of arr) {
    console.log(itr)
}

const greeting = "hello world "

for(const itr of greeting){
    console.log(`each char is ${itr}`)
}

//Maps
const map = new Map()
map.set('IN',"India")
map.set('USA',"United Statues of America")
map.set('Fr',"France")

console.log(map)

for(const [key,value] of map){
    console.log(key,':-',value)
}


//for of loop on objects can not be used as objects are not iteratable with for of
const myObject={
    game1:'NFS',
    game2:'Spiderman',
    game3:'IGI'
}
//so how will we iterate over a object
// to iterate over an object we use for in loop
for(const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`)
}

const programming = ['js','rb','py','java','cpp']

for(const itr in programming){
    console.log(programming[itr])
}

//for each loop will be used the most while coding
const coding = ['js','ruby','java','python','cpp']
//for each is a higher order function which takes a call back functions and executes it on every element of the array
coding.forEach( (item)=>{
    console.log(`4{item} is a programming language`)
})

//you can also pass on some other functions as a callback function but just pass the functoin reference to the for each and don't execute it there
function printMe(item){
    console.log(item)
}
coding.forEach(printMe)

//for each also has acces to different parameters
coding .forEach((item,index,arr)=>{
    console.log(item,index,arr)
})

//another common scenario
const myCoding = [
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"c++",
        languageFileName:"cpp"
    }
]
myCoding.forEach((item)=>{
    console.log(item.languageName);
    console.log(item.languageFileName)
})









