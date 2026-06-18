import type { ContactLink, SkillGroup } from './types'

// Identitas & ringkasan profesional — PRD §5.

export const profile = {
  name: 'Ibnu Ali Badar',
  alias: 'Badar / Ali',
  role: 'Full Stack Developer & Software Engineer',
  level: 'Senior Engineer Grade 1',
  tagline:
    'Full Stack Developer yang juga merancang hardware-nya sendiri.',
  // Ringkasan profesional (PRD §5.2).
  bio: `Full Stack Developer & Software Engineer dengan pengalaman membangun sistem end-to-end di sektor kelistrikan dan medical device — mulai dari frontend modern (React, TypeScript), backend (Node.js/Express, Spring Boot), hingga hardware/firmware (ESP32, PlatformIO/C++). Pernah menangani sistem real-time monitoring transmisi tenaga listrik, platform inspeksi aset PLN, integrasi AI untuk deteksi berbasis gambar, hingga merancang sendiri hardware monitoring alat medis (syringe pump & infusion pump) lengkap dengan HMI-nya. Saat ini juga membangun dan menjalankan produk mandiri, Monage — aplikasi manajemen keuangan pribadi yang sudah live dan dipakai pengguna nyata.`,
  // Highlight angka untuk section About (PRD §8.2).
  stats: [
    { value: '8+', label: 'Proyek nyata' },
    { value: '2', label: 'Perusahaan' },
    { value: '1', label: 'Produk mandiri live' },
    { value: 'HW+SW', label: 'Software & Hardware' },
  ],
} as const

// Keahlian per kategori — PRD §5.3.
export const skills: SkillGroup[] = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express.js', 'Spring Boot (Java)', 'REST API design'],
  },
  {
    category: 'Database',
    items: ['PostgreSQL', 'MongoDB'],
  },
  {
    category: 'Hardware / IoT / Embedded',
    items: [
      'ESP32',
      'PlatformIO + C++',
      'MQTT',
      'HMI (LCD)',
      'Edge AI / on-device',
    ],
  },
  {
    category: 'AI / Data',
    items: ['Python AI pipeline', 'Image-based detection', 'COMTRADE parsing'],
  },
  {
    category: 'Infrastruktur & Tools',
    items: [
      'Nginx',
      'GitHub Actions (CI/CD)',
      'Firebase FCM',
      'Google OAuth 2.0',
    ],
  },
]

// Kontak — PRD §8.7. Nilai href bisa disesuaikan saat publish.
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
    value: 'in/ibnualibadar',
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
