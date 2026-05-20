# Portfolio Website — Komang Yoga Suputra

## Project Overview
Website portofolio statis untuk **Komang Yoga Suputra**, mahasiswa Data Science Telkom University.
Tech stack: HTML5, CSS3 (Vanilla), JavaScript (Vanilla) — no framework, pure static site.

---

## Status Progress

### DONE
- [x] Struktur folder project dibuat
- [x] `index.html` — full single-page website dengan semua section
- [x] `css/style.css` — dark theme, responsive (desktop/tablet/mobile), semua komponen
- [x] `css/animations.css` — keyframes, scroll reveal, float, shimmer, glow, typewriter
- [x] `js/main.js` — navbar scroll, hamburger menu, typewriter, scroll reveal, skill bar animation, tab experience, project filter, particle canvas, contact form toast, smooth scroll
- [x] `assets/images/` — folder siap untuk foto profil
- [x] `SourceDataDiri/`, `SourceImages/`, `SourceTubes/` — folder siap diisi

### BELUM / TODO (harus dilakukan pemilik)
- [ ] **Foto profil** → simpan sebagai `assets/images/profile.jpg`
- [ ] **CV/Resume** → simpan sebagai `SourceDataDiri/cv.pdf`
- [ ] **Screenshot project** → simpan di `SourceImages/` dengan nama:
  - `kbgo.jpg` — Website Deteksi KBGO
  - `dashboard.jpg` — Business Intelligence Dashboard
  - `churn.jpg` — Churn Prediction
  - `stock.jpg` — NVIDIA Stock Prediction
  - `segmentation.jpg` — Customer Segmentation
- [x] **Link GitHub KBGO** — `https://github.com/oiyogs/KBGO-Detection`
- [x] **Link Live KBGO** — `https://huggingface.co/spaces/oiyogss/CapstoneProject`
- [x] **Link GitHub Customer Segmentation** — `https://github.com/oiyogs/Customer-Segmentation-Project`
- [x] **Link GitHub Price Prediction** — `https://github.com/oiyogs/Clothing-Price-Prediction`
- [x] **Link LinkedIn & GitHub** — sudah diupdate di hero, contact, footer
- [ ] **Screenshot project baru** → simpan `SourceImages/price.jpg` (Clothing Price Prediction)
- [ ] **Link GitHub & Live** — BI Dashboard, Churn, NVIDIA Stock masih `#` (belum ada URL)

### TODO (harus dilakukan bersama Claude)
- [ ] Integrasi form contact ke Formspree / EmailJS agar email benar-benar terkirim
- [ ] Deploy ke GitHub Pages / Vercel (gratis)
- [ ] Buat favicon dari foto profil
- [ ] Tambah SEO meta tags (og:image, og:title untuk sharing sosmed)

---

## Struktur File

```
D:\kuliah\Portofolio\
├── index.html              ← Single-page utama (semua section ada di sini)
├── css/
│   ├── style.css           ← Semua styling, CSS variables, responsive
│   └── animations.css      ← Semua keyframes & scroll effects
├── js/
│   └── main.js             ← Semua JS interaksi
├── assets/
│   └── images/             ← Taruh profile.jpg di sini
├── SourceDataDiri/         ← Taruh cv.pdf di sini
├── SourceImages/           ← Taruh screenshot project di sini
├── SourceTubes/            ← File pendukung lainnya
└── CLAUDE.md               ← File ini
```

---

## Section Website (urutan dari atas ke bawah)

| Section    | Status | Catatan |
|------------|--------|---------|
| Navbar     | Done   | Logo `<KYS/>`, sticky scroll, hamburger mobile |
| Hero       | Done   | Particle canvas, typewriter, 3 floating badge, foto frame |
| About      | Done   | Stat cards (5+ projects, 3 orgs, 1 internship) |
| Skills     | Done   | Progress bars + tag cloud + soft skills |
| Experience | Done   | Tab Work / Organizations, timeline |
| Projects   | Done   | 5 project cards, filter by category |
| Contact    | Done   | 4 contact cards + form dengan toast notif |
| Footer     | Done   | Logo + credit + social icons |

---

## Data Diri (referensi)
- Nama       : Komang Yoga Suputra
- Email      : yogasuputra169@gmail.com
- WhatsApp   : +62 822-3966-3660
- Universitas: Telkom University — Data Science
- Internship : AI Engineer, PT Sigma Cipta Caraka (Telkomsigma)

---

## Cara Lihat Website Sekarang
Buka file `index.html` langsung di browser (double-click).
Sudah bisa jalan tanpa server — foto belum ada akan tampil placeholder otomatis.

---

## Langkah Selanjutnya (prioritas urut)
1. Isi `assets/images/profile.jpg` — foto profil Anda
2. Isi `SourceDataDiri/cv.pdf` — CV Anda
3. Isi `SourceImages/` — screenshot 5 project (nama sesuai daftar di atas)
4. Beritahu Claude setelah asset siap → Claude update link GitHub/LinkedIn yang masih placeholder `#`
5. Integrasi contact form (Formspree) bersama Claude
6. Deploy ke GitHub Pages / Vercel bersama Claude

## Update progress yang saya siapkan
- https://github.com/oiyogs/KBGO-Detection (link project KBGO)
- https://huggingface.co/spaces/oiyogss/CapstoneProject (link deploy KBGO)
- saya udah update profile
- saya sudah update link profile href github dan linkedln di halaman 1 (copy dari sana aja)
- saya ingin kamu menambahkan project Price Prediction, berikut URL nya https://github.com/oiyogs/Clothing-Price-Prediction
- berikut adalah link github Customer segmentation https://github.com/oiyogs/Customer-Segmentation-Project

