https://www.youtube.com/watch?v=QLatPwsbDrQ&list=PL4cUxeGkcC9i9Ae2D9Ee1RvylH38dKuET&index=7

نصائح للاحتراف
اختر الحلقة المناسبة للمهمة:

for → عدد التكرارات معروف.

while → عدد التكرارات غير معروف.

for...of → التكرار على عناصر المصفوفة.

for...in → التكرار على خصائص الكائن.

استخدم break و continue للتحكم في التكرار:

```javascript
for (let i = 0; i < 10; i++) {
  if (i === 5) break; // يوقف الحلقة عند i = 5
  if (i % 2 === 0) continue; // يتخطى الأرقام الزوجية
  console.log(i); // 1, 3
}
```

تجنب التعقيد الزائد (Nested Loops):

الحلقات المتداخلة قد تُقلل الأداء.

```javascript
// مثال على nested loop (غير موصى به إلا للضرورة)
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 2; j++) {
    console.log(i, j); // (0,0), (0,1), (1,0), (1,1), (2,0), (2,1)
  }
}
```




