//if
const isUserLoggedIn = true
if(isUserLoggedIn){
    console.log("user is logged in")
}

if(3!=2){
    console.log("executred")
}
if(2==="2"){
    console.log("executed")
}
//<,>,<=,>=,==,!=,!==,===

const score =200
if(score>2){
    const power = "fly"
    console.log(`user power:${power}`)
}
//console.log(`userpower:${power}`)//this will give error as power is not in global scope

//another syntax if single line syntax
const balance = 1000
if(balance>789) console.log("test")

//nesting for multiple contditions
if(balance<500){
    console.log("less than 500")
}
else if(balance<750){
    console.log("less than 760")
}
else{
    console.log("greater than 750")
}

//another example with && and ||
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn&& debitCard){
    console.log("allow to buy course")
}
if(loggedInFromEmail || loggedInFromGoogle){
    console.log("user Logged in")
}


//switch case statement used in redux in future
const month = 3
switch (month) {
    case 1:
        console.log("january")
        break;
    case 2:
        console.log("february")
        break;
    case 3:
        console.log("march")
        break;
    case 4:
        console.log("april")
        break;

    default:
        break;
}



