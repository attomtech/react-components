import { ElementRef, forwardRef, InputHTMLAttributes } from 'react'

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  prefix?: string
  variant?: 'primary' | 'success' | 'warning' | 'danger'
  padding?: 'sm' | 'md' | 'lg'
}

const variantClasses = {
  primary: 'has-[input:focus]:border-sky-500',
  success: 'has-[input:focus]:border-emerald-500',
  warning: 'has-[input:focus]:border-yellow-500',
  danger: 'has-[input:focus]:border-red-500'
}

const paddingClasses = {
  sm: 'py-2 px-3',
  md: 'py-3 px-4',
  lg: 'py-4 px-5'
}

export const TextInput = forwardRef<ElementRef<'input'>, TextInputProps>(
  (
    {
      prefix,
      variant = 'primary',
      padding = 'md',
      className,
      ...props
    }: TextInputProps,
    ref
  ) => {
    return (
      <div
        className={`
        bg-zinc-900
        rounded-sm
        box-border border-2 border-solid border-zinc-900
        flex items-center
        has-[input:disabled]:opacity-50 has-[input:disabled]:cursor-not-allowed
        ${variantClasses[variant]}
        ${paddingClasses[padding]}
        ${className}
      `}
      >
        {!!prefix && (
          <span className="text-sm text-zinc-400 font-normal">{prefix}</span>
        )}
        <input
          className={`
          text-sm text-white font-normal
          bg-transparent
          border-0
          w-full
          focus:outline-0
          disabled:cursor-not-allowed
          placeholder:text-zinc-400
        `}
          ref={ref}
          {...props}
        />
      </div>
    )
  }
)

TextInput.displayName = 'TextInput'

export default TextInput
