import { ArrowLeft, ArrowRight } from 'phosphor-react'
import { BeforeNextPage } from './BeforeNextPage'
import { Page } from './Page'

export interface PaginationProps {
  currentPage: number
  pages: number
  onPageChanged: (page: number) => void
  className?: string
}

export const Pagination = ({
  currentPage,
  pages,
  onPageChanged,
  className = ''
}: PaginationProps) => {
  function getPages(): number[] {
    if (pages <= 5) {
      return Array.from({ length: pages }, (_, index) => index + 1)
    }

    const beforePages =
      currentPage - 2 > 0 && currentPage + 2 <= pages
        ? 2
        : currentPage - 2 <= 0
          ? currentPage - 1
          : 4 - (pages - currentPage)
    const afterPages = 4 - beforePages

    const currentPages = []
    currentPages.push(currentPage)
    Array.from({ length: beforePages }, (_, index) => index + 1).forEach(
      (value) => currentPages.push(currentPage - value)
    )
    Array.from({ length: afterPages }, (_, index) => index + 1).forEach(
      (value) => currentPages.push(currentPage + value)
    )
    currentPages.sort()

    return currentPages
  }

  return (
    <div
      className={`flex justify-center items-center gap-2.5 mt-4 w-full ${className}`}
    >
      <BeforeNextPage
        disabled={currentPage === 1}
        onClick={() => {
          onPageChanged(currentPage - 1)
        }}
      >
        <ArrowLeft />
      </BeforeNextPage>

      {getPages().map((page, index) => {
        return (
          <Page
            key={index}
            disabled={page === currentPage}
            onClick={() => {
              onPageChanged(page)
            }}
          >
            {page}
          </Page>
        )
      })}

      <BeforeNextPage
        disabled={currentPage === pages}
        onClick={() => {
          onPageChanged(currentPage + 1)
        }}
      >
        <ArrowRight />
      </BeforeNextPage>
    </div>
  )
}

Pagination.displayName = 'Pagination'

export default Pagination
