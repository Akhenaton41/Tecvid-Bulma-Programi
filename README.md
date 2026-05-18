# Tecvid Bulma Programı v1.0

Bu proje, Kur'an-ı Kerim metinleri üzerinde otomatik tecvid analizi yapan, ayetlerin transkripsiyonunu çıkaran ve farklı meallerle karşılaştırma imkanı sunan açık kaynaklı bir web uygulamasıdır.

## 🚀 Özellikler

- **Otomatik Tecvid Analizi:** Metin içerisindeki Medd-i Tabii, İhfa, İzhar gibi kuralları algoritmik olarak tespit eder.
- **Meal Karşılaştırma:** API entegrasyonu sayesinde birçok farklı yazarın mealini eş zamanlı olarak görüntüleme.
- **Hadis Paylaşımı:** Kullanıcıyı karşılayan anlamlı hadis-i şerifler.
- **Transkripsiyon Desteği:** Arapça harflerin okunuşlarını Latin alfabesine çevirme özelliği.
- **Saf JavaScript:** Herhangi bir kütüphane veya framework (React, Vue vb.) gerektirmeden doğrudan tarayıcıda çalışır.

## 📂 Proje Yapısı

Proje dosyaları aşağıdaki gibi organize edilmiştir:

- `index.html`: Uygulamanın ana giriş noktası (eski adıyla `tecvid.htm`).
- `css/tecvit.css`: Uygulamanın görsel tasarımı ve responsive yapısı.
- `javascript/tecvit.js`: Tecvid analiz algoritmalarının bulunduğu ana motor.
- `javascript/meal.js`: Meal çekme ve listeleme fonksiyonları.
- `javascript/autocomplate.js`: Sûre arama ve otomatik tamamlama sistemi.
- `javascript/IO.js`: Veri giriş/çıkış ve transkripsiyon işlemleri.

## 🛠 Kurulum ve Kullanım

Proje statik bir yapıya sahip olduğu için herhangi bir kurulum gerektirmez:

1. Bu depoyu (repository) bilgisayarınıza indirin.
2. `index.html` dosyasını herhangi bir modern tarayıcıda (Chrome, Firefox, Edge vb.) açın.

## 🧪 Kullanılan Teknolojiler

- HTML5
- CSS3 (Custom Properties, Flexbox)
- Vanilla JavaScript (ES6+)
- Google Fonts (Amiri Quran, Amiri)
- Font Awesome

## 📄 Lisans

Bu proje [MIT Lisansı](LICENSE) ile lisanslanmıştır. Kodu özgürce kullanabilir, geliştirebilir ve paylaşabilirsiniz.

**Geliştirici:** Mehmet Akif Ardıç (Akhenaton)

Demo: <a href="https://akhenaton41.github.io/Tecvid-Bulma-Programi/" target="_blank">https://akhenaton41.github.io/Tecvid-Bulma-Programi/</a>
