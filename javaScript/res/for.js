// let age = 18;
//      while (age < 10) {
//        console.log("عمرك أقل من 10");
//        age++; // زيادة القيمة لتجنب تكرار لا نهائي
//      }


// let age = 90;

// for (age < 20; age < 20; age++) {
//     console.log(`عمرك الآن: ${age}`);
//     age++;
//     }
//     document.write(
//     "أنت الآن فوق 20!", "<br> <br />", `<h1>عمرك الآن: ${age}</h1>`
// );



// while (age < 20) {
//     console.log(`عمرك الآن: ${age}`);
//     age++;
//     }
//     document.write(
//     "أنت الآن فوق 20!", "<br> <br />", `<h1>عمرك الآن: ${age}</h1>`
// );






// let day = 3;   // 1, 2, 3

// let datName;

// switch (day) {
//     case 1:
//         datName = "الإثنين";
//         break;
//     case 2:
//         datName = "الثلاثاء";
//         break;
//     case 3:
//         datName = "الأربعاء";
//         break;
//     default:
//         datName = "يوم غير معروف";
//     }


//     console.log(datName)



// for (let i=0; i < 5; i++) {
//     console.log("✍️✍️✍️ ~ i:", i)

    
// }


// let i = 0;

// while (i < 6) {
//     console.log("✍️✍️✍️ ~ i:", i);
//     i++;
// }

// let numbers = [1, 2, 3, 4, 5];

// numbers.forEach((number) => {
//     console.log("✍️✍️✍️ ~ numbers.forEach ~ number:", number)
    
// })




// function greet(name) {
//     return "Hello " + name;
    
// }
// console.log(greet("kjmn"))

// const greet = (name) => {
//     return "Hello " + name;
// }

// console.log(greet("kjmn"));


// let sum = 0;

// for (let i = 1; i <= 2; i++) {
//     sum += i;
// }

// console.log(sum);


// طباعة الأرقام من 1 إلى 5
// let i = 1;
// while (i <= 5) {
//     console.log(i); // 1, 2, 3, 4, 5
//     i++;
// }

// إيجاد أول عدد يقبل القسمة على 7
// let num = 1;
// while (num % 7 !== 0) {
//     num++;
// }
// console.log(num); // 7


// let fruits = ["تفاح", "موز", "برتقال"];

// // طباعة كل عنصر في المصفوفة
// fruits.forEach(function(fruit) {
//     console.log(fruit); // تفاح, موز, برتقال
// });

// استخدام Arrow Function
// fruits.forEach(fruit => console.log(fruit)); // تفاح, موز, برتقال

// fruits.forEach(f => console.log(f)); // تفاح, موز, برتقال


// for (let fruit of fruits )  {
//     console.log("✍️✍️✍️ ~ fruit:", fruit)
    
// }


// دالة لجمع عددين
// function add(a, b) {
//     return a + b;
// }

// console.log(add(5, '8')); // 8

// // دالة لتحويل درجة الحرارة من مئوية إلى فهرنهايت
// function celsiusToFahrenheit(celsius) {
//     return (celsius * 9/5) + 32;
// }

// console.log(celsiusToFahrenheit(25)); // 77



// دالة لجمع عددين باستخدام Arrow Function
// const add = (a, b) => a + b;
// console.log(add(5, 3)); // 8

// دالة لتحويل درجة الحرارة من مئوية إلى فهرنهايت باستخدام Arrow Function
// const celsiusToFahrenheit = celsius => (celsius * 9/5) + 32;
// console.log(celsiusToFahrenheit(25)); // 77



/**
 * outerFunction
 * 
 * دالة تحتوي على متغير خارجي ودالة داخلية. 
 * الدالة الداخلية يمكنها الوصول إلى المتغيرات الخارجية والداخلية.
 * 
 * @function
 */
// function outerFunction() {
//     let outerVariable = "أنا خارجي";

//     function innerFunction() {
//         let innerVariable = "أنا داخلي";
//         console.log(outerVariable); // يمكن الوصول إلى المتغير الخارجي
//         console.log(innerVariable); // يمكن الوصول إلى المتغير الداخلي
//     }

//     innerFunction();
// }

// outerFunction();


// دالة لطباعة جدول الضرب
// function printMultiplicationTable(number) {
//     for (let i = 1; i <= 10; i++) {
//         console.log(`${number} × ${i} = ${number * i}`);
//     }
// }

// printMultiplicationTable(5);
// النتيجة:
// 5 × 1 = 5
// 5 × 2 = 10
// 5 × 3 = 15
// ...
// 5 × 10 = 50




