//objects can be singleton (declaring them with the help of constructiors)
const tinderUser = new Object()
const tinderUser1 = {}

console.log(tinderUser)//this is a singleton object
console.log(tinderUser1)//not a singleton object

//giving key value pair to the tinderuser
tinderUser.id = "123asd"
tinderUser.name = "Keshav"
tinderUser.isLoggedIn = false

console.log(tinderUser)

//we can also used objects as a value for a key
const user={
    email:"keshav@gmail.com",
    fullname:{
        userFullname:{
            firstname:"Keshav",
            lastname:"sharma"
        }
    }
}
//accesing these keyvalue pairs
console.log(user.fullname.userFullname.firstname)
//lets say fullname does not exist then it will give an error so we use a different syntax when we are using apis to get the data
console.log(user.fullname?.userFullname?.firstname)


//combing two objects 
const obj1 = {1:'a',2:"b"}
const obj2 = {3:'c',4:'d'}

const obj3  = {obj1,obj2}//this will two objects inside the obj3 which is itself an object
console.log(obj3)

//but what if we want to create a single object that does not contain obj1,obj2 but rather all the values of them in a single object
const obj4 = Object.assign({},obj1,obj2)//it returns an object and the starting empy parenthesis means it is the target object which is basically which is returned object
console.log(obj4)

//now spread operator is also used in object
const obj5 = {...obj1,...obj2}
console.log(obj5)

//some other methods on objects
console.log(tinderUser)
//to get all the keys/values/entries of an object
console.log(Object.keys(tinderUser))//returns array of all the keys
console.log(Object.values(tinderUser))//returns array of all the values
console.log(Object.entries(tinderUser))//returns an array of arrays of all the key value pairs

console.log(tinderUser.hasOwnProperty('isLoggedIn'))//returns a boolean if the property is present or not

