import { Badge } from '../atoms/Badge'

export interface SkillGroupCardProps {
  category: string
  items: string[]
}

export function SkillGroupCard({ category, items }: SkillGroupCardProps) {
  return (
    <div className="rounded-xl border border-line bg-card p-6 shadow-sm transition duration-150 hover:border-line2">
      <h3 className="mb-3.5 text-[15px] font-semibold text-accent">
        {category}
      </h3>
      <ul className="flex flex-wrap gap-2">
        {items.map((item) => (
          <li key={item}>
            <Badge variant="mono">{item}</Badge>
          </li>
        ))}
      </ul>
    </div>
  )
}
