import Datepicker, {
  DatepickerType,
  DateValueType,
  DateType
} from 'react-tailwindcss-datepicker'
import InputContainer, { InputContainerProps } from '../InputContainer'

interface DatePickerProps extends DatepickerType, InputContainerProps {}

export type DatePickerValueType = DateValueType
export type DatePickerType = DateType

export const DatePicker = ({
  className,
  variant,
  padding,
  hasError,
  ...props
}: DatePickerProps) => {
  return (
    <InputContainer
      className={className}
      variant={variant}
      hasError={hasError}
      padding={padding}
    >
      <Datepicker
        {...props}
        i18n="pt-BR"
        useRange={false}
        asSingle={true}
        displayFormat="DD/MM/YYYY"
        containerClassName="relative w-full text-zinc-700 [&>div]:fixed [&>div]:left-auto [&>div]:right-auto"
        inputClassName="w-full bg-transparent outline-0 placeholder:text-zinc-400 placeholder:font-normal text-zinc-200 text-sm"
      />
    </InputContainer>
  )
}

export default DatePicker
