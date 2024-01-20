import { useState } from 'react'
import { Tr } from './Tr'
import { Thead } from './Thead'
import { ExtraActionButtonsProps, Row, TableRow } from './Row'
import { Column, columnDirection, TableColumn } from './Column'

export interface TableProps {
  columns: Array<TableColumn>
  rows: Array<TableRow>
  onOrderChanged?: (id: string, direction: string) => void
  onEditClicked?: (id: string) => void
  onDeleteClicked?: (id: string) => void
  extraActionButtons?: Array<ExtraActionButtonsProps>
}

export const Table = (props: TableProps) => {
  const [columnClicked, setColumnClicked] = useState<string | undefined>()
  const [columDirection, setColumnDirection] = useState<columnDirection>()

  return (
    <table className="w-full text-white border-collapse tablet:border-0 tablet:[&>caption]:text-sm">
      <Thead>
        <Tr>
          {props.columns.map((column, index) => {
            return (
              <Column
                key={index}
                columnClicked={columnClicked}
                columnDirection={columDirection}
                onColumnClicked={(id, direction) => {
                  setColumnClicked(id)
                  setColumnDirection(direction)
                  props.onOrderChanged &&
                    props.onOrderChanged(id, String(direction))
                }}
                {...column}
              />
            )
          })}
        </Tr>
      </Thead>
      <tbody>
        {props.rows.map((row, index) => {
          return (
            <Row
              key={index}
              {...row}
              onDeleteClicked={props.onDeleteClicked}
              onEditClicked={props.onEditClicked}
              extraActionButtons={props.extraActionButtons}
            />
          )
        })}
      </tbody>
    </table>
  )
}

Table.displayName = 'Table'
