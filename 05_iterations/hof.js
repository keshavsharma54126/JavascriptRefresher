//forEach does not return anything actually you can only do some computation and tha's it does not return anything
const myArr = [1,3,5,5,5,5,56]
//the below code will throw error as the forEach can not return anything
// myArr.forEach((item)=>{
//     console.log(item)
//     return item
// })

//filter(this hof will return values)
const newNums = myArr.filter((num)=>{
    return num>5
})
console.log(newNums)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const userBooks = books.filter((bk)=>{
        return bk.genre='Science'
  })
  console.log(userBooks)
//publish books after 1995 and history genre

  const booksAfter2000= books.filter((bk)=>{
        if(bk.publish>=1995 && bk.genre==='History'){
            console.log(bk.title)
        }
  })
booksAfter2000

//Map method (another higher order function)

const myNumbers =[2,35,62,25,253]

//lets say we have to add 10 to each number 
const newNum = myNumbers.map((nums)=>{
    return nums+10
})
console.log(newNum)

//chaining
const newnum = myNumbers.map((num)=>num*10)
    .map((num)=>num+2)
    .filter((num)=>num%2==0)
     

console.log(newnum)

//Reduce method (another highere order function)
const myNums = [1,24,6,77]

const myReduce = myNums.reduce((acc,currval)=>{
    console.log(`acc value = ${acc}`)
    console.log(`currval value = ${currval}`)
    return acc+currval
},0)
console.log(myReduce)

const shoppingCart = [
    {
        itenName:"js course",
        price:234
    },
    {
        itenName:"py course",
        price:999
    },
    {
        itemName:"react native",
        price:9999
    }

]
const cartTotal = shoppingCart.reduce((acc,currval)=>(acc+currval.price),0)
console.log(cartTotal) 


