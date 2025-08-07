# PROJE AÇIKLAMASI - "My World" Kişisel Blog Sitesi

## 📋 PROJE GENEL BAKIŞ

Bu proje, **"My World"** adında modern ve minimalist bir kişisel blog sitesidir. Proje iki farklı teknoloji yaklaşımı içermektedir:

### 🎯 Ana Proje (Vanilla Web)
- **Teknoloji**: Saf HTML, CSS, JavaScript (Framework kullanmadan)
- **Tasarım**: Siyah-beyaz renk paleti, modern minimalist tasarım
- **Responsive**: Mobil uyumlu tasarım
- **Dosyalar**: `index.html`, `about.html`, `thoughts.html`, `style.css`, `script.js`

### 🔧 Jekyll Blog Altyapısı
- **Teknoloji**: Jekyll static site generator + Chirpy tema
- **Konfigürasyon**: `_config.yml`, `Gemfile`
- **Yapı**: `_posts/`, `_tabs/`, `_data/`, `_plugins/` klasörleri
- **Durum**: Henüz aktif değil, sadece altyapı hazır

## 🏗️ DOSYA YAPISI

```
web site/
├── index.html              # Ana sayfa (Vanilla HTML)
├── about.html             # Hakkımda sayfası
├── thoughts.html          # Blog yazıları sayfası
├── style.css             # Ana CSS dosyası (801 satır)
├── script.js             # JavaScript fonksiyonları (524 satır)
├── _config.yml           # Jekyll konfigürasyonu
├── Gemfile               # Ruby gem bağımlılıkları
├── _posts/               # Jekyll blog yazıları (boş)
├── _tabs/                # Jekyll sayfa yapısı
├── _data/                # Jekyll veri dosyaları
├── _plugins/             # Jekyll eklentileri
└── README.md             # Proje açıklaması
```

## 🎨 TASARIM ÖZELLİKLERİ

### Renk Paleti
- **Ana Renk**: Siyah (#000000)
- **Metin**: Beyaz (#ffffff)
- **Vurgu**: Gri tonları (#333333, #666666)
- **Arka Plan**: Siyah

### Tipografi
- **Font**: Inter (Google Fonts)
- **Ağırlıklar**: 300, 400, 500, 600, 700

### Animasyonlar
- Smooth scrolling
- Hover efektleri
- Typing animasyonu (ana sayfa başlığı)
- Sayaç animasyonları
- Fade-in efektleri

## ⚙️ TEKNİK ÖZELLİKLER

### JavaScript Fonksiyonları
- **Post Yönetimi**: Dinamik blog yazısı yükleme
- **Sayaç Animasyonları**: İstatistik sayaçları
- **Galeri Filtreleme**: Kategori bazlı filtreleme
- **Mobil Menü**: Hamburger menü toggle
- **Form Validasyonu**: İletişim formu doğrulama
- **Intersection Observer**: Performanslı animasyonlar

### CSS Özellikleri
- **Grid & Flexbox**: Modern layout teknikleri
- **Backdrop Filter**: Bulanık arka plan efektleri
- **CSS Variables**: Dinamik renk yönetimi
- **Media Queries**: Responsive tasarım
- **Transform & Transition**: Smooth animasyonlar

## 📱 SAYFA YAPISI

### 1. Ana Sayfa (index.html)
- Hero bölümü (başlık + alt başlık)
- İstatistik kartları (post sayısı, deneyim, okuyucu)
- Responsive navigasyon
- Footer

### 2. Hakkımda (about.html)
- Kişisel bilgiler
- Profil fotoğrafı (placeholder)
- Sosyal medya linkleri
- Galeri bölümü (6 kategori)
- İstatistik kartları

### 3. Blog Yazıları (thoughts.html)
- Dinamik post yükleme
- Grid layout
- Tarih ve başlık bilgileri
- "Devamını Oku" linkleri

## 🔧 KONFİGÜRASYON

### Jekyll Ayarları (_config.yml)
- **Tema**: jekyll-theme-chirpy
- **Dil**: İngilizce
- **SEO**: Meta tag ayarları
- **Analytics**: Google Analytics desteği
- **Comments**: Disqus, Utterances, Giscus desteği

### Blog Yazıları (script.js)
```javascript
const posts = [
    {
        id: 1,
        title: "first text",
        excerpt: "hello world this is my first blog text.",
        date: "August 7, 2025",
        content: "HTML content..."
    }
];
```

## 🚀 KULLANIM TALİMATLARI

### Vanilla Web Versiyonu (Aktif)
1. Dosyaları web sunucusuna yükleyin
2. `script.js` dosyasındaki post verilerini güncelleyin
3. `style.css` dosyasındaki renkleri özelleştirin
4. HTML dosyalarındaki metinleri değiştirin

### Jekyll Versiyonu (Pasif)
1. Ruby ve Jekyll kurulumu yapın
2. `bundle install` komutunu çalıştırın
3. `_config.yml` dosyasını özelleştirin
4. `_posts/` klasörüne markdown dosyaları ekleyin
5. `bundle exec jekyll serve` ile çalıştırın

## 🎯 ÖZELLEŞTİRME NOKTALARI

### İçerik Güncelleme
- **Metinler**: HTML dosyalarındaki tüm metinler
- **Blog Yazıları**: `script.js` dosyasındaki `posts` array'i
- **İstatistikler**: `script.js` dosyasındaki `stats` objesi
- **Sosyal Medya**: `about.html` dosyasındaki linkler

### Tasarım Değişiklikleri
- **Renkler**: `style.css` dosyasındaki CSS variables
- **Font**: Google Fonts linkini değiştirin
- **Animasyonlar**: CSS transition değerlerini ayarlayın

## 📊 MEVCUT DURUM

### ✅ Tamamlanan Özellikler
- Responsive tasarım
- Mobil menü
- Blog yazısı sistemi
- Galeri filtreleme
- İstatistik sayaçları
- Smooth animasyonlar
- Form validasyonu

### 🔄 Geliştirilebilir Alanlar
- Jekyll entegrasyonu
- SEO optimizasyonu
- Performans iyileştirmeleri
- Daha fazla animasyon
- Backend entegrasyonu

## 🛠️ TEKNİK GEREKSİNİMLER

### Vanilla Web
- Modern web tarayıcısı
- Web sunucusu (opsiyonel)

### Jekyll
- Ruby 2.4.0 veya üzeri
- Jekyll 4.0 veya üzeri
- Bundler gem

## 📝 NOTLAR

- Proje şu anda **Vanilla Web** versiyonu aktif durumda
- Jekyll altyapısı hazır ancak kullanılmıyor
- Tüm dosyalar UTF-8 encoding kullanıyor
- Proje MIT lisansı altında
- Cross-browser uyumlu (Chrome, Firefox, Safari, Edge)

Bu açıklama, projeyi anlamak ve üzerinde çalışmak için gerekli tüm bilgileri içermektedir.
