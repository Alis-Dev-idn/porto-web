// Domain types untuk konten portfolio.
// Semua konten situs dipisahkan dari komponen UI (lihat PRD §10.2 & §11)
// agar mudah menambah/mengubah proyek tanpa menyentuh kode tampilan.

/** Tipe kontribusi pada sebuah proyek. */
export type ProjectKind = 'software' | 'hardware' | 'software-hardware'

/** Status publikasi proyek. */
export type ProjectStatus = 'live' | 'internal' | 'coming-soon'

/** Konteks tempat proyek dikerjakan. */
export type ProjectContext = 'independent' | 'haleyora' | 'xirka'

export interface CaseStudy {
  /** Problem statement / latar belakang. */
  problem?: string
  /** Peran spesifik penulis pada proyek. */
  role: string
  /** Fitur utama / kontribusi. */
  features?: string[]
  /** Tantangan & solusi (opsional). */
  challenge?: string
  /** Hasil / impact (opsional). */
  impact?: string
}

export interface Project {
  slug: string
  name: string
  /** Satu kalimat deskripsi untuk kartu. */
  summary: string
  /** Deskripsi lengkap untuk detail/case study. */
  description: string
  context: ProjectContext
  contextLabel: string
  kind: ProjectKind
  status: ProjectStatus
  /** Badge tech stack. */
  stack: string[]
  /** Tautan demo publik (hanya Monage). */
  url?: string
  caseStudy: CaseStudy
}

export interface SkillGroup {
  category: string
  items: string[]
}

export interface ExperienceItem {
  company: string
  role: string
  period: string
  current: boolean
  summary: string
  /** Slug proyek terkait di section Portfolio. */
  highlights: string[]
}

export interface ContactLink {
  label: string
  value: string
  href: string
  icon: string
}
