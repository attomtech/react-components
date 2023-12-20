import { keyframes, styled } from '../../styles'
import * as Toast from '@radix-ui/react-toast'

const VIEWPORT_PADDING = 25

export const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
  padding: VIEWPORT_PADDING,
  width: 390,
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',

  variants: {
    position: {
      'top-right': {
        top: 0,
        right: 0
      },

      'top-left': {
        top: 0,
        left: 0
      },

      'bottom-right': {
        bottom: 0,
        right: 0
      },

      'bottom-left': {
        bottom: 0,
        left: 0
      }
    }
  },

  defaultVariants: {
    position: 'top-right'
  }
})

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 }
})

const slideInRight = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: 'translateX(0)' }
})

const slideInLeft = keyframes({
  from: {
    transform: `translateX(-${VIEWPORT_PADDING}px)`
  },
  to: {
    transform: 'translateX(0)'
  }
})

const slideOutRight = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` }
})

const slideOutLeft = keyframes({
  from: {
    transform: 'translate(var(--radix-toast-swipe-end-x))'
  },
  to: {
    transform: `translateX(-${VIEWPORT_PADDING}px)`
  }
})

export const ToastTitle = styled(Toast.Title, {
  gridArea: 'title',
  marginBottom: '$1',
  fontWeight: '$bold',
  color: '$gray900',
  fontSize: '$md'
})

export const ToastDescription = styled(Toast.Description, {
  gridArea: 'description',
  margin: 0,
  color: '$gray600',
  fontSize: '$sm',
  lineHeight: '$short'
})

export const ToastRoot = styled(Toast.Root, {
  backgroundColor: '$white',
  borderRadius: '$md',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  padding: '$4',
  display: 'grid',
  gridTemplateAreas: '"title action" "description action"',
  gridTemplateColumns: 'auto max-content',
  columnGap: 15,
  alignItems: 'center',

  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`
  },

  '&[data-swipe="move"]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))'
  },

  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out'
  },

  variants: {
    variant: {
      default: {
        backgroundColor: '$white',

        [`> ${ToastTitle}, > ${ToastDescription}`]: {
          color: '$gray800'
        }
      },

      primary: {
        backgroundColor: '$blue300',

        [`> ${ToastTitle}, > ${ToastDescription}`]: {
          color: '$gray800'
        }
      },

      success: {
        backgroundColor: '$green500',

        [`> ${ToastTitle}, > ${ToastDescription}`]: {
          color: '$gray800'
        }
      },

      warning: {
        backgroundColor: '$yellow300',

        [`> ${ToastTitle}, > ${ToastDescription}`]: {
          color: '$gray800'
        }
      },

      danger: {
        backgroundColor: '$red300',

        [`> ${ToastTitle}, > ${ToastDescription}`]: {
          color: '$gray900'
        }
      }
    },
    position: {
      'top-left': {
        '&[data-state="open"]': {
          animation: `${slideInLeft} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
        },

        '&[data-swipe="end"]': {
          animation: `${slideOutLeft} 100ms ease-out`
        }
      },

      'bottom-left': {
        '&[data-state="open"]': {
          animation: `${slideInLeft} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
        },

        '&[data-swipe="end"]': {
          animation: `${slideOutLeft} 100ms ease-out`
        }
      },

      'top-right': {
        '&[data-state="open"]': {
          animation: `${slideInRight} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
        },

        '&[data-swipe="end"]': {
          animation: `${slideOutRight} 100ms ease-out`
        }
      },

      'bottom-right': {
        '&[data-state="open"]': {
          animation: `${slideInRight} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
        },

        '&[data-swipe="end"]': {
          animation: `${slideOutRight} 100ms ease-out`
        }
      }
    }
  },

  defaultVariants: {
    variant: 'default',
    position: 'top-right'
  }
})

export const ToastAction = styled(Toast.Action, {
  gridArea: 'action'
})
