import { ArrowLeft, ArrowRight } from 'phosphor-react'
import { BeforeNextPage } from './BeforeNextPage'
import { Page } from './Page'

export interface PaginationProps {
  currentPage: number
  pages: number
  onPageChanged: (page: number) => void
}

export const Pagination = (props: PaginationProps) => {
  function getPages(): number[] {
    if (props.pages <= 5) {
      return Array.from({ length: props.pages }, (_, index) => index + 1)
    }

    const beforePages =
      props.currentPage - 2 > 0 && props.currentPage + 2 <= props.pages
        ? 2
        : props.currentPage - 2 <= 0
          ? props.currentPage - 1
          : 4 - (props.pages - props.currentPage)
    const afterPages = 4 - beforePages

    const pages = []
    pages.push(props.currentPage)
    Array.from({ length: beforePages }, (_, index) => index + 1).forEach(
      (value) => pages.push(props.currentPage - value)
    )
    Array.from({ length: afterPages }, (_, index) => index + 1).forEach(
      (value) => pages.push(props.currentPage + value)
    )
    pages.sort()

    return pages
  }

  return (
    <div className="flex justify-center items-center gap-2.5 mt-4 w-full">
      <BeforeNextPage
        disabled={props.currentPage === 1}
        onClick={() => {
          props.onPageChanged(props.currentPage - 1)
        }}
      >
        <ArrowLeft />
      </BeforeNextPage>

      {getPages().map((page, index) => {
        return (
          <Page
            key={index}
            disabled={page === props.currentPage}
            onClick={() => {
              props.onPageChanged(page)
            }}
          >
            {page}
          </Page>
        )
      })}

      <BeforeNextPage
        disabled={props.currentPage === props.pages}
        onClick={() => {
          props.onPageChanged(props.currentPage + 1)
        }}
      >
        <ArrowRight />
      </BeforeNextPage>
    </div>
  )
}

Pagination.displayName = 'Pagination'
