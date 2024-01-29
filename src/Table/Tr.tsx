import { TableHTMLAttributes } from 'react'

export function Tr(props: TableHTMLAttributes<HTMLTableElement>) {
  return (
    <tr
      className={`
      border-b-2 border-b-solid border-b-zinc-700 block bg-zinc-700 border-zinc-300 mb-4
      md:border-b-0 md:bg-transparent md:[&>td]:even:bg-zinc-700 md:table-row md:mb-0 md:border-transparent
    `}
    >
      {props.children}
    </tr>
  )
}
