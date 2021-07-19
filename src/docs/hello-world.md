# Salom Dunyo!

O'quv qo'llanmaning ushbu qismi asosiy JavaScript haqida, tilning o'zi haqida.

Bizning stsenariylarimizni ishga tushirish uchun bizda ishlash muhiti kerak va bu kitob onlayn bo'lgani uchun brauzer yaxshi tanlovdir. Brauzerga xos buyruqlar miqdorini (masalan `alert`) minimal darajada ushlab turamiz, shunda siz boshqa muhitga e'tiboringizni qaratmoqchi bo'lsangiz (masalan, Node.js), ularga vaqt sarflamaysiz. O'quv qo'llanmasining [keyingi qismida](https://javascript.info/ui) biz brauzerda JavaScript-ga e'tibor qaratamiz .

Keling, avval veb-sahifaga skriptni qanday biriktirishimizni ko'rib chiqamiz. Server tomonlari (masalan, Node.js) uchun siz buyruq buyrug'i bilan buyruqni bajarishingiz mumkin `"node my.js"`.

## "Script" tegi

JavaScript dasturlarini `<script>`yorliq yordamida deyarli hamma joyda HTML hujjatga kiritish mumkin .

Masalan; misol uchun:

```
<!DOCTYPE HTML>
<html>
<body>
  <p>Before the script...</p>
    <script> alert( 'Hello, world!' ); </script>
  <p>...After the script.</p>
</body>
</html>
```



Yuqoridagi katakchaning o'ng yuqori burchagidagi "Play" tugmasini bosish orqali siz misolni ishga tushirishingiz mumkin.

`<script>`Tegi brauzer teg jarayonlari avtomatik ravishda amalga oshiriladi JavaScript kodi o'z ichiga oladi.

## Zamonaviy belgilar

`<script>`Tegi hozirgi kunda kamdan ishlatiladi, lekin hali ham eski kodi topish mumkin, bir necha xususiyatlarga ega bo'ladi:

`type`xususiyati:`<script  type=…>`

Eski HTML standarti HTML4-ga ega bo'lishi uchun skript kerak edi `type`. Odatda shunday edi `type="text/javascript"`. Endi talab qilinmaydi. Shuningdek, zamonaviy HTML standarti ushbu atributning ma'nosini butunlay o'zgartirdi. Endi u JavaScript modullari uchun ishlatilishi mumkin. Ammo bu rivojlangan mavzu, biz o'quv qo'llanmasining boshqa qismida modullar haqida gaplashamiz.

`language`xususiyati:`<script  language=…>`

Ushbu atribut ssenariy tilini ko'rsatish uchun mo'ljallangan edi. Ushbu atribut endi mantiqiy emas, chunki JavaScript standart til hisoblanadi. Uni ishlatishga hojat yo'q.

Ssenariylardan oldin va keyin sharhlar.

Haqiqatan ham qadimiy kitoblar va qo'llanmalarda siz quyidagi `<script>`teglar ichidagi izohlarni topishingiz mumkin :

```
<script type="text/javascript"><!--
    ...
//--></script>
```

Ushbu hiyla zamonaviy JavaScript-da ishlatilmaydi. Ushbu sharhlar JavaScript kodini `<script>`tegni qanday ishlashni bilmagan eski brauzerlardan yashiradi . So'nggi 15 yil ichida chiqarilgan brauzerlarda bunday muammo bo'lmaganligi sababli, bunday sharh sizga eski kodni aniqlashda yordam beradi.

## Tashqi skriptlar

Agar bizda JavaScript kodlari ko'p bo'lsa, uni alohida faylga qo'yishimiz mumkin.

Skript fayllari HTML-ga quyidagi `src`xususiyat bilan biriktirilgan :

`<script src="/path/to/script.js"></script>`

Bu erda `/path/to/script.js`sayt ildizidan skriptga o'tish uchun mutlaq yo'l. Joriy sahifadan nisbiy yo'lni ham taqdim etish mumkin. Masalan, joriy papkada `src="script.js"`fayl degani `"script.js"`.

Biz to'liq URL manzilini ham berishimiz mumkin. Masalan; misol uchun:

`<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js"></script>`

Bir nechta skriptlarni biriktirish uchun bir nechta teglardan foydalaning:

```
<script src="/js/script1.js"></script>
<script src="/js/script2.js"></script>
```

Esda tuting:

Qoida tariqasida HTML-ga faqat eng sodda skriptlar qo'yiladi. Keyinchalik murakkablari alohida fayllarda joylashgan.

Alohida faylning foydasi shundaki, brauzer uni yuklab olib, o'z [keshida](https://en.wikipedia.org/wiki/Web_cache) saqlaydi .

Xuddi shu skriptga murojaat qilgan boshqa sahifalar uni yuklab olish o'rniga keshdan oladi, shuning uchun fayl aslida faqat bir marta yuklab olinadi.

Bu trafikni kamaytiradi va sahifalarni tezlashtiradi.

Agar `src`o'rnatilgan bo'lsa, skript tarkibiga e'tibor berilmaydi.

Bitta `<script>`yorliqda `src`atribut ham, kod ham bo'lishi mumkin emas .

Bu ishlamaydi:

`<script _src_="file.js"> alert(1); // the content is ignored, because src is set </script>`

Biz tashqi `<script src="…">`yoki odatiy `<script>`kodni tanlashimiz kerak .

Yuqoridagi misolni ishlash uchun ikkita skriptga bo'lish mumkin:

```
<script src="file.js"></script>
<script> alert(1); </script>
```

## Xulosa

-   `<script>`Sahifaga JavaScript kodini qo'shish uchun tegdan foydalanishimiz mumkin .
-   The `type`va `language`sifatlari talab qilinmaydi.
-   Tashqi faylga skript qo'shilishi mumkin `<script src="path/to/script.js"></script>`.

Brauzer skriptlari va ularning veb-sahifa bilan o'zaro aloqalari haqida ko'proq bilish kerak. Shuni yodda tutingki, o'quv qo'llanmaning ushbu qismi JavaScript tiliga bag'ishlangan, shuning uchun biz uni brauzerga xos dasturlar bilan chalg'itmasligimiz kerak. Biz brauzerni JavaScript-ni ishga tushirish usuli sifatida ishlatamiz, bu esa onlayn o'qish uchun juda qulay, ammo ulardan faqat bittasi.
