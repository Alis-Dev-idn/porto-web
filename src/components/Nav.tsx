import { useEffect, useState } from 'react'
import { Icon } from './Icon'
import { profile } from '../data/profile'
import brand from '../assets/brand.png'
import type { Theme } from '../hooks/useTheme'

interface NavProps {
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
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors ${
        scrolled
          ? 'border-line bg-surface/80 backdrop-blur-md backdrop-saturate-150'
          : 'border-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-[1080px] items-center gap-4 px-[clamp(20px,5vw,48px)] py-3.5">
        <a
          href="#top"
          className="inline-flex items-center gap-2.5 font-semibold text-head"
          aria-label={profile.name}
        >
          <img
            src={brand}
            alt=""
            width={36}
            height={36}
            className="h-9 w-9 rounded-[9px] object-cover shadow-sm"
          />
          <span className="text-[15px] max-[760px]:hidden">{profile.name}</span>
        </a>

        <nav
          aria-label="Navigasi utama"
          className={`ml-auto flex gap-1 max-[760px]:absolute max-[760px]:inset-x-3 max-[760px]:top-16 max-[760px]:flex-col max-[760px]:gap-0.5 max-[760px]:rounded-[14px] max-[760px]:border max-[760px]:border-line max-[760px]:bg-card max-[760px]:p-2.5 max-[760px]:shadow-2xl max-[760px]:transition ${
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
              className="rounded-lg px-3.5 py-2 text-[14.5px] font-medium text-body transition hover:bg-soft hover:text-head max-[760px]:py-3"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="ml-2 flex items-center gap-2">
          <button
            type="button"
            className="icon-btn"
            onClick={onToggleTheme}
            aria-label={`Aktifkan mode ${theme === 'dark' ? 'terang' : 'gelap'}`}
          >
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} />
          </button>
          <button
            type="button"
            className="icon-btn hidden flex-col gap-1 max-[760px]:flex"
            aria-label="Buka menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span className="h-0.5 w-[18px] rounded bg-head" />
            <span className="h-0.5 w-[18px] rounded bg-head" />
            <span className="h-0.5 w-[18px] rounded bg-head" />
          </button>
        </div>
      </div>
    </header>
  )
}
