import { BaseHTMLAttributes } from 'react'

export interface TextProps extends BaseHTMLAttributes<HTMLParagraphElement> {
  children: string
  as?: 'p' | 'strong'
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl'
}

export function Text({
  children,
  className = '',
  as: Comp = 'p',
  size = 'base',
  ...props
}: TextProps) {
  return (
    <Comp
      className={`leading-4 m-0 text-zinc-100 text-${size} ${className}`}
      {...props}
    >
      {children}
    </Comp>
  )
}

Text.displayName = 'Text'

export default Text
