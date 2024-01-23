import { ComponentProps } from 'react'
import { CheckboxIndicator, Root } from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'

export interface CheckboxProps extends ComponentProps<typeof Root> {
  variant?: 'primary' | 'success' | 'warning' | 'danger' | 'default'
}

export function Checkbox({ variant = 'default', ...props }: CheckboxProps) {
  return (
    <Root
      data-variant={variant}
      className={`
        w-6 h-6 
        bg-zinc-900 
        rounded-sm 
        leading-[0]
        cursor-pointer
        overflow-hidden
        box-border border-2 border-solid border-zinc-900
        flex items-center justify-center
        datachecked:focus:border-2 datachecked:focus:border-solid
        
        primary:datachecked:bg-sky-500 primary:datachecked:border-sky-500 primary:focus:border-sky-500
        success:datachecked::bg-emerald-500 success:datachecked::border-emerald-500 success:focus:border-emerald-500
        warning:datachecked:bg-yellow-500 warning:datachecked:border-yellow-500 warning:focus:border-yellow-500
        danger:datachecked:bg-red-500 danger:datachecked:border-red-500 danger:focus:border-red-500
    `}
      {...props}
    >
      <CheckboxIndicator className="text-white w-4 h-4 data-[state=checked]:animate-slideIn data-[state=unchecked]:animate-slideOut">
        <Check weight="bold" />
      </CheckboxIndicator>
    </Root>
  )
}

Checkbox.displayName = 'Checkbox'

export default Checkbox
