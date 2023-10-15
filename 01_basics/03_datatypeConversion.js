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


//****************Operations******************* 

let val = 3;
let negValue = -val;
console.log(negValue);

//simple math operations
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2/3);
console.log(2%3);

//concatenation of string

let str1 = 'hello';
let str2 = ' Keshav'

let str3 = str1+str2;
console.log(str3);

//now some miscelaneous thing of addition of numbers and strings

console.log('1'+2);
console.log(1+'2');
console.log('1'+2+2);//if string first then all will be converted to string

console.log(1+2+'2');//if number comes first then till string comes all will be treated as nubmer

//bad practice
console.log(+true);
//console.log(true+);

//something interesting assignment operator

let num1,num2,num3;

num1=num2=num3 = 2+3;

let gameCounter =100;
gameCounter++;
console.log(gameCounter);
++gameCounter;
console.log(gameCounter);
console.log(gameCounter++);
console.log(gameCounter);

//Comparison operators and how to compare datatypes in js
//if you compare same datatypes then it will result in boollean result;
console.log(3>1);
console.log(3>=3);
console.log(3==4);
console.log(2!=1);

//but in case of two differetn datatypes comparisons
console.log('2'>1);
console.log('02'>1);

//some problematic comparisons

console.log(null>0);
console.log(null==0);
console.log(null>=0);
//incase of undefined  any comparison will always be false;

console.log(undefined == 0);
console.log(undefined >0);
console.log(undefined < 0);

//now there is string typecheck too === this will check the value and the datatype equality as well
console.log('3' === 3);








