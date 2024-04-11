import type { Meta, StoryObj } from '@storybook/react'
import TextInput, { TextInputProps } from '.'
import { CaretLeft } from 'phosphor-react'

export default {
  title: 'Form/Text Input',
  component: TextInput,
  tags: ['autodocs'],
  args: {
    onOpen: undefined,
    placeholder: 'Texto',
    icon: CaretLeft
  },
  argTypes: {}
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {}
