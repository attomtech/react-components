import type { Meta, StoryObj } from '@storybook/react'
import TextInputMask, { TextInputMaskProps } from '.'

export default {
  title: 'Form/Text Input Mask',
  component: TextInputMask,
  tags: ['autodocs'],
  args: {
    mask: '###.aaa.###',
    variant: 'primary'
  },
  argTypes: {}
} as Meta<TextInputMaskProps>

export const Primary: StoryObj<TextInputMaskProps> = {}
