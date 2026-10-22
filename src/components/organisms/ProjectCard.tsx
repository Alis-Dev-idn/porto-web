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
      className={`group relative flex cursor-pointer flex-col justify-between rounded-xl border bg-card p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-line2 hover:shadow-xl active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-accent ${
        project.status === 'coming-soon'
          ? 'border-dashed border-line2 opacity-85'
          : 'border-line'
      }`}
    >
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

        <p className="text-[14.5px] leading-relaxed text-body">
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

      <div className="mt-5 flex items-center justify-between border-t border-line pt-3.5">
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
            onClick={(e) => {
              e.stopPropagation()
            }}
            aria-label={`Buka demo eksternal proyek ${project.name}`}
            title={`Buka demo eksternal ${project.name}`}
            className="grid h-11 w-11 place-items-center rounded-md border border-line text-head transition duration-150 hover:border-accent hover:text-accent hover:bg-soft active:scale-[0.95]"
          >
            <Icon name="external" size={17} />
          </a>
        )}
      </div>
    </article>
  )
}
