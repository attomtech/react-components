import { forwardRef, TextareaHTMLAttributes } from 'react'

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: 'primary' | 'success' | 'warning' | 'danger' | 'default'
  hasError?: boolean
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ variant, hasError, className, ...props }: TextAreaProps, ref) => {
    return (
      <textarea
        ref={ref}
        data-variant={variant}
        data-error={hasError}
        className={`
        w-full
        bg-zinc-900 
        px-3 py-4 
        rounded-md box-border border-2 border-solid border-zinc-900
        text-sm text-white font-normal resize-y
        focus:outline-0
        disabled:opacity-5 disabled:cursor-not-allowed
        placeholder:text-zinc-400
        
        primary:focus:border-sky-300 success:focus:border-emerald-300
        warning:focus:border-yellow-300 danger:focus:border-red-300
        
        data-[error=true]:border-red-500
        
        ${className}
        `}
        {...props}
      ></textarea>
    )
  }
)

TextArea.displayName = 'TextArea'

export default TextArea
