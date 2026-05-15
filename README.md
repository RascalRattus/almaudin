<div align="center">

# Almaudin — Professional Portfolio

**`v5.0.0` · Premium Edition**

[![Status](https://img.shields.io/badge/Status-🚧%20In%20Progress-orange?style=for-the-badge)](#)
[![Deploy](https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel)](#)
[![License](https://img.shields.io/badge/License-ISC-blue?style=for-the-badge)](#)

---

*🇮🇩 Bahasa Indonesia · [🇬🇧 English below](#-english-version)*

</div>

---

## 🇮🇩 Versi Indonesia

Portfolio profesional berlevel enterprise — dibangun di atas prinsip **performa tinggi**, **presisi data**, dan **estetika premium**.

> ⚠️ **Status**: Proyek ini masih dalam pengembangan aktif. Beberapa fitur dan konten mungkin berubah.

### 🏛️ Arsitektur & Filosofi

Dibangun dengan prinsip **Separation of Concerns (SoC)** yang ketat — memisahkan lapisan presentasi statis dari pemrosesan backend menggunakan model *Serverless Architecture*.

| Layer | Teknologi | Keterangan |
|-------|-----------|------------|
| **Frontend** | HTML5 · CSS3 · Vanilla JS | Zero dependencies, performa loading maksimal |
| **Backend** | Node.js Serverless | Vercel API Functions |
| **Design System** | CSS Custom Properties | Modular, dark-mode native, palet HSL premium |
| **Deployment** | Vercel | CI/CD otomatis via GitHub |

### 📂 Struktur Direktori

```
almaudin/
├── api/                    # Vercel Serverless Functions (entry point backend)
├── backend/
│   ├── controllers/        # Request handlers
│   ├── services/           # Business logic (misal: Snippet Loader)
│   └── data/               # Sumber data statis (JSON)
├── public/
│   ├── assets/img/         # Badge & media teroptimasi
│   ├── css/
│   │   ├── main.css        # CSS entry point (import semua)
│   │   ├── base.css        # Reset, variabel, tipografi global
│   │   ├── layout.css      # Struktur halaman & grid
│   │   └── components.css  # UI components (nav, card, badge, dll.)
│   ├── js/
│   │   ├── main.js         # Logika interaktif utama
│   │   └── animations.js   # Ambient system & efek visual
│   └── index.html          # Entry point aplikasi
├── vercel.json             # Konfigurasi deployment & rewrite rules
└── package.json            # Metadata proyek
```

### ✨ Fitur Utama

- **🎬 Cinematic Ambient System** — Noise overlay, glow mesh, dan cursor-tracking ambient untuk visual yang hidup
- **💻 Dynamic Snippet Engine** — Animasi kode interaktif di hero section, ditenagai backend API
- **🌐 Bilingual Core (EN/ID)** — Toggle bahasa terintegrasi langsung di DOM via `data-en` / `data-id` attributes, dengan pill toggle aktif bergaya shade sesuai tema
- **🏅 Verified Credentials Grid** — Badge sertifikasi Microsoft & Google dengan hyperlink terverifikasi ke Credly & Google Accredible
- **⚡ Performance Optimized** — `IntersectionObserver` untuk scroll reveal, aset terkompresi, zero JS framework

### 🚀 Pengembangan Lokal

```bash
# Clone repo
git clone https://github.com/RascalRattus/almaudin.git
cd almaudin

# Jalankan server lokal (simulasi Vercel serverless)
npx vercel dev
```

> **Catatan**: GitHub Pages tidak mendukung Vercel Functions secara native. Untuk fungsionalitas API penuh, gunakan Vercel.

---
---

## 🇬🇧 English Version

<a name="-english-version"></a>

An enterprise-grade professional portfolio — built on **high performance**, **data precision**, and **premium aesthetics**.

> ⚠️ **Status**: This project is under active development. Some features and content are subject to change.

### 🏛️ Architecture & Philosophy

Built on strict **Separation of Concerns (SoC)** — separating the static presentation layer from backend processing using a *Serverless Architecture* model.

| Layer | Technology | Notes |
|-------|-----------|-------|
| **Frontend** | HTML5 · CSS3 · Vanilla JS | Zero dependencies, maximum load performance |
| **Backend** | Node.js Serverless | Vercel API Functions |
| **Design System** | CSS Custom Properties | Modular, dark-mode native, HSL premium palette |
| **Deployment** | Vercel | Automated CI/CD via GitHub |

### 📂 Directory Structure

```
almaudin/
├── api/                    # Vercel Serverless Functions (backend entry point)
├── backend/
│   ├── controllers/        # Request handlers
│   ├── services/           # Business logic (e.g. Snippet Loader)
│   └── data/               # Static data sources (JSON)
├── public/
│   ├── assets/img/         # Optimized badges & media
│   ├── css/
│   │   ├── main.css        # CSS entry point (imports all)
│   │   ├── base.css        # Reset, variables, global typography
│   │   ├── layout.css      # Page structure & grid
│   │   └── components.css  # UI components (nav, card, badge, etc.)
│   ├── js/
│   │   ├── main.js         # Core interactive logic
│   │   └── animations.js   # Ambient system & visual effects
│   └── index.html          # Application entry point
├── vercel.json             # Deployment & rewrite configuration
└── package.json            # Project metadata
```

### ✨ Key Features

- **🎬 Cinematic Ambient System** — Noise overlay, glow mesh, and cursor-tracking ambient glow for a living visual experience
- **💻 Dynamic Snippet Engine** — Animated code snippets in the hero section, powered by a backend API
- **🌐 Bilingual Core (EN/ID)** — Language toggle integrated directly into the DOM via `data-en` / `data-id` attributes, with an active pill-style shade that matches the site theme
- **🏅 Verified Credentials Grid** — Microsoft & Google certification badges with verified hyperlinks to Credly & Google Accredible
- **⚡ Performance Optimized** — `IntersectionObserver` for scroll reveal, compressed assets, zero JS framework

### 🚀 Local Development

```bash
# Clone the repo
git clone https://github.com/RascalRattus/almaudin.git
cd almaudin

# Run local server (simulates Vercel serverless environment)
npx vercel dev
```

> **Note**: GitHub Pages does not natively support Vercel Functions. For full API functionality, deployment via Vercel is recommended.

---

<div align="center">

**Crafted with precision by Almaudin.**

*Systems & Data Architect · Microsoft & Google Certified*

</div>
