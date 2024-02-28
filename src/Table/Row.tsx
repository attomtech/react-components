import { Tr } from './Tr'
import { Td } from './Td'
import { IconContext, Pencil, Trash } from 'phosphor-react'
import { ActionButton, ActionButtonProps } from './ActionButton'
import { ReactComponentElement } from 'react'

export interface TableRow {
  id: string
  values: Array<{
    text: string
    label: string
  }>
  editEnabled?: boolean
  deleteEnabled?: boolean
  extraButtonConfig?: Array<{
    id: string
    disabled?: boolean
  }>
}

export interface ExtraActionButtonsProps extends ActionButtonProps {
  id: string
  icon: ReactComponentElement<any>
  onClickHandle: (id: string) => void
}

interface RowProps extends TableRow {
  onEditClicked?: (id: string) => void
  onDeleteClicked?: (id: string) => void
  extraActionButtons?: Array<ExtraActionButtonsProps>
  hideActionButtons?: boolean
}

export function Row({
  values,
  editEnabled,
  deleteEnabled,
  extraButtonConfig,
  id,
  onDeleteClicked,
  onEditClicked,
  extraActionButtons,
  hideActionButtons
}: RowProps) {
  function isExtraButtonDisabled(id: string) {
    if (!extraButtonConfig) {
      return false
    }

    const config = extraButtonConfig.find((cfg) => cfg.id === id)

    if (!config) {
      return false
    }

    return config.disabled
  }

  return (
    <Tr>
      {values.map(({ text, label }, rowIndex) => {
        return (
          <Td label={label} key={rowIndex}>
            {text}
          </Td>
        )
      })}
      {(!hideActionButtons || extraActionButtons) && (
        <Td className="!flex justify-center md:justify-end gap-3">
          <IconContext.Provider
            value={{
              size: 20
            }}
          >
            {!hideActionButtons && (
              <ActionButton
                disabled={editEnabled === false}
                variant="default"
                onClick={() => {
                  onEditClicked && onEditClicked(id)
                }}
              >
                <Pencil />
              </ActionButton>
            )}

            {extraActionButtons &&
              extraActionButtons.map((button, index) => {
                const { onClickHandle, ...props } = button

                return (
                  <ActionButton
                    key={index}
                    disabled={isExtraButtonDisabled(button.id)}
                    onClick={() => onClickHandle(id)}
                    {...props}
                  >
                    {button.icon}
                  </ActionButton>
                )
              })}

            {!hideActionButtons && (
              <ActionButton
                disabled={deleteEnabled === false}
                onClick={() => {
                  onDeleteClicked && onDeleteClicked(id)
                }}
              >
                <Trash />
              </ActionButton>
            )}
          </IconContext.Provider>
        </Td>
      )}
    </Tr>
  )
}
