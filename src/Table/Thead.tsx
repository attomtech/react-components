import { TableHTMLAttributes } from 'react'

export function Thead({ children }: TableHTMLAttributes<HTMLTableElement>) {
  return (
    <thead
      className={`
      border-0 [clip:rect(0,0,0,0)] h-px w-px m-[-1px] overflow-hidden p-0 absolute
      
      md:relative
      
      md:border-b md:border-solid md:border-zinc-200/30
    `}
    >
      {children}
    </thead>
  )
}
