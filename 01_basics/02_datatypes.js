"use strict"; //treat all js code as newer version

//alert('hey buddy')//this can only work with windows object and not with node

console.log(3+2);
console.log("keshav sharma");

//code redability should be high

//mostly documentation should be from mdn


//now we should discuss datatypes of different tyeps

//string
let name= 'keshav'

//number
let age=23

//boolean
let isLoggedIn=true;

//number =>2 to power 53
//bigint should be used in case your number are very big
//string => " "
//boolean => true/false
//null(standalone value as well as a datatype)
//undefined =>when the value is not defined  ex let a;  here a is undefined
//symbol  => uniqueness dikhane k liye 

//object datatype is univeral

console.log(typeof('keshav'));
console.log(typeof(6));
console.log(typeof(null));//interview question the type of null is actually an object 
console.log(typeof(undefined));