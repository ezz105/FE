
// //     Flashcard 3: Booleans in Conditional Statements
// // Front:
// // How are Booleans used in conditional statements?

// // Back:
// // Booleans determine which code block to execute:

// // javascript
// // Copy code

// if (ILikeMeat) {
//   console.log("Give a meat menu!");
// } else {
// }

// console.log("Give a vegetarian menu!");



// // Flashcard 4: Truthy and Falsy Values
// // Front:
// // What are truthy and falsy values in JavaScript?

// // Back:
// // Non-Boolean values can behave as true or false:

// // Truthy: Non-zero numbers, non-empty strings, objects.
// // Falsy: 0, -0, "", null, undefined, NaN.
// // Example:
// // javascript
// // Copy code


// Boolean(7 > 5); // true
// Boolean(0);     // false



// // Flashcard 5: Comparison Operators
// // Front:
// // How do comparison operators work in JavaScript?

// // Back:

// // ==: Checks equality with type conversion.
// // ===: Strict equality (no type conversion).
// // Example:
// // javascript
// // Copy code
// // 7 == "7";  // true
// // 7 === "7"; // false
// // =: Assignment operator, not for comparison.
// // Flashcard 6: The Boolean() Function
// // Front:
// // What is the Boolean() function?

// // Back:
// // A built-in function that evaluates a value's truthiness or falsiness.
// // Example:

// // javascript
// // Copy code


// // Boolean(5);  // true
// // Boolean(0);  // false
// // Boolean(""); // false



// // Flashcard 7: Examples of Truthy and Falsy
// // Front:
// // Provide examples of truthy and falsy values.

// // Back:

// // Truthy: 1, -5, "hello", {}
// // Falsy: 0, -0, "" (empty string), null, undefined, NaN
// // Flashcard 8: Practical Applications
// // Front:
// // How are Booleans used in real-life programming?

// // Back:

// // Validating user input (e.g., form fields).
// // Controlling program flow with if statements.
// // Example:
// // javascript
// // Copy code



// // if (input === "") {
// //   alert("This field is required!");
// // }


// // Flashcard 9: Conclusion
// // Front:
// // What comes next after learning Booleans?

// // Back:

// // Booleans are essential for if statements and conditional logic.
// // Next lesson: Using Booleans in conditional statements (if, else).


// if (ILikeMeat) {
//   console.log("Give a meat menu!");
// } else {
//     console.log("Give a vegetarian menu!");
// }


// 7 != 7
// false
// var i
// undefined
// var iliketea = true
// undefined
// if (iliketea) {
//     console.log("i like caffieen")
// }else {
//     console.log("i heat caffieen")
// }
// VM2317:2 i like caffieen
// undefined
// var iliketea = false
// undefined
// if (iliketea) {
//     console.log("i like caffieen")
// }else {
//     console.log("i heat caffieen")
// }
// VM2354:4 i heat caffieen
// undefined
// Boolean(0)
// false
// Boolean("rr")
// true
// Boolean(" ")
// true