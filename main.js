// const name = 'Salah El Din';


// function toUpper(text) {

//     const toUpperCase = text.toUpperCase();
//     console.log(toUpperCase);
    
// }

// toUpper(name);

/*
 Learn the global scope of a variable
Learn the local scope of a variable 
Learn the block scope of a variable
Learn the function scope of a variable
Learn the lexical scope of a variable
Learn the module scope of a variable
Learn the scope of a variable in JavaScript
Learn the scope of a variable in Node.js
Learn the scope of a variable in the browser
L

*/

/*
    أحتراف لغة JavaScript 

    To become an expert in JavaScript, consider the following steps:
    
    1. Master the fundamentals: Learn the basics of JavaScript,
     including variables, data types, functions, and control structures.
    
    2. Understand advanced concepts: Dive deeper into closures,
     promises, async/await, and event loops.

    3. Practice regularly: Build projects, solve coding challenges,
     and contribute to open-source projects.

    4. Learn modern frameworks and libraries: Get familiar with React,
     Angular, Vue.js, and Node.js.

    5. Stay updated: Follow JavaScript blogs, attend conferences, and join online communities.
    
    6. Debugging and testing: Learn how to debug JavaScript code and write unit tests.

    7. Read and understand the ECMAScript specification: This will give you a deeper understanding
     of how JavaScript works.

    8. Explore performance optimization: Learn how to write efficient and performant JavaScript code.

    9. Understand the JavaScript ecosystem: Get to know tools like npm, Webpack,
     Babel, and ESLint.
    
    10. Keep learning: JavaScript is constantly evolving, so keep learning and experimenting with
     new features and best practices.
*/



// 2. Understand advanced concepts: Dive deeper into closures,
//      promises, async/await, and event loops.


// Tomorrow 

// Closures
function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log('Outer Variable: ' + outerVariable);
        console.log('Inner Variable: ' + innerVariable);
    };
}

const newFunction = outerFunction('outside');
newFunction('inside');
// Output:
// Outer Variable: outside
// Inner Variable: inside
