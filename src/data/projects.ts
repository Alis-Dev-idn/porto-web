import type { Project } from './types'

// Konten portofolio rekayasa software & hardware.
// Menampilkan proyek mandiri serta pengalaman profesional di PT. PLN ICON PLUS dan PT. XIRKA DAMA PERSADA.

export const projects: Project[] = [
  // Proyek Mandiri Unggulan
  {
    slug: 'iot-attendance',
    name: 'Sistem Presensi IoT Realtime',
    summary:
      'Solusi presensi cerdas end-to-end yang menghubungkan node ESP32 dengan web dashboard secara realtime via MQTT Broker & WebSocket dengan keamanan unik per-device.',
    description:
      'Sistem presensi terdistribusi yang menghubungkan perangkat fisik ESP32 dengan antarmuka web monitoring secara instan dan aman. Mengimplementasikan protokol MQTT yang dijembatani WebSocket untuk komunikasi data presensi dua arah dengan latensi sub-detik. Dilengkapi tata kelola keamanan ketat di mana setiap node mikrokontroler memiliki kredensial dan token otentikasi unik untuk mencegah spoofing device pada jaringan, serta didukung mekanisme fail-safe caching saat konektivitas terputus.',
    context: 'independent',
    contextLabel: 'Mandiri',
    kind: 'software-hardware',
    status: 'live',
    url: 'https://demo-absensi.alisdev.my.id',
    coverImage: './projects/absensi/dashboard.png',
    gallery: [
      {
        src: './projects/absensi/dashboard.png',
        title: 'Dashboard Monitoring & Telemetri IoT',
        caption:
          'Menampilkan log tap kartu realtime, status perangkat online 4/6, uptime 99.98%, dan kartu metrik grup/pengguna.',
        isFeatured: true,
      },
      {
        src: './projects/absensi/terminal-cli.png',
        title: 'Interactive Virtual Terminal CLI',
        caption:
          'Konsol terminal virtual berbasis MQTT di web untuk diagnosa langsung perangkat hardware ESP32 (status, ip a, wifi scan).',
      },
      {
        src: './projects/absensi/device-detail.png',
        title: 'Detail Node Terminal ESP32 & NFC Pairing',
        caption:
          'Panel inspeksi sinyal Wi-Fi (-58 dBm), uptime perangkat, RAM bebas, serta kontrol registrasi kartu fisik NFC/RFID.',
      },
      {
        src: './projects/absensi/hierarchy.png',
        title: 'Manajemen Hierarki Organisasi',
        caption:
          'Struktur navigasi multi-level (Daerah → Desa → Kelompok → Sub-kelompok).',
      },
      {
        src: './projects/absensi/events.png',
        title: 'Penjadwalan Acara & Presensi Kerja',
        caption:
          'Kalender dan daftar acara presensi terintegrasi beserta status aktif/terjadwal.',
      },
    ],
    stack: [
      'ESP32',
      'PlatformIO / C++',
      'MQTT Broker',
      'WebSocket',
      'Node.js',
      'React',
      'TypeScript',
      'Device Auth / JWT',
    ],
    caseStudy: {
      problem:
        'Sistem presensi konvensional sering memicu antrean akibat latensi pembacaan data, serta rentan terhadap kecurangan fisik atau manipulasi payload pada jaringan lokal bila perangkat IoT menggunakan kredensial bersama (shared credentials).',
      role: 'Fullstack & Embedded IoT Engineer — merancang arsitektur komunikasi broker, firmware C++ pada ESP32, mekanisme otentikasi device terisolasi, serta dashboard monitoring realtime.',
      features: [
        'Komunikasi bi-directional realtime berlatensi rendah antara node ESP32 dan web dashboard via MQTT over WebSocket',
        'Keamanan berbasis isolasi perangkat: setiap modul ESP32 memiliki identitas, secret key, dan otentikasi unik',
        'Konfirmasi status pencatatan kehadiran langsung secara instan pada layar perangkat',
        'Mekanisme fail-safe queue: penyimpanan lokal sementara di flash memory saat offline dan sinkronisasi otomatis saat online kembali',
        'Dashboard administrasi realtime untuk visualisasi riwayat kehadiran dan telemetri koneksi setiap node perangkat',
      ],
      challenge:
        'Mengelola persistensi koneksi socket pada firmware mikrokontroler dengan memori terbatas agar terhindar dari buffer overflow atau memory leak saat jaringan terputus-sambung.',
      impact:
        'Membuktikan kompetensi integrasi menyeluruh dari layer hardware fisik hingga web dashboard modern dalam arsitektur realtime yang aman, tangguh, dan dapat diandalkan.',
    },
  },
  {
    slug: 'monage',
    name: 'Monage',
    summary:
      'Aplikasi manajemen finansial pribadi multi-platform dengan pendekatan arsitektur offline-first dan sinkronisasi cerdas.',
    description:
      'Aplikasi manajemen keuangan pribadi yang dirancang untuk mempermudah pencatatan transaksi, pengelolaan pos anggaran, tabungan terencana, serta analisis arus kas bulanan. Mengusung arsitektur offline-first yang andal digunakan di kondisi minim sinyal dan tersinkronisasi otomatis saat terhubung kembali ke internet. Dibangun untuk platform web serta paket aplikasi Android.',
    context: 'independent',
    contextLabel: 'Mandiri',
    kind: 'software',
    status: 'live',
    url: 'https://demo-monage.alisdev.my.id',
    coverImage: './projects/monage/dashboard.png',
    gallery: [
      {
        src: './projects/monage/dashboard.png',
        title: 'Dashboard Ringkasan Finansial & Cashflow',
        caption:
          'Ringkasan saldo, mutasi masuk/keluar bulan berjalan, dan grafik tren arus kas harian.',
        isFeatured: true,
      },
      {
        src: './projects/monage/transactions.png',
        title: 'Riwayat Mutasi & Filter Transaksi',
        caption:
          'Daftar transaksi terperinci dengan filter kategori dan akun perbankan/e-wallet.',
      },
      {
        src: './projects/monage/wallets.png',
        title: 'Analisis Saldo Rekening & Grafik Akun',
        caption:
          'Grafik fluktuasi saldo rekening perbankan (BCA Utama) dari waktu ke waktu.',
      },
      {
        src: './projects/monage/budgeting.png',
        title: 'Budgeting & Monitoring Batas Anggaran',
        caption:
          'Penetapan dan pemantauan batas pengeluaran bulanan per pos anggaran kategori belanja.',
      },
      {
        src: './projects/monage/entities.png',
        title: 'Pemisahan Multi-Entitas Pembukuan',
        caption:
          'Fitur pembukuan terisolasi untuk keuangan Pribadi, Bisnis (POS/Kasir), maupun Keluarga.',
      },
      {
        src: './projects/monage/meal-planner.png',
        title: 'Perencanaan Belanja Bulanan & Meal Plan',
        caption:
          'Modul perencanaan anggaran harian, daftar belanja mingguan, dan kalkulasi estimasi pengeluaran.',
      },
    ],
    stack: [
      'React',
      'TypeScript',
      'Vite',
      'Node.js',
      'React Native',
      'Dexie.js',
      'Firebase FCM',
      'Google OAuth',
      'Resend',
    ],
    caseStudy: {
      problem:
        'Kebutuhan aplikasi pencatatan finansial harian yang responsif tanpa jeda loading server, mampu beroperasi penuh tanpa koneksi internet (offline-first), namun tetap dapat menyinkronkan data antar-perangkat secara aman saat online.',
      role: 'Fullstack Architect & Developer — memimpin perancangan antarmuka pengguna, optimasi database lokal IndexedDB, API backend, hingga otomatisasi pipeline build mobile.',
      features: [
        'Pencatatan transaksi pemasukan, pengeluaran, dan transfer rekening secara instan',
        'Alokasi anggaran belanja fleksibel dan visualisasi laporan cash flow bulanan',
        'Penyimpanan lokal tangguh berbasis Dexie.js / IndexedDB (offline-first)',
        'Notifikasi pengingat pencatatan rutin via Firebase Cloud Messaging',
        'Autentikasi terpercaya menggunakan Google OAuth 2.0 dan notifikasi email via Resend',
        'Automasi CI/CD GitHub Actions untuk kompilasi berkas paket Android (APK/AAB)',
      ],
      challenge:
        'Menangani sinkronisasi dan resolusi konflik data (conflict resolution) ketika pengguna melakukan perubahan transaksi saat offline dari beberapa perangkat berbeda.',
      impact:
        'Membuktikan kapabilitas perancangan produk perangkat lunak secara holistik — mulai dari riset pengalaman pengguna, arsitektur offline-first, hingga distribusi aplikasi ke ranah mobile.',
    },
  },

  // PT. PLN ICON PLUS
  {
    slug: 'tfa',
    name: 'TFA — Transmission Fault Analysis',
    summary:
      'Sistem pemantauan dan analisis gangguan transien sistem transmisi tenaga listrik berstandar industri secara realtime.',
    description:
      'Platform analitik realtime untuk mendeteksi dan mengkaji gangguan (fault) pada jaringan transmisi tenaga listrik tegangan tinggi. Sistem mengolah data osilograf transien format standar industri (COMTRADE) yang dihasilkan oleh relai proteksi gardu induk agar dapat divisualisasikan secara intuitif oleh tim dispatcher dan engineer proteksi.',
    context: 'haleyora',
    contextLabel: 'PT. PLN ICON PLUS',
    kind: 'software',
    status: 'internal',
    stack: ['Spring Boot', 'PostgreSQL', 'COMTRADE Parser', 'REST API'],
    caseStudy: {
      problem:
        'Format rekaman gangguan proteksi (COMTRADE) bersifat biner mentah dan sangat kompleks, menyulitkan tim pemeliharaan dalam mempercepat identifikasi lokasi dan penyebab gangguan kabel transmisi.',
      role: 'Backend Engineer — membangun backend microservices dengan Spring Boot untuk parsing data COMTRADE biner ke format visual dan merancang API query berkecepatan tinggi.',
      features: [
        'Data master relai transmisi dan konfigurasi gardu induk terpusat',
        'Engine konversi otomatis berkas COMTRADE (gelombang tegangan & arus saat gangguan) ke data numerik terstruktur',
        'API pemrosesan event gangguan berlatensi rendah untuk konsumsi visualisasi frontend',
      ],
      challenge:
        'Mengoptimasi waktu dekompresi dan parsing berkas biner COMTRADE berukuran besar agar grafik gelombang dapat dirender dalam hitungan milidetik.',
      impact:
        'Menunjukkan keahlian mendalam pada domain spesifik industri energi kelistrikan — kompetensi teknis bernilai tinggi yang menuntut pemahaman mendalam tentang data engineering dan sistem tenaga.',
    },
  },
  {
    slug: 'power-inspect',
    name: 'Power Inspect — Inspeksi Transmisi',
    summary:
      'Platform manajemen inspeksi dan pemeliharaan aset transmisi listrik terintegrasi multi-platform (Web, Mobile, SAP, & SSO).',
    description:
      'Sistem informasi enterprise yang mengelola siklus inspeksi rutin dan pemeliharaan aset transmisi tenaga listrik milik PLN Icon Plus. Bertindak sebagai hub integrasi data sentral bagi aplikasi lapangan mobile, portal monitoring web, serta sistem korporat seperti SAP dan Single Sign-On (SSO).',
    context: 'haleyora',
    contextLabel: 'PT. PLN ICON PLUS',
    kind: 'software',
    status: 'internal',
    stack: ['Spring Boot', 'PostgreSQL', 'SAP Integration', 'Corporate SSO', 'REST API'],
    caseStudy: {
      problem:
        'Proses pendataan inspeksi fisik menara dan kabel transmisi di lapangan sebelumnya tersebar di berbagai kanal non-terstandar, memperlambat pembaruan stok suku cadang darurat dan estimasi risiko kerusakan.',
      role: 'Backend API Engineer — merancang arsitektur API modul ERS (Emergency Response Spare) serta menyambungkan integrasi backend dengan sistem inti enterprise.',
      features: [
        'Manajemen modul ERS: master komponen, alokasi suku cadang, mutasi aset, dan stok opname berkala',
        'Sinkronisasi dua arah dengan sistem inventory enterprise (SAP)',
        'Autentikasi terpusat karyawan berbasis Corporate SSO',
        'Pencatatan riwayat kerusakan tower dan rekomendasi tindakan mitigasi',
      ],
      challenge:
        'Menjamin konsistensi data transaksi stok opname di tengah tingginya beban permintaan concurrent dari teknisi lapangan secara bersamaan.',
      impact:
        'Menunjukkan pengalaman solid dalam menangani rekayasa sistem enterprise berskala nasional dengan integrasi multi-layanan yang ketat terhadap auditabilitas data.',
    },
  },

  // PT. XIRKA DAMA PERSADA
  {
    slug: 'medical',
    name: 'Medical — Syringe & Infusion Pump Monitoring',
    summary:
      'Sistem telemetri medis wireless untuk monitoring dan kontrol jarak jauh alat pompa infus & suntik berbasis mikrokontroler.',
    description:
      'Sistem telemetri dan kendali nirkabel untuk alat medis kritis (syringe pump dan infusion pump) di ruang rawat rumah sakit. Memungkinkan staf medis memantau laju aliran obat, volume tersisa, status baterai, serta melakukan start/stop alat dari portal monitoring secara realtime dengan standar keandalan tinggi.',
    context: 'xirka',
    contextLabel: 'PT. XIRKA DAMA PERSADA',
    kind: 'software-hardware',
    status: 'internal',
    stack: [
      'React',
      'TypeScript',
      'Node.js',
      'Express',
      'MongoDB',
      'ESP32',
      'PlatformIO / C++',
      'Hardware HMI (LCD)',
    ],
    caseStudy: {
      problem:
        'Perawat memerlukan mobilitas tinggi dan perlu memantau puluhan pompa infus pasien secara terus-menerus tanpa harus selalu berada di samping ranjang pasien.',
      role: 'Fullstack & Embedded Engineer — merancang frontend web monitoring, backend service, serta mengembangkan firmware ESP32, HMI layar LCD, dan kendali aktuator pompa.',
      features: [
        'Pemantauan status laju aliran cairan dan estimasi waktu habis secara realtime',
        'Kontrol perintah jarak jauh (start/stop/pause) dengan sistem konfirmasi ganda',
        'Antarmuka fisik HMI berbasis LCD dan tombol kontrol langsung di unit alat',
        'Sistem peringatan dini (alarm audio-visual) saat terjadi sumbatan (occlusion) atau baterai lemah',
      ],
      challenge:
        'Memastikan latensi komunikasi nirkabel seminimal mungkin dan menjamin mekanisme fail-safe: jika koneksi jaringan putus, aktuator alat harus tetap menjalankan prosedur infus lokal secara aman.',
      impact:
        'Salah satu proyek paling komprehensif — mencakup sinergi penuh antara software web modern, backend realtime, dan rekayasa firmware mikrokontroler di ranah medis yang menuntut akurasi mutlak.',
    },
  },
  {
    slug: 'smartmeter',
    name: 'SmartMeter Panel Surya',
    summary:
      'Platform monitoring telemetri arus dan kalkulasi hasil panen energi listrik panel surya berbasis IoT terintegrasi.',
    description:
      'Sistem monitoring cerdas yang melacak persebaran modul panel surya terpasang di lapangan. Mengukur parameter arus dan tegangan secara periodik, mengonversinya menjadi besaran daya (kWh), serta mengalkulasi nilai ekonomis rupiah dan proyeksi keuntungan dari listrik yang disalurkan ke jaringan listrik.',
    context: 'xirka',
    contextLabel: 'PT. XIRKA DAMA PERSADA',
    kind: 'software-hardware',
    status: 'internal',
    stack: [
      'React',
      'TypeScript',
      'Vite',
      'Node.js',
      'Express',
      'MongoDB',
      'ESP32',
      'IoT Sensor',
    ],
    caseStudy: {
      problem:
        'Pengguna sistem pembangkit listrik tenaga surya membutuhkan visualisasi transparan mengenai performa panel dan return of investment (ROI) energi secara periodik.',
      role: 'Fullstack Developer & Hardware Debugger — mengembangkan portal dashboard interaktif dan menyelesaikan optimasi pembacaan sensor pada modul ESP32.',
      features: [
        'Pengukuran arus, tegangan, dan kalkulasi energi kumulatif secara realtime',
        'Konversi otomatis daya listrik ke ekuivalen nilai rupiah dan estimasi profit',
        'Peta persebaran geospasial unit device terpasang beserta status operasionalnya',
      ],
      impact:
        'Memberikan kemudahan transparansi data bagi pemilik instalasi panel surya untuk memantau kesehatan operasional dan nilai ekonomis energi secara akurat.',
    },
  },
  {
    slug: 'poopdetector',
    name: 'PoopDetector — Edge AI Vision',
    summary:
      'Perangkat cerdas deteksi kejadian biologis pada kloset medis dengan pemrosesan visi komputer langsung di mikrokontroler ESP32.',
    description:
      'Perangkat medis cerdas untuk mendeteksi kejadian buang air besar pada pasien rawat inap. Menggunakan modul kamera terpasang di kloset yang memproses algoritma deteksi visual langsung di tingkat mikrokontroler (edge processing), lalu mengirimkan notifikasi instan ke gawai tim medis tanpa memerlukan server backend eksternal.',
    context: 'xirka',
    contextLabel: 'PT. XIRKA DAMA PERSADA',
    kind: 'hardware',
    status: 'internal',
    stack: ['ESP32', 'PlatformIO / C++', 'Camera Module', 'Edge Vision', 'Embedded Web'],
    caseStudy: {
      problem:
        'Pencatatan rutinitas eliminasi pasien pasca operasi atau lansia membutuhkan privasi tinggi namun tetap membutuhkan ketepatan waktu pelaporan ke tim perawat.',
      role: 'Embedded Systems Developer — membangun seluruh arsitektur pemrosesan citra on-device, web server lokal, serta transmisi sinyal data ke aplikasi mobile.',
      features: [
        'Deteksi citra kejadian secara mandiri di mikroprosesor ESP32 (edge computing)',
        'Server web mandiri yang di-host langsung dari modul memori ESP32',
        'Penjagaan privasi maksimal tanpa penyimpanan data foto ke server cloud eksternal',
        'Pengiriman sinyal notifikasi instan ke aplikasi Android tenaga perawat',
      ],
      challenge:
        'Mengakali keterbatasan memori RAM dan komputasi prosesor mikrokontroler agar mampu mengeksekusi algoritma pemrosesan citra tanpa degradasi performa.',
      impact:
        'Membuktikan kompetensi komputasi tingkat edge (Edge AI / Vision) murni di tingkat hardware dengan keterbatasan sumber daya komputasi.',
    },
  },
  {
    slug: 'deteksisampah',
    name: 'DeteksiSampah — AI Mapping',
    summary:
      'Sistem orkestrasi deteksi jenis sampah berbasis citra kecerdasan buatan dengan pemetaan otomatis area titik penumpukan.',
    description:
      'Platform pemilahan sampah digital yang memanfaatkan model AI berbasis citra kiriman warga. Sistem membedah komposisi sampah, menyajikan rekapitulasi data lingkungan, serta memetakan secara otomatis area dengan volume sampah tertinggi berdasarkan ekstraksi metadata lokasi pada foto.',
    context: 'xirka',
    contextLabel: 'PT. XIRKA DAMA PERSADA',
    kind: 'software',
    status: 'internal',
    stack: [
      'React',
      'TypeScript',
      'Node.js',
      'Express',
      'Python AI Service',
      'MongoDB',
    ],
    caseStudy: {
      problem:
        'Dinas kebersihan kota menghadapi kesulitan mengidentifikasi titik penumpukan sampah liar secara cepat dan mengklasifikasikan jenis sampah untuk kebutuhan daur ulang.',
      role: 'Fullstack Architect — membangun REST API, dashboard antarmuka web, serta orkestrasi komunikasi service backend ke model inferensi AI Python.',
      features: [
        'Antarmuka unggah foto responsif dengan pra-pemrosesan metadata gambar',
        'Integrasi inferensi deteksi jenis sampah ke backend machine learning (Python)',
        'Dashboard statistik volume sampah dan rekomendasi rute penjemputan dinas',
        'Visualisasi pemetaan titik tumpukan sampah berbasis data koordinat geografis',
      ],
      impact:
        'Menunjukkan kemampuan mengorkestrasikan arsitektur multi-bahasa (TypeScript + Python) dalam satu solusi teknologi terpadu untuk efisiensi operasional tata kota.',
    },
  },
  {
    slug: 'rtd',
    name: 'RTD — IED Connection Manager',
    summary:
      'Aplikasi manajemen koneksi perangkat elektronik cerdas (IED), mapping atribut, dan pemantauan riwayat telemetri event.',
    description:
      'Aplikasi antarmuka pemantauan dan pengelolaan koneksi Intelligent Electronic Device (IED) pada gardu listrik. Mengatur pemetaan atribut sinyal data, menginspeksi status konektivitas perangkat, serta menyajikan audit log riwayat event operasional dari ekosistem server backend dan database terdistribusi.',
    context: 'xirka',
    contextLabel: 'PT. XIRKA DAMA PERSADA',
    kind: 'software',
    status: 'internal',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'IED Protocol API'],
    caseStudy: {
      problem:
        'Banyaknya variasi protokol perangkat IED di instalasi gardu menuntut platform antarmuka yang bersih, cepat, dan presisi dalam memetakan ratusan parameter sinyal tanpa kesalahan entri.',
      role: 'Frontend Engineer — bertanggung jawab atas rancang bangun antarmuka pengguna interaktif, pengelolaan state tabel kompleks, dan integrasi API server IED.',
      features: [
        'Manajemen koneksi sesi aktif multi-device IED',
        'Antarmuka pemetaan atribut telemetri dan konfigurasi parameter',
        'Tabel riwayat event berkapasitas besar dengan fitur filter dan pencarian instan',
      ],
      impact:
        'Memperlihatkan ketelitian dalam mengimplementasikan antarmuka profesional yang stabil untuk kebutuhan monitoring instrumen kelistrikan presisi tinggi.',
    },
  },

  // Proyek Mandiri (Rencana Pengembangan)
  {
    slug: 'monitoring-app',
    name: 'Multi-Module Power Monitor',
    summary:
      'Rancang bangun sistem telemetri terpadu untuk pengukuran tegangan AC/DC dan efisiensi daya input/output berbasis IoT.',
    description:
      'Inisiatif rekayasa mandiri sistem pemantau parameter kelistrikan modular. Fase pertama memfokuskan pada modul sensor tegangan AC/DC dan efisiensi daya masukan/keluaran pada catu daya, yang akan terhubung dengan platform pemantauan awan secara komprehensif.',
    context: 'independent',
    contextLabel: 'Mandiri',
    kind: 'software-hardware',
    status: 'coming-soon',
    stack: ['ESP32', 'Sensors (AC/DC)', 'React', 'TypeScript', 'IoT Cloud'],
    caseStudy: {
      role: 'Hardware & Software Designer — tahap riset skematik rangkaian dan perencanaan spesifikasi teknis.',
    },
  },
]
