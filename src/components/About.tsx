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

      <div className="grid items-start gap-[clamp(28px,6vw,64px)] md:grid-cols-[auto_1fr]">
        <div className="mx-auto md:mx-0">
          <div className="relative">
            <div className="absolute -inset-2 -z-10 rounded-full bg-linear-to-br from-accent/30 to-accent2/30 blur-lg" />
            <img
              src={avatar}
              alt={`Foto ${profile.name}`}
              width={160}
              height={160}
              loading="lazy"
              className="h-36 w-36 rounded-full border-4 border-card object-cover shadow-xl md:h-44 md:w-44"
            />
          </div>
        </div>

        <div className="grid items-start gap-[clamp(24px,4vw,40px)] lg:grid-cols-[1.5fr_1fr]">
          <p className="text-[clamp(17px,2.4vw,20px)] leading-relaxed">
            {profile.bio}
          </p>

          <ul className="grid grid-cols-2 gap-3.5">
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
        </div>
      </div>
    </section>
  )
}
