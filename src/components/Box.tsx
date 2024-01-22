import { BaseHTMLAttributes, ReactNode } from 'react'

export interface BoxProps extends BaseHTMLAttributes<HTMLDivElement> {
  children: ReactNode
  className?: string
}

export function Box({ children, className, ...props }: BoxProps) {
  return (
    <div
      className={`
        p-6 
        rounded-md 
        bg-zinc-800 
        border border-solid border-zinc-600 
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  )
}

Box.displayName = 'Box'

export default Box
