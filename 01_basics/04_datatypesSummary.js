//primitive datatype(call by value type)
//7 types :string,Number,boolean,null,undefined,symbol(kisi bhi value to unique banaake ke liye),BigInt(kuch scientific values to handle karne k liye)

//javascript is a dynamically typed language
//but typescript is a statically typed language

const score = 100
const scoreValue = 100.4
const isLoggedIn = true
const outside =  null
let userEmail = undefined
const id = Symbol('123')
const anotherId = Symbol('123');
//the above two id and anotherId are different variables even if they have same values as symbol reutrns a unique value;
console.log(id);
console.log(anotherId);

const bigNumber = 234532453453453455234n 


//Reference type(non primittive)
//Array,Objects,Functions

const heroes = ["Shaktiman","Naagaraj","Doga"];

let user= {
    name:'Keshav',
    age:24,
    isLogged: true
}

const myFunction = function (){
    console.log('hello World')
}

//to know the type of a variable
console.log(typeof(null));//the type will be null
console.log(typeof(myFunction))
console.log(user)


//+++++++++++++++++++++++++++++++++++++++++++++++++++

//Memory Management
//Stack(Primittive,callbyvalue),Heap(non primittive type,callbyrefernce)

let myYoutubeanme = "sharmakeshav54126" 

