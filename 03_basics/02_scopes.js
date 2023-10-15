//three keywords let , var and const

let a =100

 if(true){
    let a= 10
    const b = 20
    var c = 30
    console.log(a)
 }

 //console.log(a)
 //console.log(b)
 console.log(c)//that's why we should not use var
console.log(a)

//now we will talk about nested scopes
function one(){
   const username = "hitesh"
   function two(){
      const website = "youtube"
      console.log(username);
   }
   //console.log(website)
   two()

}
one()

// in the above nested functions the two() function can access the username but the one() function can not acces the website as the scope of the website variable 
//is only inside the two() function 

//same thing happens in if else conditions
if(true){
   const username = "hitesh"
   if(username === "hitesh"){
      const website = "youtube"
      console.log(username+website)
   }
   //console.log(website) 

}
//console.log(username)

//+++++++++++++++++++++++interesting +++++++++++++++//
console.log(addone(6)) 
function addone(value){
   return value+1
}


//it is a function but is called an expression when a variable holds a function
//console.log(addTwo(5)) 
const addTwo = function(value){
   return value+2
}



