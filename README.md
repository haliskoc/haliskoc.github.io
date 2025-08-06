<<<<<<< HEAD
# Chirpy Starter

[![Gem Version](https://img.shields.io/gem/v/jekyll-theme-chirpy)][gem]&nbsp;
[![GitHub license](https://img.shields.io/github/license/cotes2020/chirpy-starter.svg?color=blue)][mit]

When installing the [**Chirpy**][chirpy] theme through [RubyGems.org][gem], Jekyll can only read files in the folders
`_data`, `_layouts`, `_includes`, `_sass` and `assets`, as well as a small part of options of the `_config.yml` file
from the theme's gem. If you have ever installed this theme gem, you can use the command
`bundle info --path jekyll-theme-chirpy` to locate these files.

The Jekyll team claims that this is to leave the ball in the user’s court, but this also results in users not being
able to enjoy the out-of-the-box experience when using feature-rich themes.

To fully use all the features of **Chirpy**, you need to copy the other critical files from the theme's gem to your
Jekyll site. The following is a list of targets:

```shell
.
├── _config.yml
├── _plugins
├── _tabs
└── index.html
```

To save you time, and also in case you lose some files while copying, we extract those files/configurations of the
latest version of the **Chirpy** theme and the [CD][CD] workflow to here, so that you can start writing in minutes.

## Usage

Check out the [theme's docs](https://github.com/cotes2020/jekyll-theme-chirpy/wiki).

## Contributing

This repository is automatically updated with new releases from the theme repository. If you encounter any issues or want to contribute to its improvement, please visit the [theme repository][chirpy] to provide feedback.

## License

This work is published under [MIT][mit] License.

[gem]: https://rubygems.org/gems/jekyll-theme-chirpy
[chirpy]: https://github.com/cotes2020/jekyll-theme-chirpy/
[CD]: https://en.wikipedia.org/wiki/Continuous_deployment
[mit]: https://github.com/cotes2020/chirpy-starter/blob/master/LICENSE
=======
# Düşüncelerim - Kişisel Blog Sitesi

Modern, huzurlu ve şık tasarımlı kişisel blog sitesi. Siyah-beyaz renk paleti kullanılarak oluşturulmuş, düşüncelerinizi ve deneyimlerinizi paylaşabileceğiniz bir platform.

## Özellikler

### 🎨 Tasarım
- **Modern ve Minimalist**: Temiz, huzurlu tasarım
- **Siyah-Beyaz Renk Paleti**: Profesyonel ve şık görünüm
- **Responsive Tasarım**: Tüm cihazlarda mükemmel görünüm
- **Smooth Animasyonlar**: Kullanıcı deneyimini artıran animasyonlar

### 📱 Kullanıcı Deneyimi
- **Mobil Uyumlu**: Telefon ve tabletlerde mükemmel çalışır
- **Smooth Scrolling**: Sayfa içi geçişlerde yumuşak kaydırma
- **İnteraktif Elementler**: Hover efektleri ve tıklama animasyonları
- **Form Validasyonu**: İletişim formunda otomatik doğrulama

### 🚀 Teknik Özellikler
- **Vanilla JavaScript**: Framework kullanmadan saf JavaScript
- **CSS Grid & Flexbox**: Modern layout teknikleri
- **Intersection Observer**: Performanslı animasyonlar
- **Typewriter Efekti**: Ana sayfa başlığında yazma animasyonu

## Dosya Yapısı

```
my website/
├── index.html          # Ana HTML dosyası
├── style.css          # CSS stilleri
├── script.js          # JavaScript fonksiyonları
└── README.md          # Bu dosya
```

## Bölümler

### 🏠 Ana Sayfa (Hero)
- Hoş geldin mesajı
- Kişisel tanıtım
- Çağrı butonları

### 👤 Hakkımda
- Kişisel bilgiler
- İstatistikler (yazı sayısı, deneyim, okuma)
- Profesyonel geçmiş

### 💭 Düşünceler
- Blog yazıları grid layout
- Tarih ve başlık bilgileri
- "Devamını Oku" linkleri
- Hover efektleri

### 📞 İletişim
- İletişim bilgileri
- İnteraktif form
- Form validasyonu
- Başarı/hata bildirimleri

## Kullanım

1. **Dosyaları İndirin**: Tüm dosyaları web sunucunuza yükleyin
2. **İçeriği Özelleştirin**: HTML dosyasındaki metinleri kendi içeriğinizle değiştirin
3. **Renkleri Ayarlayın**: CSS dosyasında renk kodlarını değiştirerek kişiselleştirin
4. **Yayınlayın**: Sitenizi web sunucusunda yayınlayın

## Özelleştirme

### Renk Paleti Değiştirme
```css
/* Ana renkler */
:root {
    --primary-color: #000000;
    --secondary-color: #ffffff;
    --text-color: #333333;
    --accent-color: #666666;
}
```

### İçerik Güncelleme
- `index.html` dosyasındaki metinleri değiştirin
- Blog yazılarını kendi içeriğinizle güncelleyin
- İletişim bilgilerini gerçek bilgilerinizle değiştirin

### Yeni Özellikler Ekleme
- JavaScript dosyasına yeni fonksiyonlar ekleyebilirsiniz
- CSS dosyasına yeni stiller ekleyebilirsiniz
- HTML yapısını genişletebilirsiniz

## Tarayıcı Desteği

- ✅ Chrome (en son sürüm)
- ✅ Firefox (en son sürüm)
- ✅ Safari (en son sürüm)
- ✅ Edge (en son sürüm)
- ✅ Mobil tarayıcılar

## Performans

- **Hızlı Yükleme**: Optimize edilmiş CSS ve JavaScript
- **SEO Dostu**: Semantic HTML yapısı
- **Erişilebilirlik**: WCAG standartlarına uygun
- **Mobil Optimizasyonu**: Responsive tasarım

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Kişisel ve ticari kullanım için ücretsizdir.

## İletişim

Herhangi bir sorunuz veya öneriniz için lütfen iletişime geçin.

---

**Not**: Bu site tamamen statik HTML, CSS ve JavaScript kullanılarak oluşturulmuştur. Herhangi bir backend veya veritabanı gerektirmez. 
>>>>>>> 00717dc (İlk blog yüklemesi)
