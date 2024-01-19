import { BaseHTMLAttributes } from 'react'

export interface TextProps extends BaseHTMLAttributes<HTMLParagraphElement> {
  children: string
  as?: 'p' | 'strong'
}

export function Text({
  children,
  className = 'text-base',
  as: Comp = 'p',
  ...props
}: TextProps) {
  return (
    <Comp className={`leading-4 m-0 text-zinc-100 ${className}`} {...props}>
      {children}
    </Comp>
  )
}

Text.displayName = 'Text'
