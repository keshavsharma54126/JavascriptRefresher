//Immediately Invoked Function Expressions(IIFE)
//named iffie
(function chai(){
    console.log('db connected')
})();
//unnames iffie function with parameters
((name)=>{console.log(`db connected ${name}`)})('keshav');




