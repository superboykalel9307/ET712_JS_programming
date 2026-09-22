console.log("Kal-el ROhttis")
console.log("\nExample 1: array")
let mixedarray = ['cars', 10, true, 'apples', -3,5]
console.log(`The 4th value is ${mixedarray[3]}`)
console.log(`original array = ${mixedarray}`)
console.log("\nExample 2: array Methods")
// remove the first value (left-most) in array mixedarray
mixedarray.shift()
console.log(`array After the shift method = ${mixedarray}`)

//add a value to the left-most in array mixedarray
mixedarray.unshift("NY",200)
console.log(`array After the unshift method = ${mixedarray}`)

//add valyes to the right-most in array mixedarray
mixedarray.push(-360,'QCC')
console.log(`array After push method = ${mixedarray}`)

//METHODS THAT RETURNS VALUE
// find the index number of 'cherries'
indexcherries = mixedarray.indexOf('cherries')
console.log(`what is the index for cherries = ${indexcherries}`)
//it returns -1 if the value doesnt exist

indexQCC = mixedarray.indexOf('QCC')
console.log(`what is the index for QCC? ${indexQCC}`)

console.log("\n ----- example 3: if statment")
// check one condition
// it will run code in between the curly braces if the statment is true
// otherwise if the statment is false, it will skip the code in between the curly braces
let goodmood = false
let gotsleep = false

if (gotsleep == true && goodmood == true){
    console.log("today is a good day")

}

if (goodmood && gotsleep){
    console.log("today is a good day")
} 
console.log ('good bye!')

console.log("\n ----- example 4: if else statment")
// has two branches
let n1 = 6
let n2 = 6

if (n1===n2){
    console.log("the numbers are equal")
}
else{
    console.log("the numbers are not equal")
}

console.log("\n ----- example 5: if else if statment with is function")
let userinput = prompt("Enter a number")
let checkinput = isNaN(parseInt(userinput))

if (checkinput){
console.log(`${userinput} is a string`)
}
else{
    console.log(`${userinput} is a number`)
}

console.log("\n ----- example 6: multiway conditional statment")
// check if the number is zero, negative or positive
let inputnumber = parseInt(userinput)
if (inputnumber === 0){
    console.log("the number is zero")
}
else if (inputnumber>0){
    console.log('the number is positive')
}
else if (inputnumber<0){
    console.log('the number is negative')
}
else{
    console.log('the number is not a number')
}

console.log("\n ----- example 7: AND operator")
// AND operator && returns true if all statments are true
//check if a username is 6+ characters and has no space
let username = prompt("Enter a username")
if(username.length >= 6 && username.indexOf(" ") === -1){

}
else{
    console.log('invalid username')
}

console.log("\n ----- example 8: OR operator")
// OR operator || returns true if at least one statment is true
// rate a  book if is excellent, good , average, invalid
let rate = prompt("how do you like the book?\n3 for excellent, 2 for good, 1 for average")
if (rate === 3 || rate === 2){

}
else if (rate === 1 || rate === 0){
    console.log ('we are sorry that you find the book boring')
}
else{
    console.log('INVALID RATE')

}
