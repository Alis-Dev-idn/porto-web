import { experience } from '../data/experience'
import { projects } from '../data/projects'

interface ExperienceProps {
  onOpenProject: (slug: string) => void
}

// Timeline Experience — PRD §8.4.
export function Experience({ onOpenProject }: ExperienceProps) {
  return (
    <section
      id="experience"
      className="border-t border-line py-[clamp(64px,10vw,120px)]"
    >
      <div className="mb-10 flex items-baseline gap-3.5">
        <span className="section-num">03</span>
        <h2 className="text-[clamp(26px,4vw,36px)] font-bold">Experience</h2>
      </div>

      <ol className="relative flex flex-col gap-9 pl-7 before:absolute before:bottom-1.5 before:left-[5px] before:top-1.5 before:w-0.5 before:bg-line2">
        {experience.map((item) => (
          <li key={item.company} className="relative">
            <span
              aria-hidden="true"
              className={`absolute -left-7 top-1 h-3 w-3 rounded-full border-2 ${
                item.current
                  ? 'border-accent bg-accent shadow-[0_0_0_4px_var(--accent-soft)]'
                  : 'border-line2 bg-surface'
              }`}
            />
            <div className="mb-1.5 flex flex-wrap items-center gap-3">
              <h3 className="text-xl font-bold">{item.company}</h3>
              <span
                className={`tag ${
                  item.current ? 'border-transparent bg-asoft text-accent' : ''
                }`}
              >
                {item.period}
              </span>
            </div>
            <p className="text-[15px] font-semibold text-head">{item.role}</p>
            <p className="mt-1.5 max-w-[60ch]">{item.summary}</p>

            <div className="mt-3.5 flex flex-wrap gap-2">
              {item.highlights.map((slug) => {
                const p = projects.find((pr) => pr.slug === slug)
                if (!p) return null
                return (
                  <button
                    key={slug}
                    type="button"
                    className="chip"
                    onClick={() => onOpenProject(slug)}
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
