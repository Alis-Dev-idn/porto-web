import { useMemo, useState } from 'react'
import { projects } from '../../data/projects'
import { SectionHeader } from '../atoms/SectionHeader'
import { FilterTabs, type FilterValue, type FilterOption } from '../molecules/FilterTabs'
import { ProjectCard } from './ProjectCard'

export interface PortfolioProps {
  onOpenProject: (slug: string) => void
}

const filterOptions: FilterOption[] = [
  { value: 'all', label: 'Semua' },
  { value: 'independent', label: 'Mandiri' },
  { value: 'haleyora', label: 'PT. PLN ICON PLUS' },
  { value: 'xirka', label: 'PT. XIRKA DAMA PERSADA' },
]

export function Portfolio({ onOpenProject }: PortfolioProps) {
  const [filter, setFilter] = useState<FilterValue>('all')

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
      <SectionHeader number="04" title="Portfolio" />

      <FilterTabs
        activeFilter={filter}
        onSelect={setFilter}
        options={filterOptions}
        className="mb-8"
      />

      <div
        id="portfolio-tabpanel"
        role="tabpanel"
        aria-labelledby={`tab-${filter}`}
        className="grid gap-6 [grid-template-columns:repeat(auto-fill,minmax(300px,1fr))]"
      >
        {visible.map((p) => (
          <ProjectCard key={p.slug} project={p} onOpen={onOpenProject} />
        ))}
      </div>
    </section>
  )
}
