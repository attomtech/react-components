import { ButtonHTMLAttributes, ReactNode } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'success' | 'warning' | 'danger' | 'back'
  size?: 'sm' | 'md' | 'lg'
}

export function Button({
  children,
  className,
  variant = 'primary',
  size = 'md',
  ...props
}: ButtonProps) {
  function getVariantClasses(variant: string) {
    switch (variant) {
      case 'primary':
        return 'text-white bg-sky-500 enabled:hover:bg-sky-300'
      case 'success':
        return 'text-white bg-emerald-500 enabled:hover:bg-emerald-300'
      case 'warning':
        return 'text-white bg-yellow-500 enabled:hover:bg-yellow-300'
      case 'danger':
        return 'text-white bg-red-500 enabled:hover:bg-red-300'
      case 'back':
        return 'text-zinc-100 enabled:hover:text-white disabled:text-zinc-600 disabled:bg-transparent'
    }
  }

  function getSizeClasses(size: string) {
    switch (size) {
      case 'sm':
        return 'h-9'
      case 'md':
        return 'h-11'
      case 'lg':
        return 'h-14'
    }
  }

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
          ${getVariantClasses(variant)}
          ${getSizeClasses(size)}`}
      {...props}
    >
      {children}
    </button>
  )
}

Button.displayName = 'Button'
