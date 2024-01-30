import type { Meta, StoryObj } from '@storybook/react'

import InputFile, { InputFileProps } from '.'
import Box from '../Box'

export default {
  title: 'Form/InputFile',
  component: InputFile,
  tags: ['autodocs'],
  args: {
    onSelected: (file: File) => {
      console.log(file)
    }
  },
  argTypes: {
    label: {
      type: 'string'
    }
  },
  decorators: [
    (Story: any, options) => {
      return <Box>{Story()}</Box>
    }
  ]
} as Meta<InputFileProps>

export const Primary: StoryObj<InputFileProps> = {}
