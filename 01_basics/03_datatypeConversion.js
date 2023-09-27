//conversion  is a nighmare topic in js

let score =33;
let value = '33';
//now lets say you don't know what type of vaoue the variable stores
//there are two ways to know the type
console.log(typeof(score));
console.log(typeof(value));

//now let's say we wnt to convert value into number datatype
let valueInNumber = Number(value);
console.log(typeof(valueInNumber));

//now here is the interestiong part
let keshav ='44abc'
console.log(typeof(keshav));
let keshavInNumber = Number(keshav);
console.log(typeof(keshavInNumber));//here keshav got converted into number but should not have been
//but if you try to print keshavInNumber
console.log(keshavInNumber);

// now null can also be converted into number it converts into 0;
let n =null;
console.log(Number(n));

//some userful conversion notes
// "33" => 33
// "33abc" => NaN
// true=1 ; false=>0

let isLoggedIn = 1;

let booleanisLoggedIn = Boolean(isLoggedIn);
console.log(booleanisLoggedIn);

//now if we conver a string into boolean
//empty string got converted to false and non empty string got converted to true
let st=''
let stToBoolean = Boolean(st);
console.log(stToBoolean);
let str = "keshav";
let strToBoolean = Boolean(str);
console.log(strToBoolean);

//conversion to string
let num = 34;
let numToString= String(num);
console.log(numToString);
console.log(typeof(numToString));

