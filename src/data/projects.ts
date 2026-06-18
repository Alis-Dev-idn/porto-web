import type { Project } from './types'

// Konten portfolio (9 entri) — PRD §9.
// Urutan: Monage (live) → Haleyora → Xirka → Monitoring App (coming soon),
// sesuai rekomendasi PRD §8.5.

export const projects: Project[] = [
  {
    slug: 'monage',
    name: 'Monage',
    summary:
      'Aplikasi manajemen keuangan pribadi yang sudah live & dipakai pengguna nyata.',
    description:
      'Aplikasi manajemen keuangan pribadi — catat pemasukan, pengeluaran, transfer, anggaran, tabungan, laporan, dan perencanaan bulanan. Tersedia sebagai web (live) dan Android (distribusi manual via Google Drive, belum dirilis di Play Store).',
    context: 'independent',
    contextLabel: 'Mandiri',
    kind: 'software',
    status: 'live',
    stack: [
      'Vite',
      'React',
      'TypeScript',
      'Node.js',
      'React Native',
      'Dexie.js',
      'Firebase FCM',
      'Google OAuth',
      'Resend',
    ],
    url: 'https://monage.my.id',
    caseStudy: {
      problem:
        'Membangun produk manajemen keuangan pribadi yang berjalan offline-first sekaligus tersinkron, dan dapat didistribusikan sebagai web maupun aplikasi Android.',
      role: 'Fullstack — arsitektur, frontend, backend, aplikasi Android, hingga deployment & distribusi.',
      features: [
        'Catatan pemasukan, pengeluaran, dan transfer',
        'Anggaran, tabungan, laporan, dan perencanaan bulanan',
        'Mode offline dengan Dexie.js / IndexedDB',
        'Push notification via Firebase FCM',
        'Login Google OAuth 2.0 & email via Resend',
        'CI/CD GitHub Actions untuk build APK/AAB',
      ],
      impact:
        'Satu-satunya proyek yang bisa didemokan langsung secara publik — bukti kemampuan end-to-end dari arsitektur sampai distribusi produk nyata yang dipakai pengguna.',
    },
  },

  // PT Haleyora Powerindo (saat ini)
  {
    slug: 'tfa',
    name: 'TFA — Transmission Fault Analysis',
    summary:
      'Real-time monitoring & analisis gangguan pada sistem transmisi tenaga listrik.',
    description:
      'Sistem real-time monitoring dan analisis gangguan (fault) pada sistem transmisi tenaga listrik.',
    context: 'haleyora',
    contextLabel: 'Haleyora Powerindo',
    kind: 'software',
    status: 'internal',
    stack: ['Spring Boot', 'PostgreSQL', 'COMTRADE'],
    caseStudy: {
      role: 'Backend.',
      features: [
        'Data master',
        'Konversi data format COMTRADE (standar industri untuk data gangguan/transien pada sistem transmisi) agar bisa dibaca & ditampilkan di frontend',
      ],
      impact:
        'Menunjukkan kemampuan menangani data domain-specific yang kompleks (COMTRADE) — niche skill yang jarang dimiliki web developer pada umumnya.',
    },
  },
  {
    slug: 'power-inspect',
    name: 'Power Inspect — Inspeksi Transmisi',
    summary:
      'Platform manajemen inspeksi & pemeliharaan aset transmisi PLN Icon Plus dengan integrasi multi-platform.',
    description:
      'Platform manajemen inspeksi dan pemeliharaan aset transmisi tenaga listrik milik PLN Icon Plus. Berfungsi sebagai pusat integrasi data bagi aplikasi web, aplikasi mobile, serta sistem pendukung (SAP, SSO, dll).',
    context: 'haleyora',
    contextLabel: 'Haleyora Powerindo',
    kind: 'software',
    status: 'internal',
    stack: ['Spring Boot', 'PostgreSQL', 'SAP', 'SSO'],
    caseStudy: {
      role: 'Backend (API).',
      features: [
        'API modul ERS (Emergency Response Spare): master komponen, perencanaan, mutasi, stok opname, pengembalian, dan monitoring gudang',
      ],
      impact:
        'Menunjukkan pengalaman bekerja di sistem enterprise besar dengan integrasi multi-platform (web, mobile, SAP, SSO).',
    },
  },

  // PT Xirka Dama Persada (sebelumnya)
  {
    slug: 'medical',
    name: 'Medical — Syringe & Infusion Pump Monitoring',
    summary:
      'Sistem wireless untuk monitoring & kontrol jarak jauh alat medis — flagship FE + BE + hardware.',
    description:
      'Sistem koneksi wireless untuk alat medis (syringe pump & infusion pump, sudah berjalan) — web dapat melakukan monitoring serta start/stop alat secara jarak jauh.',
    context: 'xirka',
    contextLabel: 'Xirka Dama Persada',
    kind: 'software-hardware',
    status: 'internal',
    stack: [
      'Vite',
      'React',
      'TypeScript',
      'Node.js',
      'Express',
      'MongoDB',
      'ESP32',
      'PlatformIO/C++',
    ],
    caseStudy: {
      role: 'Fullstack — FE, BE, dan hardware (HMI berbasis LCD + ESP32, termasuk seluruh fungsi di luar kalkulasi beserta kontrol aktuator).',
      features: [
        'Monitoring alat medis secara real-time',
        'Start/stop alat dari web secara jarak jauh',
        'HMI berbasis LCD + ESP32',
        'Kontrol aktuator',
      ],
      impact:
        'Proyek paling lengkap — satu-satunya yang mencakup FE, BE, DAN hardware/HMI sekaligus di domain medis yang menuntut reliability tinggi.',
    },
  },
  {
    slug: 'smartmeter',
    name: 'SmartMeter',
    summary:
      'Monitoring & visualisasi persebaran device serta hasil panen energi panel surya dalam kWh & rupiah.',
    description:
      'Monitoring serta visualisasi persebaran device yang terpasang. Data yang dimonitor: arus listrik dan hasil panen energi dari panel surya, dikonversi ke kWh, dihitung sebagai nilai rupiah dan estimasi keuntungan (karena saat itu listrik hasil panel surya bisa dijual ke PLN).',
    context: 'xirka',
    contextLabel: 'Xirka Dama Persada',
    kind: 'software-hardware',
    status: 'internal',
    stack: [
      'Vite',
      'React',
      'TypeScript',
      'Node.js',
      'Express',
      'MongoDB',
      'ESP32',
    ],
    caseStudy: {
      role: 'Fullstack + bug fixing pada hardware ESP32.',
      features: [
        'Monitoring arus listrik & hasil panen energi panel surya',
        'Konversi ke kWh, nilai rupiah, dan estimasi keuntungan',
        'Visualisasi persebaran device terpasang',
      ],
    },
  },
  {
    slug: 'poopdetector',
    name: 'PoopDetector',
    summary:
      'Deteksi feses jatuh ke kloset untuk kebutuhan medis — semua logic & web berjalan di ESP32 (edge).',
    description:
      'Device untuk mendeteksi BAB (feses) yang jatuh ke kloset, untuk kebutuhan medis. Device ditempatkan di kloset, mendeteksi setiap kejadian menggunakan kamera, dan hasilnya dikirim langsung ke device Android.',
    context: 'xirka',
    contextLabel: 'Xirka Dama Persada',
    kind: 'hardware',
    status: 'internal',
    stack: ['ESP32', 'PlatformIO/C++', 'Kamera', 'Edge processing'],
    caseStudy: {
      role: 'Full — logic hingga web, semuanya di dalam ESP32 (edge / on-device).',
      features: [
        'Deteksi kejadian poop jatuh menggunakan kamera',
        'Pemrosesan on-device tanpa backend eksternal',
        'Web server berjalan langsung di ESP32',
        'Hasil dikirim ke device Android',
      ],
      impact:
        'Menunjukkan kemampuan edge AI/computer vision murni di hardware dengan resource terbatas — semua logic berjalan langsung di ESP32 tanpa backend eksternal.',
    },
  },
  {
    slug: 'deteksisampah',
    name: 'DeteksiSampah',
    summary:
      'Deteksi sampah berbasis gambar dengan model AI, summary, dan pemetaan otomatis daerah terpadat.',
    description:
      'Sistem deteksi sampah berbasis gambar yang diupload pengguna, diproses oleh model AI (Python), hasil disimpan ke database dan ditampilkan sebagai summary, termasuk pemetaan otomatis daerah dengan jumlah sampah terbanyak (berdasarkan metadata gambar).',
    context: 'xirka',
    contextLabel: 'Xirka Dama Persada',
    kind: 'software',
    status: 'internal',
    stack: [
      'Vite',
      'React',
      'TypeScript',
      'Node.js',
      'Express',
      'Python (AI)',
      'MongoDB',
    ],
    caseStudy: {
      role: 'Fullstack — REST API, FE, dan setup keseluruhan sistem (integrasi AI dikerjakan tim lain).',
      features: [
        'Upload & deteksi sampah berbasis gambar',
        'Orkestrasi pemrosesan model AI (Python)',
        'Summary hasil deteksi',
        'Pemetaan otomatis daerah dengan sampah terbanyak via metadata gambar',
      ],
    },
  },
  {
    slug: 'rtd',
    name: 'RTD',
    summary:
      'Manajemen koneksi IED, mapping attribute, dan monitoring history event.',
    description:
      'Aplikasi manajemen IED (Intelligent Electronic Device) Connection, mapping attribute, dan monitoring history event dari attribute yang telah diatur. Data attribute disimpan di database server IED dan diakses lewat API server IED — menjalankan aplikasi ini memerlukan ekosistem server lengkap (backend server, IED server, database).',
    context: 'xirka',
    contextLabel: 'Xirka Dama Persada',
    kind: 'software',
    status: 'internal',
    stack: ['Vite', 'React', 'TypeScript', 'API server IED'],
    caseStudy: {
      role: 'Frontend only (dalam tim FE).',
      features: [
        'Manajemen IED Connection',
        'Mapping attribute',
        'Monitoring history event dari attribute',
      ],
    },
  },

  // Coming soon (mandiri)
  {
    slug: 'monitoring-app',
    name: 'Monitoring App (AC/DC Voltage & Power)',
    summary:
      'Aplikasi monitoring multi-modul; modul pertama untuk tegangan AC/DC & daya input/output.',
    description:
      'Aplikasi monitoring dengan berbagai modul; modul pertama untuk tegangan AC/DC dan daya input/output, modul lainnya menyusul. Saat ini masih dalam tahap PRD/perencanaan.',
    context: 'independent',
    contextLabel: 'Mandiri',
    kind: 'software-hardware',
    status: 'coming-soon',
    stack: ['TBD'],
    caseStudy: {
      role: 'TBD — masih tahap PRD/perencanaan.',
    },
  },
]
