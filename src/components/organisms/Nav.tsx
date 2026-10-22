import { useEffect, useState } from 'react'
import { profile } from '../../data/profile'
import brand from '../../assets/brand.png'
import type { Theme } from '../../hooks/useTheme'
import { ThemeToggle } from '../molecules/ThemeToggle'

export interface NavProps {
  theme: Theme
  onToggleTheme: () => void
}

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#contact', label: 'Contact' },
]

export function Nav({ theme, onToggleTheme }: NavProps) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200 ${
        scrolled
          ? 'border-line bg-surface/85 backdrop-blur-md backdrop-saturate-150 shadow-xs'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-[1080px] items-center gap-4 px-[clamp(20px,5vw,48px)] py-3">
        <a
          href="#top"
          className="mr-auto inline-flex items-center gap-2.5 font-semibold text-head"
          aria-label={profile.name}
        >
          <img
            src={brand}
            alt=""
            width={36}
            height={36}
            className="h-9 w-9 rounded-md object-cover shadow-sm"
          />
          <span className="text-[15px] font-bold max-[340px]:hidden">{profile.name}</span>
        </a>

        {/* Backdrop saat menu mobile terbuka */}
        {open && (
          <button
            type="button"
            aria-label="Tutup menu navigasi"
            onClick={() => setOpen(false)}
            className="fixed inset-0 -z-10 cursor-default bg-ink/30 backdrop-blur-xs min-[761px]:hidden"
          />
        )}

        <nav
          aria-label="Navigasi utama"
          className={`flex gap-1 max-[760px]:absolute max-[760px]:inset-x-3 max-[760px]:top-[64px] max-[760px]:flex-col max-[760px]:gap-1 max-[760px]:rounded-2xl max-[760px]:border max-[760px]:border-line max-[760px]:bg-card max-[760px]:p-3 max-[760px]:shadow-2xl max-[760px]:transition-all max-[760px]:duration-200 ${
            open
              ? 'max-[760px]:pointer-events-auto max-[760px]:translate-y-0 max-[760px]:opacity-100'
              : 'max-[760px]:pointer-events-none max-[760px]:-translate-y-2 max-[760px]:opacity-0'
          }`}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex min-h-[44px] items-center rounded-lg px-3.5 py-2 text-[14.5px] font-medium text-body transition duration-150 hover:bg-soft hover:text-head max-[760px]:text-base"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />

          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-md border border-line text-head transition duration-150 hover:border-line2 hover:bg-soft min-[761px]:hidden cursor-pointer"
            aria-label={open ? 'Tutup navigasi' : 'Buka navigasi'}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <div className="flex flex-col gap-1 items-center justify-center">
              <span className="h-0.5 w-[18px] rounded-full bg-head" />
              <span className="h-0.5 w-[18px] rounded-full bg-head" />
              <span className="h-0.5 w-[18px] rounded-full bg-head" />
            </div>
          </button>
        </div>
      </div>
    </header>
  )
}
