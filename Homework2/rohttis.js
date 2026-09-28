/*
Name: Kal-el Rohttis
Course: JavaScript Programming
Homework 2: Arrays, Functions, and AI Assistance
Date: September 27, 2026
*/

// Class Example 1: Creating an Array
console.log("\n------ Class Example 1: Arrays -----");

// This array holds three fruit names.
let fruits = ["Apple", "Banana", "Orange"];

console.log(fruits);
console.log("First fruit:", fruits[0]);

// Class Example 2: Using a Loop with an Array
console.log("\n------ Class Example 2: Loop Through Array -----");

// The loop prints each color in the array.
let colors = ["Red", "Blue", "Green"];

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

// Class Example 3: Functions and Return Values
console.log("\n------ Class Example 3: Functions -----");

// This function multiplies a number by itself.
function squareNumber(num) {
    return num * num;
}

console.log("Square:", squareNumber(5));

// Lab Exercise: Student Score Analyzer
console.log("\n------ Lab Exercise: Student Score Analyzer -----");

// This empty array will hold five scores.
let scores = [5];

// Ask for five scores and add them to the array.
for (let i = 0; i < 5; i++) {
    let score = Number(prompt("Enter a student score:"));
    scores.push(score);
}

// Add the scores and return their average.
function calculateAverage() {
    let total = 0;

    for (let i = 0; i < scores.length; i++) {
        total = total + scores[i];
    }

    return total / scores.length;
}

let average = calculateAverage();

// Show the scores and average in the console.
console.log("Scores:", scores.join(", "));
console.log("Average Score:", average);

// An average of 70 or higher is passing.
if (average >= 70) {
    console.log("Class Passed");
} else {
    console.log("Class Failed");
}

// AI Assistance: AI helped me organize the code and even showed me new codes and  It also helped me check the average and pass-or-fail parts and told me what codes i did wrong or helped me fix it 
