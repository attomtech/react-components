import { ButtonHTMLAttributes, ReactNode } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'success' | 'warning' | 'danger' | 'default'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
}

function Ball() {
  return (
    <span className="inline-block w-1 h-1 bg-zinc-200 rounded-full mx-1.5 my-0 animate-scale"></span>
  )
}

function Loading() {
  return (
    <>
      <Ball />
      <Ball />
      <Ball />
    </>
  )
}

export function Button({
  children,
  className = '',
  variant = 'default',
  size = 'md',
  loading = false,
  ...props
}: ButtonProps) {
  return (
    <button
      data-variant={variant}
      data-size={size}
      data-loading={loading}
      className={`
          rounded-md 
          text-sm text-center text-white
          font-medium 
          min-w-32 
          box-border 
          px-0 py-4 
          flex items-center justify-center gap-2 
          cursor-pointer 
          [&>svg]:w-4 [&>svg]:h-4 
          disabled:cursor-not-allowed disabled:bg-zinc-200 disabled:text-zinc-800
          focus:shadow focus:shadow-zinc-100
          
          primary:enabled:bg-sky-500 primary:enabled:hover:bg-sky-300 
          success:enabled:bg-emerald-500 success:enabled:hover:bg-emerald-300
          warning:enabled:bg-yellow-500 warning:enabled:hover:bg-yellow-300
          danger:enabled:bg-red-500 danger:enabled:hover:bg-red-300
          default:enabled:enabled:text-zinc-100 default:enabled:hover:text-white default:disabled:text-zinc-600 default:disabled:bg-transparent
          
          data-[size=sm]:h-9
          data-[size-md]:h-11
          data-[size-lg]:h-14
          
          data-[loading=true]:opacity-70 data-[loading=true]:cursor-not-allowed
          ${className}
      `}
      {...props}
    >
      {loading ? <Loading /> : children}
    </button>
  )
}

Button.displayName = 'Button'

export default Button
