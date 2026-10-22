import type { ContactLink } from '../../data/types'
import { Icon, type IconName } from '../atoms/Icon'

export interface ContactCardProps {
  contact: ContactLink
}

export function ContactCard({ contact }: ContactCardProps) {
  const isExternal = contact.icon !== 'mail'

  return (
    <a
      href={contact.href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer noopener' : undefined}
      className="flex items-center gap-3.5 rounded-xl border border-line bg-card p-[18px_20px] text-left shadow-sm transition duration-150 hover:-translate-y-0.5 hover:border-accent hover:shadow-md active:scale-[0.99]"
      aria-label={`${contact.label}: ${contact.value}`}
    >
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-asoft text-accent">
        <Icon name={contact.icon as IconName} size={20} />
      </span>
      <span className="flex min-w-0 flex-col">
        <span className="text-[12.5px] text-body">{contact.label}</span>
        <span className="truncate text-[14.5px] font-semibold text-head">
          {contact.value}
        </span>
      </span>
    </a>
  )
}
