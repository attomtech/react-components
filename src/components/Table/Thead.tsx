import { TableHTMLAttributes } from 'react'

export function Thead({ children }: TableHTMLAttributes<HTMLTableElement>) {
  return (
    <thead className="tablet:border-0 tablet:[clip:rect(0,0,0,0)] tablet:h-px tablet:m-[-1px] tablet:overflow-hidden tablet:p-0 tablet:absolute tablet:w-px">
      {children}
    </thead>
  )
}
