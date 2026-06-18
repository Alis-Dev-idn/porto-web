import { experience } from '../data/experience'
import { projects } from '../data/projects'

interface ExperienceProps {
  onOpenProject: (slug: string) => void
}

// Timeline Experience — PRD §8.4.
export function Experience({ onOpenProject }: ExperienceProps) {
  return (
    <section id="experience" className="section">
      <div className="section__head">
        <span className="section__num">03</span>
        <h2 className="section__title">Experience</h2>
      </div>

      <ol className="timeline">
        {experience.map((item) => (
          <li key={item.company} className="timeline__item">
            <span
              className={`timeline__dot ${item.current ? 'is-current' : ''}`}
              aria-hidden="true"
            />
            <div className="timeline__body">
              <div className="timeline__top">
                <h3 className="timeline__company">{item.company}</h3>
                <span
                  className={`tag ${item.current ? 'tag--accent' : 'tag--muted'}`}
                >
                  {item.period}
                </span>
              </div>
              <p className="timeline__role">{item.role}</p>
              <p className="timeline__summary">{item.summary}</p>

              <div className="timeline__projects">
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
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
