import { Pagination, PaginationProps } from '.'
import { Meta } from '@storybook/react'
import { StoryProps } from '@storybook/blocks'

export default {
  title: 'Data display/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  args: {
    variant: 'primary',
    currentPage: 2,
    pages: 8,
    total: 300,
    perPage: 10,
    numberOfElements: 10
  },
  decorators: [
    (Story: any) => {
      return Story()
    }
  ]
} as Meta<PaginationProps>

export const Default: StoryProps = {}
