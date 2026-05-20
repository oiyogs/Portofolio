# Portfolio Website — Komang Yoga Suputra

## Project Overview
Website portofolio statis untuk **Komang Yoga Suputra**, mahasiswa Data Science Telkom University.
Tech stack: HTML5, CSS3 (Vanilla), JavaScript (Vanilla) — no framework, pure static site.
**Live URL:** https://oiyogs.github.io/Portofolio
**Repo:** https://github.com/oiyogs/Portofolio

---

## Status Progress

### DONE
- [x] Struktur folder + seluruh file website dibuat
- [x] Dark theme, responsive (desktop/tablet/mobile), animasi lengkap
- [x] Foto profil → `assets/images/profile.jpeg` ✓
- [x] CV/Resume → `SourceDataDiri/cv.pdf` ✓
- [x] Data diri & organisasi diupdate sesuai CV (tahun, posisi, deskripsi)
- [x] Experience: AI Engineer Telkomsigma (Jul–Aug 2025), hapus entri palsu Community Service
- [x] Organisasi: 5 entri lengkap dengan tahun yang benar dari CV
- [x] Link GitHub: `https://github.com/oiyogs`
- [x] Link LinkedIn: `https://www.linkedin.com/in/komang-yoga-suputra-b61037310/`
- [x] Link KBGO GitHub: `https://github.com/oiyogs/KBGO-Detection`
- [x] Link KBGO Live: `https://huggingface.co/spaces/oiyogss/CapstoneProject`
- [x] Link Customer Segmentation GitHub: `https://github.com/oiyogs/Customer-Segmentation-Project`
- [x] Project baru: **Clothing Price Prediction** → `https://github.com/oiyogs/Clothing-Price-Prediction`
- [x] Contact form terhubung ke Formspree (`xlgvgary`) → email masuk ke yogasuputra169@gmail.com
- [x] Bug fix: placeholder foto profil (display:none by default, muncul hanya saat gagal load)
- [x] Bug fix: icon Hadoop (fa-elephant Pro → fa-cubes Free)
- [x] Stat card About bisa diklik — Projects → #projects, Organizations/Internship → #experience + switch tab otomatis
- [x] Deploy ke GitHub Pages ✓

### TODO — Screenshot project (simpan di `SourceImages/`)
- [ ] `dashboard.jpg` — Business Intelligence Dashboard
- [ ] `churn.jpg` — Churn Prediction
- [ ] `stock.jpg` — NVIDIA Stock Prediction
- [ ] `price.jpg` — Clothing Price Prediction
- [ ] `segmentation.jpg` — Customer Segmentation (kalau belum ada)

### TODO — Link yang masih `#`
- [ ] GitHub & Live — Business Intelligence Dashboard
- [ ] GitHub & Live — Churn Prediction
- [ ] GitHub & Live — NVIDIA Stock Prediction

### TODO — Bersama Claude
- [ ] Buat favicon dari foto profil
- [ ] Tambah SEO meta tags (og:image, og:title untuk sharing sosmed)

---

## Struktur File

```
D:\kuliah\Portofolio\
├── index.html              ← Single-page utama
├── css/
│   ├── style.css           ← Semua styling, CSS variables, responsive
│   └── animations.css      ← Semua keyframes & scroll effects
├── js/
│   └── main.js             ← Semua JS interaksi
├── assets/
│   └── images/
│       └── profile.jpeg    ← Foto profil (sudah ada)
├── SourceDataDiri/
│   └── cv.pdf              ← CV (sudah ada)
├── SourceImages/           ← Taruh screenshot project di sini
├── SourceTubes/            ← Diabaikan di git (.gitignore)
├── .gitignore
└── CLAUDE.md               ← File ini
```

---

## Section Website

| Section    | Status | Catatan |
|------------|--------|---------|
| Navbar     | Done   | Logo `<KYS/>`, sticky scroll, hamburger mobile |
| Hero       | Done   | Particle canvas, typewriter, 3 floating badge, foto profil |
| About      | Done   | Stat cards (6+ projects, 3 orgs, 1 internship) — bisa diklik |
| Skills     | Done   | Progress bars + tag cloud (icon FA Free semua) + soft skills |
| Experience | Done   | Tab Work (1 entry) / Organizations (5 entries), data dari CV |
| Projects   | Done   | 6 project cards, filter by category |
| Contact    | Done   | 4 contact cards + form → Formspree (email real) |
| Footer     | Done   | Logo + credit + social icons |

---

## Data Diri (referensi)
- Nama       : Komang Yoga Suputra
- Alamat     : Jl. Adhyaksa I No 17, Dayeuhkolot, Bandung, Jawa Barat
- Email      : yogasuputra169@gmail.com
- WhatsApp   : +62 822-3966-3660
- Universitas: Telkom University — S1 Sains Data (2023 - Now)
- Internship : AI Engineer, PT Sigma Cipta Caraka (Telkomsigma), Jul–Aug 2025

---

## Cara Update & Deploy
Edit file → lalu jalankan di terminal:
```bash
git add .
git commit -m "deskripsi update"
git push
```
Website live di https://oiyogs.github.io/Portofolio dalam 1–2 menit.
