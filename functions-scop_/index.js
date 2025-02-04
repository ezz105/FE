
// const notify = () => {
//     console.log("this for notify 🟢🟢🟢", this);
    
//     // const win = () => {
//     //     console.log( "nested arrow func 🔴🔴🔴 ", this);

//     // }
//     // // win();
// };

// function login() {
//     console.log(this.username);
//     notify(); // window
// }

// const user = { username: "ezz" };

// login.call(user); // ahmed



// const notify = () => {
//     console.log(this); // Logs the `this` context of the parent scope
// };
   
// function login() {
//     console.log(this.username); // Logs the `username` property of `this`
//     notify(); // Calls the `notify` function
// }
   
// const user = { username: "عبدالعزيز" }; // Defines an object with a `username` property
   
// // login.call(user); // Calls `login` with `user` as `this` context


// for ( i = 1; i <= 5; i++) {

//     console.log("#".repeat(i));
// }



// for (i = 1; i <= 5; i ++) {
//     let str = '';
//     for (j = 0; j < i; j++) {
//         str += '$';
//     }
//     console.log(str)
// }

/**1. معالجة this:
الدوال العادية:
قيمة this تُحدد ديناميكيًا بناءً على سياق الاستدعاء (كيفية استدعاء الدالة).
مثال:
            
*/

// const obj = {
//     regularMethod: function() {
//       console.log(this); // يشير إلى obj
//     }
//   };
//   obj.regularMethod();


/**
 * الدوال السهمية:
قيمة this تُورث من النطاق المحيط (Lexical Scope)، ولا تعتمد على سياق الاستدعاء.
مثال:
 */

//   const ob = {
//     arrowMethod: () => {
//       console.log(this); // يشير إلى النطاق الخارجي (مثل window)
//     }
//   };
//   ob.arrowMethod();

/**
 * 2. الكائن arguments:
الدوال العادية:
تحتوي على كائن arguments الذي يخزن جميع الوسائط الممررة.
مثال:
 */

// function regular(a, b) {
//     console.log(arguments); // { 0: 1, 1: 2 }
//   }
//   regular(1, 2);

/**
 * الدوال السهمية:
لا تحتوي على arguments. للحصول على الوسائط، استخدم معاملات REST (...args).
مثال:
 */

//   const arrow = (...args) => {
//     console.log(args); // [1, 2]
//   };
//   arrow(1, 2);



/**
 * 3. الاستخدام مع new (الدوال البانية):
الدوال العادية:
يمكن استخدامها كمُنشئ (Constructor) مع new.
مثال:
 */

// function Regular() {}
// Regular()
// const instance = new Regular(); // يعمل

// console.log(instance)

/**
 * الدوال السهمية:
لا يمكن استخدامها كمُنشئ.
مثال:
 */

// const Arrow = () => {};
// const instance = new Arrow(); // TypeError: Arrow is not a constructor


// regularHoisted(); // تعمل
// function regularHoisted() {
//     console.log(regularHoisted, "call before define")
// }



// regularHoisted(); // arrow function can't be call before define
// const  regularHoisted = () => {
//     console.log(regularHoisted, "call before define")
// }

/**
 prototype 
 * 
 */

// function Regular() {}
// console.log(Regular.prototype); // موجود

// const Arrow = () => {};
// console.log(Arrow.prototype); // undefined

// 6. استخدام super في الطبقات (Classes):

// class Parent {
//     parentMethod() { return "Parent"; }
// }


// class Child extends Parent {
//     childMethod() {
//         console.log(super.parentMethod()); // "Parent"
//     }
    
// }



//   class Child extends Parent {
//         arrowMethod = () => {
//               console.log(super.parentMethod()); // يعمل إذا كان النطاق المحيط (مثل الصنف) يحتوي على super
//             };
//   }


// function* gen() { yield 1; }


/**
 * ملخص استخدامات كل نوع:
استخدم الدوال السهمية عندما:

تريد الحفاظ على this من النطاق الخارجي (مثال: داخل Event Listeners أو توابع المصفوفات مثل map).

تريد دالة مختصرة (Short Syntax) للكتابة.

استخدم الدوال العادية عندما:

تحتاج إلى استخدام this ديناميكيًا (مثال: في التوابع داخل الكائنات).

تريد إنشاء دوال بانية (Constructors).

تحتاج إلى استخدام arguments.

مثال توضيحي:
 */

// // الدالة العادية
// function Regular(a, b) {
//     this.sum = a + b;
//     console.log(this); // يعتمد على السياق
//   }
  
//   // الدالة السهمية
//   const Arrow = (a, b) => {
//     this.sum = a + b; // this هنا يشير إلى النطاق الخارجي
//     console.log(this);
//   };
  
//   const obj = {
//     regular: function() { console.log(this); }, // يشير إلى obj
//     arrow: () => { console.log(this); } // يشير إلى النطاق الخارجي
//   };


//   أُضيفت الدوال السهمية في إصدار ES6 لتوفير صياغة مختصرة وسهلة، وتكتب هكذا:

/**
 * أبرز الفوارق بين الدوال العادية والسهمية:
تحديد قيمة this:
الدوال العادية تحدد قيمة this بناءً على سياق الاستدعاء؛ أما الدوال السهمية فتستخدم الـ Lexical this، أي أنها ترث قيمة this من السياق الخارجي الذي وُلدت فيه، مما يجعلها مفيدة في حالات مثل التعامل مع المعالجات (event handlers) أو داخل الدوال التي تُستخدم مع الـ promises.

على سبيل المثال، إذا كانت دالة handler تُستخدم داخل دالة أخرى، فإن دالة السهمية ستحتفظ بسياق الـ this الخاص بالدالة الخارجية بغض النظر عن طريقة استدعائها.
cite​
TUTOMENA.COM

الكائن arguments:
الدوال العادية تمتلك كائنًا خاصًا يُدعى arguments يحتوي على كافة المعاملات الممررة، بينما الدوال السهمية لا تمتلك هذا الكائن؛ فهي تعتمد على معاملات الدالة المحددة.

الاستخدام كـ constructor:
الدوال العادية قابلة للاستخدام مع كلمة new لإنشاء كائنات، بينما الدوال السهمية غير مصممة لهذا الغرض وستعطي خطأ إذا استُخدمت مع new.

يمكنك تجربة كلا الأسلوبين في كتابة الدوال وملاحظة الاختلاف في سلوكهما، وهو ما يساعدك في اختيار الأنسب حسب السياق التطبيقي.

للمزيد من التفاصيل حول الفوارق يمكنك مراجعة مقال "الفوارق بين الدوال العادية والدوال السهمية في جافا سكريبت" 
TUTOMENA.COM
 */

