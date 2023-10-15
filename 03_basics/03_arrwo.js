const user = {
    username:"keshav",
    price:99,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)//this will give the current context
    }
}
// in the above example we use this keyword to use the username that is present in the current context
//it refers to the current context

user.welcomeMessage()
//Lets' say we change the username
user .username="sam"
user.welcomeMessage()

//if there is no context i mean what is the global context
console.log(this)//in node environment the global object is the empty object
//but in the browser window object is the global object


//now let's talk about arrow functions

function chai(){
    let username = "keshav"
    console.log(this.username)
}
chai()

const chai1 = function(){
    let username = "keshav"
    console.log(this.username)
}
chai1()

//now lets make an arrow function and do the same with this keyword
const chai2 = ()=>{
    let username = "keshav"
    console.log(this.username)
}
chai2()

//example of an arrow fucntion

const addTwo =(num1,num2)=>{
    return num1+num2
}
console.log(addTwo(4,5))
//another way

const addTwo1=(num1,num2)=>(num1+num2)//if you don't want to use curly braces and return statement
console.log(addTwo1(3,56))


