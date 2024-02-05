import { List, TabsListProps } from '@radix-ui/react-tabs'

export default function TabList({ children, ...props }: TabsListProps) {
  return (
    <List
      className="flex gap-1 shrink-0 border-b border-zinc-100/10"
      {...props}
    >
      {children}
    </List>
  )
}