// const sym1 = Symbol('key');
// const sym2 = Symbol('key');
// console.log(sym1 === sym2); // false

// const obj1 = { a: 1 };
// const obj2 = obj1;
// obj2.a = 2;
// console.log(obj1.a); // 2 (shared reference)

// ########################################


// function add(a = "ali") {
//     console.log(`hi, ${a}`  )
// }


// ########################################

// function greet(name = "ضيف") {
//     console.log(`مرحبًا ${name}`);
//   }


// add()
// greet("ezz")


// ########################################

// function sum(...numbers) {
//     return numbers.reduce((acc, num) => acc + num, 0);
    
// }


// console.log(sum(1, 2, 50)); // 15

// ########################################

// const arr1 = [1, 2];
// console.log("✍️✍️✍️ ~ arr1:", arr1)
// const arr2 = [...arr1, 3];
// console.log("✍️✍️✍️ ~ arr2:", arr2)



// const arr = [1, 2, 3, 4, 5];

// const num = () => {
//     arr.map((num) => {
//         arr.toString(num)  
//         console.log("✍️✍️✍️ ~ num:", num)
//     })
    
// }

// num()


// ########################################



// const obj = { a: 1, b: 2 };
// for (const key in obj) {
//   console.log(key.toString() + obj[key]);
//   console.log(key.replace("a", "c"));
//   console.log(key.split("a"));
//   console.log(key.toUpperCase("a"));
//   console.log(key.toLowerCase("a"));
//   console.log(key.trim());
//   console.log(key.length);
//   console.log(key.charAt(0));
//   console.log(key.concat("a"));
//   console.log(key.indexOf("a"));
// console.log(key.includes("a"));
// console.log(key.match("a"));
// console.log(key.repeat(8));
// console.log(key.slice(1, 2));
// console.log(key.search("a"));




// }

// let day = "Sat";

// switch (day) {
//     case "Sat":
//       console.log("السبت");
//       break;
//     case "Sun":
//         console.log("الأحد");
//         break;
//     default:
//       console.log("يوم غير معروف");
// }


// ########################################

// riskyOperation = () => {
//     return "العملية آمنة";
// }
// // throw new Error("حدث خطأ");



// try {
//     riskyOperation();
//   } catch (error) {
//     console.error("حدث خطأ:", error.message);
//   } finally {
//     console.log("تنظيف الموارد");
// }

// ########################################


// class ValidationError extends Error {
//     constructor(message) {
//       super(message);
//       this.name = "ValidationError";
//     }
//   }
  
//   throw new ValidationError("القيمة غير صالحة");


// function mergeArrays(...arrays) {
//     return [].concat(...arrays);
//   }
//   const merged = mergeArrays([1, 2], [3, 4]); // [1, 2, 3, 4]

//     console.log( merged)

// const numbers = [1, 2, 3];
// const doubled = numbers.map((number) => {
//     return number * 2
// })

// console.log(doubled)



// const numbers = [1, 2, 3];
// const doubled = numbers.forEach((numbers) => {
//     console.log(numbers * 2)
//     return numbers * 2
// })


// const fruits = [1, 2, 3, 4, 5];
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[ i * 2 + 1]);
// }


// const numbers = [10, 20, 30];
// for (const num of numbers) {
//   console.log(num); // 10, 20, 30
// }

// const name = "عبدالعزيز";
// for (const char of name) {
    
//   console.log(char);
// }


// const person = {
//     name: "محمد",
//     age: 30,
//     job: "مطور ويب"
//   };
  
//   for (const key in person) {
//     console.log(key); // name, age, job
//     console.log(person[key]); // محمد, 30, مطور ويب
//   }


// const arr = [10, 20, 30];
// for (const index in arr) {
//   console.log(arr[index]); // 10, 20, 30 (يعمل لكنه غير مُوصى به)
// }

// let i = 0;
// while (i < 5) {

//   console.log(i); // i تبقى 0 للأبد
// }

// let password = "";
// while (password !== "1234") {
//   password = prompt("أدخل كلمة المرور:");
// }
// console.log("مرحبًا!");



// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//     sum += i;
// }

// console.log(sum); // 45


// const numbers = [5, 8, 2, 10, 3, 50, 9];

// let max = numbers[0];

// for (let number of numbers) {
//     if (number > max) {
        
//         max = number;
//     }
//     console.log("✍️✍️✍️ ~ max:", max)
// }


// console.log(max); 


// const car = {
//     brand: "Toyota",
//     model: "Camry",
//     year: 2020
//   };

//   let cont = 0;
//   for (const key in car) {
    
//     cont++
//   }

//     console.log("✍️✍️✍️ ~ cont:", cont)



