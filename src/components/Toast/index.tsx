import * as ToastRadix from '@radix-ui/react-toast'
import {
  ToastAction,
  ToastDescription,
  ToastRoot,
  ToastTitle,
  ToastViewport
} from './styles'
import { forwardRef, ReactElement, useImperativeHandle, useState } from 'react'

export interface ToastProps {
  title: string
  description: string
  action?: ReactElement
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
  variant?: 'primary' | 'success' | 'warning' | 'danger'
}

export interface ToastFunctions {
  open: () => void
}

export const Toast = forwardRef(
  ({ title, description, action, position, variant }: ToastProps, ref) => {
    const [open, setOpen] = useState<boolean>(false)

    useImperativeHandle(ref, () => ({
      open() {
        setOpen(true)
      }
    }))

    return (
      <ToastRadix.Provider>
        <ToastRoot
          open={open}
          onOpenChange={setOpen}
          duration={3000}
          variant={variant}
          position={position}
        >
          <ToastTitle>{title}</ToastTitle>
          <ToastDescription>{description}</ToastDescription>
          <ToastAction asChild altText="Action">
            {action}
          </ToastAction>
        </ToastRoot>
        <ToastViewport position={position} />
      </ToastRadix.Provider>
    )
  }
)

Toast.displayName = 'Toast'
