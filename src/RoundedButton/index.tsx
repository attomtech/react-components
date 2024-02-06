import { ButtonHTMLAttributes } from 'react'

export interface RoundedButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger'
  size?: 'sm' | 'md' | 'lg'
}

export default function RoundedButton({
  variant,
  size,
  children,
  ...props
}: RoundedButtonProps) {
  return (
    <button
      data-variant={variant}
      data-size={size}
      className={`
        rounded-full flex justify-center items-center text-white
        
        [&>svg]:w-9 [&>svg]:h-9
        [&>svg]:data-[size=sm]:w-6 [&>svg]:data-[size=sm]:h-6
        [&>svg]:data-[size=lg]:w-12 [&>svg]:data-[size=lg]:h-12
        
        w-12 h-12
        data-[size=sm]:w-8 data-[size=sm]:h-8
        data-[size=lg]:w-16 data-[size=lg]:h-16
        
        bg-transparent
        default:border default:border-solid default:border-zinc-100
        primary:bg-sky-500 primary:hover:bg-sky-300
        success:bg-emerald-500 success:hover:bg-emerald-300
        warning:bg-yellow-500 warning:hover:bg-yellow-300 warning:text-zinc-800
        danger:bg-red-500 danger:hover:bg-red-300 danger:text-zinc-200
        
        cursor-pointer
      `}
      {...props}
    >
      {children}
    </button>
  )
}
