export interface HeadingProps {
  children: string
  className: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export function Heading({
  children,
  className,
  as: Comp = 'h2'
}: HeadingProps) {
  return (
    <Comp className={`leading-3 m-0 text-zinc-100 ${className}`}>
      {children}
    </Comp>
  )
}

Heading.displayName = 'Heading'
