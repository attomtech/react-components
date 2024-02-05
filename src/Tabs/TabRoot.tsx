import { Root, TabsProps } from '@radix-ui/react-tabs'

export default function TabRoot({ children, ...props }: TabsProps) {
  return (
    <Root
      className="flex flex-col shadow-[0_2px_10px] shadow-zinc-900"
      {...props}
    >
      {children}
    </Root>
  )
}
