//for loop
const array = [1,2,3,4,5]

for (let index = 0; index < array.length; index++) {
 
    const element = array[index];
    if(element==5){
        console.log("5 is the best number")
    }
    console.log(element)
    
}
for(let i=0;i<10;i++){
    console.log(i+1)
    
}

for(let i=0;i<10;i++){
    console.log(`outer loop value: ${i}`)
    for(let j=i+1;j<11;j++){
        console.log(`outer loop value: ${j}`)
    }
}


//working with for loop in array
let myHero = ["flash","batman","superman"]
for (let index = 0; index < myHero.length; index++) {
    const element = myHero[index];
    console.log(element)
    
}

//break and continue

for (let index = 0; index < 20; index++) {
    
    if(index==5){
        console.log('detected 5');
        break;
    }
    console.log(`value of i is ${index}`)

    
}

for (let index = 0; index < 20; index++) {
    
    if(index==5){
        console.log('detected 5');
        continue;
    }
    console.log(`value of i is ${index}`)

    
}



