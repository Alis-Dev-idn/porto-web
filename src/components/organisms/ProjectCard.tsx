import React from 'react'
import type { Project, ProjectKind, ProjectStatus } from '../../data/types'
import { kindLabel, statusLabel } from '../../lib/badges'
import { Icon } from '../atoms/Icon'
import { Badge } from '../atoms/Badge'

export interface ProjectCardProps {
  project: Project
  onOpen: (slug: string) => void
}

const statusBadgeVariant: Record<ProjectStatus, 'status-live' | 'status-internal' | 'status-coming-soon'> = {
  live: 'status-live',
  internal: 'status-internal',
  'coming-soon': 'status-coming-soon',
}

const kindColor: Record<ProjectKind, string> = {
  software: 'text-accent',
  hardware: 'text-accent2',
  'software-hardware': 'text-accent',
}

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const isHardware = project.kind !== 'software'

  const handleCardClick = () => {
    onOpen(project.slug)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onOpen(project.slug)
    }
  }

  return (
    <article
      tabIndex={0}
      role="button"
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      aria-label={`Buka studi kasus ${project.name}`}
      className={`group relative flex cursor-pointer flex-col overflow-hidden rounded-xl border bg-card shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-line2 hover:shadow-xl active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-accent ${
        project.status === 'coming-soon'
          ? 'border-dashed border-line2 opacity-85'
          : 'border-line'
      }`}
    >
      {/* Media Header: Cover Image atau Schematic Pattern Fallback (Zero CLS via locked 16:10 aspect ratio) */}
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-line bg-slate-900/5 dark:bg-slate-950/40">
        {project.coverImage ? (
          <>
            <img
              src={project.coverImage}
              alt={`Tangkapan layar ${project.name}`}
              width={1920}
              height={1200}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-top transition-transform duration-300 ease-out group-hover:scale-105"
            />
            {/* Gradient halus di bawah gambar menyatu dengan kartu */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-card/90 via-card/30 to-transparent" />
          </>
        ) : (
          <div className="relative flex h-full w-full flex-col items-center justify-center bg-soft/70 px-4 text-center">
            {/* SVG Grid Schematic Background Pattern */}
            <div className="pointer-events-none absolute inset-0 opacity-15">
              <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern
                    id={`grid-${project.slug}`}
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 20 0 L 0 0 0 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.8"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill={`url(#grid-${project.slug})`} />
              </svg>
            </div>
            <div className="relative z-10 flex flex-col items-center gap-2">
              <span className="grid h-10 w-10 place-items-center rounded-lg border border-line bg-card/85 text-muted shadow-xs">
                <Icon name={isHardware ? 'cpu' : 'code'} size={20} />
              </span>
              <span className="font-mono text-[10.5px] uppercase tracking-wider text-muted">
                Enterprise System • Confidential
              </span>
            </div>
          </div>
        )}

        {/* Floating Live Demo Pill */}
        {project.url && (
          <div className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-accent2/35 bg-card/90 px-2.5 py-1 text-[11px] font-semibold text-accent2 shadow-md backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent2 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent2" />
            </span>
            <span>Live Demo</span>
          </div>
        )}
      </div>

      {/* Konten Kartu */}
      <div className="flex flex-1 flex-col justify-between p-5 md:p-6">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between gap-2.5">
            <span className="text-[12.5px] font-semibold tracking-wide text-muted">
              {project.contextLabel}
            </span>
            <Badge variant={statusBadgeVariant[project.status]} size="sm">
              {statusLabel[project.status]}
            </Badge>
          </div>

          <h3 className="text-xl font-bold text-head transition-colors group-hover:text-accent">
            {project.name}
          </h3>

          <p className="text-[14.5px] leading-relaxed text-body line-clamp-3">
            {project.summary}
          </p>

          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.stack.slice(0, 4).map((s) => (
              <Badge key={s} variant="mono" size="sm">
                {s}
              </Badge>
            ))}
            {project.stack.length > 4 && (
              <Badge variant="mono" size="sm">
                +{project.stack.length - 4}
              </Badge>
            )}
          </div>
        </div>

        {/* Action Bar Bawah */}
        <div className="mt-6 flex items-center justify-between border-t border-line pt-3.5">
          <span
            className={`inline-flex items-center gap-1.5 font-mono text-[12.5px] font-semibold ${kindColor[project.kind]}`}
          >
            <Icon name={isHardware ? 'cpu' : 'code'} size={15} />
            {kindLabel[project.kind]}
          </span>

          <div className="flex items-center gap-2">
            {project.url ? (
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer noopener"
                onClick={(e) => {
                  e.stopPropagation()
                }}
                aria-label={`Buka demo eksternal proyek ${project.name}`}
                title={`Kunjungi Demo ${project.name}`}
                className="inline-flex min-h-[44px] items-center gap-1.5 rounded-full border border-accent bg-asoft px-4 py-2 text-xs font-semibold text-accent shadow-xs transition duration-150 hover:bg-accent hover:text-white active:scale-95"
              >
                <span>Coba Demo</span>
                <Icon name="external" size={14} />
              </a>
            ) : (
              <span className="inline-flex min-h-[44px] items-center gap-1.5 rounded-full border border-line bg-soft/70 px-3.5 py-2 text-xs font-medium text-body transition duration-150 group-hover:border-accent group-hover:text-accent">
                <span>Detail Studi</span>
                <span className="transition-transform duration-150 group-hover:translate-x-0.5">→</span>
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}
