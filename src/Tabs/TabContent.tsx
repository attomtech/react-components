import { Content, TabsContentProps } from '@radix-ui/react-tabs'

export default function TabContent({ children, ...props }: TabsContentProps) {
  return <Content {...props}>{children}</Content>
}
