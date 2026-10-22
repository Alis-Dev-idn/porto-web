import type { Theme } from '../../hooks/useTheme'
import { Icon } from '../atoms/Icon'

export interface ThemeToggleProps {
  theme: Theme
  onToggle: () => void
  className?: string
}

export function ThemeToggle({ theme, onToggle, className = '' }: ThemeToggleProps) {
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={onToggle}
      className={`grid h-11 w-11 place-items-center rounded-md border border-line text-head transition duration-150 hover:border-line2 hover:bg-soft active:scale-[0.98] ${className}`.trim()}
      aria-label={`Aktifkan mode ${isDark ? 'terang' : 'gelap'}`}
      title={`Aktifkan mode ${isDark ? 'terang' : 'gelap'}`}
    >
      <Icon name={isDark ? 'sun' : 'moon'} size={20} />
    </button>
  )
}
