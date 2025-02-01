


// for (i = 1; i <= 10; i++) {
 

//     if (i === 5 || i === 4) {
//         continue;
//     }
//     console.log(i);

//     if (i == 8){
//         break;
    
//     }
    
// }

// console.log('I have broken out of the loop');

// const a = document.getElementsByTagName('a');

// for (i = 0; i < a.length; i++) {
//    a[i].className = 'bg-red-200 + = ' + i;
//    a[i].href = 'ezz = ' + i;
// }



// for (i = 1; i <= 10; i++) {
//     console.log("🤣".repeat(i));
// }

// for (let i = 1; i <= 10; i++) {
//     console.log('*'.repeat(i));
// }

// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(response => response.json())
// .then(data => {
//     for (let i = 0; i < data.length; i++) {
//         document.write('<h2>' + data[i].title + '</h2>');
//     }
// })

// Promise.all([
//     fetch('https://jsonplaceholder.typicode.com/posts'),
//     fetch('https://jsonplaceholder.typicode.com/users')

// ])

// .then(Response => Response.map(res => res.json()))
// .then(data => {
//     console.log(data);
//     for (let i = 0; i < data.length; i++) {
//         document.write('<h2>' + data[i].title + '</h2>');
//     }
// })

// const users = fetch('https://jsonplaceholder.typicode.com/users')
// .then(response => response.json())
// .then(data => {
//     console.log(data);
//     for (let i = 5; i < data.length; i++) {
//         document.write(
//             '<h2>' + data[i].address.city + '</h2>',
//             '<h2>' + data[i].address.geo.lat + '</h2>',
//             '<h2>' + data[i].address.geo.lng + '</h2>',
//             '<hr>',
//             '<p>' + data[i].email + '</p>',
//             '<p>' + data[i].street + '</p>',
//             '<p>' + data[i].suite + '</p>',
//             '<p>' + data[i].email + '</p>',
//         );
//     }
// })

// const posts = fetch('https://jsonplaceholder.typicode.com/posts')
// .then(response => response.json())
// .then(data => {
//     console.log(data);
//     for (let i = 0; i < data.length; i++) {
//         document.write(
//             '<h2>' + data[i].title + '</h2>',
//             '<hr>',
//             '<p>' + data[i].body + '</p>',
//         );
//     }
// })


// let ppp = "pppp"


// function getPosts() {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         for (let i = 97; i < data.length; i++) {
//             document.write(
//                 '<h2>' + data[i].title + '</h2>',
//                 '<hr>',
//                 '<p>' + data[i].body + '</p>',
//             );

//         }
//     })

// }

// getPosts();
// function getPosts() {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         for (let i = 97; i < data.length; i++) {
//             document.write(
//                 '<h2>' + data[i].title + '</h2>',
//                 '<hr>',
//                 '<p>' + data[i].body + '</p>',
//             );

//         }
//     })

// }

// getPosts();

// async function getPosts() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data = await response.json();
//     const delay = new Promise(resolve => setTimeout(resolve, 3000));
//     await delay;
//     for (let i = 96; i < data.length; i++) {
//         document.write(
//             '<h2>' + data[i].title + '</h2>',
//             '<hr>',
//             '<p>' + data[i].body + '</p>',
//         );
//     }
//     // data.forEach(post => {
//     //     document.write(
//     //         '<h2>' + post.title + '</h2>',
//     //         '<hr>',
//     //         '<p>' + post.body + '</p>',
//     //     );
//     // });

//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//         const data = await response.json(
//             // const delay = new Promise(resolve => setTimeout(resolve, 3000));
//             // await delay;
        

//         );

//         for (let i = 0; i < data.length; i++) {
//             console.log(data[i.title]);
//             document.write(
//                 '<h2>' + data[i].title + '</h2>',
//                 '<hr>',
//                 '<p>' + data[i].body + '</p>',
//             );
//         }
//         // data.forEach(post => {
            
//         //     document.write(
//         //         // '<h2>' + post.title + '</h2>',
//         //         // '<hr>',
//         //         // '<p>' + post.body + '</p>',
//         //         // '<p>' + post.id + '</p>',
//         //         this.body = post.body,
//         //         '<br />',
//         //         '🤣'.repeat(5),
//         //         '<br class="bg-red-400" />',
//         //         this.body = post.id,
//         //         '<br />',
//         //         '🤣'.repeat(5),
//         //         this.body = post.title,
//         //     );

//         // });

//     } catch (error) {
//         console.log(error);
//     }
    
// }

// getPosts();


// function getAvrage() {
//     let total = 0;
//     let count = 0;
//     let avrage = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         total += arguments[i];

//         count++;
//         avrage = total / count;
//     }
// }

// getAvrage(2, 4, 6, 8, 10);




// function getAvrage(a , b) {


//     let avarege = (a + b) / 2;
//     console.log(avarege);
//     // return avarege;
// }

// var myAvrage = getAvrage(2, 8);

// console.log(" the avarge is " + myAvrage);
// // getAvrage("ezz", + myAvrage);




//  #########################


// var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// function getSum() {
//     let sum = 0;
//     var myArray = ["ezz", "mohamed", "ali", "ahmed", "mohamed", "ezz", "ali", "ahmed", "mohamed", "ezz"];
//     var myArray = [10 , 20, 30, 40, 50, 60, 70, 80, 90, 100];
//     for (let i = 0; i < myArray.length; i++) {
//         // console.log("----------------");
//         console.log(sum);
//         sum += myArray[i];
//         // console.log("*************************");
//     }
    
//     return sum;
// }



// getSum();



// console.log(sum);


// var avarage = 0;

// console.log(avarage);

// function ava(a, b) {
//     avarage = (a + b) / 2;
//     console.log(avarage);
//     return avarage;
    
// }



// var myResult = ava(2, 8); // global scope


// const logResult = () => {
//     console.log("the avarage is " + myResult) // local scope;


// }


// logResult();

// console.log(avarage);




var a = 5;
var b = 9;


console.log(Math.max(a, b)); // this will return the highest number
console.log(Math.round(7.8)); // this will round the number to the nearest number
console.log(Math.floor(7.8)); // this will round the number to the lowest number


