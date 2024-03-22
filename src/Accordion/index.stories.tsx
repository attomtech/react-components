import { Accordion } from './index'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Accordion',
  component: Accordion.SingleRoot,
  tags: ['autodocs'],
  args: {},
  argTypes: {}
} as Meta

export const Primary: StoryObj = {
  render: () => {
    return (
      <Accordion.SingleRoot defaultValue="item1">
        <Accordion.Item value="item1" text="Clique Aqui">
          Item
        </Accordion.Item>
      </Accordion.SingleRoot>
    )
  }
}
