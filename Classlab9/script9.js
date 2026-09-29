console.log("Kalel Rohttis")
console.log("\n ------ example 1: intro to function ")
// define a function that prints from 3 to 1
function printcount(){
    for (let num= 3; num>=1; num--){
        console.log(num)
    }
}
console.log("\n ------ example 2: function with parameters ")
// function that prints a name. the name is passed to the function
function greeting(name){
    console.log(`good afternoon ${name.toUpperCase()}`)
}

console.log("\n ------ example 3: function with parmeters ")
//fuction that prints a message that starts with number 1 all the way up to the stopnumber
//the stopnumber and the message are pass to the function
function greetcount(msg, stopnumber){
    for (let n = 1; n <= stopnumber; n++)
        console.log(`${msg} ${n}`)
    }


    console.log("\n ------ example 4: function with parameters ")
    //function that prints 'snake's eyes' if two numbers are 1
    function snake(n1, n2){
        if (n1===1 && n2===1){
            console.log("snake's eyes")
        }
        else{
            console.log("Not snake's eyes")
        }
    }
console.log("\n ------ example 5: function that returns value ")
//function that calculates the area of a square and returns the calculated area
function areasquare(side){
    console.log("calculate area of square with side", side)
    return side*side
    console.log("the area is ", side*side)
}
console.log("\n ------ example 6: function that returns a boolean value ")
//function that returns 'ture' if the tempature is greater than 7
//otherwise, ut returns 'fale'
// the checktempature is passed to the function
function checktemperture(t){
    if(t>75)
        return true
    else
        return false
}

console.log("\n ------ example 7: JS built-in math function ")
const PI = Math.PI
console.log(PI)
console.log(`Round PI = ${Math.round(PI)}`)
console.log(`ceil PI = ${Math.ceil(PI)}`)
console.log(`Floor PI = ${Math.floor(PI)}`)
console.log(`power 2^5 = ${Math.pow(2,5)}`)
console.log(`square root of 81 = ${Math.sqrt(81)}`)
console.log(`random numbers = ${Math.random()}`)
console.log(`return a random number between 1 and 9 ${Math.random()*9}`)

console.log("\n ------ example 8: JS built-in math function  ")
//function that will randomly pick a color from an array
let colors=['red', 'blue', 'pink', 'purple', 'black']

function pickindex(lastindex){
    let random_index = Math.floor(Math.random()*lastindex)
    return random_index
}

let index = pickindex(colors.length)
let pickcolor = colors[index]
console.log(`randomly picked color = ${pickcolor}`)