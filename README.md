# Antigravity — Professional Portfolio v1.0.0

**Enterprise-grade systems architect portfolio** built with an focus on high-performance automation, data precision, and professional aesthetics.

---

## 🏛️ Architecture & Philosophy

Project ini dirancang menggunakan prinsip **Separation of Concerns (SoC)** yang ketat, memisahkan logika presentasi statis dengan pemrosesan data backend menggunakan model *Serverless Architecture*.

- **Frontend**: Pure Vanilla HTML/CSS/JS (Zero dependencies) untuk performa loading maksimal.
- **Backend**: Node.js Serverless Functions via Vercel API.
- **Design System**: Modular CSS dengan variabel HSL untuk kontrol palet warna premium dan dark-mode native.

## 📂 Directory Structure

```text
.
├── api/                    # Vercel Serverless Functions (Backend Entry)
├── backend/                # Modular logic layer (Services & Data)
│   ├── controllers/        # Request handlers
│   ├── services/           # Business logic (e.g., Snippet Loader)
│   └── data/               # Data sources (JSON)
├── public/                 # Production-ready Static Assets
│   ├── assets/             # Media & Optimized Images
│   ├── css/                # Modular stylesheets (Base, Layout, Components)
│   ├── js/                 # Client-side interactive logic
│   └── index.html          # Main application entry
├── vercel.json             # Deployment & Rewrite configuration
└── package.json            # Project metadata
```

## ✨ Key Features

- **Cinematic Ambient System**: Overlay noise, glow meshes, dan cursor-tracking ambient glow untuk visual yang hidup.
- **Dynamic Snippet Engine**: Animasi kode interaktif di Hero Section yang ditenagai oleh API Backend.
- **Bilingual Core**: Sistem lokalisasi EN/ID yang terintegrasi langsung pada DOM via data-attributes.
- **Bento-style Credentials**: Grid sertifikasi Microsoft & Google yang responsif dan terverifikasi.
- **Performance Optimized**: Menggunakan `IntersectionObserver` untuk scroll reveal dan aset yang telah terkompresi.

## 🚀 Deployment & Development

### Local Development
Gunakan **Vercel CLI** untuk mensimulasikan lingkungan serverless secara lokal:
```bash
# Jalankan development server
npx vercel dev
```

### Production Build
Project ini siap di-deploy langsung ke **Vercel** atau **GitHub Pages***.
> **Note**: GitHub Pages tidak mendukung Vercel Functions secara native. Untuk fungsionalitas API penuh, direkomendasikan menggunakan Vercel.

## 🛠️ Tech Stack
- **Languages**: HTML5, CSS3 (Modern Flex/Grid), JavaScript (ES6+).
- **Runtime**: Node.js (Vercel Serverless).
- **Tools**: Vercel CLI, Git.

---
**Crafted with precision by Almaudin.**
