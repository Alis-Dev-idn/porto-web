import React from 'react'

export interface SectionHeaderProps {
  number: string
  title: React.ReactNode
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeader({
  number,
  title,
  align = 'left',
  className = '',
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-10 flex items-baseline gap-3.5 ${
        align === 'center' ? 'justify-center' : 'justify-start'
      } ${className}`.trim()}
    >
      <span className="font-mono text-sm font-semibold text-accent">{number}</span>
      <h2 className="text-[clamp(26px,4vw,36px)] font-bold text-head">{title}</h2>
    </div>
  )
}
