const user ={
    username: "keshav",
    loginCount : 6,
    signedIn : true,

    getUserDetails : function(){
        console.log('Got the user Details')
        //console.log(`username is ${username}`)  this will give error as username is not defined
        //so we have to tell the compiler that we are talking about the current context user
        //this keyword gives the current context
        console.log(this)
        console.log(`username is ${this.username}`)
    }
}

console.log(user.username)
console.log(user.getUserDetails())

//this for global context
console.log(this)

//now lets say we have to create many users of the same type with same properties
//new keyword is a new constructor we can create a new instance with this new keyword
// const promiesOne = new Promise();
const date = new Date()

function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }

    return this;
}
//using new will give a new instance 
//while using new a new object is created 
//constructor function is called due to new keyword
//this keyword will inject the arguments in the object
const userOne = new User("keshav",123,true)
const  userTwo = new User("Ruchi",23,false)
console.log(userOne)
console.log(userTwo)
//lets look at the constructor
console.log(userOne.constructor)


