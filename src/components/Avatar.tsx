import { ComponentProps } from 'react'
import * as AvatarRadix from '@radix-ui/react-avatar'
import { User } from 'phosphor-react'

export interface AvatarProps extends ComponentProps<typeof AvatarRadix.Image> {}

export function Avatar(props: AvatarProps) {
  return (
    <AvatarRadix.Root className="rounded-full inline-block w-16 h-16 overflow-hidden">
      <AvatarRadix.Image
        className="w-full h-full object-cover rounded-[inherit]"
        {...props}
      />

      <AvatarRadix.AvatarFallback
        className="w-full h-full flex items-center justify-center bg-zinc-600 text-zinc-800 [&>svg]:w-6 [&>svg]:h-6"
        delayMs={600}
      >
        <User />
      </AvatarRadix.AvatarFallback>
    </AvatarRadix.Root>
  )
}

Avatar.displayName = 'Avatar'
