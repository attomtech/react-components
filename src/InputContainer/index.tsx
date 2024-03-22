import { ReactNode } from 'react'

export interface InputContainerProps {
  children?: ReactNode
  variant?: 'primary' | 'success' | 'warning' | 'danger' | 'default'
  padding?: 'sm' | 'md' | 'lg'
  hasError?: boolean
  onOpen?: () => void
  className?: string
}

export default function InputContainer({
  children,
  variant = 'default',
  padding = 'md',
  hasError,
  onOpen,
  className
}: InputContainerProps) {
  return (
    <div
      data-modal={!!onOpen}
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
          
          data-[modal=true]:cursor-pointer
          
          ${className}
        `}
      onClick={() => {
        onOpen && onOpen()
      }}
    >
      {children}
    </div>
  )
}
