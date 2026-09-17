let hourNow = 15;
let greeting;

if (hourNow >24){greeting = 'Welcome to the next day!'}
else if (hourNow> 18) {greeting = 'Good evening!'}
 else if (hourNow> 12) {greeting = 'Good afternoon!'}
 else if (hourNow> 0) {greeting = 'Good morning!'}
    else {greeting = "Welcome!"}
const greetingElement = document.getElementById('greeting');
if (greetingElement) {
    greetingElement.innerHTML = '<h2 class="greet">' + greeting + '</h2>';
}

console.log("Kal-el ROhttis")
console.log(greeting)
console.log("Example 1 : conversion between data types")
let num1 = parseInt(prompt("Enter number 1"), 10)
let num2 = parseInt(prompt("Enter number 2"), 10)
let sum = num1 + num2
console.log(`The sum of ${num1} and ${num2} is ${sum}`)

console.log("exercise")
let firstName = prompt("Enter your first name")
console.log(`Hello my name is ${firstName}`)

let age = parseInt(prompt("Enter your age"), 10)
console.log(`I am ${age} years old`)


let favouriteProgrammingLanguage = prompt("Enter your favorite programming language")
console.log(`My favorite programming language is ${favouriteProgrammingLanguage}`)

let hobby= prompt("Enter your hobby")
console.log(`My hobby is ${hobby}`)

document.write(`my 'name is ${firstName} and I am ${age} years old. My favorite programming language is ${favouriteProgrammingLanguage} and my hobby is ${hobby}.`)