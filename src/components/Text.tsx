export interface TextProps {
  children: string
  className?: string
}

export function Text({ children, className = 'text-base' }: TextProps) {
  return (
    <p className={`leading-4 m-0 text-zinc-100 ${className}`}>{children}</p>
  )
}

Text.displayName = 'Text'
