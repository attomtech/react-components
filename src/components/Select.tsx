import {
  SelectTrigger,
  SelectIcon,
  Content,
  Viewport,
  Item,
  ItemIndicator,
  ScrollUpButton,
  ScrollDownButton,
  ItemText,
  Root,
  Value,
  Portal
} from '@radix-ui/react-select'
import { ArrowDown, ArrowUp, Check } from 'phosphor-react'
import React, { ComponentProps, ElementRef, forwardRef } from 'react'

interface SelectItemProps extends ComponentProps<typeof Item> {}

const SelectItem = forwardRef<ElementRef<typeof Item>, SelectItemProps>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <Item
        className={`
        text-sm text-zinc-200 
        rounded-md
        leading-normal 
        flex items-center
        px-3 py-1
        relative select-none
        data-[disabled]:text-zinc-200 data-[disabled]:pointer-events-none
        data-[highlighted]:outline-none data-[highlighted]:bg-zinc-100 data-[highlighted]:text-zinc-900 data-[highlighted]:cursor-pointer
      `}
        {...props}
        ref={forwardedRef}
      >
        <ItemText>{children}</ItemText>
        <ItemIndicator className="absolute left-0 w-2.5 inline-flex items-center justify-center">
          <Check />
        </ItemIndicator>
      </Item>
    )
  }
)

SelectItem.displayName = 'SelectItem'

export interface SelectOption {
  value: string
  label: string
}

export interface SelectProps {
  value: string
  onValueChange: () => void
  options: SelectOption[]
  variant?: 'primary' | 'success' | 'warning' | 'danger'
}

const variantClasses = {
  primary: 'focus:border-sky-500',
  success: 'focus:border-emerald-500',
  warning: 'focus:border-yellow-500',
  danger: 'focus:border-red-500'
}

const scrollButtonsClasses =
  'flex items-center justify-center h-6 bg-white text-zinc-900 cursor-default'

export function Select({
  variant = 'primary',
  value,
  onValueChange,
  options
}: SelectProps) {
  return (
    <Root value={value} onValueChange={onValueChange}>
      <SelectTrigger
        className={`
        inline-flex items-center justify-between
        w-full
        rounded-sm
        py-2 px-0
        text-sm
        leading-normal
        bg-zinc-900 text-white
        shadow-[0_2px_10px] shadow-zinc-900
        hover:bg-zinc-800
        focus:shadow-[0_0_0_2px] focus:shadow-black focus:border-1 focus:border-solid
        data-[placeholder]:text-white
        data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed
        ${variantClasses[variant]}
      `}
      >
        <div className="flex justify-between py-0 px-4 w-full">
          <Value placeholder="Select an item" />
          <SelectIcon className="text-white">
            <ArrowDown />
          </SelectIcon>
        </div>
      </SelectTrigger>

      <Portal>
        <Content className="overflow-hidden bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,23,24,0.35),0px_10px_20px_-15px_rgba(22,23,24,0.2)]">
          <ScrollUpButton className={scrollButtonsClasses}>
            <ArrowUp />
          </ScrollUpButton>

          <Viewport className="p-2 bg-zinc-900">
            {options.map(({ label, value }) => {
              return (
                <SelectItem key={value} value={value}>
                  {label}
                </SelectItem>
              )
            })}
          </Viewport>

          <ScrollDownButton className={scrollButtonsClasses}>
            <ArrowDown />
          </ScrollDownButton>
        </Content>
      </Portal>
    </Root>
  )
}

Select.displayName = 'Select'