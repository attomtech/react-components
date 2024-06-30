import 'dayjs/locale/pt-br.js'
import CalendarComponent from './CalendarComponent'
import TextInput, { TextInputProps } from '../TextInput'
import AlertDialog, { AlertDialogFunctions } from '../AlertDialog'
import { useRef } from 'react'
import dayjs from 'dayjs'

import { X } from 'phosphor-react'

export interface CalendarProps extends TextInputProps {
  date: Date | null
  onDateSelected: (date: Date | null) => void
  titulo?: string
  blockPast?: boolean
  onMonthChange?: (month: number) => void
  blockedDays?: Date[]
  beforeOpen?: () => Promise<void>
}

export default function Calendar({
  date,
  onDateSelected,
  titulo = 'Calendário',
  blockPast,
  beforeOpen,
  onMonthChange,
  blockedDays,
  ...props
}: CalendarProps) {
  const ref = useRef<AlertDialogFunctions>(null)
  const selectedData = date ? dayjs(date).format('DD/MM/YYYY') : ''

  function dateSelected(date: Date) {
    ref.current?.close()
    onDateSelected(date)
  }

  return (
    <>
      <TextInput
        {...props}
        value={selectedData}
        onOpen={async () => {
          if (beforeOpen) {
            await beforeOpen()
          }

          ref.current?.open()
        }}
        icon={date ? X : null}
        onClickIcon={() => onDateSelected(null)}
      />
      <AlertDialog titulo={titulo} ref={ref}>
        <CalendarComponent
          value={date}
          onDateSelected={dateSelected}
          blockPast={blockPast}
          blockedDays={blockedDays}
          onMonthChange={onMonthChange}
        />
      </AlertDialog>
    </>
  )
}
