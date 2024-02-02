import {
  Content,
  Description,
  Overlay,
  Portal,
  Root,
  Title
} from '@radix-ui/react-alert-dialog'
import { Button, ButtonProps } from '../Button'
import { forwardRef, ReactNode, useImperativeHandle, useState } from 'react'

export interface AlertDialogProps {
  titulo: string
  descricao?: string
  variant?: ButtonProps['variant']
  buttonText?: string
  onConfirm?: (params: object) => void
  size?: 'md' | 'lg'
  hideButtons?: boolean
  children?: ReactNode
}

export interface AlertDialogFunctions {
  open: (params?: object) => void
  close: () => void
}

export const AlertDialog = forwardRef(
  (
    {
      titulo,
      descricao,
      variant = 'default',
      buttonText = 'Confirmar',
      onConfirm,
      size = 'md',
      hideButtons = false,
      children
    }: AlertDialogProps,
    ref
  ) => {
    const [open, setOpen] = useState<boolean>(false)
    const [params, setParams] = useState<object>({})

    useImperativeHandle(ref, () => ({
      open(params = {}) {
        setParams(params)
        setOpen(true)
      },
      close() {
        setOpen(false)
        setParams({})
      }
    }))

    function onConfirmHandle() {
      setOpen(false)
      onConfirm && onConfirm(params)
    }

    return (
      <Root open={open} onOpenChange={setOpen}>
        <Portal>
          <Overlay className="bg-black opacity-50 fixed inset-0 data-[state=open]:animate-overlayShow" />
          <Content
            data-size={size}
            className={`
            bg-zinc-900 
            rounded-md 
            fixed top-1/2 left-1/2 
            translate-x-[-50%] translate-y-[-50%]
            shadow-[hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px],
            
            w-[90vw] max-h-[85vh]
            data-[size=md]:max-w-[500px] 
            data-[size=lg]:max-w-[90vw] 
                        
            p-6
            data-[state=open]:animate-contentShow
            focus:outline-none`}
          >
            <Title className="mx-0 mt-0 mb-2 text-zinc-100 text-2xl font-bold">
              {titulo}
            </Title>
            {descricao && (
              <Description className="mb-5 text-zinc-100 text-base leading-5">
                {descricao}
              </Description>
            )}

            {children}

            {hideButtons || (
              <div className="flex justify-end gap-3">
                <Button onClick={() => setOpen(false)}>Cancelar</Button>
                {onConfirm && (
                  <Button variant={variant} onClick={onConfirmHandle}>
                    {buttonText}
                  </Button>
                )}
              </div>
            )}
          </Content>
        </Portal>
      </Root>
    )
  }
)

AlertDialog.displayName = 'AlertDialog'

export default AlertDialog
