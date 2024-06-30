import { CaretLeft, CaretRight } from 'phosphor-react'
import Text from '../Text'
import CalendarDay from './CalendarDay'
import { useMemo, useState } from 'react'
import dayjs from 'dayjs'

interface CalendarWeek {
  week: number
  days: Array<{
    date: dayjs.Dayjs
    disabled: boolean
    today: boolean
    active: boolean
  }>
}

type CalendarWeeks = CalendarWeek[]

interface CalendarComponentProps {
  value: Date | null
  onDateSelected: (date: Date) => void
  onMonthChange?: (month: number) => void
  blockedDays?: Date[]
  blockPast?: boolean
}

export default function CalendarComponent({
  value,
  onDateSelected,
  blockPast,
  onMonthChange,
  blockedDays
}: CalendarComponentProps) {
  const [currentDate, setCurrentDate] = useState(() => dayjs().set('date', 1))

  function previousMonth() {
    const newMonth = currentDate.subtract(1, 'month')

    setCurrentDate(newMonth)
    onMonthChange && onMonthChange(newMonth.month())
  }

  function nextMonth() {
    const newMonth = currentDate.add(1, 'month')

    setCurrentDate(newMonth)
    onMonthChange && onMonthChange(newMonth.month())
  }

  const currentMonth = currentDate.locale('pt-br').format('MMMM')
  const currentYear = currentDate.format('YYYY')

  const calendarWeeks = useMemo(() => {
    function isDayDisabled(date: dayjs.Dayjs) {
      let blocked = false

      if (blockPast) {
        blocked = date.endOf('day').isBefore(new Date())
      }

      if (!blocked && blockedDays) {
        blocked =
          blockedDays.find((day) =>
            date.startOf('day').isSame(dayjs(day).startOf('day'))
          ) !== undefined
      }

      return blocked
    }

    const daysInMonthArray = Array.from({
      length: currentDate.daysInMonth()
    }).map((_, index) => currentDate.set('date', index + 1))

    const firstWeekDay = currentDate.get('day')

    const previousMonthFillArray = Array.from({
      length: firstWeekDay
    })
      .map((_, index) => currentDate.subtract(index + 1, 'day'))
      .reverse()

    const lastDayInCurrentMonth = currentDate.set(
      'date',
      currentDate.daysInMonth()
    )

    const lastWeekDay = lastDayInCurrentMonth.get('day')

    const nextMonthFillArray = Array.from({
      length: 7 - (lastWeekDay + 1)
    }).map((_, index) => lastDayInCurrentMonth.add(1 + index, 'day'))

    const calendarDays = [
      ...previousMonthFillArray.map((date) => ({
        date,
        disabled: true,
        today: false,
        active: false
      })),
      ...daysInMonthArray.map((date) => ({
        date,
        disabled: isDayDisabled(date),
        today: date.endOf('day').isSame(dayjs().endOf('day')),
        active:
          value !== undefined &&
          date.endOf('day').isSame(dayjs(value).endOf('day'))
      })),
      ...nextMonthFillArray.map((date) => ({
        date,
        disabled: true,
        today: false,
        active: false
      }))
    ]

    return calendarDays.reduce<CalendarWeeks>((weeks, _, index, original) => {
      const isNewWeek = index % 7 === 0

      if (isNewWeek) {
        weeks.push({
          week: index / 7 + 1,
          days: original.slice(index, index + 7)
        })
      }

      return weeks
    }, [])
  }, [currentDate, value, blockedDays, blockPast])

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex items-center justify-between text-zinc-200">
        <button onClick={previousMonth}>
          <CaretLeft />
        </button>

        <Text className="capitalize">
          {currentMonth} <span>{currentYear}</span>
        </Text>

        <button onClick={nextMonth}>
          <CaretRight />
        </button>
      </div>

      <table className="w-full border-spacing-1 table-fixed">
        <thead>
          <tr>
            <th className="text-zinc-200 font-medium text-sm">DOM</th>
            <th className="text-zinc-200 font-medium text-sm">SEG</th>
            <th className="text-zinc-200 font-medium text-sm">TER</th>
            <th className="text-zinc-200 font-medium text-sm">QUA</th>
            <th className="text-zinc-200 font-medium text-sm">QUI</th>
            <th className="text-zinc-200 font-medium text-sm">SEX</th>
            <th className="text-zinc-200 font-medium text-sm">SAB</th>
          </tr>
        </thead>
        <tbody className="before:leading-3 before:content-[.] before:block before:text-zinc-800">
          {calendarWeeks.map(({ week, days }) => (
            <tr key={week}>
              {days.map(({ date, disabled, today, active }) => (
                <td key={date.toString()} className="border-box">
                  <CalendarDay
                    onClick={() => onDateSelected(date.toDate())}
                    active={active}
                    today={today}
                    disabled={disabled}
                  >
                    {date.get('date')}
                  </CalendarDay>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
