
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

// #######################################################


/**
 * البرمجة غير المتزامنة (Async, Await, Promise):
تُتيح البرمجة غير المتزامنة تنفيذ عمليات طويلة أو 
متأخرة (مثل طلبات HTTP أو قراءة الملفات) دون تجميد واجهة المستخدم
 أو توقف البرنامج عن الاستجابة.
 */

 /**
  * الوعود (Promises):
هي كائنات تُعبّر عن قيمة قد تتوفّر لاحقًا،
 وتتيح لنا ربط سلسلة من العمليات غير المتزامنة عبر طرق مثل .then() و.catch().
مثال مبسّط:
  */

// const url = 'https://jsonplaceholder.typicode.com/posts'

// function fetchData(url) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         // نفترض نجاح العملية ونرسل البيانات:
//         resolve(`بيانات من ${url}`);
//       }, 2000);
//     });
//   }
  
//   fetch(url)
//   .then(Response => Response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error("قث", error));
  

/**
 * تساعد الوعود في تنظيم الشفرة وتفادي تداخل دوال الرد (Callback Hell)؛
 *  حيث يمكنك بعد ذلك تحويل سلسلة من العمليات إلى نمط واضح ومُنظّم.
ACADEMY.HSOUB.COM

Async/Await:
تُعتبر طريقة حديثة لكتابة الشفرة غير المتزامنة بحيث تبدو
 كأنها متزامنة. يتم تمييز الدوال غير المتزامنة بكلمة 
async، ويتم استخدام await لانتظار حل الوعود. مثال:
 */

// async function loadData() {
//     try {
//       const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//       const data = await res.json();
//       console.log(data)
//         data.map( post => {
//             document.write(
//                 `<h2>${post.title}</h2>
//                 <hr>
//                 <p>${post.body}</p>`
//             );
//         })
//     } catch (error) {
//       console.error("خطأ:", error);
//     }
//   }
  
//   loadData();
  
  /**
   * يُسهّل هذا النمط من قراءة الكود وتصحيحه، حيث يمكن استخدام 
   * كتلة try-catch للتعامل
   *  مع الأخطاء بدلاً من معالجة كل Promise على حدة.

   */



//   ###################

/**
 * التعامل مع الأخطاء (try-catch):
يعد التعامل مع الأخطاء أمرًا حيويًا خاصة في السياق غير المتزامن، 
إذ يمكن أن يحدث خطأ في عملية غير متزامنة دون أن يُلاحَظ بسهولة.

عند استخدام الوعود يمكن رصد الأخطاء بواسطة .catch()،
 أما مع async/await فيُنصح باستخدام
 بنية try...catch لتغليف التعليمات التي تستخدم await:

 هذا النمط يُمكِّنك من عزل الأخطاء والتعامل معها بطريقة مركزيّة ومرتبة.

 */


// async function processData() {
//     try {
//         const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//         const data = await res.json();
        
//         /**
//          * المعاملات الحدثية (setTimeout, setInterval):
//             تُستخدم هذه الدوال لتنفيذ عمليات بعد فترة زمنية محددة أو بشكل دوري:

//             setTimeout:
//             تنفّذ دالة بعد انقضاء وقت محدد (بالملّي ثانية):
//          */
//         // Adding a delay using setTimeout
//         // await new Promise(resolve => setTimeout(resolve, 3000));

        
//         console.log(data);
//     } catch (err) {
//         console.error("حدث خطأ أثناء جلب البيانات:", err);
//     }
// }

// processData();



/**
 * تنفّذ دالة بشكل دوري بعد كل فترة زمنية محددة:
javascript
Copy
Edit

تُستخدم هذه الدوال لتأجيل تنفيذ الأكواد 
أو لإنشاء تحديثات مستمرة (مثل عرض ساعة أو عدّ تنازلي).
 */
// const intervalId = setInterval(() => {
//     console.log("تحديث دوري كل ثانية");
//   }, 1000);
  
//   // لإيقاف التنفيذ:
//   setTimeout(() => {
//     clearInterval(intervalId);
//     console.log("تم إيقاف التكرار");
//   }, 5000);


// ##########################################################

/**
 * نماذج ES6+ (Destructuring, Spread, Rest, Modules):
جاءت تحديثات ECMAScript 6 وما بعدها لتحسين إنتاجية كتابة الشيفرة وتقليل
 التكرار، وفيما يلي أبرز هذه الميزات:

Destructuring:
يُمكنك "تفكيك" المصفوفات أو الكائنات إلى متغيرات منفصلة بطريقة مختصرة.


 */
  
// const numbers = [1, 2, 3, 4];
// const [first, second, , fourth] = numbers;
// console.log(first, second, fourth); // يطبع: 1 2 4


// const person = { name: "Ali", age: 30, city: "Sanaa" };
// const { name, city } = person;
// console.log(name, city); // يطبع: Ali Sanaa

/**
 * Spread Operator:
يُستخدم لتوسيع عناصر مصفوفة أو خصائص كائن داخل مجموعة جديدة.
 */

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5];
// const merged = [...arr1, ...arr2];  // [1, 2, 3, 4, 5]

// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3 };
// const mergedObj = { ...obj1,  ...obj2 };  // { a: 1, b: 2, c: 3 }

// console.log(mergedObj)


/**
 * Rest Parameters:
تُستخدم لجمع عدد غير محدد من العناصر في مصفوفة عند تعريف دالة.
 */

// function sumAll(...numbers) {
//     return numbers.reduce((total, num) => total + num, 0);
//   }
//   console.log(sumAll(1, 2, 3, 4)); // 10
  
/**
 * Modules:
تُتيح لك تقسيم الكود إلى ملفات منفصلة وتنظيمه
 بشكل أفضل. يتم استخدام كلمات مفتاحية export وimport لتصدير واستيراد
  المتغيرات والدوال.

تصدير متغير أو دالة
 */

// // ملف utils.js
// export function greet(name) {
//     return `Hello, ${name}!`;
//   }



// function sum(...args) {
//     let sum = 0;
//     for (let arg of args) sum += arg;
//     return sum;
//   }
  
//   let x = sum(4,  77);
  
  
//   console.log(x)


// const numbers = [4, 9, 16, 25, 29];
// let first = numbers.find(myFunction);

// // document.getElementById("demo").innerHTML = "First number over 18 is " + first;

// function myFunction(value, index, array) {
//   return inde > 18;
// }


// console.log(first)