import { contacts, profile } from '../data/profile'
import { Icon } from './Icon'
import type { IconName } from './Icon'

// Contact + Footer — PRD §8.7.
export function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-line py-[clamp(64px,10vw,120px)] text-center"
    >
      <div className="mb-10 flex items-baseline justify-center gap-3.5">
        <span className="section-num">05</span>
        <h2 className="text-[clamp(26px,4vw,36px)] font-bold">Mari Terhubung</h2>
      </div>

      <p className="mx-auto mb-9 max-w-[52ch] text-[clamp(16px,2.4vw,19px)]">
        Terbuka untuk peluang kerja, kolaborasi freelance, atau sekadar ngobrol
        soal software &amp; hardware. Pilih kanal yang paling nyaman.
      </p>

      <div className="mx-auto grid max-w-[720px] gap-3.5 [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))]">
        {contacts.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={c.icon === 'mail' ? undefined : '_blank'}
            rel="noreferrer noopener"
            className="flex items-center gap-3.5 rounded-[14px] border border-line bg-card p-[18px_20px] text-left shadow-sm transition hover:-translate-y-0.5 hover:border-accent"
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[11px] bg-asoft text-accent">
              <Icon name={c.icon as IconName} />
            </span>
            <span className="flex min-w-0 flex-col">
              <span className="text-[12.5px] text-body">{c.label}</span>
              <span className="truncate text-[14.5px] font-semibold text-head">
                {c.value}
              </span>
            </span>
          </a>
        ))}
      </div>

      <footer className="mt-16 flex flex-wrap items-center justify-between gap-2 border-t border-line pt-6 text-[13.5px]">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span className="font-mono text-[12.5px]">
          Dibuat dengan React, TypeScript, Tailwind &amp; Vite
        </span>
      </footer>
    </section>
  )
}
