import { styled } from '../../styles'

export const PaginationContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  gap: 10,
  marginTop: '$4',

  width: '100%'
})

const ButtonProps = {
  all: 'unset',
  cursor: 'pointer',
  padding: '$3',
  borderRadius: '$sm'
}

export const BeforeNextPage = styled('button', {
  ...ButtonProps,

  svg: {
    color: '$gray100'
  },

  '&:not(:disabled):hover': {
    svg: {
      color: '$gray300'
    }
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed'
  }
})

export const Page = styled('button', {
  ...ButtonProps,
  color: '$gray100',

  '&:not(:disabled):hover': {
    backgroundColor: '$gray100',
    color: '$gray800'
  },

  '&:disabled': {
    backgroundColor: '$gray200',
    color: '$gray800',
    cursor: 'unset'
  }
})
