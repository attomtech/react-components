import * as ReactSelect from '@radix-ui/react-select'
import { ArrowDown, ArrowUp, Check } from 'phosphor-react'
import React, { ComponentProps, ElementRef, forwardRef } from 'react'
import {
  SelectContent,
  SelectIcon,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectTrigger,
  SelectTriggerButtonsContainer,
  SelectViewport,
  StyledItem,
  StyledItemIndicator
} from './styles'

interface SelectItemProps extends ComponentProps<typeof StyledItem> {}

const SelectItem = forwardRef<ElementRef<typeof StyledItem>, SelectItemProps>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <StyledItem {...props} ref={forwardedRef}>
        <ReactSelect.ItemText>{children}</ReactSelect.ItemText>
        <StyledItemIndicator>
          <Check />
        </StyledItemIndicator>
      </StyledItem>
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

export function Select({
  variant = 'primary',
  value,
  onValueChange,
  options
}: SelectProps) {
  return (
    <ReactSelect.Root value={value} onValueChange={onValueChange}>
      <SelectTrigger variant={variant}>
        <SelectTriggerButtonsContainer>
          <ReactSelect.Value placeholder="Select an item" />
          <SelectIcon>
            <ArrowDown />
          </SelectIcon>
        </SelectTriggerButtonsContainer>
      </SelectTrigger>

      <ReactSelect.Portal>
        <SelectContent>
          <SelectScrollUpButton>
            <ArrowUp />
          </SelectScrollUpButton>

          <SelectViewport>
            {options.map(({ label, value }) => {
              return (
                <SelectItem key={value} value={value}>
                  {label}
                </SelectItem>
              )
            })}
          </SelectViewport>

          <SelectScrollDownButton>
            <ArrowDown />
          </SelectScrollDownButton>
        </SelectContent>
      </ReactSelect.Portal>
    </ReactSelect.Root>
  )
}

Select.displayName = 'Select'
