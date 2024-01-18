import { ReactNode } from 'react'

export interface BoxProps {
  children: ReactNode
}

export function Box({ children }: BoxProps) {
  return (
    <div className="p-6 rounded-md bg-zinc-800 border border-solid border-zinc-600">
      {children}
    </div>
  )
}

Box.displayName = 'Box'
