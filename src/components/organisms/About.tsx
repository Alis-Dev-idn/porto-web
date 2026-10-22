import { profile } from '../../data/profile'
import avatar from '../../assets/avatar.jpg'
import { SectionHeader } from '../atoms/SectionHeader'
import { StatCard } from '../molecules/StatCard'

export function About() {
  return (
    <section id="about" className="border-t border-line py-[clamp(64px,10vw,120px)]">
      <SectionHeader number="01" title="Tentang Saya" />

      <div className="grid items-center gap-[clamp(28px,6vw,56px)] md:grid-cols-[auto_1fr]">
        <figure className="m-0 flex flex-col items-center gap-3 text-center">
          <div className="relative">
            <div className="absolute -inset-2 -z-10 rounded-full bg-linear-to-br from-accent/25 to-accent2/25 blur-lg" />
            <img
              src={avatar}
              alt={`Foto profil ${profile.name}`}
              width={176}
              height={176}
              loading="lazy"
              decoding="async"
              className="aspect-square h-40 w-40 rounded-full border-4 border-card object-cover shadow-xl md:h-48 md:w-48"
            />
          </div>
          <figcaption className="leading-tight">
            <span className="block font-semibold text-head">{profile.name}</span>
            <span className="text-[13.5px] text-muted">{profile.level}</span>
          </figcaption>
        </figure>

        <p className="text-lead text-body leading-relaxed">
          {profile.bio}
        </p>
      </div>

      <ul className="mt-10 grid grid-cols-2 gap-3.5 sm:grid-cols-4 list-none p-0">
        {profile.stats.map((s) => (
          <li key={s.label}>
            <StatCard value={s.value} label={s.label} />
          </li>
        ))}
      </ul>
    </section>
  )
}
