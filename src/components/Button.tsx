import { styled } from '../styles'
import { ComponentProps, ElementType } from 'react'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$medium',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',
  padding: '0 $4',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  cursor: 'pointer',

  svg: {
    width: '$4',
    height: '$4'
  },

  '&:disabled': {
    cursor: 'not-allowed',
    background: '$gray200'
  },

  '&:focus': {
    boxShadow: '0 0 0 2px $colors$gray100'
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        background: '$blue500',

        '&:not(:disabled):hover': {
          background: '$blue300'
        }
      },

      success: {
        color: '$white',
        background: '$green500',

        '&:not(:disabled):hover': {
          background: '$green300'
        }
      },

      warning: {
        color: '$white',
        background: '$yellow500',

        '&:not(:disabled):hover': {
          background: '$yellow300'
        }
      },

      danger: {
        color: '$white',
        background: '$red500',

        '&:not(:disabled):hover': {
          background: '$red300'
        }
      },

      back: {
        color: '$gray100',

        '&:not(:disabled):hover': {
          color: '$white'
        },

        '&:disabled': {
          color: '$gray600',
          background: 'transparent'
        }
      }
    },

    size: {
      sm: {
        height: 38
      },
      md: {
        height: 46
      },
      lg: {
        height: 54
      }
    }
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md'
  }
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}

Button.displayName = 'Button'
