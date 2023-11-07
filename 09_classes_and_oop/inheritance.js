class User  {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`the username is ${this.username}`)
    }
}
const user1 = new User('keshav')
console.log(user1)
console.log(user1.logMe())

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(coursename){
        console.log(`${this.useranme} added a new course ${coursename}`)
    }
}

const teacher1 = new Teacher('keshav','keshav@google.com','keshav2234')
console.log(teacher1)
teacher1.addCourse("physics")
teacher1.logMe()

// user1.addCourse("physics") this will given an error as it does not have acces to the4 properties and the methods of the teacher class as the inheritance is happening the other way round

console.log(user1=== teacher1)
console.log(user1 instanceof User)
console.log(teacher1 instanceof Teacher)


