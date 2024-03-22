import type { Meta, StoryObj } from '@storybook/react'
import { TextArea, TextAreaProps } from '.'

export default {
  title: 'Form/TextArea',
  component: TextArea,
  tags: ['autodocs'],
  args: {
    placeholder: 'Texto'
  },
  argTypes: {}
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {}
