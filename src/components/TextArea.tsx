import { styled } from '../styles'
import { ComponentProps } from 'react'

export const TextArea = styled('textarea', {
  backgroundColor: '$gray900',
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray900',

  fontFamily: '$default',
  fontSize: '$sm',
  color: '$white',
  fontWeight: '$regular',
  resize: 'vertical',
  minHeight: '80',

  '&:focus': {
    outline: 0
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed'
  },

  '&:placeholder': {
    color: '$gray400'
  },

  variants: {
    variant: {
      primary: {
        '&:focus': {
          borderColor: '$blue300'
        }
      },

      success: {
        '&:focus': {
          borderColor: '$green300'
        }
      },

      warning: {
        '&:focus': {
          borderColor: '$yellow300'
        }
      },

      danger: {
        '&:focus': {
          borderColor: '$red300'
        }
      }
    }
  },

  defaultVariants: {
    variant: 'primary'
  }
})

export interface TextAreaProps extends ComponentProps<typeof TextArea> {}

TextArea.displayName = 'TextArea'
