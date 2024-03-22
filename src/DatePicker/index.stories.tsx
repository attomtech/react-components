import type { Meta, StoryObj } from '@storybook/react'
import DatePicker from './index'

export default {
  title: 'Form/Date Picker',
  component: DatePicker,
  tags: ['autodocs'],
  args: {
    onOpen: undefined
  },
  argTypes: {}
} as Meta<any>

export const Primary: StoryObj<any> = {}
