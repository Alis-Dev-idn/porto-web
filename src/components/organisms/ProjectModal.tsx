import React, { useEffect, useRef } from 'react'
import type { Project, ProjectStatus } from '../../data/types'
import { kindLabel, statusLabel } from '../../lib/badges'
import { Icon } from '../atoms/Icon'
import { Badge } from '../atoms/Badge'
import { Button } from '../atoms/Button'

export interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

const statusBadgeVariant: Record<ProjectStatus, 'status-live' | 'status-internal' | 'status-coming-soon'> = {
  live: 'status-live',
  internal: 'status-internal',
  'coming-soon': 'status-coming-soon',
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!project) return

    // 1. Hitung lebar scrollbar sistem saat ini
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth

    // 2. Simpan styling awal body
    const originalOverflow = document.body.style.overflow
    const originalPaddingRight = document.body.style.paddingRight

    // 3. Kunci scroll dan beri padding kompensasi jika ada scrollbar (Zero CLS)
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`
      const navHeader = document.querySelector('header')
      if (navHeader) {
        navHeader.style.paddingRight = `${scrollbarWidth}px`
      }
    }
    document.body.style.overflow = 'hidden'

    // Focus close button on mount
    closeButtonRef.current?.focus()

    // Keyboard Escape listener
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = originalOverflow
      document.body.style.paddingRight = originalPaddingRight
      const navHeader = document.querySelector('header')
      if (navHeader) {
        navHeader.style.paddingRight = ''
      }
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [project, onClose])

  if (!project) return null
  const { caseStudy } = project

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[100] flex animate-fade items-center justify-center bg-ink/60 p-4 backdrop-blur-sm md:p-8"
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
        className="relative flex max-h-[90dvh] w-full max-w-[640px] animate-rise flex-col overflow-hidden rounded-2xl border border-line bg-card shadow-2xl"
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Tutup detail modal"
          title="Tutup (Esc)"
          className="grid h-11 w-11 place-items-center rounded-md border border-line text-head absolute right-4 top-4 z-10 bg-card/90 backdrop-blur-xs transition duration-150 hover:border-line2 hover:bg-soft active:scale-[0.95] cursor-pointer"
        >
          <Icon name="close" size={20} />
        </button>

        <div className="modal-scroll overflow-y-auto p-[clamp(20px,5vw,36px)]">
          <div className="mb-3.5 flex flex-wrap items-center gap-2 pr-12">
            <span className="text-[12.5px] font-semibold tracking-wide text-muted">
              {project.contextLabel}
            </span>
            <Badge variant={statusBadgeVariant[project.status]} size="sm">
              {statusLabel[project.status]}
            </Badge>
            <Badge variant="accent" size="sm">
              {kindLabel[project.kind]}
            </Badge>
          </div>

          <h2
            id="modal-title"
            className="pr-12 text-h2 font-bold text-head"
          >
            {project.name}
          </h2>

          <p className="mt-3 text-body leading-relaxed">{project.description}</p>

          {project.url && (
            <div className="mt-5">
              <Button
                asLink
                href={project.url}
                target="_blank"
                rel="noreferrer noopener"
                variant="primary"
                size="md"
                icon={<Icon name="external" size={16} />}
              >
                Kunjungi Demo
              </Button>
            </div>
          )}

          <div className="mt-8 flex flex-col gap-6">
            {caseStudy.problem && (
              <Block title="Problem Statement">{caseStudy.problem}</Block>
            )}
            <Block title="Konteks">{project.contextLabel}</Block>
            <Block title="Peran Saya">{caseStudy.role}</Block>

            <div>
              <BlockTitle>Tech Stack</BlockTitle>
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((s) => (
                  <Badge key={s} variant="mono" size="sm">
                    {s}
                  </Badge>
                ))}
              </div>
            </div>

            {caseStudy.features && caseStudy.features.length > 0 && (
              <div>
                <BlockTitle>Key Features</BlockTitle>
                <ul className="flex flex-col gap-2 p-0 list-none">
                  {caseStudy.features.map((f) => (
                    <li key={f} className="relative pl-5.5 text-body leading-snug">
                      <span className="absolute left-1 top-[9px] h-1.5 w-1.5 rounded-full bg-accent2" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {caseStudy.challenge && (
              <Block title="Tantangan & Solusi">{caseStudy.challenge}</Block>
            )}
            {caseStudy.impact && (
              <Block title="Hasil / Impact">{caseStudy.impact}</Block>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function BlockTitle({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="mb-2 text-[13px] font-semibold uppercase tracking-wider text-accent">
      {children}
    </h4>
  )
}

function Block({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div>
      <BlockTitle>{title}</BlockTitle>
      <p className="text-body leading-relaxed">{children}</p>
    </div>
  )
}
