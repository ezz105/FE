

// const btn = document.querySelector("button");
// btn.onclick = function() {
//   alert("تم النقر عبر تعيين الخاصية");
// };


// const btn = document.querySelector("button");
// btn.addEventListener("click", () => {
//   alert("تم النقر باستخدام addEventListener");
// });



// $$$$

// document.addEventListener('DOMContentLoaded', () => {
//     const button = document.createElement('button');
//     button.textContent = 'Send Notification';
//     document.body.appendChild(button);

//     button.addEventListener('click', () => {
//         if (Notification.permission === 'granted') {
//             new Notification('This is your notification!');
//         } else if (Notification.permission !== 'denied') {
//             Notification.requestPermission().then(permission => {
//                 if (permission === 'granted') {
//                     new Notification('This is your notification!');
//                 }
//             });
//         }
//     });
// });

// $$$$


// function disDate() {
//     document.getElementById("de").innerHTML=Date();
// }

// eventLesener

// const changeBtn = document.getElementById("changeBtn");
// const textPara = document.getElementById("text");
// changeBtn.addEventListener("click", () => {
//   textPara.textContent = "تم تغيير النص بنجاح!";
// });

// const nameInput = document.getElementById("nameInput");
//     const greetingPara = document.getElementById("greeting");
//     nameInput.addEventListener("change", () => {
//       greetingPara.textContent = "مرحباً " + nameInput.value;
// });



 // الحصول على العناصر من الصفحة
 const todoInput = document.getElementById('todoInput');
 const addBtn = document.getElementById('addBtn');
 const todoList = document.getElementById('todoList');

 // دالة لاسترجاع قائمة المهام من localStorage
 function getTodos() {
   const todos = localStorage.getItem('todos');
   return todos ? JSON.parse(todos) : [];
 }

 // دالة لحفظ قائمة المهام في localStorage
 function saveTodos(todos) {
   localStorage.setItem('todos', JSON.stringify(todos));
 }

 // دالة لتحديث عرض قائمة المهام
 function renderTodos() {
   const todos = getTodos();
   todoList.innerHTML = '';
   todos.forEach((todo, index) => {
     const li = document.createElement('li');
     li.textContent = todo.text;
     if (todo.completed) {
       li.classList.add('completed');
     }
     // عند النقر على المهمة يتم تبديل حالتها (مكتملة/غير مكتملة)
     li.addEventListener('click', () => {
       toggleCompleted(index);
     });
     // زر حذف المهمة
     const delBtn = document.createElement('button');
     delBtn.textContent = 'حذف';
     delBtn.addEventListener('click', (e) => {
       e.stopPropagation(); // منع تفعيل حدث النقر على المهمة عند الضغط على زر الحذف
       deleteTodo(index);
     });
     li.appendChild(delBtn);
     todoList.appendChild(li);
   });
 }

 // دالة لإضافة مهمة جديدة
 function addTodo() {
   const text = todoInput.value.trim();
   if (text !== '') {
     const todos = getTodos();
     todos.push({ text: text, completed: false });
     saveTodos(todos);
     renderTodos();
     todoInput.value = '';
   }
 }

 // دالة لتبديل حالة المهمة (مكتملة/غير مكتملة)
 function toggleCompleted(index) {
   const todos = getTodos();
   todos[index].completed = !todos[index].completed;
   saveTodos(todos);
   renderTodos();
 }

 // دالة لحذف مهمة من القائمة
 function deleteTodo(index) {
   const todos = getTodos();
   todos.splice(index, 1);
   saveTodos(todos);
   renderTodos();
 }

 // إضافة حدث للنقر على زر الإضافة
 addBtn.addEventListener('click', addTodo);

 // عرض قائمة المهام عند تحميل الصفحة
 document.addEventListener('DOMContentLoaded', renderTodos);


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

