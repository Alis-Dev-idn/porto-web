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
    <section
      id="portfolio"
      className="border-t border-line py-[clamp(64px,10vw,120px)]"
    >
      <div className="mb-7 flex items-baseline gap-3.5">
        <span className="section-num">04</span>
        <h2 className="text-[clamp(26px,4vw,36px)] font-bold">Portfolio</h2>
      </div>

      <div
        role="tablist"
        aria-label="Filter proyek"
        className="mb-7 flex flex-wrap gap-2"
      >
        {filters.map((f) => (
          <button
            key={f.value}
            type="button"
            role="tab"
            aria-selected={filter === f.value}
            onClick={() => setFilter(f.value)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
              filter === f.value
                ? 'border-head bg-head text-surface'
                : 'border-line text-body hover:border-line2 hover:text-head'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid gap-4.5 [grid-template-columns:repeat(auto-fill,minmax(300px,1fr))]">
        {visible.map((p) => (
          <ProjectCard key={p.slug} project={p} onOpen={onOpenProject} />
        ))}
      </div>
    </section>
  )
}
