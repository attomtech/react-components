import { ButtonHTMLAttributes } from 'react'

export function BeforeNextPage({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`
      cursor-pointer p-3 rounded-sm
      [&>svg]:text-zinc-100
      hover:enabled:[&>svg]:text-zinc-300
      disabled:opacity-50 disabled:cursor-not-allowed
    `}
      {...props}
    >
      {children}
    </button>
  )
}
