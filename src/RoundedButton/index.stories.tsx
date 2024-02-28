import type { Meta, StoryObj } from '@storybook/react'
import RoundedButton, { RoundedButtonProps } from './index'
import { Plus } from 'phosphor-react'

export default {
  title: 'Form/Rounded Button',
  component: RoundedButton,
  tags: ['autodocs'],
  args: {
    variant: 'primary',
    size: 'md'
  },
  argTypes: {}
} as Meta<RoundedButtonProps>

export const Primary: StoryObj<RoundedButtonProps> = {
  render: (param, ctx) => {
    return (
      <RoundedButton {...ctx.allArgs}>
        <Plus />
      </RoundedButton>
    )
  }
}
