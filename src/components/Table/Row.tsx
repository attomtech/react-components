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
}

export function Row({
  values,
  editEnabled,
  deleteEnabled,
  extraButtonConfig,
  id,
  onDeleteClicked,
  onEditClicked,
  extraActionButtons
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
          <Td data-label={label} key={rowIndex}>
            {text}
          </Td>
        )
      })}
      <Td className={`flex justify-center gap-5`}>
        <IconContext.Provider
          value={{
            size: 20
          }}
        >
          <ActionButton
            disabled={editEnabled === false}
            variant="default"
            onClick={() => {
              onEditClicked && onEditClicked(id)
            }}
          >
            <Pencil />
          </ActionButton>

          {extraActionButtons &&
            extraActionButtons.map((button, index) => {
              return (
                <ActionButton
                  key={index}
                  disabled={isExtraButtonDisabled(button.id)}
                  onClick={() => button.onClickHandle(id)}
                  {...button}
                >
                  {button.icon}
                </ActionButton>
              )
            })}

          <ActionButton
            disabled={deleteEnabled === false}
            onClick={() => {
              onDeleteClicked && onDeleteClicked(id)
            }}
          >
            <Trash />
          </ActionButton>
        </IconContext.Provider>
      </Td>
    </Tr>
  )
}
