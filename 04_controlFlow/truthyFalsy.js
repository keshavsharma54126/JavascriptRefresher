const userEmail = "keshav@sharma.ai"

if(userEmail){
    console.log("got user email")
}
else{
    console.log("don't have user email")
}

//falsy values
//false,0,-0,BigInt 0n,null,undefined,NaN,""

//truthy values
//true,1,"0"(anything except empty string)," ","false",[],{},function(){}

//checking for array
const emptyArray  =[]

if(emptyArray.length === 0){
    console.log("array is empty")
}
const emptyObj={}
if(Object.keys(emptyObj).length === 0){
    console.log("object is empty")
}

//NUllish Caolescing Operator (??):null undefined
let val1;
val1 = 6??10

console.log(val1)

//ternary operator (another operator for if else)
//condition?true:false

const iceTeaprice =100
iceTeaprice>=100?console.log("more then or equal to 100"):console.log("less then 100")
