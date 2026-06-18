import { useMemo, useState } from 'react'
import { projects } from '../data/projects'
import type { ProjectContext } from '../data/types'
import { ProjectCard } from './ProjectCard'

interface PortfolioProps {
  onOpenProject: (slug: string) => void
}

type Filter = 'all' | ProjectContext

const filters: { value: Filter; label: string }[] = [
  { value: 'all', label: 'Semua' },
  { value: 'independent', label: 'Mandiri' },
  { value: 'haleyora', label: 'Haleyora' },
  { value: 'xirka', label: 'Xirka' },
]

// Portfolio grid + filter — PRD §8.5.
export function Portfolio({ onOpenProject }: PortfolioProps) {
  const [filter, setFilter] = useState<Filter>('all')

  const visible = useMemo(
    () =>
      filter === 'all'
        ? projects
        : projects.filter((p) => p.context === filter),
    [filter],
  )

  return (
    <section id="portfolio" className="section">
      <div className="section__head">
        <span className="section__num">04</span>
        <h2 className="section__title">Portfolio</h2>
      </div>

      <div className="portfolio__filters" role="tablist" aria-label="Filter proyek">
        {filters.map((f) => (
          <button
            key={f.value}
            type="button"
            role="tab"
            aria-selected={filter === f.value}
            className={`filter ${filter === f.value ? 'is-active' : ''}`}
            onClick={() => setFilter(f.value)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="portfolio__grid">
        {visible.map((p) => (
          <ProjectCard key={p.slug} project={p} onOpen={onOpenProject} />
        ))}
      </div>
    </section>
  )
}
