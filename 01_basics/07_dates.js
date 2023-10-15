const date = new Date();
console.log(date)//this will not be a string

//so we have to convert it to a string
console.log(date.toString())
console.log(date.toDateString())
console.log(date.toLocaleString())

// all of the above three methods to convert to a string have different flavours

//now we can also initialise with an arbitrary date;
let myDate = new Date(2023,0,23)//(year,month(0 indexing),date)
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
//some other syntax to initialise the date object
let mydate = new Date("02-03-2023")
console.log(mydate.toLocaleString())

//timestamps
let myTimeStamp = Date.now()
console.log(myTimeStamp)//this will give time in milliseconds
//now if we have to get time for a particular date which is initialised
console.log(myDate.getTime())//this will also give time in milisecoinds

console.log(Math.floor(Date.now()/1000))//this will give in seconds

// now there are somemethods with date object

let newDate = new Date()
console.log(newDate.getDate())
console.log(newDate.getDay())
console.log(newDate.getDay())
console.log(newDate.getFullYear())
//there are many more such methods

//the most important is the below one for internationalisation
newDate.toLocaleDateString('default',{
    weekday: "long",
    // you can add further parameteres to the object to modify for your needs

})


