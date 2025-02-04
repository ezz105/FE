

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


const person = {
    name: "أحمد",
    age: 30,
    greet: function() {
      console.log("مرحباً، أنا " + this.name);
    }
  };

  
  /**
   * بطاقة 2: الوصول للخصائص والتعديل عليها
سؤال: كيف يمكن الوصول إلى خصائص الكائن وتعديلها؟
جواب:
يمكن الوصول للخصائص باستخدام النقطة (.) أو الأقواس المربعة ([ ]).
مثال:
   */

console.log(person.name);   // "أحمد"
person.age = 31;            // تعديل العمر
console.log(person["age"]); // 31

