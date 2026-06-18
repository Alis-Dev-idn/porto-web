# porto-web — Portfolio Ibnu Ali Badar

Website profile & portofolio pribadi **Ibnu Ali Badar** — Full Stack Developer &
Software Engineer (web + hardware/embedded). Dibangun sebagai single-page
aplikasi React dengan konten yang dipisahkan dari UI agar mudah di-maintain.

Brief lengkap ada di [`docs/prd-portfolio-ibnu-ali-badar.md`](docs/prd-portfolio-ibnu-ali-badar.md).
Riwayat perubahan: [`docs/CHANGELOG.md`](docs/CHANGELOG.md). Peta proyek:
[`docs/ROUTE-MAP.md`](docs/ROUTE-MAP.md).

## Tech Stack

- **React 19** + **TypeScript 6**
- **Vite 8** (dev server & build)
- CSS murni dengan design tokens (dark/light via `[data-theme]`)
- ESLint + typescript-eslint

Tanpa dependency UI/routing tambahan — modal case study & navigasi anchor cukup
untuk MVP (lihat PRD §7 & §10.2).

## Menjalankan Secara Lokal

```bash
npm install      # instal dependency
npm run dev      # development server (http://localhost:5173)
npm run build    # type-check + build production ke dist/
npm run preview  # preview hasil build
npm run lint     # eslint
```

## Struktur Folder

```
porto-web/
├─ docs/                     # PRD, changelog, route map
├─ public/                   # aset statis (favicon)
├─ src/
│  ├─ data/                  # ← KONTEN PORTFOLIO (edit di sini)
│  │  ├─ types.ts            # tipe domain
│  │  ├─ profile.ts          # identitas, bio, skills, kontak
│  │  ├─ experience.ts       # riwayat kerja (timeline)
│  │  └─ projects.ts         # daftar 9 proyek + case study
│  ├─ components/            # komponen UI per section
│  ├─ hooks/useTheme.ts      # dark/light mode
│  ├─ lib/badges.ts          # label badge tipe & status proyek
│  ├─ App.tsx                # komposisi section
│  ├─ App.css                # layout & komponen
│  └─ index.css              # design tokens & base
└─ .github/workflows/deploy.yml  # CI/CD FTPS
```

> **Menambah / mengubah proyek:** cukup edit `src/data/projects.ts` — tidak perlu
> menyentuh komponen UI. Begitu juga skills (`profile.ts`) dan experience
> (`experience.ts`).

## Deployment

Setiap **push ke `main`** otomatis memicu GitHub Actions
([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)): `npm ci` →
`lint` → `build` → deploy isi `dist/` via **FTPS** ke folder `/fe/` di server.
Bisa juga dijalankan manual lewat **workflow_dispatch**.

### GitHub Secrets yang dibutuhkan

Set di repo (Settings → Secrets and variables → Actions) sebelum workflow jalan.
**Jangan pernah hardcode nilainya di file workflow.**

| Secret         | Keterangan                          |
| -------------- | ----------------------------------- |
| `FTP_SERVER`   | Host server FTP/FTPS                 |
| `FTP_PORT`     | Port custom FTPS (bukan 21 default)  |
| `FTP_USERNAME` | Username FTP                         |
| `FTP_PASSWORD` | Password FTP                        |

## Lisensi / Kontak

© Ibnu Ali Badar — ibnu.ali56@gmail.com
