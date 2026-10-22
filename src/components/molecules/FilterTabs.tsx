import type { ProjectContext } from '../../data/types'

export type FilterValue = 'all' | ProjectContext

export interface FilterOption {
  value: FilterValue
  label: string
}

export interface FilterTabsProps {
  activeFilter: FilterValue
  onSelect: (filter: FilterValue) => void
  options: FilterOption[]
  className?: string
}

export function FilterTabs({
  activeFilter,
  onSelect,
  options,
  className = '',
}: FilterTabsProps) {
  return (
    <div
      role="tablist"
      aria-label="Filter kategori portofolio"
      className={`flex flex-wrap gap-2 ${className}`.trim()}
    >
      {options.map((item) => {
        const isSelected = activeFilter === item.value
        return (
          <button
            key={item.value}
            id={`tab-${item.value}`}
            type="button"
            role="tab"
            aria-selected={isSelected}
            aria-controls="portfolio-tabpanel"
            onClick={() => onSelect(item.value)}
            className={`min-h-[44px] cursor-pointer rounded-full border px-4 py-2 text-sm font-medium transition duration-150 active:scale-[0.98] ${
              isSelected
                ? 'border-accent bg-accent text-white shadow-[0_2px_8px_rgba(37,99,235,0.25)]'
                : 'border-line bg-soft text-body hover:border-line2 hover:text-head'
            }`}
          >
            {item.label}
          </button>
        )
      })}
    </div>
  )
}
