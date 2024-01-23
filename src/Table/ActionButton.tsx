import { ButtonHTMLAttributes } from 'react'

export interface ActionButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger'
}

export function ActionButton(props: ActionButtonProps) {
  return (
    <button
      className={`
        p-1 cursor-pointer disabled:opacity-0
        [&>svg]:default:text-zinc-500 [&>svg]:default:text-lg hover:[&>svg]:default:text-zinc-200
        [&>svg]:primary:text-sky-500 hover:[&>svg]:primary:text-sky-300
        [&>svg]:success:text-emerald-500 hover:[&>svg]:success:text-emerald-300
        [&>svg]:warning:text-yellow-500 hover:[&>svg]:warning:text-yellow-300
        [&>svg]:danger:text-red-500 hover:[&>svg]:danger:text-red-300
      `}
      data-variant={props.variant || 'default'}
      disabled={props.disabled}
      {...props}
    >
      {props.children}
    </button>
  )
}
