//singleton 

//object literals
//Object.create()(another method to create object in which singleton is created)
//objects contain key value pair(we can give any key vlaue pair)



const jsUser = {
    name: "keshav",
    "lastName": "sharma",
    age :28,
    email: "kshav@google.com",
    isLoggedIn:false,
    lastloginDays : ["monday","tuesday"]
}
//we can acces through different methods
console.log(jsUser.email)
console.log(jsUser["email"])//this method is important due to the below case
//let's say if a key is deinfed as a string explicityly(as all keys are implicityly taken as strings inside the object)
//then there will be no other way to acces them except the below method
console.log(jsUser["lastName"])

//important interview questoin 
//how do you use a symbol inside an object

//first declare the symbol outside
const sym1 = Symbol("mysym1")
const jsUser1 = {
    [sym1] : "mysym1"
}
console.log(jsUser1[sym1])
console.log(typeof(jsUser1[sym1]))

//changing the value of the kyes in object
jsUser.email = "keshav@gmai.com"
//we can also frreze an Object such that no changes can be made to them
// Object.freeze(jsUser)
// to test the freeze thingy
jsUser.email = "keshv@microsoft.outlook"
jsUser.age =56
jsUser.lastloginDays.push('wednesday')//this will add wednesday as it is a nested array
console.log(jsUser)


//adding a functoin in the object
jsUser.greeting = function(){
    console.log("hello Js User")
}
console.log(jsUser.greeting)//in the case of funtion if we don't use () at the end then the reference of the function is returned 
console.log(jsUser.greeting())// in this case the fucntion gets executed

jsUser.greetingTwo = function(){
    console.log(`Hello js user, ${this.isLoggedIn}`);
}
console.log(jsUser.greeting()) 
console.log(jsUser.greetingTwo())





