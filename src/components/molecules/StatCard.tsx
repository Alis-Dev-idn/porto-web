export interface StatCardProps {
  value: string
  label: string
}

export function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="rounded-lg border border-line bg-soft p-5 transition duration-150 hover:border-line2">
      <span className="block text-3xl font-bold tracking-tight text-head">
        {value}
      </span>
      <span className="mt-1 block text-[13.5px] text-body">{label}</span>
    </div>
  )
}
