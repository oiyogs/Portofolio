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
- [x] Foto profil → `assets/images/profile.jpg` ✓
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
- [x] Favicon `<KYS/>` (SVG gradient) → `assets/favicon.svg`
- [x] SEO meta tags (Open Graph + Twitter Card + canonical + theme-color)
- [x] Foto profil dikompres: 3,7 MB (3000×4000) → 197 KB (750×1000), file `.jpeg` lama dihapus
- [x] Footer dibersihkan: hapus logo `<KYS/>` & teks "Crafted...", social icon rata kanan, copyright tetap
- [x] Project baru: **Credit Risk Analysis** (GCP/BigQuery/Looker Studio) → Live: Looker Studio
- [x] Project baru: **Production Process Optimization** (Python EDA, manufaktur hybrid) → Code: `https://github.com/oiyogs/Optimation_SDI`
- [x] Tombol Live/Code project pintar — muncul hanya jika `href` terisi (logika di `js/main.js`)
- [x] Link Churn Prediction Code → `https://github.com/oiyogs/Churn_prediction`
- [x] Project dinonaktifkan sementara (di-comment, file belum ketemu): **BI Dashboard**, **NVIDIA Stock Prediction**

### TODO — Screenshot project (simpan di `SourceImages/`)
- [ ] `churn.jpg` — Churn Prediction
- [ ] `price.jpg` — Clothing Price Prediction
- [ ] `segmentation.jpg` — Customer Segmentation (kalau belum ada)
- [ ] `credit-risk.jpg` — Credit Risk Analysis
- [ ] `optimization.jpg` — Production Process Optimization
- [ ] `dashboard.jpg` — BI Dashboard (saat card diaktifkan lagi)
- [ ] `stock.jpg` — NVIDIA Stock Prediction (saat card diaktifkan lagi)

### TODO — Link yang masih `#`
- [ ] Live — Churn Prediction (Code sudah ada)
- [ ] Live — Clothing Price Prediction (Code sudah ada)
- [ ] Live — Customer Segmentation (Code sudah ada)
- [ ] Live — Production Process Optimization (Code sudah ada)
- [ ] Code — Credit Risk Analysis (Live sudah ada)

### TODO — Card dinonaktifkan (aktifkan lagi: hapus pembungkus `<!-- DISABLED ... -->` di index.html)
- [ ] Business Intelligence Dashboard + link GitHub & Live
- [ ] NVIDIA Stock Prediction + link GitHub & Live

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
│   ├── favicon.svg         ← Favicon <KYS/> (SVG gradient)
│   └── images/
│       └── profile.jpg     ← Foto profil (dikompres ~197 KB)
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
| Projects   | Done   | 6 card aktif + 2 dinonaktifkan (di-comment), tombol Live/Code muncul jika link terisi |
| Contact    | Done   | 4 contact cards + form → Formspree (email real) |
| Footer     | Done   | Social icons (rata kanan) + copyright |

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
