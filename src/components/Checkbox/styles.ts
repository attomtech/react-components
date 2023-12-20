import { keyframes, styled } from '../../styles'
import * as Checkbox from '@radix-ui/react-checkbox'

export const CheckboxContainer = styled(Checkbox.Root, {
  all: 'unset',
  width: '$6',
  height: '$6',
  backgroundColor: '$gray900',
  borderRadius: '$xs',
  lineHeight: 0,
  cursor: 'pointer',
  overflow: 'hidden',
  boxSizing: 'border-box',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  border: '2px solid $gray900',

  variants: {
    variant: {
      primary: {
        '&[data-state="checked"]': {
          backgroundColor: '$blue300'
        },

        '&:focus, &[data-state="checked"]': {
          border: '2px solid $blue300'
        }
      },

      success: {
        '&[data-state="checked"]': {
          backgroundColor: '$green300'
        },

        '&:focus, &[data-state="checked"]': {
          border: '2px solid $green300'
        }
      },

      warning: {
        '&[data-state="checked"]': {
          backgroundColor: '$yellow300'
        },

        '&:focus, &[data-state="checked"]': {
          border: '2px solid $yellow300'
        }
      },

      danger: {
        '&[data-state="checked"]': {
          backgroundColor: '$red300'
        },

        '&:focus, &[data-state="checked"]': {
          border: '2px solid $red300'
        }
      }
    }
  },

  defaultVariants: {
    variant: 'primary'
  }
})

const slideIn = keyframes({
  from: {
    transform: 'translateY(-100%)'
  },

  to: {
    transform: 'translateY(0)'
  }
})

const slideOut = keyframes({
  from: {
    transform: 'translateY(0)'
  },

  to: {
    transform: 'translateY(-100%)'
  }
})

export const CheckboxIndicator = styled(Checkbox.Indicator, {
  color: '$white',
  width: '$4',
  height: '$4',

  '&[data-state="checked"]': {
    animation: `${slideIn} 200ms ease-out`
  },

  '&[data-state="unchecked"]': {
    animation: `${slideOut} 200ms ease-out`
  }
})
