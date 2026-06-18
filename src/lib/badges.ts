import type { ProjectKind, ProjectStatus } from '../data/types'

// Label & varian badge untuk tipe & status proyek (PRD §8.5 & §12).

export const kindLabel: Record<ProjectKind, string> = {
  software: 'Software',
  hardware: 'Hardware/IoT',
  'software-hardware': 'Software + Hardware',
}

export const statusLabel: Record<ProjectStatus, string> = {
  live: 'Live',
  internal: 'Internal',
  'coming-soon': 'Coming Soon',
}
