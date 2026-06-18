import { profile } from '../data/profile'
import avatar from '../assets/avatar.jpg'

// About — PRD §8.2.
export function About() {
  return (
    <section id="about" className="border-t border-line py-[clamp(64px,10vw,120px)]">
      <div className="mb-10 flex items-baseline gap-3.5">
        <span className="section-num">01</span>
        <h2 className="text-[clamp(26px,4vw,36px)] font-bold">Tentang Saya</h2>
      </div>

      <div className="grid items-center gap-[clamp(28px,6vw,56px)] md:grid-cols-[auto_1fr]">
        <figure className="m-0 flex flex-col items-center gap-3 text-center">
          <div className="relative">
            <div className="absolute -inset-2 -z-10 rounded-full bg-linear-to-br from-accent/30 to-accent2/30 blur-lg" />
            <img
              src={avatar}
              alt={`Foto ${profile.name}`}
              width={176}
              height={176}
              loading="lazy"
              className="h-40 w-40 rounded-full border-4 border-card object-cover shadow-xl md:h-48 md:w-48"
            />
          </div>
          <figcaption className="leading-tight">
            <span className="block font-semibold text-head">{profile.name}</span>
            <span className="text-[13.5px] text-body">{profile.level}</span>
          </figcaption>
        </figure>

        <p className="text-[clamp(16px,2.4vw,20px)] leading-relaxed">
          {profile.bio}
        </p>
      </div>

      <ul className="mt-10 grid grid-cols-2 gap-3.5 sm:grid-cols-4">
        {profile.stats.map((s) => (
          <li
            key={s.label}
            className="rounded-[14px] border border-line bg-soft p-5"
          >
            <span className="block text-3xl font-bold tracking-tight text-head">
              {s.value}
            </span>
            <span className="text-[13.5px]">{s.label}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
