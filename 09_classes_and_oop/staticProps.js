class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`username : ${this.username}`)
    }

    static createId(){
        console.log(`${this.useranem}_123`)
    }
}

const keshav = new User('keshav')
//lets say you want a property to not get userd by everyone and protect it 
//then static keyword is used and then the instance of the classes can not use them

// keshav.createId()  will give an error as it is a static function and any object of the class can not acces it

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }

}

const teacher1 = new Teacher('Ruchi','ruchi@gamil.com','324535ds')
console.log(teacher1)

teacher1.createId() //will give error because the inheritted class can also not acces the static funcitons



