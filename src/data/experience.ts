import type { ExperienceItem } from './types'

// Riwayat pekerjaan — PRD §6 & §8.4. Periode masih placeholder
// (lihat PRD §16 nomor 2) dan bisa dilengkapi tanpa mengubah UI.

export const experience: ExperienceItem[] = [
  {
    company: 'PT Haleyora Powerindo',
    role: 'Senior Engineer Grade 1 — Backend (Spring Boot + PostgreSQL)',
    period: 'Saat ini',
    current: true,
    summary:
      'Fokus pengembangan backend untuk sistem monitoring & inspeksi aset transmisi tenaga listrik.',
    highlights: ['tfa', 'power-inspect'],
  },
  {
    company: 'PT Xirka Dama Persada',
    role: 'Full Stack Developer / Software Engineer (FE, BE & Hardware)',
    period: 'Sebelumnya',
    current: false,
    summary:
      'Mengerjakan proyek end-to-end dari frontend, backend, hingga firmware embedded (ESP32) untuk IoT & medical device.',
    highlights: ['medical', 'smartmeter', 'poopdetector', 'deteksisampah', 'rtd'],
  },
]
