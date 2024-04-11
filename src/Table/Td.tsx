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
        border border-solid border-zinc-300 block text-xs text-right
        before:content-[attr(data-label)] before:float-left before:font-bold before:uppercase
        last:border-b-0 
        
        md:!border-0 md:table-cell md:text-base md:text-left md:before:!content-[]
        md:first:rounded-tl-md md:first:rounded-bl-md md:last:rounded-tr-md md:last:rounded-br-md
        ${className}
     `}
    >
      {children}
    </td>
  )
}
