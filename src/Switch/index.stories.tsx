import type { Meta, StoryObj } from '@storybook/react'
import { Switch } from '.'

export default {
  title: 'Form/Switch',
  component: Switch.Control,
  tags: ['autodocs'],
  args: {
    variant: 'warning'
  },
  argTypes: {}
} as Meta

export const Primary: StoryObj = {}

export const LabelLeft: StoryObj = {
  render: () => {
    return (
      <Switch.Root>
        <label htmlFor="control" className="text-zinc-200">
          Habilitado
        </label>
        <Switch.Control id="control" variant="success" />
      </Switch.Root>
    )
  }
}

export const LabelRight: StoryObj = {
  render: () => {
    return (
      <Switch.Root>
        <Switch.Control id="control" variant="primary" />
        <label htmlFor="control" className="text-zinc-200">
          Habilitado
        </label>
      </Switch.Root>
    )
  }
}
