import { ElementRef, forwardRef, InputHTMLAttributes } from 'react'

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  prefix?: string
  variant?: 'primary' | 'success' | 'warning' | 'danger' | 'default'
  padding?: 'sm' | 'md' | 'lg'
  hasError?: boolean
}

export const TextInput = forwardRef<ElementRef<'input'>, TextInputProps>(
  (
    {
      prefix,
      variant = 'default',
      padding = 'md',
      hasError = false,
      className,
      ...props
    }: TextInputProps,
    ref
  ) => {
    return (
      <div
        data-variant={variant}
        data-padding={padding}
        data-error={hasError}
        className={`
          bg-zinc-900
          rounded-sm
          box-border border-2 border-solid border-zinc-900
          flex items-center
          has-[input:disabled]:opacity-50 has-[input:disabled]:cursor-not-allowed
          
          default:has-[input:focus]:border-zinc-200
          primary:has-[input:focus]:border-sky-500
          success:has-[input:focus]:border-emerald-500
          warning:has-[input:focus]:border-yellow-500
          danger:has-[input:focus]:border-red-500

          data-[padding=sm]:py-2 data-[padding=sm]:px-3
          data-[padding=md]:py-3 data-[padding=md]:px-4
          data-[padding=lg]:py-4 data-[padding=lg]:px-5
          
          data-[error=true]:border-red-500 data-[error=true]:has-[input:focus]:border-red-500
          
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
