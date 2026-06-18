import type { Project, ProjectKind, ProjectStatus } from '../data/types'
import { kindLabel, statusLabel } from '../lib/badges'
import { Icon } from './Icon'

interface ProjectCardProps {
  project: Project
  onOpen: (slug: string) => void
}

const statusTag: Record<ProjectStatus, string> = {
  live: 'border-transparent bg-accent2/15 text-accent2',
  internal: 'bg-soft text-body',
  'coming-soon': 'border-transparent bg-asoft text-accent',
}

const kindColor: Record<ProjectKind, string> = {
  software: 'text-body',
  hardware: 'text-accent2',
  'software-hardware': 'text-accent',
}

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const isHardware = project.kind !== 'software'

  return (
    <article
      role="button"
      tabIndex={0}
      onClick={() => onOpen(project.slug)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onOpen(project.slug)
        }
      }}
      className={`group flex cursor-pointer flex-col gap-3 rounded-[14px] border bg-card p-[22px] shadow-sm transition duration-200 hover:-translate-y-1 hover:border-line2 hover:shadow-2xl ${
        project.status === 'coming-soon'
          ? 'border-dashed border-line2 opacity-85'
          : 'border-line'
      }`}
    >
      <div className="flex items-center justify-between gap-2.5">
        <span className="text-[12.5px] font-semibold tracking-wide text-body">
          {project.contextLabel}
        </span>
        <span
          className={`tag tag-sm font-semibold uppercase tracking-wide ${statusTag[project.status]}`}
        >
          {statusLabel[project.status]}
        </span>
      </div>

      <h3 className="text-[19px] font-bold">{project.name}</h3>
      <p className="flex-1 text-[14.5px] leading-snug">{project.summary}</p>

      <div className="flex flex-wrap gap-1.5">
        {project.stack.slice(0, 4).map((s) => (
          <span key={s} className="tag tag-mono tag-sm">
            {s}
          </span>
        ))}
        {project.stack.length > 4 && (
          <span className="tag tag-mono tag-sm">+{project.stack.length - 4}</span>
        )}
      </div>

      <div className="flex items-center justify-between border-t border-line pt-3">
        <span
          className={`inline-flex items-center gap-1.5 font-mono text-[12.5px] font-semibold ${kindColor[project.kind]}`}
        >
          <Icon name={isHardware ? 'cpu' : 'code'} size={15} />
          {kindLabel[project.kind]}
        </span>
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer noopener"
            onClick={(e) => e.stopPropagation()}
            aria-label={`Buka demo ${project.name}`}
            className="grid h-8 w-8 place-items-center rounded-lg border border-line text-head transition hover:border-accent hover:text-accent"
          >
            <Icon name="external" size={16} />
          </a>
        )}
      </div>
    </article>
  )
}
