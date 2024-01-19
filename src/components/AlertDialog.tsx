import * as AlertDialogRadix from '@radix-ui/react-alert-dialog'
import { Button, ButtonProps } from './Button'
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
          <AlertDialogRadix.Overlay className="bg-black opacity-50 fixed inset-0 data-[state=open]:animate-overlayShow" />
          <AlertDialogRadix.Content
            className={`
            bg-zinc-900 
            rounded-md 
            fixed top-1/2 left-1/2 
            translate-x-[-50%] translate-y-[-50%]
            shadow-[hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px],
            w-[90vw] max-w-[500px] max-h-[85vh]
            p-6
            data-[state=open]:animate-contentShow
            focus:outline-none`}
          >
            <AlertDialogRadix.Title className="mx-0 mt-0 mb-2 text-zinc-100 text-2xl font-bold">
              {titulo}
            </AlertDialogRadix.Title>
            <AlertDialogRadix.Description className="mb-5 text-zinc-100 text-base leading-5">
              {descricao}
            </AlertDialogRadix.Description>
            <div className="flex justify-end gap-3">
              <Button variant="back" onClick={() => setOpen(false)}>
                Cancelar
              </Button>
              <Button variant={variant} onClick={onConfirmHandle}>
                {buttonText}
              </Button>
            </div>
          </AlertDialogRadix.Content>
        </AlertDialogRadix.Portal>
      </AlertDialogRadix.Root>
    )
  }
)

AlertDialog.displayName = 'AlertDialog'