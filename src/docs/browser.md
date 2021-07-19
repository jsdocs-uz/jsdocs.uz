# Developer console

Kod xatolarga moyil. Ehtimol siz xatolarga yo'l qo'yasiz ... Oh, men nima haqida gapiryapman? Siz hech bo'lmaganda [robot](https://en.wikipedia.org/wiki/Bender_(Futurama)) emas, balki odam bo'lsangiz, siz _mutlaqo_ xatolarga yo'l qo'yasiz .[](https://en.wikipedia.org/wiki/Bender_(Futurama))

Ammo brauzerda foydalanuvchilar sukut bo'yicha xatolarni ko'rmaydilar. Shunday qilib, agar skriptda biron bir narsa noto'g'ri bo'lsa, biz buzilgan narsani ko'rmaymiz va uni tuzatolmaymiz.

Xatolarni ko'rish va skriptlar haqida juda ko'p boshqa foydali ma'lumotlarni olish uchun "ishlab chiquvchi vositalar" brauzerlarga joylashtirilgan.

Ko'pgina ishlab chiquvchilar rivojlanish uchun Chrome yoki Firefox-ga murojaat qilishadi, chunki ushbu brauzerlar eng yaxshi ishlab chiquvchi vositalariga ega. Boshqa brauzerlar, shuningdek, ba'zida maxsus xususiyatlarga ega bo'lgan ishlab chiquvchi vositalarni taqdim etadilar, lekin odatda Chrome yoki Firefox-ga "yetib borish" ni o'ynaydilar. Shunday qilib, aksariyat ishlab chiquvchilar "sevimli" brauzerga ega va muammo brauzerga xos bo'lsa, boshqalarga o'tadi.

Tuzuvchi vositalari kuchli; ular juda ko'p xususiyatlarga ega. Boshlash uchun biz ularni qanday ochishni, xatolarni ko'rib chiqishni va JavaScript buyruqlarini bajarishni o'rganamiz.

## Google chrome

[Bug.html](https://javascript.info/article/devtools/bug.html) sahifasini [oching](https://javascript.info/article/devtools/bug.html) .

Undagi JavaScript-kodda xato bor. Bu odatiy tashrif buyuruvchilarning ko'zidan yashiringan, shuning uchun uni ko'rish uchun ishlab chiquvchi vositalarni ochaylik.

F12Yoki bosing , agar siz Mac-da bo'lsangiz, u holda .Cmd+Opt+J

Ishlab chiquvchi vositalari sukut bo'yicha Konsol yorlig'ida ochiladi.

Bu biroz o'xshash:

![](https://javascript.info/article/devtools/chrome@2x.png)

Ishlab chiquvchi vositalarining aniq ko'rinishi sizning Chrome versiyangizga bog'liq. U vaqti-vaqti bilan o'zgarib turadi, ammo shunga o'xshash bo'lishi kerak.

-   Bu erda biz qizil rangli xato xabarini ko'rishimiz mumkin. Bunday holda, skriptda noma'lum "lalala" buyrug'i mavjud.
-   O'ng tomonda, `bug.html:12`xato yuzaga kelgan satr raqami bilan manbaga bosish mumkin bo'lgan havola mavjud.

Xato xabari ostida ko'k `>`belgi mavjud. Bu bizda JavaScript buyruqlarini kiritishimiz mumkin bo'lgan "buyruq satri" ni belgilaydi. EnterUlarni ishlatish uchun bosing .

Endi biz xatolarni ko'rishimiz mumkin va bu boshlanish uchun etarli. Keyinchalik biz ishlab chiquvchi vositalariga qaytamiz va disk raskadrovka brauzeridagi disk raskadrovkabo'limida batafsilroq ko'rib chiqamiz .

Ko'p qatorli kirish

Odatda, biz konsolga kod satrini qo'yganimizda va keyin tugmachani Enterbosganimizda, u bajariladi.

Bir nechta satrlarni kiritish uchun bosing . Shu tarzda JavaScript kodining uzun qismlarini kiritish mumkin.Shift+Enter

## Firefox, Edge va boshqalar

Ko'pgina boshqa brauzerlar F12ishlab chiquvchi vositalarini ochishda foydalanadilar .

Ularning tashqi ko'rinishi va ko'rinishi juda o'xshash. Ushbu vositalardan birini qanday ishlatishni bilsangiz (siz Chrome-dan boshlashingiz mumkin), boshqasiga osongina o'tishingiz mumkin.

## Safari

Safari (Windows / Linux tomonidan qo'llab-quvvatlanmaydigan Mac brauzeri) bu erda biroz o'ziga xosdir. Avval "Menyuni ishlab chiqish" ni yoqishimiz kerak.

Preferences-ni oching va "Advanced" oynasiga o'ting. Pastki qismida tasdiqlash qutisi mavjud:

![](https://javascript.info/article/devtools/safari@2x.png)

Endi konsolni almashtirish mumkin. Shuningdek, "Rivojlantirish" deb nomlangan yangi yuqori menyu elementi paydo bo'lganligini unutmang. Bu juda ko'p buyruqlar va variantlarga ega.Cmd+Opt+C

## Xulosa

-   Ishlab chiquvchilar uchun vositalar xatolarni ko'rish, buyruqlarni bajarish, o'zgaruvchilarni tekshirish va boshqa ko'p narsalarni qilishimizga imkon beradi.
-   Ular F12Windows-ning aksariyat brauzerlari uchun ochilishi mumkin . Mac uchun Chrome , Safari: (avval yoqish kerak).Cmd+Opt+JCmd+Opt+C

Endi bizda atrof-muhit tayyor. Keyingi bo'limda biz JavaScript-ga o'tamiz.