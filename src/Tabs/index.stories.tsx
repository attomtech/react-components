import type { Meta, StoryObj } from '@storybook/react'
import Tabs from '.'

export default {
  title: 'Surfaces/Tabs',
  component: Tabs.Root,
  tags: ['autodocs'],
  args: {},
  argTypes: {
    variant: {
      options: ['default', 'primary', 'success', 'warning', 'danger'],
      control: {
        type: 'inline-radio'
      }
    }
  }
} as Meta

export const Primary: StoryObj = {
  render: (param, ctx) => {
    return (
      <Tabs.Root defaultValue="tab1">
        <Tabs.List>
          <Tabs.Trigger value="tab1" variant={ctx.allArgs.variant}>
            Tab 1
          </Tabs.Trigger>
          <Tabs.Trigger value="tab2" variant={ctx.allArgs.variant}>
            Tab 2
          </Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="tab1">Tab 1</Tabs.Content>
        <Tabs.Content value="tab2">Tab 2</Tabs.Content>
      </Tabs.Root>
    )
  }
}
