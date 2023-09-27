const accountId = 12345
let accountEmail = "sharmakeshav234@gmail.com"
var accountpasswrod = 'lkasdflk234nn#'
 accountCity = 'Ghaziabad' //this is a bad practice but you can do this and it will work

 let accountState ;
//const can not be changed

// accountId= 2;
//the above code will throw an error as const can not be changed


console.log(accountId);

accountEmail = "hc@gmai.com"
accountPasswordd = '234345'
accountCity = 'Bengaluru'

console.log(accountId)
console.table([accountId, accountEmail, accountpasswrod ,accountCity,accountState])

//var should not be use as it has problems with block scope and functional scope

