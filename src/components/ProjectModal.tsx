import { useEffect } from 'react'
import type { Project, ProjectStatus } from '../data/types'
import { kindLabel, statusLabel } from '../lib/badges'
import { Icon } from './Icon'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

const statusTag: Record<ProjectStatus, string> = {
  live: 'border-transparent bg-accent2/15 text-accent2',
  internal: 'bg-soft text-body',
  'coming-soon': 'border-transparent bg-asoft text-accent',
}

// Detail proyek / case study sebagai modal — PRD §8.6 & §7.
export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  if (!project) return null
  const { caseStudy } = project

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[100] flex animate-fade items-center justify-center bg-ink/55 p-4 backdrop-blur-sm md:p-8"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
        className="relative flex max-h-[90dvh] w-full max-w-[640px] animate-rise flex-col overflow-hidden rounded-[20px] border border-line bg-card shadow-2xl"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Tutup"
          className="icon-btn absolute right-3 top-3 z-10 bg-card/80 backdrop-blur"
        >
          <Icon name="close" />
        </button>

        <div className="modal-scroll overflow-y-auto p-[clamp(20px,5vw,40px)]">
        <div className="mb-3.5 flex flex-wrap items-center gap-2 pr-10">
          <span className="text-[12.5px] font-semibold tracking-wide text-body">
            {project.contextLabel}
          </span>
          <span
            className={`tag tag-sm font-semibold uppercase tracking-wide ${statusTag[project.status]}`}
          >
            {statusLabel[project.status]}
          </span>
          <span className="font-mono text-[12.5px] font-semibold text-accent">
            {kindLabel[project.kind]}
          </span>
        </div>

        <h2
          id="modal-title"
          className="pr-10 text-[clamp(24px,5vw,32px)] font-bold"
        >
          {project.name}
        </h2>
        <p className="mt-3 leading-relaxed">{project.description}</p>
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer noopener"
            className="btn mt-4.5 bg-accent px-4 py-2 text-white hover:brightness-95"
          >
            Kunjungi Demo <Icon name="external" size={16} />
          </a>
        )}

        <div className="mt-7 flex flex-col gap-5.5">
          {caseStudy.problem && (
            <Block title="Problem Statement">{caseStudy.problem}</Block>
          )}
          <Block title="Konteks">{project.contextLabel}</Block>
          <Block title="Peran Saya">{caseStudy.role}</Block>

          <div>
            <BlockTitle>Tech Stack</BlockTitle>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((s) => (
                <span key={s} className="tag tag-mono tag-sm">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {caseStudy.features && caseStudy.features.length > 0 && (
            <div>
              <BlockTitle>Key Features</BlockTitle>
              <ul className="flex flex-col gap-2">
                {caseStudy.features.map((f) => (
                  <li key={f} className="relative pl-5.5 leading-snug">
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
      <p className="leading-relaxed">{children}</p>
    </div>
  )
}
