import { ButtonHTMLAttributes } from 'react'

export function Page({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`
        cursor-pointer p-3 rounded-sm
        text-zinc-100
        hover:enabled:bg-zinc-100 hover:enabled:text-zinc-800
        disabled:bg-zinc-200 disabled:text-zinc-800 disabled:cursor-none
      `}
      {...props}
    >
      {children}
    </button>
  )
}
