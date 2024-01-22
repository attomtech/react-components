'use client'

import {
  Action,
  Description,
  Provider,
  Root,
  Title,
  Viewport
} from '@radix-ui/react-toast'
import { forwardRef, ReactElement, useImperativeHandle, useState } from 'react'

export interface ToastProps {
  title: string
  description: string
  action?: ReactElement
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
  variant?: 'primary' | 'success' | 'warning' | 'danger'
}

export interface ToastFunctions {
  open: () => void
}

export const Toast = forwardRef(
  (
    { title, description, action, position = 'top-right', variant }: ToastProps,
    ref
  ) => {
    const [open, setOpen] = useState<boolean>(false)

    useImperativeHandle(ref, () => ({
      open() {
        setOpen(true)
      }
    }))

    return (
      <Provider>
        <Root
          data-variant={variant || 'default'}
          data-position={position}
          open={open}
          onOpenChange={setOpen}
          duration={3000}
          className={`
            bg-white rounded-md shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px]
            p-4 grid [grid-template-areas:_'title_action'_'description_action'] grid-cols-[auto_max-content]
            gap-x-4 items-center
            primary:bg-sky-500 default:bg-white success:bg-emerald-500 warning:bg-yellow-500 danger:bg-red-500
            data-[state=closed]:animate-hide
            data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)]
            data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out]
            data-[position=top-left]:data-[state=open]:animate-slideInLeft data-[position=top-left]:data-[swipe=end]:animate-slideOutLeft
            data-[position=top-right]:data-[state=open]:animate-slideInRight data-[position=top-right]:data-[swipe=end]:animate-slideOutRight
            data-[position=bottom-left]:data-[state=open]:animate-slideInLeft data-[position=bottom-left]:data-[swipe=end]:animate-slideOutLeft
            data-[position=bottom-right]:data-[state=open]:animate-slideInRight data-[position=bottom-right]:data-[swipe=end]:animate-slideOutRight
          `}
        >
          <Title className="[grid-area:_title] mb-1 font-bold text-zinc-900 text-base">
            {title}
          </Title>
          <Description className="[grid-area:_description] m-0 text-zinc-800 text-sm leading-3">
            {description}
          </Description>
          <Action className="[grid-area:_action]" asChild altText="Action">
            {action}
          </Action>
        </Root>
        <Viewport
          data-position={position}
          className={`
          fixed
          flex flex-col gap-2.5 
          w-96 max-w-[100vw] 
          p-6 m-0 
          list-none z-[2147483647] outline-none
          data-[position=top-right]:top-0 data-[position=top-right]:right-0
          data-[position=top-left]:top-0 data-[position=top-left]:left-0
          data-[position=bottom-right]:bottom-0 data-[position=bottom-right]:right-0
          data-[position=bottom-left]:bottom-0 data-[position=bottom-left]:left-0
        `}
        />
      </Provider>
    )
  }
)

Toast.displayName = 'Toast'
