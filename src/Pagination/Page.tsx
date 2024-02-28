import { ButtonHTMLAttributes } from 'react'

interface PageProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger'
}

export function Page({ children, variant = 'default', ...props }: PageProps) {
  return (
    <button
      data-variant={variant}
      className={`
        cursor-pointer px-4 py-2 rounded-full text-zinc-100
        
        default:hover:enabled:bg-zinc-200/5 default:hover:enabled:text-zinc-200
        default:disabled:bg-zinc-200 default:disabled:text-zinc-800
        
        primary:hover:enabled:bg-sky-200/5 primary:hover:enabled:text-sky-200
        primary:disabled:bg-sky-800 primary:disabled:text-sky-200
        
        success:hover:enabled:bg-emerald-200/5 success:hover:enabled:text-emerald-200
        success:disabled:bg-emerald-800 success:disabled:text-emerald-200
        
        warning:hover:enabled:bg-yellow-200/5 warning:hover:enabled:text-yellow-200
        warning:disabled:bg-yellow-600 warning:disabled:text-yellow-100
        
        danger:hover:enabled:bg-red-200/5 danger:hover:enabled:text-red-200
        danger:disabled:bg-red-800 danger:disabled:text-red-200
        
        disabled:cursor-none
      `}
      {...props}
    >
      {children}
    </button>
  )
}
