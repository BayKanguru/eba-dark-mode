# eba-dark-mode

[TR](README.md) | [EN](README.en.md)

<img src="./img/svg/logo.svg" width="100px">

[EBA](https://eba.gov.tr) websitesi'ni karanlık moda çeviren basit bir uzantı.

## Özellikler

- CSS değişkenleri ile istediğiniz renklere [ayarlayabilirsiniz](#Renkleri-Değiştirmek).
- Ulaşılabilirlik iyileştirmeleri.

## Chrome ve Chromium Tabanlı(Brave, Opera, Edge) Tarayıcılarda Kullanmak

1. Depoyu cihazınıza zip formatında indirin.
2. Arşivi çıkarın.
3. chrome://extensions linkini kullanarak eklenti ayarlarınıza gidin.
4. Sağ üst köşeden **Geliştirici Modu**nu aktifleştirin.
5. Zip arşivini çıkardığınız klasörü buraya sürükleyip bırakın.

## Firefox ve Firefox Tabanlı Tarayıcılarda Kullanmak

- İleride eklenecek

## Renkleri Değiştirmek

Depoyu indirdikten sonra [eba.css](./eba.css) dosyasının başındaki değişkenlerin değerlerini değiştirebilirsiniz.

### Varsayılan Değerler

```css
:root {
  --background: #151515;
  --background-light: #252525;
  --background-lighter: #353535;
  --highlight: tomato;
  --highlight-light: hsl(9, 100%, 78%);
  --highlight-dark: hsl(9, 100%, 50%);
  --foreground: white;
  --accessibility-focus: blue;
}
```

### Örnek

Arkaplan pembe, yazılar mavi, başlıklar/detaylar yeşil, ulaşılabilirlik seçim rengi kırmızı:

```css
:root {
  --background: pink;
  --background-light: hsl(350, 100%, 60%); /* açık pembe */
  --background-lighter: hsl(350, 100%, 50%); /* daha açık pembe */
  --highlight: green;
  --highlight-light: hsl(120, 100%, 50%); /* açık yeşil */
  --highlight-dark: hsl(120, 100%, 30%); /* koyu yeşil */
  --foreground: blue;
  --accessibility-focus: red;
}
```

### Ek

- [Logo SVG](./img/svg)
- [Logo PNG](./img) çeşitli boyutlarda
