# JavaScript-ga kirish

Keling, JavaScript-ning o'ziga xos xususiyati, u bilan nimaga erishishimiz va u bilan qanday boshqa texnologiyalar yaxshi o'ynashini ko'rib chiqamiz.

## JavaScript nima?

Dastlab JavaScript "veb-sahifalarni jonli qilish" uchun yaratilgan.

Ushbu tildagi dasturlar skript deb nomlanadi . Ular veb-sahifaning HTML tilida yozilishi va sahifa yuklanganda avtomatik ravishda ishlashi mumkin.

Skriptlar oddiy matn sifatida taqdim etiladi va bajariladi. Yugurish uchun ularga maxsus tayyorgarlik yoki kompilyatsiya kerak emas.

Shu jihatdan JavaScript Java deb nomlangan boshqa tildan juda farq qiladi .

> **Nima uchun Java Script deb nomlangan ?**<br>JavaScript-ni yaratishda dastlab uning boshqa nomi bor edi: "LiveScript". Ammo o'sha paytda Java juda mashhur edi, shuning uchun yangi tilni Java ning "ukasi" sifatida joylashtirish yordam beradi degan qarorga kelindi.<br>
>Ammo rivojlanish jarayonida JavaScript ECMAScript deb nomlangan o'ziga xos xususiyatga ega bo'lgan to'liq mustaqil tilga aylandi va endi uning Java bilan umuman aloqasi yo'q.
Bugungi kunda JavaScript-ni nafaqat brauzerda, balki serverda yoki aslida JavaScript dvigateli deb nomlangan maxsus dasturga ega bo'lgan har qanday qurilmada amalga oshirishi mumkin .

Brauzerda ba'zida "JavaScript virtual mashinasi" deb nomlangan ko'milgan dvigatel mavjud.

Turli xil dvigatellarda har xil "kod nomlari" mavjud. 
Masalan:
- V8 - Chrome va Opera-da.
- SpiderMonkey - Firefox-da.
- … IE uchun "Chakra", "JavaScriptCore", "Nitro" va Safari uchun "SquirrelFish" kabi boshqa kod nomlari mavjud.
Yuqoridagi atamalarni eslab qolish yaxshi, chunki ular Internetdagi ishlab chiquvchilar maqolalarida qo'llaniladi. Biz ulardan ham foydalanamiz. Masalan, agar "X xususiyatini V8 qo'llab-quvvatlasa", ehtimol u Chrome va Opera-da ishlaydi.

> ***Dvigatellar qanday ishlaydi?*** <br>Dvigatellar murakkab. Ammo asoslari oson. <br> Dvigatel (agar u brauzer bo'lsa, o'rnatilgan) skriptni o'qiydi ("tahlil qiladi")Keyin u skriptni mashina tiliga o'zgartiradi ("kompilyatsiya qiladi"). Va keyin mashina kodi juda tez ishlaydi. Dvigatel jarayonning har bir bosqichida optimallashtirishlarni qo'llaydi. U hattoki kompilyatsiya qilingan skriptni ishlayotganda kuzatib boradi, u orqali oqib o'tadigan ma'lumotlarni tahlil qiladi va shu ma'lumot asosida mashina kodini yanada optimallashtiradi.

## Brauzerda JavaScript nima qilishi mumkin?
Zamonaviy JavaScript - bu "xavfsiz" dasturlash tili. Bu xotira yoki protsessorga past darajadagi kirishni ta'minlamaydi, chunki dastlab uni talab qilmaydigan brauzerlar uchun yaratilgan.

JavaScript-ning imkoniyatlari u ishlayotgan muhitga bog'liq. Masalan, Node.js JavaScript-ga o'zboshimchalik bilan fayllarni o'qish / yozish, tarmoq so'rovlarini bajarish va h.k.

Brauzer ichidagi JavaScript veb-sahifani boshqarish, foydalanuvchi bilan o'zaro aloqasi va veb-server bilan bog'liq barcha narsani amalga oshirishi mumkin.

