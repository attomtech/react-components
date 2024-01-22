'use client'

import { ComponentProps } from 'react'
import { Fallback, Image, Root } from '@radix-ui/react-avatar'
import { User } from 'phosphor-react'

export interface AvatarProps extends ComponentProps<typeof Image> {}

export function Avatar(props: AvatarProps) {
  return (
    <Root className="rounded-full inline-block w-16 h-16 overflow-hidden">
      <Image
        className="w-full h-full object-cover rounded-[inherit]"
        alt=""
        {...props}
      />

      <Fallback
        className="w-full h-full flex items-center justify-center bg-zinc-600 text-zinc-800 [&>svg]:w-6 [&>svg]:h-6"
        delayMs={600}
      >
        <User />
      </Fallback>
    </Root>
  )
}

Avatar.displayName = 'Avatar'
