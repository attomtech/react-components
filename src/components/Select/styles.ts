import { styled } from '../../styles'
import * as Select from '@radix-ui/react-select'

export const SelectTrigger = styled(Select.SelectTrigger, {
  all: 'unset',

  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  width: '100%',

  borderRadius: '$sm',
  padding: '$2 0',
  fontSize: '$sm',
  lineHeight: '$base',

  backgroundColor: '$gray900',
  color: '$white',
  boxShadow: `0 2px 10px $colors$gray900`,

  '&:hover': {
    backgroundColor: '$gray800'
  },

  '&:focus': {
    boxShadow: `0 0 0 2px $colors$black`
  },

  '&[data-placeholder]': {
    color: '$white'
  },

  '&[data-disabled]': {
    opacity: 0.5,
    cursor: 'not-allowed'
  },

  variants: {
    variant: {
      primary: {
        '&:focus': {
          border: '1px solid $blue500'
        }
      },

      success: {
        '&:focus': {
          border: '1px solid $green500'
        }
      },

      warning: {
        '&:focus': {
          border: '1px solid $yellow500'
        }
      },

      danger: {
        '&:focus': {
          border: '1px solid $red500'
        }
      }
    }
  },

  defaultVariants: {
    variant: 'primary'
  }
})

export const SelectTriggerButtonsContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0 $4',
  width: '100%'
})

export const SelectIcon = styled(Select.SelectIcon, {
  color: '$white'
})

export const SelectContent = styled(Select.Content, {
  overflow: 'hidden',
  backgroundColor: '$white',
  borderRadius: '$md',
  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)'
})

export const SelectViewport = styled(Select.Viewport, {
  padding: '$2'
})

export const StyledItem = styled(Select.Item, {
  fontSize: '$sm',
  lineHeight: '$base',
  color: '$gray900',
  borderRadius: '$md',

  display: 'flex',
  alignItems: 'center',

  padding: '$1 $3',

  position: 'relative',
  userSelect: 'none',

  '&[data-disabled]': {
    color: '$gray200',
    pointerEvents: 'none'
  },

  '&[data-highlighted]': {
    outline: 'none',
    backgroundColor: '$gray900',
    color: '$white',
    cursor: 'pointer'
  }
})

export const StyledItemIndicator = styled(Select.ItemIndicator, {
  position: 'absolute',
  left: 0,
  width: 10,

  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center'
})

const scrollButtonStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  height: 25,
  backgroundColor: '$white',
  color: '$gray900',
  cursor: 'default'
}

export const SelectScrollUpButton = styled(
  Select.ScrollUpButton,
  scrollButtonStyles
)

export const SelectScrollDownButton = styled(
  Select.ScrollDownButton,
  scrollButtonStyles
)
