import { TextareaHTMLAttributes } from 'react'

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: 'primary' | 'success' | 'warning' | 'danger' | 'default'
}

export function TextArea({
  children,
  variant = 'default',
  className = '',
  ...props
}: TextAreaProps) {
  return (
    <textarea
      data-variant={variant}
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
        
        ${className}
        `}
      {...props}
    >
      {children}
    </textarea>
  )
}

TextArea.displayName = 'TextArea'

export default TextArea
