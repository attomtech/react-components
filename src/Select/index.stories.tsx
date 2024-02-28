import type { Meta, StoryObj } from '@storybook/react'
import Select, { SelectProps } from '.'

export default {
  title: 'Form/Select',
  component: Select,
  tags: ['autodocs'],
  args: {
    value: 'abc',
    options: [
      {
        value: 'abc',
        label: 'ABC'
      },
      {
        value: 'def',
        label: 'DEF'
      },
      {
        value: 'ghi',
        label: 'GHI'
      }
    ]
  },
  argTypes: {
    value: {
      control: {
        type: 'text'
      }
    },
    variant: {
      options: ['default', 'primary', 'success', 'warning', 'danger'],
      control: {
        type: 'inline-radio'
      }
    }
  }
} as Meta<SelectProps>

export const Primary: StoryObj<SelectProps> = {}
