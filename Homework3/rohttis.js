/*
Kal-el Rohttis
Course: JavaScript Programming
Lab Experiment 4: Arrays, Functions, and AI Assistance
Date: October 5, 2026
*/

// Class Example 1: An array of fruits
console.log("\n------ Class Example 1: Arrays -----");

let fruits = ["Apple", "Banana", "Orange"];

console.log(fruits);
console.log("First fruit:", fruits[0]);

// Class Example 2: A loop prints each color
console.log("\n------ Class Example 2: Loop Through Array -----");

let colors = ["Red", "Blue", "Green"];

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

// Class Example 3: This function squares a number
console.log("\n------ Class Example 3: Functions -----");

function squareNumber(num) {
    return num * num;
}

console.log("Square:", squareNumber(5));

// Lab Exercise: Student Score Analyzer
console.log("\n------ Student Score Analyzer -----");

// This array will hold the five scores.
let scores = [];

// Ask for five scores and put them in the array.
for (let i = 0; i < 5; i++) {
    let score = Number(prompt("Enter a student score:"));
    scores.push(score);
}

// This function finds the average score.
function calculateAverage() {
    let total = 0;

    for (let i = 0; i < scores.length; i++) {
        total = total + scores[i];
    }

    return total / scores.length;
}

let average = calculateAverage();

// Print the scores and the average.
console.log("Scores:", scores.join(", "));
console.log("Average Score:", average);

// Check if the average is passing or failing.
if (average >= 70) {
    console.log("class passed");
} else {
    console.log("class failed");
}

// AI Assistance:
// AI helped me make the code simple and check how it works even if i dont understand i asked AI and it helped me get a better point of view
