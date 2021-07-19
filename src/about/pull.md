# Pull Request
## Qanday qilib Pull Request qoldirish mumkin?

### Pull Request nima?
Pull request bu siz hissa qo'shayotgan repozitoriyaga o'zgartirish uchun sorov jo'natish uslubidir.

Keling Pull Requestni qisqartiri PR deb ataymiz

## PR yuborish uchun qadamlar

Avvaliga siz hissa qo'shmochi bo'lgan repozitoriyani `fork` qiling.

Keyin esa uni o'z kompyuteringizga
```
git clone https://github.com/<SiningGitHubUsername>/<projectname>
``` 
orqali repozitoriyani clone qilib oling.
Bu amal loyihani kompyuteringizga yuklab olishga yordam beradi.

Endi quyidagi amal orqali loyiha direktoriyasiga kirib oling
```
cd "loyiha nomi"
```

Endi git checkout buyrug'i yordamida yangi "branch" yarating:

```
git checkout -b sizning-yangi-branchingiz
```

Keyin esa kerakli o'zgartirishlarni kirtib bo'lgach, `git status` buyrug'idan foydlanaing. Bu buyruq qaysi fayllar yangi qo'shilgan qaysilari o'zchirlgan yoki o'zgartirilganini ko'rsatadi.

```
git status
```

Endi o'zgarishlarni staging bo'limiga o'tkazishingiz kerak.
```
git add *
```
Yuqoridagi buyruq barcha o'zgarishlarni "staging" bo'limia ro'yxatga oladi.

Endi esa `git commit` buyrug'i orqali kiritilgan o'zgartirishga sharx qoldirishimiz kerak.

Masalan:
```
git commit -m "README.md da ayrim o'zgartirishlar kirtildi"
```

O'zgarishlarni githubga yuboramiz, va buning uchun `git push` buyrug'i yordamga keladi.
```
git push origin <sizning-branch-nomingiz>
```
`<sizning-branch-nomingiz>` bu ilgari yaratgan barnch nomingiz. Uni adashtirib yubormang.

Keyingi qadamda github fork sahifasiga kiring, u yreda siz `compare and pull request` tugmasini korasiz. Kiritilgan ozgarishlarni tavfsiflab, PR qoldirishingiz mumkin!

**🥳Tabriklaymiz! Siz endi Open-source Contributorsiz!**

