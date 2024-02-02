import type { Meta, StoryObj } from '@storybook/react'
import TextInput, { TextInputProps } from '.'

export default {
  title: 'Form/Text Input',
  component: TextInput,
  tags: ['autodocs'],
  args: {},
  argTypes: {}
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {}
