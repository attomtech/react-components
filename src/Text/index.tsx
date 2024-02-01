import { BaseHTMLAttributes } from 'react'

export interface TextProps
  extends BaseHTMLAttributes<HTMLParagraphElement & HTMLLabelElement> {
  children: string
  as?: 'p' | 'strong' | 'label'
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl'
  htmlFor?: string
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
