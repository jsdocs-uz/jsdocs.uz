# O'zgaruvchilar

Ko'pincha, JavaScript dasturi ma'lumot bilan ishlashi kerak. Bunga ikkita misol:

1. Onlayn do'kon - ma'lumotlar "sotiladigan tovarlar" va "xarid qilish kartalarini" o'z ichiga olishi mumkin.
2. Chat dasturi - ma'lumotlar "foydalanuvchilar", "xabarlar" va boshqa narsalarni o'z ichiga olishi mumkin.

Ushbu ma'lumotni saqlash uchun o'zgaruvchilardan foydalaniladi.

## O'zgaruvchi

[O'zgaruvchi](https://en.wikipedia.org/wiki/Variable_(computer_science)) - bu ma'lumotlar uchun "nomlangan xotira". Tovarlar, tashrif buyuruvchilar va boshqa ma'lumotlarni saqlash uchun biz o'zgaruvchilardan foydalanishimiz mumkin.

JavaScriptda o'zgaruvchi hosil qilish uchun ```'let'``` kalit so'zidan foydalaniladi.

Quyidagi ifoda "xabar" nomli o'zgaruvchini *e'lon qiladi*:
```javascript
let xabar;
```

Endi tenglash operatori ```'='``` yordamida unga ba'zi ma'lumotlarni kiritishimiz mumkin:

```javascript
let xabar;

xabar = 'Hello'; // matn saqlandi
```

Endi matn o'zgaruvchiga bog'liq bo'lgan xotira maydoniga saqlanadi. Biz unga o'zgaruvchi nomi yordamida murojaat qilishimiz mumkin:
```javascript
let xabar;
xabar = 'Assalamu alaykum!';

alert(xabar); // o'zgaruvchi tarkibni ko'rsatadi
```
```javascript
Qisqacha aytganda, biz o'zgaruvchini e'lon qilish va qiymat berishni bitta qatorga birlashtira olamiz:

let xabar = 'Assalamu alaykum!'; // o'zgaruvchi e'lon qilindi va qiymatni berildi

alert(xabar); // Assalamu alaykum!
```

Bir qatorda bir nechta o'zgaruvchilarni e'lon qilishimiz mumkin:
```javascript
let foydalanuvchi = 'Muhammad', yosh = 25, xabar = 'Assalamu alaykum';
```
Bu qisqaroq ko'rinishi mumkin, ammo biz buni tavsiya qilmaymiz. Yaxshi o'qilishi uchun har bir o'zgaruvchiga bitta qatordan foydalaning.

Ko'p qatorli variant biroz uzunroq, ammo o'qish osonroq:
```javascript
let foydalanuvchi = 'Muhammad';
let yosh = 25;
let xabar = 'Assalamu alaykum';
```
Ba'zi odamlar ushbu ko'p satrli uslubda bir nechta o'zgaruvchini e'lon qiladilar:
```javascript
let foydalanuvchi = 'Muhammad',
  yosh = 25,
  xabar = 'Assalamu alaykum';
```
… Yoki “birinchi vergul” uslubida ham::
```javascript
let foydalanuvchi = 'Muhammad'
  , yosh = 25
  , xabar = 'Assalamu alaykum';
```
Texnik jihatdan, bu barcha variantlar xuddi shu narsani qiladi. Demak, bu shaxsiy did va estetika masalasidir.

***var o'rniga let***

Eski kodlarda siz yana bitta kalit so'zni topishingiz mumkin: ```var``` o'rniga ```let```:
```javascript
var xabar = 'Assalamu alaykum';
```
```var``` kalit so'zi ```let``` deyarli bir xil. U ham o'zgaruvchini e'lon qiladi, ammo biroz *boshqacha*, "old-school" usulida.

```let``` va ```var``` o'rtasida nozik farqlar mavjud, ammo ular hali biz uchun ahamiyatsiz. Biz ularni "eski var" bobida batafsil ko'rib chiqamiz.

## Haqiqiy hayotdagi o'xshashlik

Agar biz "ozgaruvchini" ustiga yagona nom bilan nomlangan stikerlar yopishtirib chiqilgan ma'lumotlar uchun "quti" deb tasavvur qilsak, "o'zgaruvchini" tushunishimiz ancha osonlashadi.

Masalan, o'zgaruvchi ```xabarni``` ```"Salom!"``` qiymatiga ega bo'lgan ```"xabar"``` yorlig'i yopishtirilgan quti sifatida tasavvur qilish mumkin. 

Biz qutiga istalgan qiymatni qo'yishimiz mumkin.

Bundan tashqari, biz uni xohlagancha o'zgartira olamiz:
```javascript
let xabar;

xabar = 'Salom!';

xabar = 'Dunyo!'; // qiymat o'zgartirildi

alert(xabar);
```

Qiymat o'zgartirilganda eski ma'lumotlar o'zgaruvchidan o'chiriladi:

Bundan tashqari, ikkita o'zgaruvchini e'lon qilishimiz va ma'lumotlarni ikkinchisiga nusxalashimiz mumkin.
```javascript
let salom = 'Salom dunyo!';

let xabar;

// "Salom dunyo!" matni salom nomli o'zgaruvchidan xabar nomli o'zgaruvchiga nusxalanmoqda
xabar = salom;

// endi ikkita o'zgaruvchi bir xil ma'lumotga ega
alert(salom); // Salom dunyo!
alert(xabar); // Salom dunyo!
```
***Ikki marta e'lon qilish xatolikni keltirib chiqaradi***
O'zgaruvchi faqat bir marta e'lon qilinishi kerak.

Xuddi shu o'zgaruvchining takroriy e'lon qilish bu xato:
let message = "This";
```javascript
// takroran "let" xatoga olib keladi
let xabar = "shu"; // SyntaxError: "xabar" allaqachon e'lon qilingan
```
Shunday qilib, biz bir marta o'zgaruvchini e'lon qilishimiz kerak va unga ```'let'``` siz murojaat qilishimiz kerak.

***Funktsional tillar***

Shunisi qiziqki, [Scala](https://www.scala-lang.org/) yoki [Erlang](https://www.erlang.org/) kabi o'zgaruvchining qiymatlarni o'zgartirishni taqiqlaydigan [funktsional](https://en.wikipedia.org/wiki/Functional_programming) dasturlash tillari mavjud.

Bunday tillarda, qiymat "qutiga" saqlangandan so'ng, u doimiy mavjud. Agar biz yana bir narsani saqlashimiz kerak bo'lsa, til bizni yangi quti - "o'zgaruvchi" yaratishga majbur qiladi (yangi o'zgaruvchi e'lon qilinadi). Biz eskisini qayta ishlata olmaymiz..

Bir qarashda noodatiy tuyulishi mumkin bo'lsa ham, bu tillar jiddiy rivojlanishga jarayonida. Bundan tashqari, bu cheklash parallel hisoblash kabi sohalarda ma'lum foyda keltiradi. Bunday tilni o'rganish (hatto yaqinda foydalanishni rejalashtirmagan bo'lsangiz ham) fikrni kengaytirish uchun tavsiya etiladi.

## O'zgaruvchini nomlash

JavaScript-da o'zgaruvchi nomlari bo'yicha ikkita cheklov mavjud:

1. Nom faqat harflar, raqamlar yoki $ va _ belgilaridan iborat bo'lishi kerak.
2. Birinchi belgi raqam bo'lmasligi kerak.

Yaroqli ismlarning namunalari:
```javascript
let foydalanuchiIsmi;
let test123;
```
Agar ism bir nechta so'zlardan iborat bo'lsa, odatda [camelCase](https://en.wikipedia.org/wiki/Camel_case) ishlatiladi. Ya'ni: so'zlar birin ketin tartibda, har bir so'z katta harf bilan boshlangan eng birinchi sozdan tashqari: ```meningEngUzunIsmim```.

Qizig'i shundaki, ```"$"``` dollar belgisi va ```"_"``` pastki chiziq ham ismlarda ishlatilishi mumkin. Ular odatiy belgilar, xuddi harflar singari, hech qanday maxsus ma'noga ega emaslar.

Ushbu nomlar yaroqli
```javascript
let $ = 1; // "$" nomi bilan o'zgaruvchi e'lon qilindi
let _ = 2; // "_" nomi bilan o'zgaruvchi e'lon qilindi

alert($ + _); // 3
```
Yaroqsiz o'zgaruvchi nomlariga misollar:
```javascript
let 1a; // raqam bilan boshlanishi mumkin emas;

let my-name; // tire '-' nomiga ruxsat berilmaydi
```
***Katta va kichik harflar boshqa boshqa deb hsiobga olinadi***
```apple``` va ```AppLE``` nomli o'zgaruvchilar ikki xil o'zgaruvchidir.

***Lotin bo'lmagan harflarga ruxsat beriladi, ammo tavsiya etilmaydi***
Kiril harflari yoki hattoki ierogliflarni o'z ichiga olgan har qanday tildan foydalanish mumkin:
```javascript
let имя = '...';
let 我 = '...';
```
Texnik jihatdan bu yerda hech qanday xato yo'q. Bunday nomlarga ruxsat berilgan, ammo o'zgaruvchan nomlarda ingliz tilidan foydalanish bo'yicha xalqaro konventsiya mavjud. Agar biz kam kod yozayotgan bo'lsak ham, uni ingliz tiliga muvofiq yozish kerak. Boshqa mamlakatlardagi odamlar uni tezda tushunishlari kerak bo'lishi mumkin.

***Zaxira qilingan nomlar***

O'zgaruvchi nom sifatida ishlatib bo'lmaydigan, zaxira qilingan so'zlarning ro'yxati mavjud, chunki ularni til o'zi ishlatadi.

Masalan: ```let```, ```class```, ```return```, and ```function``` - zaxira qilingan so'zlar.

Quyidagi kod sintaksis xato beradi:
```javascript
let let = 5; // o'zgaruvchini nomi "let" bo'lishi mumkin emas, xato!
let return = 5; // o'zgaruvchini nomi "return" bo'lishi mumkin emas, xato!
```

***"use strict" siz qiymat berish***

Odatda, biz uni ishlatishdan oldin o'zgaruvchini e;lon qilishimiz kerak. Ammo avvallari ```let``` qiymatini ishlatmasdan qiymatni belgilash orqali o'zgaruvchini yaratish texnik jihatdan mumkin edi. Agar biz eski kodlar bilan moslikni saqlab qolish uchun koddan ```"use strict"``` ishlatmasak, bu hali ham ishlaydi.
```javascript
// eslatma: bu misolda "use strict" ishlatilmagan

num = 5; // agar "num" nomli o'zgaruvchi mavjud bolmasa hosil qilinadi

alert(num); // 5
```
Bu yomon amaliyot va qat'iy rejimda xatolikka olib kelishi mumkin::
```javascript
"use strict";

num = 5; // error: num e'lon qilinmagan
```

## Constanta(qat'iy o'zgaruvchilar)

Doimiy (o'zgarmas) o'zgaruvchini e'lon qilish uchun ```let``` o'rniga ```const``` dan foydalaning:
```javascript
const meningTugilganKunim = '18.04.1982';
```
```const``` yordamida e'lon qilingan o'zgaruvchilar "constanta" deb nomlanadi. Ularni qayta e'lon qilish mumkin emas. Bunga urinish xatoga olib kelishi mumkin:
```javascript
const meningTugilganKunim = '18.04.1982';

meningTugilganKunim = '01.01.2001'; // error, constanta(qat'iy o'zgaruvchi) qayta e'lon qilinmaydi
```
Agar dasturchi o'zgaruvchining hech qachon o'zgarmasligiga ishonch hosil qilsa, buni har kimga kafolatlash va aniq etkazish uchun uni ```const``` bilan e'lon qilishlari mumkin.

### Bosh harfli constantalar

Constantalarni alias(tahallus) sifatida bajarilishidan oldin ma'lum bo'lgan, eslash qiyin bo'lgan qiymatlar uchun ishlatish keng tarqalgan

Bunday constanta lar katta harflar va pastki chiziqlar yordamida nomlanadi.

Masalan, "veb" (hexadecimal) formatidagi ranglar uchun constanta larni yarataylik:
```javascript
const QIZIL_RANG = "#F00";
const YAHSIL_RANG = "#0F0";
const HAVO_RANG = "#00F";
const SABZI_RANG = "#FF7F00";

// ...bizga rangni tanlash kerak bolsa
let rang = YASHIL_RANG;
alert(rang); // #0F00
```

Foyda:

```YASHIL_RANG``` ni eslash ```"#0F00"``` dan ancha osonroq.
```"#0F00"``` ni noto'g'ri yozish ```YASHIL_RANG``` dan osonroq.
Kodni o'qiyotganda, ```YASHIL_RANG```  ```#0F00``` ga qaraganda ancha mazmunliroq.
Qachon biz constanta uchun bosh harflardan foydalanishimiz kerak va uni qachon normal nomlashimiz kerak? Keling, buni aniq aytaylik.

"Constanta" shunchaki o'zgaruvchining qiymati hech qachon o'zgarmasligini anglatadi. Ammo bajarilishidan oldin ma'lum bo'lgan constantalar ham bor (masalan, qizil uchun o'n oltinchi hexadecimal qiymat) va bajarilish vaqtida hisoblanadigan, lekin dastlab e'lon qilinganidan keyin o'zgarmaydigan constantalar mavjud.

Masalan:
```javascript
const sahifaYuklashVaqti = /*yuklash uchun veb-sahifa tomonidan olingan vaqt */;
```
```sahifaYuklashVaqti``` qiymati sahifa yuklanishidan oldin ma'lum emas, shuning uchun u odatdagidek nomlanadi. Ammo bu hali ham constanta, chunki qiymat berilgandan keyin u o'zgarmaydi.

Boshqacha qilib aytganda, bosh harf bilan yozilgan nomdagi constantalar faqat "hard-coded"(to'g'ridan-to'g'ri qiymat berish) qiymatlar uchun alias(taxallus) sifatida ishlatiladi.

## O'zgaruvchilarni to'g'ri nomlang

O'zgaruvchilar haqida gapiradigan bo'lsak, yana bir muhim narsa bor.

O'zgaruvchi nomi saqlanadigan ma'lumotlarni tavsiflovchi, toza, aniq ma'noga ega bo'lishi kerak.

O'zgaruvchini nomlash dasturlashning eng muhim va murakkab ko'nikmalaridan biridir. O'zgaruvchi nomlarga bir qarashdayoq, tajribali dasturchi yoki boshlang'ich dastruchi qaysi kodni yozilganligini aniqlashi mumkin.

Haqiqiy loyihada ko'p vaqt noldan alohida narsa yozishdan ko'ra, mavjud kod bazasini o'zgartirish va kengaytirishga sarflanadi. Biroz vaqtdan keyin, ba'zi bir kodlarga qaytsak, o'zgaruvchilar yaxshi nomlarga ega bo'lganda ma'lumotlarni topish ancha osonroq.

Iltimos, o'zgaruvchini e'lon qilishdan oldin uning to'g'ri nomi haqida o'ylashga vaqt ajrating. Shunday qilish sizga keyinchalik qo'l keladi.

Amal qilish uchun yahshi ba'zi qoidalar:

* UserName yoki shoppingCart kabi o'qilishi oson nomlardan foydalaning.
* Qisqartmalardan yoki a, b, c kabi qisqa ismlardan uzoqroq turing, agar nima qilayotganingizni chindan ham bilmasangizgina ishlatishingiz mumkin.
* Ismlarni maksimal darajada tavsiflovchi va ixcham qiling. Yomon ismlarga misollar ma'lumotlar va qiymatlardir. Bunday ismlar hech narsani tavsiflab bermaydi. Agar kodning konteksti o'zgaruvchining qaysi ma'lumotlarga yoki qiymatga murojaat qilayotganini juda aniq ko'rsatadigan bo'lsa, ulardan foydalansa bo'ladi.
* Jamoangiz ichidagi va o'z fikringizdagi shartlar to'g'risida kelishib oling. Agar saytga tashrif buyuruvchi "foydalanuvchi" deb nomlangan bo'lsa, unda yangiOdam yoki shahrdaYangiOdam o'rniga tegishli o'zgaruvchilarni joriyFoydalanuvchi yoki yangiFoydalanuvchi deb nomlashimiz kerak.

Oddiy eshitiladimi? Haqiqatan ham shunday, ammo amalda tavsiflovchi va ixcham o'zgaruvchan nomlarni yaratish unchalik ham oson emas.

Qayta ishlatasizmi yoki e'lon qilasizmi?
Va oxirgi eslatma. Ba'zi dangasa dasturchilar bor, ular yangi o'zgaruvchilarni e'lon qilish o'rniga, mavjudlarini qayta ishlatishadi.

Natijada, ularning o'zgaruvchilari qutilarga o'xshaydi, odamlar stikerlarini o'zgartirmasdan har xil narsalarni tashlaydilar. Endi qutining ichida nima bor? Kim biladi? Yaqinroq kelib tekshirishimiz kerak.

Bunday dasturchilar o'zgaruvchi e;lon qilishdan ozgina tejashadi, ammo debugging (kodni test qilib chuqur tekshirish)dan o'n baravar ko'proq yo'qotishadi.

***Qo'shimcha o'zgaruvchi yomon emas, yaxshi.***

Zamonaviy JavaScript minifikatorlari va brauzerlari kodni yetarlicha optimallashtiradi, shuning uchun ishlash muammolarini keltirib chiqarmaydi. Turli xil qiymatlar uchun turli xil o'zgaruvchilardan foydalanish, hatto dasturlash tiliga kodingizni optimallashtirishga yordam beradi.

## Xulosa

```Var```, ```let``` yoki ```const``` kalit so'zlari yordamida ma'lumotlarni saqlash uchun o'zgaruvchilarni e'lon qilishimiz mumkin.

```let``` - bu zamonaviy o'zgaruvchi deklaratsiyasi.
```var``` - bu eski usul o'zgaruvchilarining deklaratsiyasi. Odatda biz buni umuman ishlatmaymiz, ammo kerak bo'lganda, eski "```var"``` bobida keltirilgan nozik farqlarni ko'rib chiqamiz.
```const``` - xuddi shunga o'xshash, lekin o'zgaruvchining qiymatini o'zgartirish mumkin emas.
O'zgaruvchilarga ularning ichidagi narsalarni osongina tushunishga imkon beradigan tarzda nom berish kerak.

## Topshiriqlar:

### O'zgaruvchilar bilan ishlash

Ikkita o'zgaruvchi e'lon qiling: ```admin``` va ```ism```.
```ism``` nomli o'zgaruvchiga ```Muhammad``` qiymatini bering.
```ism``` nomli o'zgaruvchidagi qiymatni ```admin``` nomli o'zgaruvchiga ko'chiring.
```alert``` yordamida ```admin``` ning qiymatini ko'rsating ("Muhammad" ni chiqarishi kerak).

### To'g'ri ism berish

bizning planeta nomi bilan o'zgaruvchini e'lon qiling. Bunday o'zgaruvchini qanday nomlagan bo'lar edingiz?
Hozirgi veb-saytga tashrif buyuruvchi nomini saqlash uchun o'zgaruvchini yarating. Ushbu o'zgaruvchiga qanday nom bergan bo'lar edingiz?


### Katta harfli constanta?

Quyidagi kodni tekshiring:
```javascript
const tugilganKun = '18.04.1982';

const yosh = kod(birthday);
```
Bu yerda biz doimiy ```tug'ilganKun``` nomli constantaga egamiz va ```yoshi``` tug'ilgan kundan boshlab ba'zi bir kodlar yordamida hisoblab chiqiladi (bu kod() qisqartirish uchun taqdim etilmaydi, chunki bu erda tafsilotlar muhim emas).

```Tug'ilgan kun``` uchun katta harflardan foydalanish to'g'ri bo'ladimi? ```Yoshgachi```? Yoki ikkalasi uchun ham?
```javascript
const TUGILGANKUN = '18.04.1982'; // katta harflarga o'zgartirish kerakmi?

const YOSH = kod(TUGILGANKUN); // katta harflarga o'zgartirish kerakmi?
```

## JAVOBLAR:

1. 
```javascript
let admin, ism; // ikkita o'zgaruvchini birdaniga e'lon qilish mumkin

ism = "Muhammad";

admin = ism;

alert( admin ); // "Muhammad"
```
2. 
Plantamiz nomli o'zgaruvchi: 
```javascript
let bizningPlaneta = "Yer";
```
E'tibor bering, biz qisqartirilgan nom yani "planeta" dan foydalanishimiz mumkin, ammo u qaysi planetani nazarda tutishi aniq bo'lmasligi mumkin. Ko'proq tarif beruvchi o'zgaruvchilar yaxshi.

Joriy foydalanuvchi ismi:
```javascript
let joriyFoydalanuvchiIsmi = "John";
```
Shunga qaramay, agar foydalanuvchi mavjudligini aniq bilsak, buni foydalanuvchiIsmi-ga qisqartirishimiz mumkin.

Zamonaviy muharrirlar va avtomatik to'ldiruvchi uzun o'zgaruvchilar nomlarini yozishni osonlashtiradi. Unda 3 ta so'z bo'lgan ism yaxshi.

Agar muharriringiz tegishli avtomatik to'ldirishga ega bo'lmasa, [o'rnatib oling](https://javascript.info/code-editors).

3. 
Biz odatda *"hard-coded"* constantalar uchun katta harflardan foydalanamiz. Yoki, boshqacha qilib aytganda, qiymat bajarilishidan oldin ma'lum bo'lganda va to'g'ridan-to'g'ri kodga yozilganda.

Ushbu kodda tug'ilgan kun aynan shunga o'xshash. Buning uchun biz katta harflardan foydalanishimiz mumkin.

Aksincha, yosh ish vaqti davomida baholanadi. Bugun bizda bir yosh bor, bir yoshdan keyin yana boshqa yoshga to'lamiz. Shunig uchun kichik harfli ozgaruvchi ishlatganimiz maqul.
