import { contacts, profile } from '../../data/profile'
import { SectionHeader } from '../atoms/SectionHeader'
import { ContactCard } from '../molecules/ContactCard'

export function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-line py-[clamp(64px,10vw,120px)] text-center"
    >
      <SectionHeader number="05" title="Mari Terhubung" align="center" />

      <p className="mx-auto mb-10 max-w-[56ch] text-lead text-body">
        Terbuka untuk peluang kerja sama profesional, kolaborasi rekayasa teknologi, maupun
        diskusi seputar arsitektur software dan sistem embedded IoT. Silakan hubungi saya
        melalui kanal yang paling nyaman bagi Anda.
      </p>

      <div className="mx-auto grid max-w-[720px] gap-4 [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))]">
        {contacts.map((c) => (
          <ContactCard key={c.label} contact={c} />
        ))}
      </div>

      <footer className="mt-20 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-6 text-[13.5px] text-muted">
        <span>
          © {new Date().getFullYear()} {profile.name}. Hak Cipta Dilindungi.
        </span>
        <span className="font-mono text-[12.5px]">
          Dibuat dengan React, TypeScript, Tailwind CSS v4 &amp; Vite
        </span>
      </footer>
    </section>
  )
}
