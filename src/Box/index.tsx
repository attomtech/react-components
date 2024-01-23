import { BaseHTMLAttributes, ReactNode } from 'react'

export interface BoxProps
  extends BaseHTMLAttributes<HTMLDivElement | HTMLFormElement> {
  children: ReactNode
  className?: string
  as?: 'div' | 'form'
}

export function Box({
  children,
  className,
  as: Comp = 'div',
  ...props
}: BoxProps) {
  return (
    <Comp
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
    </Comp>
  )
}

Box.displayName = 'Box'

export default Box
