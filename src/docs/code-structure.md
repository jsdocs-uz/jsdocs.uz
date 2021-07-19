# Kod strukturasi

Biz o'rganadigan birinchi narsa bu kod blocklarini qurish

## Ifodalar

Ifodalar harakatlarni bajaradigan sintaksis tuzilmalar va buyruqlar.

Biz allaqachon 'Hello, world!' habarini korsatadigan ```alert('Hello, world!')``` ifodasini kordik.

Biz kodimizda xohlaganimizcha ifodalar ishlatishimiz mumkin. Operatorlar ";" nuqtali vergul bilan ajratiladi.

Masalan, quyida biz "Hello World" ni ikkita alertga bo'lib ko'rsatdik
```javascript
alert('Hello'); alert('World');
```

Odatda, ifodalar kodni oqishga oson qilish uchun alohida satrda yoziladi :
```javascript
alert('Hello');
alert('World');
```

## Nuqtali vergullar:

Nuqtali vergulni ko'p hollarda kod alohida satrda yozilganda yozmay qoldirish mumkin.

Bu holatda ham ishlaydi:
```javascript
alert('Hello')
alert('World')
```

Bu yerda, JavScript alohida satrni "yashirin" nuqtali vergul sifatida izohlaydi. Bu [https://tc39.es/ecma262/#sec-automatic-semicolon-insertion](avtomatik nuqtali vergul qo'yib ketilishi) deb ataladi.

**Ko'p hollarda, yangi satr nuqtali vergulni anglatadi. Lekin "kop hollarda" degani "har doim" degani emas!**

Nuqtali vergul yangi satrni anglatmaydigan holatlar ham mavjud. Masalan:
```javascript
alert(3 +
1
+ 2);
```

Ushbu kod 6 chiqaradi chunki JavaScript bu yerga nuqtali vergul qoymagan. Agar slash plyus ```"+"``` bilan tugasa, u "tugallanmagan ifoda" ekanligi intuitiv ravishda ravshan, shuning uchun nuqta-vergul noto'g'ri bo'ladi. Va bu holda, bu maqsadga muvofiq ishlaydi.

**Ammo shunday holatlar mavjudki, JavaScript haqiqatan ham zarur bo'lgan joyda nuqta-vergul qabul qila olmaydi.**

Bunday hollarda yuzaga keladigan xatolarni topish va ularni tuzatish juda qiyin.

**Xatoga misol**
Agar siz bunday xatoning aniq misolini ko'rishni istasangiz, ushbu kodni tekshiring:
```javascript
alert("Hello");

[1, 2].forEach(alert);
```

Qavslar ```[]``` va ```forEach``` ning ma'nosi haqida o'ylashning hali hojati yo'q. Keyinchalik ularni o'rganib chiqamiz. Hozircha faqat kodni ishga tushirish natijasini eslang: unda ```Hello```, keyin ```1```, keyin ```2``` ko'rsatilgan.


Endi ```alert``` dan keyin vergulni olib tashlaymiz:
```javascript
alert("Hello")

[1, 2].forEach(alert);
```

Yuqoridagi kod bilan taqqoslaganda faqat bitta belgi: birinchi satr oxirida nuqta-vergul yo'q.

Agar biz ushbu kodni ishlatsak, faqat birinchi ```Hello``` ko'rsatiladi (va xato yuz berdi, uni ko'rish uchun konsolni ochishingiz kerak bo'lishi mumkin). Boshqa raqamlar ko'rinmaydi.

Buning sababi shundaki, JavaScript to'rtburchak qavslardan ```[...]``` oldin nuqta-vergulni avtomatik qo'shmaydi. Shunday qilib, oxirgi misoldagi kod bitta ifoda sifatida ko'rib chiqiladi.

JavaScript buni qanday ko'radi:
```javascript
alert("Hello")[1, 2].forEach(alert);
```

G'alati ko'rinadi, to'g'rimi? Bunday holda bunday birlashtirish noto'g'ri. Kodning to'g'ri ishlashi uchun ```alert``` dan keyin vergul qo'yishimiz kerak.

Bu boshqa holatlarda ham bo'lishi mumkin..

Yangi satrlar bilan ajratilgan bo'lsa ham, ifodalar orasiga vergul qo'yishni tavsiya etamiz. Ushbu qoida jamiyat tomonidan keng qabul qilingan. Yana bir bor ta'kidlab o'tamiz - ko'pincha nuqta-vergul *qo'ymasdan qoldirish mumkin*. Ammo ulardan foydalanish *xavfsizroq* - ayniqsa, yangi boshlanuvchilar uchun.

## Comments-Izohlar

Vaqt o'tishi bilan dasturlar tobora murakkablashmoqda. Kod nima va nima uchun bajarilishini tavsiflovchi izohlarni kiritish kerak bo'ladi.

Izohlarni kodning istalgan joyiga qo'yish mumkin. Ular uning bajarilishiga ta'sir qilmaydi, chunki JavaScript shunchaki ularni e'tiborsiz qoldiradi.

***Bir qatorli izohlar ikkita oldinga slash belgisi bilan boshlanadi ```//```.***

Qatorning qolgan qismi izoh hisoblanadi. O'zining to'liq qatorini egallashi yoki ifodadan keyin kelishi mumkin.

Bu yerda bo'lgani kabi:
```javascript
// Ushbu izoh o'ziga xos qatorni egallaydi```
alert('Hello');

alert('World'); // Ushbu izoh ifodadan keyin.
```

***Ko'p qatorli izohlar oldinga slash va * yulduzcha bilan boshlanib ```/*``` , yulduzcha va oldinga slash bilan tugaydi ```* /```.***

Bu yerda bo'lgani kabi:
```javascript
/ * Ikki xabarli misol.
Bu ko'p satrli izoh.
* /
alert('Hello');
alert('World');
```

Izohlarning mazmuni e'tiborga olinmaydi, shuning uchun ```/ *… * /``` ichiga kod qo'yadigan bo'lsak, u bajarilmaydi.

Ba'zan kodning bir qismini vaqtincha izohga olish qo'l kelishi mumkin:
```javascript
/* Kodni kommentga olish
alert('Hello');
*/
```alert('World');
```

***Hot keysdan(klaviaturaning malum tugmalarini bozish bilan bitor amalni texroq bajarish) foydalaning!***

Ko'pgina muharrirlarda kod satrini bir qatorli izoh uchun ```Ctrl + /``` hotkey ni bosish va ko'p satrli izohlar uchun ```Ctrl + Shift + /``` - ishlatish mumkin (kod qismini tanlang va hotkey bosing). Mac uchun ```Ctrl``` o'rniga ```Cmd``` va ```Shift``` o'rniga Option ni sinab ko'ring.

***!Ichki izohlar qo'llab-quvvatlanmaydi!***

```/*...*/``` ichida boshqa ```/*...*/``` bo'lmasligi mumkin.

Bunday kod xato bilan to'xtaydi:

```javascript
/*
  /* ichma-ich izohlar ?!? */
*/
alert( 'World' );
```

Iltimos, kodingizni izohlashdan tortinmang.

Izohlar umumiy kod qatorlarini oshiradi, ammo bu umuman muammo emas. Ishlab chiqarish serveriga chiqarishdan oldin kodni minimallashtiradigan ko'plab qulayliklar mavjud. Ular izohlarni olib tashlashadi, shuning uchun ular ishlaydigan kodda ko'rinmaydi. Shu sababli, izohlar ishlab chiqarishga umuman salbiy ta'sir ko'rsatmaydi.

Keyinchalik o'quv qo'llanmada Kod sifati haqida bob mavjud bo'lib, unda yaxshiroq izohlar yozish tushuntiriladi.


