import { ButtonHTMLAttributes, ReactNode } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'success' | 'warning' | 'danger' | 'default'
  size?: 'sm' | 'md' | 'lg'
}

export function Button({
  children,
  className,
  variant = 'default',
  size = 'md',
  ...props
}: ButtonProps) {
  return (
    <button
      data-variant={variant}
      data-size={size}
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
          
          primary:text-white primary:bg-sky-500 primary:enabled:hover:bg-sky-300 
          success:text-white success:bg-emerald-500 success:enabled:hover:bg-emerald-300
          warning:text-white warning:bg-yellow-500 warning:enabled:hover:bg-yellow-300
          danger:text-white danger:bg-red-500 danger:enabled:hover:bg-red-300
          default:text-zinc-100 default:enabled:hover:text-white default:disabled:text-zinc-600 default:disabled:bg-transparent
          
          data-[size=sm]:h-9
          data-[size-md]:h-11
          data-[size-lg]:h-14
      `}
      {...props}
    >
      {children}
    </button>
  )
}

Button.displayName = 'Button'

export default Button
