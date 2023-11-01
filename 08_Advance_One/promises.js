//promises are objects that represents the eventual compeletion or failure
// of an async operation and its resulting value

//now to consume of a promise we first need to make promises only then
//we will be able to understand their true nature

//there are three states in promises - Pending,fulfilled and rejected

const ourPromise = new Promise((resolve,reject)=>{
    //do an async task
    //db calls,cryptography
    setTimeout(() => {
        console.log('async task is completed')
        resolve();
    }, 1000 );
})
ourPromise.then(()=>{
    console.log('promise consumed')
})

newPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('ashync task 2');
        resolve();
    },1000)
}).then(()=>{
    console.log('async 2 resolved')
})

const promise3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({username:'Keshav',email:'shamakeshav@gmail.com'})
    },1000)
})
promise3.then((user)=>{
    console.log(user)
})

const promise4 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error =true
        if(error){
            reject('error:something went wrong')
        }
        else{
            resolve({username:'keshav',email:'sharmakeshav@gmail.com'})
        }
    },1000)
})
promise4.then((user)=>{
    console.log(user)
    return user.username

})
.then((username)=>{
   console.log(username)
})
.catch((err)=>{
    console.log(err)
}).finally(()=>{
    console.log('The promise is either resolved or rejected')
})

const promise5 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error =true
        if(error){
            reject('error:something went wrong')
        }
        else{
            resolve({username:'keshav',email:'sharmakeshav@gmail.com'})
        }
    },1000)

})

//you can also handle promises with async await by wrapping it into try catch block


async function consumePromise5(){
    try {
        const response = await promise5
        console.log(response)
    } catch (error) {
        console.log('error something went wrong')
    }

}
consumePromise5()

async function getAllUsers(){
    try {
        const response = await fetch('https://randomuser.me/api/')
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log('E:' ,error)
    }
}
getAllUsers()

const response = fetch('https://randomuser.me/api/')
response.then((userData)=>{
    return userData.json()
}).then((user)=>{
    console.log(user)
}
)
response.catch((err)=>{console.log(err)})