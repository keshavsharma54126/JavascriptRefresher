//simple functions
function sayMyname(){
    console.log("Keshav")
}
sayMyname//reference of the function
sayMyname()

//function to add two numbers with parameters
function addTwoNumber(num1,num2){
    console.log(num1+num2)
}
addTwoNumber(3,4)
//suppose you give a string in place of number
addTwoNumber(3,"4")

addTwoNumber(4,null)

//you can also write functionws with a return statemnet
function addTwoNumbers(num1,num2){
    return num1+num2
    console.log('keshav')//this will not work as after returning the function will not executre anything

}
const result = addTwoNumbers(6,7)
console.log(result)

function loginUserMessage(username){
    if(username === undefined){
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Keshav"))
//what if no value is passed in argument
console.log(loginUserMessage())//this will give undefined in username if there was no if condition written

//shopping cart adds the prices and you don't know how many arguments will come
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,23,235))
//lets say we want to skip some number of starting arguments 
function calculateCartPrice1(val1,val3,...num1){
    return num1
}
console.log(123,2435,651,23,6666)

//
const user = {
    username : "keshav",
    price:199
}
function handleObject(anyobject){
    
        console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)

    

}
handleObject(user)

//another way to pass objects
handleObject({
    username:"sam",
    price:555
})

const myNewArr = [233,235,34,123]
function returnSecondValue(myNewArr){
    return myNewArr[1]
}
returnSecondValue(myNewArr)


