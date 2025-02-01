var ilikeCoffee = true;
// var ilikeCoffee = false;

if (ilikeCoffee) {
    console.log("I like coffee!");
}else {
    console.log("I don't like coffee!");
}

var ilikeTea = false;


if (ilikeTea) {
    console.log("I like tea!");
}else {
    console.log("I don't like tea!");
}



/*
Front of Flashcard
Title: JavaScript If Statements – Lesson 12
Purpose: Understand how to use if statements to control the flow of logic in JavaScript programs.
Key Topics:
Syntax
Condition evaluation
Real-life analogies
Code examples
Back of Flashcard
Key Points:
What is an If Statement?

A way to check if a condition is true and execute specific code accordingly.
Real-Life Analogy:

Example:
If you pay for a train ticket, then you won’t get fined.
If you don’t, else you'll get fined.
Syntax:

javascript
Copy code
if (condition) {
    // Code block if condition is true
}
Keywords: if (checks condition), else (handles false conditions).
Basic Example:

javascript
Copy code
let youLikeMeat = true;  
if (youLikeMeat) {  
    document.write("Here is the meat menu");  
} else {  
    document.write("You hate meat");  
}
Comparison Operators:

>: Greater than
<: Less than
==: Equal to (comparison)
=: Assignment operator (not for comparison).
Using Boolean Variables:

Assign true or false values to variables for condition checks.
Example with Numbers:

javascript
Copy code
let myNum = 10;  
if (myNum > 10) {  
    document.write("Number is greater than 10");  
} else {  
    document.write("Number is not greater than 10");  
}
Else Statement:

Provides an alternative code block if the if condition is false.
Testing in a Browser:

Write your code in a .js file linked to an HTML file for live testing.
Tips and Tricks:
Always indent code inside the curly braces for readability.
Use console.log() or document.write() for quick debugging or displaying output.
Practice using conditions like >, <, ==, and experiment with multiple scenarios.

*/