# Gün Projesi: Login Formu E2E Testi

Yeni başlayan bir projenin setup'ını yapmak ve login sayfasını hazırlamak sana düştü.

## proje oluşturulacak

[ ] Projeyi kendi bilgisayarınızda sıfırdan oluşturarak yapacaksın. (Tercihen vite ile)
[ ] Uygulamanızda bir Login formu(Login.jsx) ve geçici bir success sayfası(Success.jsx) olacak.
[ ] componentleri "components" klasöründe oluşturmaya dikkat.
[ ] login formu: email, şifre ve şartları kabul ediyorum alanından oluşacak.
[ ] Form alanları için validasyonlar eklenecek: geçerli email (regex kullanılabilir), strong password (regex kullanılabilir) ve şartları kabul etmesi gerekecek.
[ ] tüm validasyonları geçer ise login butonu aktif olacak.

## Cypress ile de 2 farklı senaryoda test yazılacak:

### başarılı form doldurulduğunda submit edebiliyorum:

    [ ] success sayfasını açabiliyorum.

### hatalı durumlarda beklenen hata mesajları görünüyor ve buton disabled kalıyor.

    [ ] email yanlış girdim:
    - ekranda 1 tane hata mesajı var
    - ekranda doğru hata mesajı var
    - buton disabled durumda
    [ ] email ve password yanlış
    - ekranda 2 tane hata mesajı var
    - ekranda password hata mesajı var
    [ ] email ve password doğru ama kuralları kabul etmedim.
    - buton disabled mı

## projeyi github’a yükleyeceksin

      [ ] public olsun
      [ ] en az 4 commit olsun
      - proje setup’ı bitince
      - login sayfası ve success sayfası bitince
      - form validsayonları eklenince
      - testler eklenince

- İpucu: Zaman kazanmak için sprint 7 gün 3 gün projesinin form sayfasını kullanabilirsin.

**Bitince github adresini örnek formattaki gibi index.js dosyasına yazmayı unutma.**
