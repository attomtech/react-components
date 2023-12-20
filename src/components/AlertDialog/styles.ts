import * as AlertDialog from '@radix-ui/react-alert-dialog'
import { keyframes, styled } from '../../styles'

const overlayShow = keyframes({
  '0%': {
    opacity: 0
  },
  '100%': {
    opacity: 0.5
  }
})

const contentShow = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translate(-50%, -48%) scale(.96)'
  },
  '100%': {
    opacity: 1,
    transform: 'translate(-50%, -50%) scale(1)'
  }
})

export const AlertDialogOverlay = styled(AlertDialog.Overlay, {
  backgroundColor: '$black',
  opacity: 0.5,
  position: 'fixed',
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
})

export const AlertDialogContent = styled(AlertDialog.Content, {
  backgroundColor: '$gray900',
  borderRadius: '$md',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '500px',
  maxHeight: '85vh',
  padding: '$6',
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,

  '&:focus': {
    outline: 'none'
  }
})

export const AlertDialogTitle = styled(AlertDialog.Title, {
  margin: 0,
  color: '$gray100',
  fontSize: '$xl',
  fontWeight: '$bold'
})

export const AlertDialogDescription = styled(AlertDialog.Description, {
  marginBottom: '$5',
  color: '$gray100',
  fontSize: '$md',
  lineHeight: '$short'
})

export const Flex = styled('div', {
  display: 'flex',
  justifyContent: 'flex-end',
  gap: 10
})
