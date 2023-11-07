function multiplyby5(num){
    return num*5
}

multiplyby5.power = 2
console.log(multiplyby5(5))
console.log(multiplyby5.power)
console.log(multiplyby5.prototype)

function CreateUser(username,score){
    this.username = username;
    this.score=score;
}

//you can inject your funciton in prototype

CreateUser.prototype.increment = function(){
    this.score++;
}
CreateUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`)
}
const chai = new CreateUser('keshav',50)
const tea = new CreateUser('Ruchi',560)

chai.printMe()
chai.increment()
chai.printMe()

// Here's what happens beihnd the scenes when the new keyword is used

// A new object is created : The new keyword initiates the creatoin of a new javascript 
// object;

// A prototype is linked : The newly created object gets linked to the prototype property of the 
// constructor function. this means that it has access to prooperties and methods defined on the
// constructor's prototype.

let myName = "Keshav    "
console.log(myName.truelength);
//now we want to create a new method that will give the true lenght of the string
//so we will have to inject a new method 

let myHeroes = ["thor","spiderman"]

String.prototype.truelength = function(){
    console.log(`${this.trim().length}`)
}


let heroPower ={
    thor: "hammer",
    spiderman : "sling",

    getSpiderPower : function(){
        console.log(`spidey power is ${this.spiderman}`)
    }
}

//inserting this method in the gloal Object and now it will be availabe in all objects created
Object.prototype.keshav = function(){
    console.log(`keshav is present in all objects`)
}

heroPower.keshav();

//we can also do the above for Arrays,Strings as well but those are not inheritted
//objects but when objects gets inserted with some property or method then Arrays,Strings 
//all will have that property or method as Objects is the base from which all other inherit

Array.prototype.heyKeshav=function(){
    console.log('keshav says hi')
}

myHeroes.heyKeshav();
// heroPower.heyKeshav(); this will now work as only arrays have that prototpye method

//now how doe we inherit prototypes
//inheritance

const Teacher = {
    makeVideo:true
}

const TeachingSupport = {
    isAvailable:false
}

const TASupport = {
    makeAssignment : "js assignmens",
    fullTime: true,
    //now let's say we have to inherit the properties of TeachingSupport  into TASupport
    //the below thing is called prototypal inheritance
    __proto__: TeachingSupport
}

//now we can also do prototypal inheritance outside with modern syntax
//old syntax
Teacher.__proto__ = TASupport;
//modern syntax
//the below will inherit the propperties of teacher into Teaching support
Object.setPrototypeOf(Teacher,TeachingSupport)



let superD = 'spiderman   '
superD.truelength()



