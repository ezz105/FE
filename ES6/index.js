
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
