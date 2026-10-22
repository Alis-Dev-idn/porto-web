import { experience } from '../../data/experience'
import { projects } from '../../data/projects'
import { SectionHeader } from '../atoms/SectionHeader'
import { Badge } from '../atoms/Badge'

export interface ExperienceProps {
  onOpenProject: (slug: string) => void
}

export function Experience({ onOpenProject }: ExperienceProps) {
  return (
    <section
      id="experience"
      className="border-t border-line py-[clamp(64px,10vw,120px)]"
    >
      <SectionHeader number="03" title="Experience" />

      <ol className="relative flex flex-col gap-9 pl-7 before:absolute before:bottom-1.5 before:left-[5px] before:top-1.5 before:w-0.5 before:bg-line2 list-none m-0">
        {experience.map((item) => (
          <li key={item.company} className="relative">
            <span
              aria-hidden="true"
              className={`absolute -left-7 top-1 h-3.5 w-3.5 rounded-full border-2 ${
                item.current
                  ? 'border-accent bg-accent shadow-[0_0_0_4px_var(--accent-soft)]'
                  : 'border-line2 bg-surface'
              }`}
            />
            <div className="mb-1.5 flex flex-wrap items-center gap-3">
              <h3 className="text-xl font-bold text-head">{item.company}</h3>
              <Badge
                variant={item.current ? 'accent' : 'default'}
                size="sm"
              >
                {item.period}
              </Badge>
            </div>
            <p className="text-[15px] font-semibold text-head">{item.role}</p>
            <p className="mt-1.5 max-w-[60ch] text-body">{item.summary}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {item.highlights.map((slug) => {
                const p = projects.find((pr) => pr.slug === slug)
                if (!p) return null
                return (
                  <button
                    key={slug}
                    type="button"
                    className="min-h-[38px] cursor-pointer rounded-full border border-line bg-soft px-3.5 py-1.5 text-[13px] font-medium text-head transition duration-150 hover:border-accent hover:text-accent active:scale-[0.98]"
                    onClick={() => onOpenProject(slug)}
                    aria-label={`Buka detail proyek ${p.name}`}
                  >
                    {p.name}
                  </button>
                )
              })}
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
