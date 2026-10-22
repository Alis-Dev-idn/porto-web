import React from 'react'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'mono' | 'status-live' | 'status-internal' | 'status-coming-soon' | 'accent' | 'accent2'
  size?: 'sm' | 'md'
  icon?: React.ReactNode
}

export function Badge({
  children,
  variant = 'default',
  size = 'md',
  icon,
  className = '',
  ...rest
}: BadgeProps) {
  const baseStyles =
    'inline-flex items-center gap-1.5 rounded-full border font-medium whitespace-nowrap transition-colors'

  const sizeStyles = {
    sm: 'px-2 py-0.5 text-[11.5px]',
    md: 'px-2.5 py-1 text-[13px]',
  }

  const variantStyles = {
    default: 'border-line bg-soft text-body',
    mono: 'border-line bg-soft text-body font-mono text-[12.5px] tracking-tight',
    'status-live': 'border-transparent bg-accent2/15 text-accent2 font-semibold uppercase tracking-wide',
    'status-internal': 'border-line bg-soft text-body font-semibold uppercase tracking-wide',
    'status-coming-soon': 'border-transparent bg-asoft text-accent font-semibold uppercase tracking-wide',
    accent: 'border-accent/30 bg-asoft text-accent font-semibold',
    accent2: 'border-accent2/30 bg-a2soft text-accent2 font-semibold',
  }

  return (
    <span
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`.trim()}
      {...rest}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </span>
  )
}
