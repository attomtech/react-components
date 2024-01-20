import { ArrowDown, ArrowUp } from 'phosphor-react'

export type columnDirection = 'ASC' | 'DESC' | undefined

export interface TableColumn {
  id: string
  label: string
  clickable?: boolean
}

interface ColumnProps extends TableColumn {
  columnClicked: string | undefined
  columnDirection: columnDirection
  onColumnClicked: (id: string, direction: columnDirection) => void
}

export function Column({
  id,
  label,
  clickable,
  columnClicked,
  columnDirection,
  onColumnClicked
}: ColumnProps) {
  function onColumnClickedHandler(id: string, clickable: boolean | undefined) {
    if (clickable) {
      let direction: columnDirection = 'ASC'

      if (columnClicked === id && columnDirection === 'ASC') {
        direction = 'DESC'
      }

      onColumnClicked(id, direction)
    }
  }

  return (
    <th
      className="py-3 px-4 data-[clickable=true]:cursor-pointer"
      onClick={() => onColumnClickedHandler(id, clickable)}
      data-clickable={clickable}
    >
      <div className="flex justify-start items-center gap-1">
        {label}
        {id === columnClicked ? (
          columnDirection === 'ASC' ? (
            <ArrowUp />
          ) : (
            <ArrowDown />
          )
        ) : (
          <ArrowUp className="opacity-0" />
        )}
      </div>
    </th>
  )
}
