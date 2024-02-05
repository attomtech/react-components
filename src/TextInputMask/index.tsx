import { forwardRef } from 'react'
import { TextInput, TextInputProps } from '../TextInput'
import { InputMask } from '@react-input/mask'

export interface TextInputMaskProps extends TextInputProps {
  mask: string
}

export const TextInputMask = forwardRef<HTMLInputElement, TextInputMaskProps>(
  ({ mask, ...props }, ref) => {
    return (
      <InputMask
        mask={mask}
        component={TextInput}
        ref={ref}
        replacement={{ '#': /\d/, a: /[a-zA-Z]/ }}
        {...props}
      />
    )
  }
)

TextInputMask.displayName = 'TextInputMask'

export default TextInputMask