Masalan, brauzer ichidagi JavaScript quyidagilarga qodir:
- Sahifaga yangi HTML qo'shing, mavjud tarkibni o'zgartiring, uslublarni o'zgartiring.
- Foydalanuvchining harakatlariga munosabat bildiring, sichqonchani bosish, ko'rsatgich harakatlari, tugmachalarni bosish bilan ishlang.
- Masofaviy serverlarga tarmoq orqali so'rov yuboring, fayllarni yuklab oling va yuklang ( AJAX va COMET texnologiyalari deb ataladi ).
- Cookies-ni oling va o'rnating, tashrif buyuruvchiga savollar bering, xabarlarni ko'rsating.
- Mijoz tomonidagi ma'lumotlarni eslab qoling ("mahalliy saqlash").

## JavaScript-ni brauzerda nima qila olmaydi?
JavaScript-ning brauzerdagi imkoniyatlari foydalanuvchi xavfsizligi uchun cheklangan. Maqsad yomon veb-sahifaning shaxsiy ma'lumotlarga kirishini yoki foydalanuvchi ma'lumotlariga zarar etkazishini oldini olishdir.

Bunday cheklovlarga quyidagilar kiradi:

- Veb-sahifadagi JavaScript-ni qattiq diskdagi o'zboshimchalik bilan fayllarni o'qish / yozish, ularni nusxalash yoki dasturlarni bajarish mumkin emas. U OS funktsiyalariga to'g'ridan-to'g'ri kirish huquqiga ega emas.
- Zamonaviy brauzerlar unga fayllar bilan ishlashga imkon beradi, ammo kirish cheklangan va faqat foydalanuvchi brauzer oynasiga faylni "tushirish" yoki `<input>`yorliq orqali tanlash kabi ba'zi harakatlar qilgan taqdirda taqdim etiladi .
- Kamera / mikrofon va boshqa qurilmalar bilan aloqa qilish usullari mavjud, ammo ular foydalanuvchidan aniq ruxsat talab qiladi. Shunday qilib, JavaScript-ni qo'llab-quvvatlagan sahifa veb-kamerani yashirincha yoqmasligi, atrofni kuzatishi va ma'lumotni NSAga yuborishi mumkin emas .
- Turli xil yorliqlar / derazalar odatda bir-birlarini bilishmaydi. Ba'zan ular shunday qilishadi, masalan, bitta oyna ikkinchisini ochish uchun JavaScript-ni ishlatganda. Ammo bu holatda ham bitta sahifadagi JavaScript-ni boshqa saytga kirish mumkin emas, agar ular turli saytlardan (boshqa domendan, protokoldan yoki portdan) bo'lsa.
- Bu "Xuddi shu kelib chiqish siyosati" deb nomlanadi. Buning ustida ishlash uchun har ikkala sahifada ma'lumotlar almashinuvi to'g'risida kelishilgan bo'lishi va uni boshqaradigan maxsus JavaScript kodi bo'lishi kerak. Biz buni o'quv qo'llanmasida ko'rib chiqamiz.
- Ushbu cheklov, yana foydalanuvchi xavfsizligi uchun. http://anysite.comFoydalanuvchi ochgan sahifa URL manzili bilan boshqa brauzer yorlig'iga kira olmasligi http://gmail.comva u erdan ma'lumotlarni o'g'irlashi kerak emas .
- JavaScript tarmog'i orqali joriy sahifa kelgan serverga osonlikcha ulanishi mumkin. Ammo uning boshqa saytlardan / domenlardan ma'lumotlarni qabul qilish qobiliyati nogiron. Mumkin bo'lgan taqdirda, bu uzoqdan aniq kelishuvni (HTTP sarlavhalarida ko'rsatilgan) talab qiladi. Yana bir bor bu xavfsizlikni cheklash.

