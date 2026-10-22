import { Icon } from '../atoms/Icon'
import { Button } from '../atoms/Button'
import { profile } from '../../data/profile'
import heroPhoto from '../../assets/hero.jpg'

export function Hero() {
  return (
    <section
      id="top"
      className="relative grid min-h-[90vh] items-center gap-10 py-24 md:grid-cols-[1.15fr_0.85fr] md:gap-12 md:py-32"
    >
      {/* Ambient glow aura */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[8%] left-1/2 -z-10 h-[520px] w-[min(760px,90%)] -translate-x-1/2 rounded-full bg-asoft blur-3xl opacity-75"
      />

      <div className="text-center md:text-left">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-asoft px-3.5 py-1.5 text-xs font-semibold text-accent">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent2 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent2" />
          </span>
          <span>{profile.level}</span>
        </div>

        <h1 className="text-display font-extrabold bg-linear-to-br from-head via-accent to-accent2 bg-clip-text text-transparent">
          {profile.name}
        </h1>

        <p className="mt-4 text-h2 font-semibold text-head">
          {profile.role}
        </p>

        <p className="mx-auto mt-4 max-w-[48ch] text-lead text-body md:mx-0">
          {profile.tagline}
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3.5 md:justify-start">
          <Button asLink href="#portfolio" variant="primary" size="md">
            Lihat Portfolio
          </Button>
          <Button asLink href="#contact" variant="outline" size="md">
            Hubungi Saya
          </Button>
        </div>
      </div>

      {/* Photo with locked aspect ratio for zero CLS */}
      <div className="relative mx-auto w-full max-w-[360px] md:max-w-none">
        <div className="absolute -inset-3 -z-10 rounded-2xl bg-linear-to-br from-accent/20 to-accent2/20 blur-xl" />
        <div className="relative overflow-hidden rounded-2xl border border-line bg-card shadow-2xl">
          <img
            src={heroPhoto}
            alt={`Foto profesional ${profile.name}`}
            width={1100}
            height={1375}
            loading="eager"
            decoding="async"
            className="aspect-[4/5] w-full object-cover object-top"
          />
          {/* Subtle gradient overlay at bottom */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-card/90 to-transparent" />
        </div>

        {/* Floating badge */}
        <div className="absolute -bottom-4 -left-4 flex items-center gap-2 rounded-full border border-line bg-card/95 px-4 py-2 shadow-xl backdrop-blur-xs">
          <Icon name="cpu" size={18} className="text-accent2" />
          <span className="font-mono text-[12.5px] font-semibold text-head">
            Software + Hardware
          </span>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Gulir ke bagian Tentang Saya"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bob text-body transition-colors hover:text-accent"
      >
        <Icon name="arrow-down" size={22} />
      </a>
    </section>
  )
}
