import { TableHTMLAttributes } from 'react'

interface TdProps extends TableHTMLAttributes<HTMLTableElement> {
  label?: string
}

export function Td({ children, className, label }: TdProps) {
  return (
    <td
      data-label={label}
      className={`
        py-1 px-4 
        desktop:first:rounded-tl-md desktop:first:rounded-bl-md desktop:last:rounded-tr-md desktop:rounded-br-md
        tablet:border tablet:border-solid tablet:border-zinc-300 tablet:block tablet:text-xs tablet:text-right
        tablet:before:content-[attr(data-label)] tablet:before:float-left tablet:before:font-bold tablet:before:uppercase
        tablet:last:border-b-0 
        ${className}
     `}
    >
      {children}
    </td>
  )
}
