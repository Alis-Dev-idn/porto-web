import { skills } from '../data/profile'

// Skills per kategori dengan badge/tag, tanpa progress-bar (PRD §8.3).
export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section__head">
        <span className="section__num">02</span>
        <h2 className="section__title">Skills &amp; Tech Stack</h2>
      </div>

      <div className="skills">
        {skills.map((group) => (
          <div key={group.category} className="skills__group">
            <h3 className="skills__cat">{group.category}</h3>
            <ul className="skills__tags">
              {group.items.map((item) => (
                <li key={item} className="tag tag--mono">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
