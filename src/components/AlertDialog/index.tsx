import * as AlertDialogRadix from '@radix-ui/react-alert-dialog'
import {
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogOverlay,
  AlertDialogTitle,
  Flex
} from './styles'
import { Button, ButtonProps } from '../Button'
import { forwardRef, useImperativeHandle, useState } from 'react'

export interface AlertDialogProps {
  titulo: string
  descricao: string
  variant: ButtonProps['variant']
  buttonText: string
  onConfirm: () => void
}

export interface AlertDialogFunctions {
  open: () => void
}

export const AlertDialog = forwardRef(
  (
    { titulo, descricao, variant, buttonText, onConfirm }: AlertDialogProps,
    ref
  ) => {
    const [open, setOpen] = useState<boolean>(false)

    useImperativeHandle(ref, () => ({
      open() {
        setOpen(true)
      }
    }))

    function onConfirmHandle() {
      setOpen(false)
      onConfirm()
    }

    return (
      <AlertDialogRadix.Root open={open} onOpenChange={setOpen}>
        <AlertDialogRadix.Portal>
          <AlertDialogOverlay />
          <AlertDialogContent>
            <AlertDialogTitle>{titulo}</AlertDialogTitle>
            <AlertDialogDescription>{descricao}</AlertDialogDescription>
            <Flex>
              <Button variant="back" onClick={() => setOpen(false)}>
                Cancelar
              </Button>
              <Button variant={variant} onClick={onConfirmHandle}>
                {buttonText}
              </Button>
            </Flex>
          </AlertDialogContent>
        </AlertDialogRadix.Portal>
      </AlertDialogRadix.Root>
    )
  }
)

AlertDialog.displayName = 'AlertDialog'
