import { contacts, profile } from '../data/profile'
import { Icon } from './Icon'
import type { IconName } from './Icon'

// Contact + Footer — PRD §8.7.
export function Contact() {
  return (
    <section id="contact" className="section section--contact">
      <div className="section__head">
        <span className="section__num">05</span>
        <h2 className="section__title">Mari Terhubung</h2>
      </div>

      <p className="contact__lead">
        Terbuka untuk peluang kerja, kolaborasi freelance, atau sekadar ngobrol
        soal software &amp; hardware. Pilih kanal yang paling nyaman.
      </p>

      <div className="contact__grid">
        {contacts.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={c.icon === 'mail' ? undefined : '_blank'}
            rel="noreferrer noopener"
            className="contact__card"
          >
            <span className="contact__icon">
              <Icon name={c.icon as IconName} />
            </span>
            <span className="contact__meta">
              <span className="contact__label">{c.label}</span>
              <span className="contact__value">{c.value}</span>
            </span>
          </a>
        ))}
      </div>

      <footer className="footer">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span className="footer__built">
          Dibuat dengan React, TypeScript &amp; Vite
        </span>
      </footer>
    </section>
  )
}
