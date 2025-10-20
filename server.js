// Express.js ile basit web sunucusu
const express = require('express');
const path = require('path');

const app = express();

// Render'dan gelen PORT environment variable'ını kullan
// Yoksa varsayılan olarak 3000 portunu kullan
const PORT = process.env.PORT || 3000;

// Static dosyaları (index.html) sunmak için
app.use(express.static(path.join(__dirname)));

// Ana sayfa route'u
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Tüm diğer route'lar için ana sayfaya yönlendir
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Sunucuyu başlat
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🌙 Karanlık Uzay Temalı Romantik Site çalışıyor!`);
    console.log(`💜 Port: ${PORT}`);
    console.log(`🖤 Elif için özel olarak hazırlandı...`);
    console.log(`✨ Site ${PORT} portunda yayında!`);
});
