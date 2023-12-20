import {
  ActionButton,
  ActionTd,
  HiddenIcon,
  Table as TableComponent,
  Td,
  Th,
  Thead,
  Tr
} from './styles'
import { ArrowDown, ArrowUp, IconContext, Pencil, Trash } from 'phosphor-react'
import { ReactComponentElement, useState } from 'react'

type columnDirection = 'ASC' | 'DESC' | undefined

export interface TableColumn {
  id: string
  label: string
  clickable?: boolean
}

export interface TableRow {
  id: string
  values: Array<{
    text: string
    label: string
  }>
  edit?: boolean
  delete?: boolean
  extraButtonConfig?: Array<{
    id: string
    disabled?: boolean
  }>
}

export interface TableExtraButton {
  id: string
  onClick: (id: string) => void
  icon: ReactComponentElement<any>
}

export interface TableProps {
  columns: Array<TableColumn>
  rows: Array<TableRow>
  onOrderChanged?: (id: string, direction: string) => void
  onEditClicked?: (id: string) => void
  onDeleteClicked?: (id: string) => void
  extraActionButtons?: Array<TableExtraButton>
}

export const Table = (props: TableProps) => {
  const [columnClicked, setColumnClicked] = useState<string | undefined>()
  const [columDirection, setColumnDirection] = useState<columnDirection>()

  function onColumnClicked(column: TableColumn) {
    if (column.clickable) {
      let direction: columnDirection = 'ASC'

      if (columnClicked === column.id && columDirection === 'ASC') {
        direction = 'DESC'
      }

      setColumnClicked(column.id)
      setColumnDirection(direction)

      props.onOrderChanged && props.onOrderChanged(String(column.id), direction)
    }
  }

  function isExtraButtonDisabled(id: string, row: TableRow) {
    if (!row.extraButtonConfig) {
      return false
    }

    const config = row.extraButtonConfig.find((cfg) => cfg.id === id)

    if (!config) {
      return false
    }

    return config.disabled
  }

  return (
    <TableComponent>
      <Thead>
        <Tr>
          {props.columns.map((column, index) => {
            return (
              <Th
                key={index}
                clickable={column.clickable}
                onClick={() => onColumnClicked(column)}
              >
                {column.label}
                {column.id === columnClicked ? (
                  columDirection === 'ASC' ? (
                    <ArrowUp />
                  ) : (
                    <ArrowDown />
                  )
                ) : (
                  <HiddenIcon />
                )}
              </Th>
            )
          })}
        </Tr>
      </Thead>
      <tbody>
        {props.rows.map((row, index) => {
          return (
            <Tr key={index}>
              {row.values.map(({ text, label }, rowIndex) => {
                return (
                  <Td data-label={label} key={rowIndex}>
                    {text}
                  </Td>
                )
              })}
              <ActionTd>
                <IconContext.Provider
                  value={{
                    size: 20
                  }}
                >
                  <ActionButton
                    disabled={row.edit === false}
                    variant="default"
                    onClick={() => {
                      props.onEditClicked && props.onEditClicked(row.id)
                    }}
                  >
                    <Pencil />
                  </ActionButton>

                  {props.extraActionButtons &&
                    props.extraActionButtons.map((button, index) => {
                      return (
                        <ActionButton
                          disabled={isExtraButtonDisabled(button.id, row)}
                          key={index}
                          onClick={() => {
                            button.onClick(row.id)
                          }}
                        >
                          {button.icon}
                        </ActionButton>
                      )
                    })}

                  <ActionButton
                    disabled={row.delete === false}
                    variant="danger"
                    onClick={() => {
                      props.onDeleteClicked && props.onDeleteClicked(row.id)
                    }}
                  >
                    <Trash />
                  </ActionButton>
                </IconContext.Provider>
              </ActionTd>
            </Tr>
          )
        })}
      </tbody>
    </TableComponent>
  )
}

Table.displayName = 'Table'
