

/**
 * 
 * الخلاصة
الكائنات (Objects): تُستخدم لتجميع الخصائص والدوال ذات الصلة، ويمكن إنشاؤها باستخدام object literals أو عبر دوال منشئة.
الدوال المنشئة (Constructor Functions): طريقة تقليدية لإنشاء مثيلات من الكائنات باستخدام الكلمة المفتاحية new.
الأصناف (Classes): صيغة حديثة وسهلة القراءة لإنشاء الكائنات ودعم الوراثة عبر extends و super.
المفاهيم المتقدمة (this, bind, call, apply): أدوات مهمة لضبط سياق التنفيذ والتحكم في قيمة this، مما يتيح لك إعادة استخدام الدوال بمرونة في مختلف السيناريوهات.
مع فهم هذه المفاهيم ستتمكن من كتابة كود كائني منظم وقابل لإعادة الاستخدام في تطبيقات JavaScript الخاصة بك.

إذا كنت تريد معرفة المزيد، يُمكنك الاطلاع على المصادر التعليمية مثل مقالات أكاديمية حسوب أو المواقع المتخصصة مثل MDN Web Docs.
 */



/**
 * بطاقة 1: الكائنات (Objects)
سؤال: ما هو الكائن (Object) في JavaScript وكيف يمكن إنشاؤه؟
جواب:
الكائن هو مجموعة من الخصائص (properties) والدوال (methods) المرتبطة معًا.
مثال على إنشاء كائن باستخدام object literal:
 */


// const person = {
//     name: "أحمد",
//     age: 30,
//     greet: function() {
//       console.log("مرحباً، أنا " + this.name);
//     }
//   };
  

  
  /**
   * بطاقة 2: الوصول للخصائص والتعديل عليها
سؤال: كيف يمكن الوصول إلى خصائص الكائن وتعديلها؟
جواب:
يمكن الوصول للخصائص باستخدام النقطة (.) أو الأقواس المربعة ([ ]).
مثال:
   */

// console.log(person.name);   // "أحمد"
// person.age = 31;            // تعديل العمر
// console.log(person["age"]); // 31


/**
 * بطاقة 3: الدوال المنشئة (Constructor Functions)
سؤال: ما هي الدوال المنشئة وكيف تُستخدم لإنشاء كائنات؟
جواب:
هي دوال تُستخدم مع الكلمة new لإنشاء مثيلات جديدة من كائن. تُنشئ هذه الدوال خصائص الكائن باستخدام this. مثال:
 */

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.greet = function() {
//     console.log("مرحباً، أنا " + this.name);
//   };
// }
// const person1 = new Person("علي", 25);
// person1.greet(); // "مرحباً، أنا فاطمة"


/**
 * بطاقة 3: الدوال المنشئة (Constructor Functions)
سؤال: ما هي الدوال المنشئة وكيف تُستخدم لإنشاء كائنات؟
جواب:
هي دوال تُستخدم مع الكلمة new لإنشاء مثيلات جديدة من كائن. تُنشئ هذه الدوال خصائص الكائن باستخدام this. مثال:
 */


// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.greet = function() {
//     console.log("مرحباً، أنا " + this.name);
//   };
// }
// const person1 = new Person("عبدالعزيز", 25);
// person1.greet(); 



/**
 * بطاقة 4: الأصناف (Classes)
سؤال: ما هي الصنف (class) في JavaScript وكيف تختلف عن الدوال المنشئة؟
جواب:
الأصناف (Classes) هي صيغة حديثة (ES6) لإنشاء كائنات ودعم الوراثة. تُكتب باستخدام الكلمة class مع دالة constructor، وتتيح تعريف الأساليب بشكل مُنظّم. مثال:
 */


// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   greet() {
//     console.log("مرحباً، أنا " + this.name);
//   }
// }
// const person2 = new Person("علي", 28);
// person2.greet(); // "مرحباً، أنا علي"


/**
 * بطاقة 5: الوراثة في الأصناف (extends و super)
سؤال: كيف تستخدم extends و super لتحقيق الوراثة في الأصناف؟
جواب:

extends: تُستخدم لجعل صنف يرث من صنف آخر.
super: تُستخدم لاستدعاء دالة constructor الخاصة بالصنف الأب. مثال:
 */


// class Employee extends Person {
//   constructor(name, age, position) {
//     super(name, age); // استدعاء منشئ الصنف الأب
//     this.position = position;
//   }
//   displayInfo() {
//     console.log(`أنا ${this.name}، عمري ${this.age} وأعمل كـ ${this.position}`);
//   }
// }
// const employee1 = new Employee("محمد", 32, "مبرمج");
// employee1.displayInfo();


/**
 * 
 * بطاقة 6: الكلمة المفتاحية this
سؤال: ما هو دور الكلمة المفتاحية this في الدوال العادية؟
جواب:
this تُشير إلى الكائن الذي ينتمي 
إليه سياق التنفيذ الحالي
. في الدوال العادية تحدد قيمة 
this بناءً على كيفية
 استدعائها (مثلاً، كـ method داخل كائن أو عند استخدامها مع new).
 */


 /**
  * بطاقة 7: الدوال السهمية وthis
سؤال: كيف تختلف الدوال السهمية عن الدوال العادية فيما يتعلق بـ this؟
جواب:
الدوال السهمية (Arrow Functions) لا تُنشئ سياقًا خاصًا بها لـ this؛ بل ترث قيمة this من السياق الذي وُلدت فيه (lexical this).
مثال:
  */

// const person = {
//   name: "أحمد",
//   greet: function() {
//     // هنا this يشير إلى person
//     const inner = () => {
//       console.log(this.name); // يرث this من greet، فتطبع "أحمد"
//     };
//     inner();
//   }
// };
// person.greet();



/**
 * 
 * بطاقة 8: call و apply
سؤال: ما الفرق بين call و apply وكيف تُستخدم لتعيين this؟
جواب:

call: تستدعي الدالة مع تمرير this والمعاملات بشكل منفصل.
apply: تشبه call لكن تمرر المعاملات كمصفوفة. مثال:
 */

// function introduce(greeting, punctuation) {
//   console.log(greeting + ", أنا " + this.name + punctuation);
// }
// const user = { name: "علي" };
// introduce.call(user, "أهلاً", "!");       // "أهلاً، أنا علي!"
// introduce.apply(user, ["مرحباً", "."]);  // "مرحباً، أنا علي."


/**
 * بطاقة 9: bind
سؤال: ما هو دور bind في JavaScript؟
جواب:
bind تُنشئ نسخة جديدة من الدالة مع تثبيت قيمة this إلى
 قيمة محددة، مما يجعل الدالة تظل 
مرتبطة بالسياق المطلوب عند استدعائها لاحقًا. مثال:
 */

// function greet() {
//   console.log("مرحباً، " + this.name);
// }
// const user = { name: "منذر" };
// const boundGreet = greet.bind(user);
// boundGreet(); // "مرحباً، "

