import { profile } from '../data/profile'

// About — PRD §8.2.
export function About() {
  return (
    <section id="about" className="section">
      <div className="section__head">
        <span className="section__num">01</span>
        <h2 className="section__title">Tentang Saya</h2>
      </div>

      <div className="about">
        <p className="about__bio">{profile.bio}</p>

        <ul className="about__stats">
          {profile.stats.map((s) => (
            <li key={s.label}>
              <span className="about__stat-value">{s.value}</span>
              <span className="about__stat-label">{s.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
