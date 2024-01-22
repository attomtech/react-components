import { ComponentProps } from 'react'
import { Root, CheckboxIndicator } from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'

export interface CheckboxProps extends ComponentProps<typeof Root> {
  variant?: 'primary' | 'success' | 'warning' | 'danger'
}

const variantClasses = {
  primary:
    'data-[state=checked]:bg-sky-500 data-[state=checked]:border-sky-500 focus:border-sky-500',
  success:
    'data-[state=checked]:bg-emerald-500 data-[state=checked]:border-emerald-500 focus:border-emerald-500',
  warning:
    'data-[state=checked]:bg-yellow-500 data-[state=checked]:border-yellow-500 focus:border-yellow-500',
  danger:
    'data-[state=checked]:bg-red-500 data-[state=checked]:border-red-500 focus:border-red-500'
}

export function Checkbox({ variant = 'primary', ...props }: CheckboxProps) {
  return (
    <Root
      className={`
        w-6 h-6 
        bg-zinc-900 
        rounded-sm 
        leading-[0]
        cursor-pointer
        overflow-hidden
        box-border border-2 border-solid border-zinc-900
        flex items-center justify-center
        data-[state=checked]:focus:border-2 data-[state=checked]:focus:border-solid
        ${variantClasses[variant]}
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
