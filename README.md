# eba-dark-mode

EBA websitesi'ni karanlık modda kullanmayı sağlayan basit bir uzantı.

## Chrome ve Chromium Tabanlı(Brave, Opera, Edge) Tarayıcılarda Kullanmak

1. Depoyu cihazınıza zip formatında indirin.
2. Arşivi çıkarın.
3. chrome://extensions linkini kullanarak eklenti ayarlarınıza gidin.
4. Sağ üst köşeden **geliştirici modu**na girin
5. Zip arşivini çıkardığınız klasörü buraya sürükleyip bırakın.

## Firefox ve Firefox Tabanlı Tarayıcılarda Kullanmak

- İleride eklenecek

## Renkleri Değiştirmek

Depoyu indirdikten sonra [eba.css](./eba.css) dosyasının başındaki 6 değişkenin değerlerini değiştirebilirsiniz.

### Varsayılan Değerler

    --background: #151515;
    --background-light: #252525;
    --background-lighter: #353535;
    --highlight: tomato;
    --highlight-light: hsl(9, 100%, 78%);
    --foreground: white;

### Örnek

Arkaplan pembe, yazılar mavi, başlıklar/detaylar yeşil:

    --background: pink;
    --background-light:  hsl(350, 100%, 60%);
    --background-lighter: hsl(350, 100%, 50%);
    --highlight: green;
    --highlight-light: hsl(120, 100%, 50%);
    --foreground: blue;
