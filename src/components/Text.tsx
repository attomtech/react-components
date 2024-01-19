import { BaseHTMLAttributes } from 'react'

export interface TextProps extends BaseHTMLAttributes<HTMLParagraphElement> {
  children: string
  className?: string
}

export function Text({
  children,
  className = 'text-base',
  ...props
}: TextProps) {
  return (
    <p className={`leading-4 m-0 text-zinc-100 ${className}`} {...props}>
      {children}
    </p>
  )
}

Text.displayName = 'Text'
