//ES6   

class User{
    constructor(username,email,password){
        this.username = username
        this.email = email
        this.password = password
    }
    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${(this.username).toUpperCase()}`
    }
}

const user1 = new User('keshav','sharmakeshav@gmail.com','1234')

console.log(user1)
console.log(user1.encryptPassword())
console.log(user1.changeUsername())

//now we can do the above with below functional code and this is how the above code 
//works behind the hood

function Userr(username,email,password){
    this.username = username
    this.email =email
    this.password = password
}

Userr.prototype.encryptPassword = function(){
    return `${this.password}abcd`
}


const user2 = new Userr('hitesh','hitesh@google.com','asdflih')
console.log(user2)
console.log(user2.encryptPassword())




