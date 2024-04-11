import { ButtonHTMLAttributes, ReactNode } from 'react'

interface CalendarDayProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  disabled?: boolean
  active?: boolean
  today?: boolean
}

export default function CalendarDay({
  children,
  disabled,
  active,
  today,
  ...props
}: CalendarDayProps) {
  return (
    <button
      {...props}
      disabled={disabled}
      data-active={active}
      data-today={today}
      className={`
                w-full text-zinc-200 p-3 text-center cursor-pointer rounded-sm
                disabled:bg-none disabled:cursor-default disabled:opacity-40
                
                data-[active=false]:data-[today=true]:text-red-600
                data-[active=true]:text-green-600
              `}
    >
      {children}
    </button>
  )
}
