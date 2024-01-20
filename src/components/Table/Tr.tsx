import { TableHTMLAttributes } from 'react'

export function Tr(props: TableHTMLAttributes<HTMLTableElement>) {
  return (
    <tr className="desktop:[&>td]:even:bg-zinc-700 tablet:border-b-2 tablet:border-b-solid tablet:border-b-zinc-700 tablet:block tablet:bg-zinc-700 tablet:border-zinc-300">
      {props.children}
    </tr>
  )
}
