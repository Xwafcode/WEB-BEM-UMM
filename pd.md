# Product Requirements Document (PRD)
## Website Badan Eksekutif Mahasiswa — Universitas Muhammadiyah Malang (BEM UMM)

**Versi:** 1.1 (Revisi — Palet Warna & Tech Stack)
**Tanggal:** 29 Juni 2026  
**Status:** Draft  
**Referensi Desain:** [bem.unma.ac.id](https://bem.unma.ac.id/) · [umm.ac.id](https://umm.ac.id/) · [@bemumm Instagram](https://www.instagram.com/bemumm/)

> **Changelog v1.1:** Palet warna diperbarui mengikuti identitas visual resmi UMM (merah–putih, "Jas Merah Kampus Putih"). Tech stack diubah dari Next.js ke **Vite + React** (SPA).

---

## 1. Ringkasan Produk

Website resmi BEM UMM adalah platform informasi digital untuk Badan Eksekutif Mahasiswa Universitas Muhammadiyah Malang. Website ini menjadi wajah digital organisasi kepada seluruh mahasiswa, dosen, dan civitas akademika UMM — menyajikan informasi kepengurusan, berita kegiatan, serta kanal komunikasi resmi BEM.

**Tagline produk:** *"Satu Portal untuk Seluruh Gerakan Mahasiswa UMM"*

---

## 2. Konteks & Latar Belakang

BEM UMM (Kabinet Satya Prabaswara, periode 2024–2025) saat ini belum memiliki website khusus yang modern dan mandiri. Kehadiran digital BEM UMM dominan di Instagram (@bemumm, 17 ribu pengikut), namun platform media sosial memiliki keterbatasan: tidak bisa menampung struktur informasi yang terorganisir, tidak bisa dicari via Google, dan tidak dapat diakses tanpa akun Instagram.

Website ini dibangun untuk mengisi kekosongan tersebut — sebagai sumber informasi resmi, terindeks mesin pencari, dan dapat diakses oleh siapa pun, kapan pun.

---

## 3. Tujuan & Metrik Sukses

### Tujuan Bisnis
- Meningkatkan visibilitas dan kredibilitas BEM UMM secara digital.
- Menyediakan satu titik akses resmi untuk semua informasi organisasi.
- Memudahkan mahasiswa dan dosen menghubungi BEM UMM.

### Metrik Keberhasilan (KPI)

| Metrik | Target (3 bulan post-launch) |
|---|---|
| Rata-rata pengunjung unik per bulan | ≥ 1.000 |
| Lighthouse Performance Score | ≥ 90 |
| Waktu muat halaman awal | < 2 detik |
| Bounce rate | < 60% |
| Berita baru dipublikasikan per bulan | ≥ 4 artikel |

---

## 4. Target Pengguna

### Pengguna Primer
**Mahasiswa UMM aktif**
- Usia 18–24 tahun.
- Mengakses melalui smartphone (mobile-first), jaringan kampus maupun data seluler.
- Mencari informasi acara, berita, dan cara menghubungi BEM.
- Familiar dengan Instagram; ekspektasi visual yang menarik dan cepat.

### Pengguna Sekunder
**Dosen & Tenaga Kependidikan UMM**
- Mengakses melalui desktop maupun laptop.
- Mencari informasi struktur kepengurusan dan kontak BEM untuk keperluan koordinasi.
- Ekspektasi tampilan profesional dan informasi yang akurat.

### Pengguna Tersier
**Pengunjung Eksternal (BEM kampus lain, Media, Masyarakat Umum)**
- Mengakses dari luar ekosistem UMM.
- Mencari profil dan rilis pers BEM UMM.

---

## 5. Fitur & Persyaratan

### 5.1 Halaman Beranda (`/`)

Beranda adalah kesan pertama pengunjung. Harus langsung mengkomunikasikan identitas kabinet dan mendorong eksplorasi.

**Komponen yang dibutuhkan:**

**Hero Section**
- Background deep crimson merah UMM dengan pola geometris Matahari Muhammadiyah (SVG, berputar sangat lambat sebagai ambient element).
- Logo BEM UMM + nama kabinet dengan animasi masuk layar (slide-up + fade-in bertahap).
- Tagline kabinet ("Melangkah Bersama, Gerak Membara").
- Dua tombol CTA: "Lihat Berita Terbaru" (primary, putih solid) dan "Kenali Kami" (ghost, border putih).
- Teks berwarna putih di atas latar merah — kontras tinggi.

**Ticker Pengumuman**
- Marquee horizontal animasi, latar merah gelap, teks putih.
- Menampilkan pengumuman atau agenda terbaru.
- Dapat diisi manual lewat file konfigurasi (`src/data/announcements.js`).

**Sambutan Ketua BEM**
- Section putih bersih — kontras visual dengan hero merah.
- Foto Ketua BEM (sisi kiri) dan teks sambutan (sisi kanan).
- Ornamen dekoratif merah tipis sebagai aksen.
- Reveal animasi berbasis scroll.

**Visi & Misi**
- Background merah gelap (#8C0D11), teks putih.
- Dua kolom: Visi (singkat) dan Misi (list poin).

**Highlight Berita Terbaru**
- Background putih/cream.
- Grid 3 card berita terbaru dengan hover lift effect.
- Badge kategori berwarna merah.
- Tombol "Lihat Semua Berita" → `/berita`.

**Cuplikan Struktur Pimpinan**
- Foto dan nama Ketua + Wakil Ketua.
- Tombol "Lihat Struktur Lengkap" → `/struktur`.

**CTA Kontak**
- Banner merah: "Ada aspirasi? Hubungi kami." + tombol putih → `/kontak`.

---

### 5.2 Halaman Berita (`/berita`)

**Komponen yang dibutuhkan:**

**Filter Kategori**
- Tab filter: Semua, Kegiatan, Pengumuman, Rilis Pers, Prestasi.
- Warna aktif: background merah, teks putih. Inaktif: border merah, teks merah.
- Filter bekerja secara client-side tanpa reload.

**Grid Berita**
- Layout: 3 kolom di desktop, 2 kolom di tablet, 1 kolom di mobile.
- Card: gambar thumbnail, badge kategori merah, judul, ringkasan, tanggal, estimasi baca.
- Hover: card terangkat dengan shadow merah halus.

**Halaman Detail Berita (`/berita/:slug`)**
- Judul, kategori, tanggal, nama penulis.
- Gambar hero full-width.
- Konten artikel (HTML/Markdown dirender di client).
- Navigasi: "← Berita Sebelumnya" dan "Berita Selanjutnya →".
- Berita terkait (3 artikel dari kategori sama).
- Tombol bagikan ke WhatsApp/Instagram.

---

### 5.3 Halaman Struktur Kepengurusan (`/struktur`)

**Komponen yang dibutuhkan:**

**Hero Struktur**
- Header merah dengan nama kabinet dan periode.
- Foto grup pengurus inti jika tersedia.

**Pimpinan Kabinet**
- Kartu besar Ketua BEM dan Wakil Ketua BEM (foto, nama, jabatan, jurusan).
- Latar putih, border aksen merah.

**Bagan Organisasi Interaktif**
- Hierarki visual: Ketua → Wakil → Sekretaris/Bendahara → Departemen.
- Warna node: merah (#C0272D) dengan teks putih.
- Klik departemen untuk expand melihat daftar anggota.

**Grid Departemen + Anggota**
- Accordion atau tab per departemen.
- Badge departemen berwarna merah.
- Kartu anggota: foto (atau avatar inisial dengan background merah), nama, jabatan.

---

### 5.4 Halaman Contacts (`/kontak`)

**Komponen yang dibutuhkan:**

**Informasi Kontak Resmi**
- Header merah dengan ikon kontak.
- Email: bemu.umm@gmail.com
- WhatsApp: +62 812-3496-7746
- Alamat dan jam operasional sekretariat.

**Tautan Media Sosial**
- Kartu ikon sosial media dengan hover merah.

**Form Pesan Singkat**
- Kolom: Nama, Email/WhatsApp, Subjek, Pesan.
- Tombol "Kirim Pesan" merah solid.
- Submit via Web3Forms/Formspree.
- Feedback sukses: checkmark hijau. Gagal: notifikasi merah.

---

### 5.5 Navigasi Global

**Navbar**
- Background: merah solid (#C0272D) — sesuai identitas UMM.
- Logo BEM UMM (kiri) + teks "BEM UMM" putih.
- Menu: Beranda | Berita | Struktur | Kontak — teks putih.
- Highlight menu aktif: garis bawah putih atau background merah gelap.
- Mobile: hamburger putih, panel slide-in dengan latar merah gelap.

**Footer**
- Background merah gelap (#8C0D11), teks putih.
- Logo + tagline singkat.
- Navigasi singkat.
- Ikon sosial media.
- "© 2025 BEM UMM — Kabinet Satya Prabaswara"

---

## 6. Design System

### 6.1 Filosofi Desain

Identitas warna UMM — **merah dan putih** ("Jas Merah, Kampus Putih") — diterapkan secara konsisten dan berani. Bukan sekadar aksen, merah adalah *karakter* website ini: header merah, hero merah, footer merah. Putih hadir sebagai ruang napas dan section konten yang bersih. Kontras tinggi antara keduanya membuat navigasi intuitif.

**Elemen Signature:** Hero section dengan latar merah crimson pekat dan pola SVG Matahari Muhammadiyah (12 sinar) berputar sangat lambat (60 detik per putaran) — spesifik pada identitas UMM dan Muhammadiyah, bukan dekorasi generik.

### 6.2 Palet Warna

| Nama Token | Hex | Penggunaan |
|---|---|---|
| `--color-red-primary` | `#C0272D` | Navbar, hero, footer, CTA button, badge |
| `--color-red-dark` | `#8C0D11` | Hero overlay, footer, section gelap |
| `--color-red-hover` | `#A01F24` | Hover state button & link |
| `--color-red-light` | `#F2D5D6` | Background highlight ringan, alert border |
| `--color-red-faint` | `#FFF5F5` | Background section terang tinted |
| `--color-white` | `#FFFFFF` | Teks di atas merah, card surface, navbar text |
| `--color-off-white` | `#FAFAFA` | Body background default |
| `--color-text-dark` | `#1A0808` | Body text di section putih |
| `--color-text-muted` | `#7A6060` | Teks sekunder, metadata tanggal |
| `--color-border` | `#E5D0D0` | Border card dan divider di section terang |

### 6.3 Tipografi

| Peran | Typeface | Berat | Ukuran |
|---|---|---|---|
| Display / Hero | **Plus Jakarta Sans** | 700–800 | 52–68px |
| Judul Section | **Plus Jakarta Sans** | 600 | 30–38px |
| Judul Card | **Plus Jakarta Sans** | 600 | 18–22px |
| Body text | **Inter** | 400 | 16px |
| Caption / Meta | **Inter** | 400 | 13–14px |
| Label / Badge | **Inter** | 500 | 12px |

Font di-load dari Google Fonts dengan `display=swap`.

### 6.4 Animasi & Motion

| Konteks | Jenis Animasi | Durasi |
|---|---|---|
| Hero text masuk | Slide-up + fade-in stagger | 0.6s, stagger 0.15s |
| Elemen scroll masuk viewport | Fade-in + translateY (10px → 0) | 0.5s ease-out |
| Card hover | Scale(1.02) + shadow merah halus | 0.2s ease |
| Pola Matahari hero | CSS rotate infinite | 60s linear |
| Ticker pengumuman | Marquee horizontal infinite | 25s linear |
| Menu mobile | Slide-in dari kanan | 0.3s ease-out |
| Button press | Scale(0.97) | 0.1s |

Semua animasi menghormati `prefers-reduced-motion: reduce`.

### 6.5 Komponen UI Utama

**Button Primary:** Background `--red-primary`, teks putih, `border-radius: 8px`, hover `--red-hover`.

**Button Ghost (di atas merah):** Border putih, teks putih, hover: background putih transparan 20%.

**Card Berita:** `background: white`, border `--border`, `border-radius: 12px`, hover shadow merah ringan `0 4px 20px rgba(192, 39, 45, 0.15)`.

**Badge Kategori:** Background `--red-light`, teks `--red-primary`, `border-radius: 999px`, uppercase 11px.

**Kartu Anggota:** Avatar bulat (foto atau inisial dengan background `--red-primary`), nama bold, jabatan muted.

**Navbar Link Aktif:** Garis bawah putih 2px, atau background `rgba(255,255,255,0.15)`.

---

## 7. Tech Stack

### Stack Utama: Vite + React (SPA)

**Alasan pemilihan Vite + React:**
- Ringan dan cepat: build time < 5 detik, bundle teroptimasi.
- Hot Module Replacement (HMR) instan untuk development.
- React ecosystem lengkap untuk animasi dan interaksi.
- Deploy sebagai static files ke Vercel/Netlify — scalable tanpa server.
- Tidak memerlukan Node.js server runtime di production.

| Layer | Teknologi | Alasan |
|---|---|---|
| Build Tool | **Vite 5** | Ultra-cepat, HMR instan, bundle optimal |
| Framework | **React 18** | Ekosistem lengkap, komponen reusable |
| Bahasa | **JavaScript (ES2022+)** | Cepat dikerjakan tim, tidak perlu konfigurasi TypeScript |
| Routing | **React Router v6** | SPA routing, nested routes |
| Styling | **Tailwind CSS v3** | Utility-first, bundle kecil, konsisten |
| Animasi | **Framer Motion** | Animasi React terbaik, accessible |
| Ikon | **Lucide React** | Ringan, tree-shakeable, konsisten |
| Konten Berita | **JSON files** (`/src/data/articles.json`) | Sederhana, tanpa CMS, mudah diupdate via GitHub |
| Form | **Web3Forms** | Submit form tanpa backend, gratis |
| Font | **Google Fonts** (Plus Jakarta Sans + Inter) | CDN via `@import` atau `<link>` |
| Deployment | **Vercel** (atau GitHub Pages) | Static hosting, CDN global, gratis |

### Struktur Proyek

```
bem-umm-website/
├── public/
│   ├── logo-bem-umm.svg
│   └── favicon.ico
│
├── src/
│   ├── assets/
│   │   └── images/pengurus/      # Foto anggota
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── home/
│   │   │   ├── HeroSection.jsx
│   │   │   ├── AnnouncementTicker.jsx
│   │   │   ├── WelcomeSection.jsx
│   │   │   ├── VisionMission.jsx
│   │   │   └── NewsHighlight.jsx
│   │   ├── news/
│   │   │   ├── NewsCard.jsx
│   │   │   └── CategoryFilter.jsx
│   │   ├── structure/
│   │   │   ├── OrgChart.jsx
│   │   │   └── MemberCard.jsx
│   │   └── ui/
│   │       ├── Button.jsx
│   │       ├── Badge.jsx
│   │       └── SectionHeader.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Berita.jsx
│   │   ├── BeritaDetail.jsx
│   │   ├── Struktur.jsx
│   │   └── Kontak.jsx
│   │
│   ├── data/
│   │   ├── articles.json         # Data berita
│   │   ├── structure.json        # Data kepengurusan
│   │   └── announcements.json    # Ticker pengumuman
│   │
│   ├── hooks/
│   │   └── useScrollAnimation.js # Custom hook animasi scroll
│   │
│   ├── App.jsx                   # Router setup
│   ├── main.jsx                  # Entry point
│   └── index.css                 # Tailwind directives + CSS vars
│
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

### Dependencies Utama

```json
{
  "dependencies": {
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "react-router-dom": "^6.26.0",
    "framer-motion": "^11.0.0",
    "lucide-react": "^0.383.0"
  },
  "devDependencies": {
    "vite": "^5.4.0",
    "@vitejs/plugin-react": "^4.3.0",
    "tailwindcss": "^3.4.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0"
  }
}
```

---

## 8. Sitemap & Arsitektur Informasi

```
BEM UMM Website (SPA)
│
├── / (Beranda)
│   ├── Hero Section — merah + pola Matahari Muhammadiyah
│   ├── Ticker Pengumuman — merah gelap
│   ├── Sambutan Ketua BEM — putih
│   ├── Visi & Misi — merah gelap
│   ├── Highlight Berita — putih/cream
│   ├── Cuplikan Struktur Pimpinan
│   └── CTA Kontak — merah
│
├── /berita (Halaman Berita)
│   ├── Filter Kategori (tab merah)
│   ├── Grid Artikel (card putih, badge merah)
│   └── /berita/:slug (Detail Artikel)
│       ├── Hero gambar full-width
│       ├── Konten artikel
│       ├── Bagikan ke WA/IG
│       └── Berita Terkait
│
├── /struktur (Struktur Kepengurusan)
│   ├── Header merah — nama kabinet
│   ├── Pimpinan (Ketua & Wakil)
│   ├── Bagan Organisasi SVG (node merah)
│   └── Grid Departemen + Anggota (accordion)
│
└── /kontak (Contacts)
    ├── Header merah
    ├── Info Kontak + Sosial Media
    └── Form Pesan (submit via Web3Forms)
```

---

## 9. Non-Functional Requirements

### Performa
- **Lighthouse Performance Score:** ≥ 90 (mobile dan desktop).
- **LCP:** < 2.5 detik.
- **FID:** < 100ms.
- **CLS:** < 0.1.
- Gambar dioptimasi: format WebP, lazy loading dengan `loading="lazy"`.
- Vite otomatis melakukan code splitting dan tree shaking.
- Font preload untuk mencegah FOIT.

### Skalabilitas & Keandalan
- Deploy sebagai static files (HTML/CSS/JS) ke Vercel CDN.
- Tidak ada backend; seluruh konten dari JSON files yang di-bundle.
- Dapat menangani lonjakan pengunjung tanpa downtime (CDN).
- Uptime target: 99.9%.

### Responsivitas
- Mobile-first design.
- Breakpoint: Mobile (< 640px), Tablet (640–1024px), Desktop (> 1024px).
- Touch target minimum: 44×44px.

### Aksesibilitas (WCAG 2.1 AA)
- Semua gambar memiliki `alt` text.
- Heading hierarkis (H1 → H2 → H3).
- Navigasi keyboard fungsional.
- Kontras warna minimum 4.5:1 (putih di atas merah UMM memenuhi syarat).
- `prefers-reduced-motion` dipatuhi oleh semua animasi.

### SEO
- React Router + `react-helmet-async` untuk meta tags per halaman.
- Open Graph tags untuk preview share WhatsApp/Instagram.
- Sitemap manual di `/public/sitemap.xml`.
- URL yang ramah (/berita/judul-artikel-slug).

### Keamanan
- HTTPS otomatis via Vercel.
- Form submit via Web3Forms (tidak ada endpoint langsung).
- Tidak ada data sensitif di source code.

### Kemudahan Pengelolaan Konten
- Berita ditambah dengan mengedit `src/data/articles.json` — dapat dilakukan via GitHub web editor.
- Data kepengurusan di `src/data/structure.json` — update tiap periode kabinet.
- Tidak memerlukan CMS berbayar.

---

## 10. Milestone & Roadmap

### Fase 1 — MVP (Target: 3–4 minggu)
- [ ] Init proyek Vite + React + Tailwind + Framer Motion
- [ ] Setup design tokens CSS (variabel merah-putih UMM)
- [ ] Komponen global: Navbar (merah) + Footer (merah gelap)
- [ ] Halaman Beranda: Hero + Ticker + Sambutan + Visi Misi + Highlight Berita
- [ ] Halaman Kontak fungsional (form Web3Forms)
- [ ] Responsif mobile-first
- [ ] Deploy ke Vercel (domain sementara `bem-umm.vercel.app`)

### Fase 2 — Konten (Target: +2 minggu setelah Fase 1)
- [ ] Halaman Berita + filter kategori
- [ ] Halaman Detail Berita dengan konten dari JSON
- [ ] Halaman Struktur Kepengurusan + bagan SVG interaktif
- [ ] `react-helmet-async` untuk meta tags & SEO
- [ ] Pengisian data awal: minimal 5 berita, struktur kepengurusan lengkap

### Fase 3 — Launch (Target: +2 minggu setelah Fase 2)
- [ ] Lighthouse audit & optimasi (target ≥ 90)
- [ ] Uji lintas browser (Chrome, Firefox, Safari, Samsung Internet)
- [ ] Uji di perangkat mobile nyata (Android & iOS)
- [ ] Koneksi domain resmi
- [ ] Panduan update konten untuk tim non-developer BEM
- [ ] Soft launch & monitoring

---

## 11. Asumsi & Batasan

### Asumsi
- Tim BEM menyediakan: logo BEM UMM (SVG/PNG), foto ketua/wakil, data kepengurusan, teks visi misi, kontak resmi.
- Minimal 1 anggota tim dapat mengedit JSON melalui GitHub.

### Batasan Fase 1
- Tidak ada admin panel — konten dikelola via JSON + GitHub.
- Tidak ada komentar atau forum diskusi.
- Tidak ada integrasi SIAKAD/sistem akademik UMM.
- Karena SPA (bukan SSR), halaman tidak langsung ter-index Google seoptimal SSG — dapat diatasi dengan `sitemap.xml` manual dan pre-rendering opsional di fase 3.

### Di Luar Scope
- Aplikasi mobile native.
- Sistem pendaftaran anggota online.
- Live streaming atau kalender interaktif.

---

## 12. Referensi & Inspirasi

| Referensi | URL | Catatan |
|---|---|---|
| BEM UNMA (referensi utama) | https://bem.unma.ac.id/ | Struktur navigasi, hero, section layout |
| Instagram BEM UMM | https://www.instagram.com/bemumm/ | Konten, tone, identitas kabinet |
| Website UMM resmi | https://umm.ac.id/ | Palet warna merah-putih UMM |
| Lambang UMM | https://www.umm.ac.id/id/pages/arti-lambang.html | Filosofi visual, simbol Matahari Muhammadiyah |

---

*Dokumen ini bersifat living document dan akan diperbarui seiring perkembangan proyek.*