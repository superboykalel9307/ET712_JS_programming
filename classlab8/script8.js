console.log("-------example 1 : for loops")
// for loops to print from 0 to 4 inclusive. 0-1-2-3-4
for(let n = 0 ; n <=4; n++){
    console.log(`the current counter iz ${n}`)        
}

console.log("------- example 2: for loops")
// for loop to print even numbers between inital value up to 100, exclusive
//the initial value is collected from the dialog box using prompt()
let initial = parseInt(prompt("enter a number less than 90"))
for(initial ; initial <100; initial++ ){
    
    if(initial % 2 ===0){
    console.log(`${initial}`)
    }
}

console.log("------- example 3: for loops for decreasing counter")
//for loop to print from 9 to 1, inclusive, 9 8 7 6 5 4 3 2 1
for(let m = 9; m >= 1; m--){
    console.log(`${m}`)
}

console.log("------- example 4: for loops in an array")
let cars =['mazda','tesla','Dodge','BMW','Porshe']
for(let n of cars){
    // check and print car's name with 5 characters
    if(n.length ===5){
        console.log(`${n}`)
    }
}

console.log("------- example 5: while loop as a counter")
// while to print 0 to 4, 0 1 2 3 4
//inital value
let i = 0
while(i <=4){
    console.log(i)
    i++     // update of i = increase i by 1
}

console.log("------- example 6: while to guess a number")
// the value of a constant varbible CAN"T BE CHANGED
const SECRET = 8
//collect user number
let usernumber = parseInt(prompt("enter a number between 0 and 10"))
//use a while to recollected usernumber if the collected number is not equal to secret
while(SECRET !== usernumber){
     usernumber = parseInt(prompt("Wrong guess! enter another number: "))
}
console.log(`Great! the secret number is ${SECRET}`)

console.log("------- example 7: while to validate a number")
//validate if the input number is between 1 and 9
while(true){
    let number = parseInt(prompt("enter a number 1-9"))
    if(number>=1 && number <=9)
    {
        break
    }
}
console.log("------- example 8: while to guess a number")
//skip numbers that a multipled of 3 between 0 and 1-
for(let n = 0; n<=10 ; n++){
    if (n%3 ===0){
        continue
    }
    console.log(n)

}