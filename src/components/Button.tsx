import { ButtonHTMLAttributes, ReactNode } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'success' | 'warning' | 'danger' | 'back'
  size?: 'sm' | 'md' | 'lg'
}

const variantClasses = {
  primary: 'text-white bg-sky-500 enabled:hover:bg-sky-300',
  success: 'text-white bg-emerald-500 enabled:hover:bg-emerald-300',
  warning: 'text-white bg-yellow-500 enabled:hover:bg-yellow-300',
  danger: 'text-white bg-red-500 enabled:hover:bg-red-300',
  back: 'text-zinc-100 enabled:hover:text-white disabled:text-zinc-600 disabled:bg-transparent'
}

const sizeClasses = {
  sm: 'h-9',
  md: 'h-11',
  lg: 'h-14'
}

export function Button({
  children,
  className,
  variant = 'primary',
  size = 'md',
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
          rounded-md 
          text-sm text-center 
          font-medium 
          min-w-32 
          box-border 
          px-0 py-4 
          flex items-center justify-center gap-2 
          cursor-pointer 
          [&>svg]:w-4 [&>svg]:h-4 
          disabled:cursor-not-allowed disabled:bg-zinc-200 
          focus:shadow focus:shadow-zinc-100 
          ${variantClasses[variant]}
          ${sizeClasses[size]}`}
      {...props}
    >
      {children}
    </button>
  )
}

Button.displayName = 'Button'

export default Button
