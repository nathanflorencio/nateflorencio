import Link from 'next/link'
import { ReactNode } from 'react'

type NavLinkProps = {
  to: string
  children: ReactNode
}

export function NavLink({ to, children }: NavLinkProps) {
  return (
    <Link
      href={to}
      className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground data-[current=true]:text-foreground"
    >
      {children}
    </Link>
  )
}
