import { TextInput, TextInputProps } from '../TextInput'
import {
  InputNumberFormat,
  InputNumberFormatProps
} from '@react-input/number-format'

export interface TextInputCurrencyProps
  extends TextInputProps,
    InputNumberFormatProps {}

export default function TextInputCurrency(props: TextInputCurrencyProps) {
  return (
    <InputNumberFormat
      component={TextInput}
      format="currency"
      currency="BRL"
      locales="pt-BR"
      {...props}
    />
  )
}
