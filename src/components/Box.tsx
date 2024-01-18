import { ReactNode } from 'react'

export interface BoxProps {
  children: ReactNode
  className?: string
}

export function Box({ children, className }: BoxProps) {
  return (
    <div
      className={`
        p-6 
        rounded-md 
        bg-zinc-800 
        border border-solid border-zinc-600 
        ${className}
      `}
    >
      {children}
    </div>
  )
}

Box.displayName = 'Box'