<img src="https://javascript.info/article/intro/limitations.svg" width="100%">
Agar JavaScript brauzerdan tashqarida, masalan serverda ishlatilsa, bunday cheklovlar mavjud emas. Zamonaviy brauzerlar kengaytirilgan ruxsat so'rashi mumkin bo'lgan plagin / kengaytmalarga ham imkon beradi.

## JavaScript-ni noyobligi nimada?
JavaScript- da kamida uchta ajoyib narsa bor:
> - HTML / CSS bilan to'liq integratsiya. 
> - Oddiy narsalar oddiygina amalga oshiriladi.
> - Barcha yirik brauzerlar tomonidan qo'llab-quvvatlanadi va sukut bo'yicha yoqiladi

JavaScript - bu uchta narsani birlashtirgan yagona brauzer texnologiyasi.

JavaScript-ni noyob qiladigan narsa shu. Shuning uchun bu brauzer interfeyslarini yaratish uchun eng keng tarqalgan vosita.

Ya'ni, JavaScript-da serverlar, mobil ilovalar va boshqalarni yaratishga imkon beradi.

## JavaScript-ni "ustidan" tillar

JavaScript sintaksisi har kimning ehtiyojiga mos kelmaydi. Turli xil odamlar turli xil xususiyatlarni xohlashadi.

Buni kutish kerak, chunki loyihalar va talablar hamma uchun har xil.

Bas, yaqinda etiladi paydo yangi tillarda, bir farovonlik transpiled JavaScript uchun (Ishlangan) ular brauzerida chopish oldin.

Zamonaviy vositalar transplantatsiyani juda tez va shaffof qiladi, aslida ishlab chiquvchilarga boshqa tilda kodlash va uni "kaput ostida" avtomatik konvertatsiya qilish imkonini beradi.

Bunday tillarga misollar:
- CoffeeScript - bu JavaScript uchun "sintaktik shakar". U bizga aniqroq va aniqroq kod yozishga imkon beradigan qisqa sintaksisni taqdim etadi. Odatda, Ruby devsga yoqadi.
- TypeScript murakkab tizimlarning rivojlanishi va qo'llab-quvvatlanishini soddalashtirish uchun "qat'iy ma'lumotlarni yozish" ni qo'shishga qaratilgan. Microsoft tomonidan ishlab chiqilgan.
- Flow shuningdek ma'lumotlarni yozishni qo'shadi, ammo boshqacha tarzda. Facebook tomonidan ishlab chiqilgan.
- Dart - bu o'ziga xos tildir, u o'z dvigateliga ega, u brauzerdan tashqari muhitda ishlaydi (masalan, mobil ilovalar), lekin ularni JavaScript-ga ko'chirish mumkin. Google tomonidan ishlab chiqilgan.
- Brython - bu JavaScript-ga Python transpileridir , bu JavaScript-ni ishlatmasdan sof Python-da dasturlarni yozishga imkon beradi.
- Kotlin - bu zamonaviy, ixcham va xavfsiz dasturlash tili, u brauzer yoki tugunni yo'naltirishi mumkin.

Yana ko'p narsalar mavjud. Albatta, biz ko'chirilgan tillardan birini ishlatsak ham, nima qilayotganimizni chindan ham tushunish uchun JavaScript-ni bilishimiz kerak.

## Xulosa
- Dastlab JavaScript faqat brauzer tili sifatida yaratilgan, ammo hozirda u ko'plab boshqa muhitlarda ham qo'llanilmoqda.
- Bugungi kunda JavaScript-ni HTML / CSS-ga to'liq integratsiyalashgan eng keng tarqalgan brauzer tili sifatida o'ziga xos mavqega ega.
- JavaScript-ga "ko'chirilgan" va ma'lum xususiyatlarni ta'minlaydigan ko'plab tillar mavjud. JavaScript-ni o'zlashtirgandan so'ng, ularga kamida qisqacha qisqacha nazar tashlash tavsiya etiladi.

