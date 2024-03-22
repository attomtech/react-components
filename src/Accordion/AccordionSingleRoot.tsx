import { Root } from '@radix-ui/react-accordion'
import { ReactNode, useState } from 'react'

interface AccordionSingleRootProps {
  children: ReactNode
  defaultValue?: string
  value?: string
  onValueChange?: (value: string) => void
  className?: string
}

export default function AccordionSingleRoot({
  children,
  defaultValue,
  value,
  onValueChange,
  className = 'w-full'
}: AccordionSingleRootProps) {
  const [vl, setVl] = useState(value || defaultValue)

  function onChange(value: string) {
    setVl(value)
    onValueChange && onValueChange(value)
  }

  return (
    <Root
      className={`bg-zinc-800 ${className}`}
      value={vl}
      onValueChange={onChange}
      collapsible
      type="single"
    >
      {children}
    </Root>
  )
}
