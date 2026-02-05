# 🌊 LynxTree - Banyu Profile

Selamat datang di repository resmi **LynxTree**. Ini adalah halaman portal pribadi yang dirancang dengan estetika modern, minimalis, dan futuristik untuk menampilkan identitas digital secara profesional.

## ✨ Fitur Unggulan
* **Animated Gradient Background**: Latar belakang dinamis yang bergerak halus untuk kesan premium.
* **Glassmorphism UI**: Desain tombol transparan dengan efek blur kaca (Backdrop Filter).
* **Verified Identity**: Dilengkapi dengan lencana verifikasi untuk kredibilitas profil.
* **Security Protected**: Sistem Anti-Inspect untuk memberikan perlindungan dasar pada kode sumber.
* **Responsive Design**: Tampilan yang sempurna di perangkat mobile (HP) maupun desktop (PC).

## 🛠️ Teknologi yang Digunakan
* **HTML5**: Struktur konten web yang semantik.
* **CSS3**: Animasi keyframes, variabel CSS, dan efek Glassmorphism.
* **JavaScript (Vanilla)**: Logika perenderan data dinamis dan fitur keamanan.

## 🚀 Cara Instalasi & Penggunaan
1.  **Clone Repository**:
    ```bash
    git clone [https://github.com/ellXyzz/LynxTree.git](https://github.com/ellXyzz/LynxTree.git)
    ```
2.  **Buka Halaman**:
    Jalankan file `index.html` di browser pilihan Anda.

## ⚙️ Konfigurasi Data
Untuk mengubah Nama, Bio, atau Link, Anda hanya perlu mengedit bagian `communityData` di dalam file `script.js`:

```javascript
const communityData = {
    name: "Banyu",
    bio: "Official Portal",
    links: [
        { name: "Support me", url: "[https://saweria.co/Bnyu](https://saweria.co/Bnyu)", type: "featured" },
        { name: "Bot DC", url: "[https://discord.com/](https://discord.com/)...", type: "normal" }
    ]
};
