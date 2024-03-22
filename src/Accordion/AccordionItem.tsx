import * as Accordion from '@radix-ui/react-accordion'
import { ReactNode, useRef } from 'react'
import { ArrowDown } from 'phosphor-react'

interface AccordionItemProps {
  value: string
  text: string
  children: ReactNode
}

export default function AccordionItem({
  value,
  text,
  children
}: AccordionItemProps) {
  const ref = useRef(null)

  return (
    <Accordion.Item value={value} className="">
      <Accordion.Header className="flex">
        <Accordion.Trigger
          ref={ref}
          className={`
          text-zinc-200 group flex flex-1 items-center justify-between
          bg-zinc-800 hover:bg-zinc-600 h-11 cursor-default px-5 text-base 
          leading-none outline-none 
          border border-solid border-zinc-600
          rounded-md
          data-[state=open]:rounded-bl-none data-[state=open]:rounded-br-none
        `}
        >
          {text}
          <ArrowDown
            aria-hidden
            className={`
            text-zinc-100 ease-[cubic-bezier(0.87,_0,_0.13,_1)]
            transition-transform duration-300 group-data-[state=open]:rotate-180
          `}
          />
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content
        className={`
        data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp 
        overflow-hidden
        border boder-solid border-zinc-600
        rounded-md rounded-tl-none rounded-tr-none
      `}
      >
        <div className="py-4 px-5 flex flex-col gap-3">{children}</div>
      </Accordion.Content>
    </Accordion.Item>
  )
}
