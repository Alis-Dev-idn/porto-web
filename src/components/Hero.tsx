import { Icon } from './Icon'
import { profile } from '../data/profile'

// Hero / landing — PRD §8.1.
export function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__content">
        <p className="hero__eyebrow">
          <span className="dot" /> {profile.level}
        </p>
        <h1 className="hero__title">
          {profile.name}
        </h1>
        <p className="hero__role">{profile.role}</p>
        <p className="hero__tagline">{profile.tagline}</p>

        <div className="hero__cta">
          <a href="#portfolio" className="btn btn--primary">
            Lihat Portfolio
          </a>
          <a href="#contact" className="btn btn--ghost">
            Hubungi Saya
          </a>
        </div>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll ke About">
        <Icon name="arrow-down" />
      </a>
    </section>
  )
}
