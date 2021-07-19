# Zamonaviy rejim, "use strict"
 
Uzoq vaqt davomida JavaScript moslik jihatidan muammosiz rivojlanib bordi. Eski funktsiyalar o'zgarmagan holda tilga yangi xususiyatlar qo'shildi.

Bunda mavjud kodni buzilmaslik hislati bor edi. Ammo salbiy tomoni shundaki, JavaScript-ni ishlab chiquvchilar tomonidan qilingan har qanday xato yoki nomukammal qaror tilda abadiy qolib ketgan.

Bu holat ECMAScript 5 (ES5) paydo bo'lgan 2009 yilgacha bo'lgan. U tilga yangi xususiyatlar qo'shdi va mavjudlarining qismlarini o'zgartirdi. Eski kodning ishlashini ta'minlash uchun bunday o'zgartirishlarning ko'pi o'chirilgan. Siz ularni maxsus ko'rsatma bilan yoqishingiz kerak boladi: ```"use strict"```.

## “use strict”
Ko'rsatma ushbu matnga ohshash: ```"use strict"``` yoki ```'use strict'```. Agar uni kodning yuqori qismiga joylashtirilsa, butun kod "zamonaviy" usulda ishlaydi.

Masalan:
```javascript
"use strict";

// bu kod "zamonaviy" uslubda ishlaydi
...
```

Tez orada biz funktsiyalarni o'rganamiz (buyruqlarni guruhlash usuli), shuning uchun funktsiya boshida ```"use strict" ```ni qo'yish mumkinligini oldindan aytib o'tamiz. Bunda faqat ushbu funktsiyadagi qattiq(strict) rejimni yoqiladi. Ammo, odatda, ko'pincha buni butun kod uchun ishlatadilar.

***“use strict” kodni yuqori qismida bo'lishiga ishonch hosil qiling.***

Iltimos, kodning yuqori qismida ```“use strict”``` `yozuvi joylashganligiga ishonch hosil qiling, aks holda *"strict mode"* yoqilmasligi mumkin.

*"strict mode"* bu yerda yoqilmagan:
```javascript
alert("some code");
// quyida "use strict" ga e'tibor berilmaydi - u yuqori qismida bo'lishi kerak

"use strict";

// qat'iy rejim yoqilmagan
```

Faqatgina izohlar ```"use strict"``` tepasida paydo bo'lishi mumkin.

***"use strict" ni bekor qilishning imkoni yo'q.***
JavaScript ni eski xatti-harakatga qaytaradigan ```"no use strict"``` kabi ko'rsatma yo'q.

strict(qattiq) rejimga o'tgandan so'ng, orqaga qaytish yo'q.

## Browser console

Kodni ishlatish uchun [https://jsdocs-uz.netlify.app/docs/browser.html](developer console) dan foydalanganda, u odatda ```"use strict" ```ishlatmasligini unutmang.

Ba'zan, ```"use strict"``` farqni keltirib chiqarganda, siz noto'g'ri natijalarga erishasiz.

Xo'sh, qanday qilib console da ```"use strict"``` dan kerak?

Avvalo, siz bir nechta satrlarni kiritish uchun ```Shift + Enter``` tugmachalarini bosib, kodni tepasiga ```"use strict"``` ni qoyishingiz mumkin:
```javascript
'use strict'; <Shift+Enter for a newline>
//  ...your code
<Enter to run>
```
Bu holat ko'p holarda, hususan Firefox va Chrome browserlarida ishlaydi

Agar bo'lmasa, masalan: eski brauzerda ```"use strict"``` ni ta'minlashning yomon, ammo ishonchli usuli mavjud. Uni shu turdagi ifoda ichiga qo'ying:
```javascrip
(function() {
  'use strict';

  // ...your code here...
})()
```

## Biz ```"use strict"``` ni ishlatishimiz kerakmi?

Savol aniq ko'rinishi mumkin, ammo unday emas.

Ba'zan, kodni ```"use strict"``` bilan boshlashni tavsiya qilish mumkin... Lekin siz nima yahshi ekanligini bilaiszmi?

Zamonaviy JavaScript da avtomatik ravishda foydalanishga imkon beradigan rivojlangan til tuzilmalari -  "sinflar" va "modullar" qo'llab-quvvatlanadi (biz ularga Xudo xohlasa etib boramiz). Agar biz ulardan foydalansak,``` "use strict"``` ko'rsatmasini qo'shishga hojat yo'q.


***Shunday qilib, hozircha ```"use strict";``` kodingizning yuqori qismiga mehmon. Keyinchalik, sizning kodingizda sinflar va modullarda bo'lganida, siz undan foydalanmasligingiz mumkin.***

Hozircha biz umuman ```"use strict"``` haqida bilib oldik.

Keyingi boblarda, til xususiyatlarini o'rganganimizda, qat'iy va eski rejimlar o'rtasidagi farqlarni ko'ramiz. Yaxshiyamki, ular unchalik ko'p emas va ular aslida hayotimizni yaxshilaydi.

Ushbu qo'llanmada keltirilgan ba'zi istisnolardan tashqari barcha misollarda qat'iy rejimdan foydalaniladi.
