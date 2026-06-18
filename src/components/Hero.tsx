import { Icon } from './Icon'
import { profile } from '../data/profile'
import heroPhoto from '../assets/hero.jpg'

// Hero / landing — PRD §8.1.
export function Hero() {
  return (
    <section
      id="top"
      className="relative grid min-h-[92vh] items-center gap-10 py-28 md:grid-cols-[1.15fr_0.85fr] md:gap-12"
    >
      {/* Glow background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[8%] left-1/2 -z-10 h-[520px] w-[min(760px,90%)] -translate-x-1/2 rounded-full bg-asoft blur-2xl"
      />

      <div className="text-center md:text-left">
        <p className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-accent">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent2 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent2" />
          </span>
          {profile.level}
        </p>

        <h1 className="bg-linear-to-br from-head via-accent to-accent2 bg-clip-text text-[clamp(40px,8vw,76px)] font-bold leading-[1.04] tracking-tight text-transparent">
          {profile.name}
        </h1>

        <p className="mt-4 text-[clamp(18px,3vw,24px)] font-semibold text-head">
          {profile.role}
        </p>
        <p className="mx-auto mt-3 max-w-[46ch] text-[clamp(16px,2.4vw,19px)] md:mx-0">
          {profile.tagline}
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-3 md:justify-start">
          <a
            href="#portfolio"
            className="btn bg-accent text-white hover:brightness-95"
          >
            Lihat Portfolio
          </a>
          <a
            href="#contact"
            className="btn border border-line2 text-head hover:border-accent hover:text-accent"
          >
            Hubungi Saya
          </a>
        </div>
      </div>

      {/* Photo */}
      <div className="relative mx-auto w-full max-w-[360px] md:max-w-none">
        <div className="absolute -inset-3 -z-10 rounded-[28px] bg-linear-to-br from-accent/25 to-accent2/25 blur-xl" />
        <div className="relative overflow-hidden rounded-[22px] border border-line bg-card shadow-2xl">
          <img
            src={heroPhoto}
            alt={`Foto ${profile.name}`}
            width={1100}
            height={1375}
            loading="eager"
            className="aspect-[4/5] w-full object-cover object-top"
          />
          {/* Gradient menutup sisa kabut tipis di bawah */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-card/90 to-transparent" />
        </div>

        {/* Floating badge */}
        <div className="absolute -bottom-4 -left-4 flex items-center gap-2 rounded-full border border-line bg-card px-4 py-2 shadow-xl">
          <Icon name="cpu" size={16} className="text-accent2" />
          <span className="font-mono text-[12.5px] font-semibold text-head">
            Software + Hardware
          </span>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll ke About"
        className="absolute bottom-7 left-1/2 -translate-x-1/2 animate-bob text-body"
      >
        <Icon name="arrow-down" />
      </a>
    </section>
  )
}
