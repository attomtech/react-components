import { styled } from '../../styles'
import { ArrowUp } from 'phosphor-react'

const smallScreenMediaQuery = `@media only screen and (max-width: 600px)`
const bigScreenMediaQuery = `@media only screen and (min-width: 601px)`

export const Table = styled('table', {
  width: '100%',
  fontFamily: '$default',
  color: '$white',
  borderCollapse: 'collapse',

  [smallScreenMediaQuery]: {
    border: 0,

    '> caption': {
      fontSize: '$sm'
    }
  }
})

export const Thead = styled('thead', {
  [smallScreenMediaQuery]: {
    border: 'none',
    clip: 'rect(0,0,0,0)',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    width: '1px'
  }
})

export const Th = styled('th', {
  padding: '$3 $4',
  textAlign: 'left',

  variants: {
    clickable: {
      true: {
        cursor: 'pointer'
      },

      false: {}
    }
  },

  defaultVariants: {
    clickable: false
  }
})

export const HiddenIcon = styled(ArrowUp, {
  opacity: 0
})

export const Td = styled('td', {
  padding: '$1 $4',
  color: '$gray300',

  [bigScreenMediaQuery]: {
    '&:first-child': {
      borderTopLeftRadius: '$md',
      borderBottomLeftRadius: '$md'
    },

    '&:last-child': {
      borderTopRightRadius: '$md',
      borderBottomRightRadius: '$md'
    }
  },

  [smallScreenMediaQuery]: {
    borderBottom: '1px solid $gray300',
    display: 'block',
    fontSize: '$xs',
    textAlign: 'right',

    '&::before': {
      content: 'attr(data-label)',
      float: 'left',
      fontWeight: '$bold',
      textTransform: 'uppercase'
    },

    '&:last-child': {
      borderBottom: 0
    }
  }
})

export const ActionTd = styled(Td, {
  display: 'flex',
  justifyContent: 'center',
  gap: 20
})

export const ActionButton = styled('button', {
  all: 'unset',
  padding: '$1',
  cursor: 'pointer',

  '&:disabled': {
    all: 'unset',
    opacity: 0
  },

  variants: {
    variant: {
      default: {
        svg: {
          color: '$gray500',
          size: '20px',

          '&:hover': {
            color: '$gray200'
          }
        }
      },

      primary: {
        svg: {
          color: '$blue500',

          '&:hover': {
            color: '$blue300'
          }
        }
      },

      success: {
        svg: {
          color: '$green500',

          '&:hover': {
            color: '$green300'
          }
        }
      },

      warning: {
        svg: {
          color: '$yellow500',

          '&:hover': {
            color: '$yellow300'
          }
        }
      },

      danger: {
        svg: {
          color: '$red500',

          '&:hover': {
            color: '$red300'
          }
        }
      }
    }
  },

  defaultVariants: {
    variant: 'default'
  }
})

export const Tr = styled('tr', {
  [bigScreenMediaQuery]: {
    [`&:nth-child(even) td`]: {
      backgroundColor: '$gray700'
    }
  },

  [smallScreenMediaQuery]: {
    borderBottom: '3px solid $gray700',
    display: 'block',
    marginBottom: '$2',
    backgroundColor: '$gray700',
    borderColor: '$gray300'
  }
})
