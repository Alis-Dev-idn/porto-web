import { useEffect } from 'react'
import type { Project } from '../data/types'
import { kindLabel, statusLabel } from '../lib/badges'
import { Icon } from './Icon'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
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
    <div className="modal" onClick={onClose}>
      <div
        className="modal__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="icon-btn modal__close"
          onClick={onClose}
          aria-label="Tutup"
        >
          <Icon name="close" />
        </button>

        <div className="modal__head">
          <div className="modal__badges">
            <span className="card__context">{project.contextLabel}</span>
            <span className={`tag tag--status tag--${project.status}`}>
              {statusLabel[project.status]}
            </span>
            <span className={`kind kind--${project.kind}`}>
              {kindLabel[project.kind]}
            </span>
          </div>
          <h2 id="modal-title" className="modal__title">
            {project.name}
          </h2>
          <p className="modal__desc">{project.description}</p>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer noopener"
              className="btn btn--primary btn--sm"
            >
              Kunjungi Demo <Icon name="external" size={16} />
            </a>
          )}
        </div>

        <div className="modal__body">
          {caseStudy.problem && (
            <Block title="Problem Statement">{caseStudy.problem}</Block>
          )}

          <Block title="Konteks">{project.contextLabel}</Block>
          <Block title="Peran Saya">{caseStudy.role}</Block>

          <div className="modal__block">
            <h4 className="modal__block-title">Tech Stack</h4>
            <div className="modal__stack">
              {project.stack.map((s) => (
                <span key={s} className="tag tag--mono tag--sm">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {caseStudy.features && caseStudy.features.length > 0 && (
            <div className="modal__block">
              <h4 className="modal__block-title">Key Features</h4>
              <ul className="modal__list">
                {caseStudy.features.map((f) => (
                  <li key={f}>{f}</li>
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
    <div className="modal__block">
      <h4 className="modal__block-title">{title}</h4>
      <p>{children}</p>
    </div>
  )
}
