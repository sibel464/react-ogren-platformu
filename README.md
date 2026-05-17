# 🚀 ReactÖğren - React & TypeScript Eğitim Platformu

Modern, etkileşimli ve Türkçe React + TypeScript eğitim web sitesi.

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=flat-square&logo=vite)

## ✨ Özellikler

- 🎨 **Modern & Premium UI** – Pastel tonlar, glassmorphism, soft shadow
- 🌓 **Dark / Light Mode** – Otomatik ve manuel tema geçişi
- 📱 **Tam Responsive** – Mobil, tablet ve masaüstü uyumlu
- 🎭 **Animasyonlar** – Framer Motion ile scroll reveal ve micro-animasyonlar
- 💻 **Syntax Highlighting** – Catppuccin temalı kod blokları
- 📋 **Kopyala Butonu** – Tek tıkla kod kopyalama
- 🎯 **Canlı Sayaç** – useState hook'u interaktif demosu
- 🔗 **Sticky Navbar** – Aktif bölüm göstergesi
- 📖 **Eğitim İçeriği** – React, TSX, Hooks, Components

## 🛠️ Teknolojiler

| Teknoloji | Amaç |
|-----------|-------|
| React 19 | UI kütüphanesi |
| TypeScript | Tip güvenliği |
| Vite | Build aracı |
| Tailwind CSS 4 | Stil yönetimi |
| Framer Motion | Animasyonlar |
| Lucide React | İkonlar |

## 📁 Proje Yapısı

```
src/ (Kaynak Kodlar)
├── components/ (Bileşenler Klasörü)
│   ├── UstBaslik.tsx          # Sayfanın en üstündeki yapışkan menü (Gezinme Çubuğu)
│   ├── AnaGorsel.tsx            # Ana sayfadaki büyük karşılama alanı
│   ├── OzellikKarti.tsx     # Özellikleri listeleyen küçük kart tasarımı
│   ├── KodBlok.tsx       # Kodları renklendirerek gösteren alan
│   ├── Sekmeler.tsx            # Tıklanabilir sekmeli içerik sistemi
│   ├── OgrenmeKarti.tsx    # Öğrenme konularını anlatan bilgi kartları
│   ├── BolumBasligi.tsx  # Bölümlerin ortak başlık tasarımı
│   ├── AltBilgi.tsx          # Sayfanın en altındaki bilgi ve link alanı
│   └── sections/ (Sayfa Bölümleri Klasörü)
│       ├── ReactBolumu.tsx         # "React Nedir?" kısmını anlatan bölüm
│       ├── TSXBolumu.tsx           # "TSX Nedir?" kısmını anlatan bölüm
│       ├── BilesenBolumu.tsx     # "Bileşen Yapısı"nı anlatan bölüm
│       ├── OgrenmeKartlariBolumu.tsx # Temel kavramların olduğu kartlar bölümü
│       └── KodOrnekleriBolumu.tsx  # Kod örneklerinin bulunduğu bölüm
├── data/ (Statik Veriler)
│   └── index.ts            # Sayfadaki yazılar, linkler ve sabit bilgiler (Örn: Quiz Soruları)
├── types/ (Veri Tipleri)
│   └── index.ts            # TypeScript ile yazılmış kurallar ve arayüzler (Interface'ler)
├── App.tsx                 # Sayfanın iskeleti olan Ana Uygulama bileşeni
├── main.tsx                # Projeyi çalıştıran Başlangıç Noktası (Entry Point)
└── index.css               # Tüm sitenin renk ve tasarım ayarları (Global Stiller)
```

## 🚀 Kurulum & Çalıştırma

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat (Ödev Gereksinimi)
npm start

# (Alternatif olarak)
npm run dev

# Üretim build'i oluştur
npm run build
```

## 📝 Kod Kuralları

- ✅ Functional Components
- ✅ Props interface zorunlu
- ✅ Type safety (any yasak)
- ✅ Clean code & reusable yapı
- ✅ Semantic HTML
- ✅ Accessibility (ARIA labels)

## 📄 Lisans

Bu proje eğitim amaçlı hazırlanmıştır.

---

**Built with ❤️ using React + TypeScript**
