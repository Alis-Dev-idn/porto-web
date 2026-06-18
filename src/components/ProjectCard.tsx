import type { Project } from '../data/types'
import { kindLabel, statusLabel } from '../lib/badges'
import { Icon } from './Icon'

interface ProjectCardProps {
  project: Project
  onOpen: (slug: string) => void
}

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const isHardware = project.kind !== 'software'

  return (
    <article
      className={`card card--${project.status}`}
      onClick={() => onOpen(project.slug)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onOpen(project.slug)
        }
      }}
    >
      <div className="card__top">
        <span className="card__context">{project.contextLabel}</span>
        <span className={`tag tag--status tag--${project.status}`}>
          {statusLabel[project.status]}
        </span>
      </div>

      <h3 className="card__name">{project.name}</h3>
      <p className="card__summary">{project.summary}</p>

      <div className="card__stack">
        {project.stack.slice(0, 4).map((s) => (
          <span key={s} className="tag tag--mono tag--sm">
            {s}
          </span>
        ))}
        {project.stack.length > 4 && (
          <span className="tag tag--mono tag--sm">
            +{project.stack.length - 4}
          </span>
        )}
      </div>

      <div className="card__foot">
        <span className={`kind kind--${project.kind}`}>
          <Icon name={isHardware ? 'cpu' : 'code'} size={15} />
          {kindLabel[project.kind]}
        </span>
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer noopener"
            className="card__link"
            onClick={(e) => e.stopPropagation()}
            aria-label={`Buka demo ${project.name}`}
          >
            <Icon name="external" size={16} />
          </a>
        )}
      </div>
    </article>
  )
}
