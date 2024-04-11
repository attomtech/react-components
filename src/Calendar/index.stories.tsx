import type { Meta, StoryObj } from '@storybook/react'
import Calendar, { CalendarProps } from '.'

export default {
  title: 'Form/Calendar',
  component: Calendar,
  tags: ['autodocs'],
  args: {},
  argTypes: {}
} as Meta<CalendarProps>

export const Primary: StoryObj<CalendarProps> = {}
