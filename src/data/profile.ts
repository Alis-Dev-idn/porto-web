import type { ContactLink, SkillGroup } from './types'

// Profil profesional Ibnu Ali Badar
// Merepresentasikan multi-disciplinary engineering: Fullstack Software Development + Embedded Systems / Hardware IoT.

export const profile = {
  name: 'Ibnu Ali Badar',
  alias: 'Badar / Ali',
  role: 'Full Stack Developer & IoT Engineer',
  level: 'Senior Engineer Grade 1',
  tagline:
    'Menjembatani keanggunan web modern, keandalan arsitektur backend enterprise, dan ketelitian sistem embedded IoT.',
  bio: `Saya adalah seorang Software Engineer & IoT Developer yang berfokus membangun solusi digital terintegrasi dari hulu ke hilir. Berpengalaman menangani arsitektur frontend modern (React, TypeScript), layanan backend performa tinggi (Spring Boot, Node.js), hingga perancangan firmware mikroprosesor (ESP32, C++). Portofolio saya mencakup platform analisis gangguan transmisi tenaga listrik standar industri (COMTRADE), sistem manajemen inspeksi aset skala besar di lingkungan PLN, integrasi pipeline machine learning, hingga perancangan perangkat keras mandiri untuk alat medis kritis dan sistem presensi IoT realtime. Saya memadukan ketelitian rekayasa sistem dengan kepekaan desain antarmuka guna menghadirkan teknologi yang tangguh, aman, dan intuitif.`,
  stats: [
    { value: '10+', label: 'Proyek Selesai' },
    { value: '2', label: 'Perusahaan Rekayasa' },
    { value: 'End-to-End', label: 'Arsitektur Fullstack & IoT' },
    { value: 'HW + SW', label: 'Integrasi Multi-Disiplin' },
  ],
} as const

export const skills: SkillGroup[] = [
  {
    category: 'Frontend Development',
    items: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'State Management'],
  },
  {
    category: 'Backend Architecture',
    items: ['Spring Boot (Java)', 'Node.js', 'Express.js', 'RESTful API', 'WebSocket'],
  },
  {
    category: 'Database & Caching',
    items: ['PostgreSQL', 'MongoDB', 'IndexedDB / Dexie.js'],
  },
  {
    category: 'Embedded Systems & IoT',
    items: [
      'ESP32',
      'PlatformIO / C++',
      'MQTT & WebSocket Bridge',
      'Device Security & Auth',
      'HMI & LCD Display',
      'Edge AI Processing',
    ],
  },
  {
    category: 'AI Pipeline & Industrial Data',
    items: ['COMTRADE Parsing', 'Python AI Pipeline', 'Computer Vision Detection'],
  },
  {
    category: 'DevOps, Cloud & Tooling',
    items: [
      'GitHub Actions (CI/CD)',
      'Nginx',
      'Firebase Cloud Messaging',
      'OAuth 2.0 & JWT',
    ],
  },
]

export const contacts: ContactLink[] = [
  {
    label: 'Email',
    value: 'ibnu.ali56@gmail.com',
    href: 'mailto:ibnu.ali56@gmail.com',
    icon: 'mail',
  },
  {
    label: 'WhatsApp',
    value: 'Chat via WhatsApp',
    href: 'https://wa.me/+6285157853354',
    icon: 'whatsapp',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/ibnualibadar',
    href: 'https://www.linkedin.com/in/ibnualibadar',
    icon: 'linkedin',
  },
  {
    label: 'GitHub',
    value: 'github.com/Alis-Dev-idn',
    href: 'https://github.com/Alis-Dev-idn',
    icon: 'github',
  },
]
