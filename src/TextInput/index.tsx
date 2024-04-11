import {
  ElementType,
  EventHandler,
  forwardRef,
  InputHTMLAttributes,
  MouseEventHandler
} from 'react'
import InputContainer, { InputContainerProps } from '../InputContainer'
import { X } from 'phosphor-react'

export interface TextInputProps
  extends InputContainerProps,
    InputHTMLAttributes<HTMLInputElement> {
  prefix?: string
  mask?: string
  icon?: ElementType | null
  onClickIcon?: () => void
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      prefix,
      mask,
      onOpen,
      className,
      hasError,
      variant,
      padding,
      icon: Icon,
      onClickIcon,
      ...props
    }: TextInputProps,
    ref
  ) => {
    return (
      <InputContainer
        onOpen={onOpen}
        className={className}
        hasError={hasError}
        variant={variant}
        padding={padding}
      >
        {!!prefix && (
          <span className="text-sm text-zinc-400 font-normal">{prefix}</span>
        )}
        <input
          readOnly={onOpen !== undefined}
          className={`
                text-sm text-white font-normal
                bg-transparent
                border-0
                w-full
                focus:outline-0
                disabled:cursor-not-allowed
                placeholder:text-zinc-400
                
                read-only:pointer-events-none
              `}
          ref={ref}
          {...props}
        />
        {!!Icon && (
          <Icon
            onClick={(e: any) => {
              e.stopPropagation()
              onClickIcon && onClickIcon()
            }}
            className="text-zinc-200 cursor-pointer"
          />
        )}
      </InputContainer>
    )
  }
)

TextInput.displayName = 'TextInput'

export default TextInput
