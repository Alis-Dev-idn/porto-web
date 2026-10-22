import React from 'react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'icon'
  size?: 'sm' | 'md' | 'lg'
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  asLink?: boolean
  href?: string
  target?: string
  rel?: string
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  asLink = false,
  href,
  target,
  rel,
  className = '',
  ...rest
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold transition duration-150 cursor-pointer select-none'

  const variantStyles = {
    primary:
      'rounded-full bg-accent text-white shadow-[0_2px_8px_rgba(37,99,235,0.2)] hover:shadow-[0_4px_14px_rgba(37,99,235,0.35)] hover:brightness-105 active:scale-[0.98] active:translate-y-px',
    outline:
      'rounded-full border border-line2 text-head hover:border-accent hover:text-accent hover:bg-asoft/30 active:scale-[0.98] active:translate-y-px',
    ghost:
      'rounded-full text-body hover:bg-soft hover:text-head active:scale-[0.98]',
    icon:
      'grid h-11 w-11 place-items-center rounded-md border border-line text-head hover:border-line2 hover:bg-soft active:scale-[0.98]',
  }

  const sizeStyles = {
    sm: 'px-3.5 py-1.5 text-xs min-h-[36px] gap-1.5',
    md: 'px-5 py-3 text-sm min-h-[44px] gap-2',
    lg: 'px-6 py-3.5 text-base min-h-[48px] gap-2.5',
  }

  const combinedClass = `${baseStyles} ${variantStyles[variant]} ${
    variant === 'icon' ? '' : sizeStyles[size]
  } ${className}`.trim()

  if (asLink && href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? (rel ?? 'noreferrer noopener') : rel}
        className={combinedClass}
        onClick={rest.onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}
        aria-label={rest['aria-label']}
      >
        {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
        {children}
        {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
      </a>
    )
  }

  return (
    <button className={combinedClass} {...rest}>
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </button>
  )
}
