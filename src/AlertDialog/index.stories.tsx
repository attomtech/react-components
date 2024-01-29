import type { Meta, StoryObj } from '@storybook/react'

import { AlertDialog, AlertDialogFunctions, AlertDialogProps } from '.'
import Box from '../Box'
import Button from '../Button'
import { useRef } from 'react'

export default {
  title: 'Data display/Alert Dialog',
  component: AlertDialog,
  tags: ['autodocs'],
  args: {
    variant: 'primary',
    titulo: 'Título',
    descricao: 'Descrição',
    buttonText: 'Botão',
    onConfirm: () => {
      alert('Clicou')
    }
  },
  argTypes: {
    titulo: {
      control: {
        type: 'text'
      }
    },
    descricao: {
      control: {
        type: 'text'
      }
    },
    buttonText: {
      control: {
        type: 'text'
      }
    },
    variant: {
      options: ['primary', 'success', 'warning', 'danger'],
      control: {
        type: 'inline-radio'
      }
    }
  },
  decorators: [
    (Story: any, options) => {
      const ref = useRef<AlertDialogFunctions>()

      return (
        <Box>
          <AlertDialog {...options.args} ref={ref} />

          <Button
            onClick={() => {
              ref.current?.open()
            }}
          >
            Abrir
          </Button>
        </Box>
      )
    }
  ]
} as Meta<AlertDialogProps>

export const Primary: StoryObj<AlertDialogProps> = {}
