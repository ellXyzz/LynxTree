# 🌊 LynxTree - Banyu Profile

Halaman portal pribadi modern yang dirancang dengan estetika **Glassmorphism** dan latar belakang **Animated Gradient** dinamis untuk menampilkan identitas digital secara profesional.

## ✨ Fitur Unggulan
* **Animated Gradient**: Latar belakang bergerak halus untuk kesan premium.
* **Glassmorphism UI**: Desain tombol transparan dengan efek blur kaca (Backdrop Filter).
* **Security Protected**: Dilengkapi sistem Anti-Inspect untuk perlindungan dasar kode sumber.
* **Responsive Design**: Tampilan optimal di perangkat Mobile (HP) maupun Desktop (PC).

## 🚀 Cara Menjalankan (Run)

### 💻 Desktop (Windows & Linux)
* **Direct Open**: Klik kanan pada `index.html` > **Open with** > Browser pilihan Anda.
* **Via Terminal**: Jalankan `python3 -m http.server 8000` lalu akses `http://localhost:8000`.

### 📱 Mobile (Android & iOS)
* **Termux (Android)**:
  1. Install Termux & jalankan `pkg install python`.
  2. Berikan izin akses: `termux-setup-storage`.
  3. Masuk ke folder: `cd /sdcard/Download/LynxTree`.
  4. Jalankan server: `python -m http.server 8080`.
  5. Akses di browser HP: `http://localhost:8080`.
* **Acode/Treedit (Android)**: Buka folder proyek dan tekan tombol **Play**.
* **Koder (iOS)**: Import folder proyek dan gunakan fitur **Preview**.
* **GitHub Pages**: Akses langsung melalui link deployment yang sudah aktif.

## ⚙️ Konfigurasi Data
Untuk mengubah Nama, Bio, atau Link, Anda hanya perlu mengedit variabel `communityData` di dalam file `script.js`:

```javascript
const communityData = {
    name: "Banyu",
    bio: "Official Portal",
    links: [
        { name: "Support me", url: "[https://saweria.co/Bnyu](https://saweria.co/Bnyu)", type: "featured" },
        { name: "Bot DC", url: "[https://discord.com/](https://discord.com/)...", type: "normal" }
    ]
};
