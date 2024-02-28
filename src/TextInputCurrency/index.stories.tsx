import type { Meta, StoryObj } from '@storybook/react'
import TextInputCurrency, { TextInputCurrencyProps } from '.'

export default {
  title: 'Form/Text Input Currency',
  component: TextInputCurrency,
  tags: ['autodocs'],
  args: {
    onOpen: undefined
  },
  argTypes: {}
} as Meta<TextInputCurrencyProps>

export const Primary: StoryObj<TextInputCurrencyProps> = {}
