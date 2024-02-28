import { Root, Thumb, SwitchProps } from '@radix-ui/react-switch'

interface SwitchControlProps extends SwitchProps {
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger'
}

export default function SwitchControl({
  variant = 'default',
  ...props
}: SwitchControlProps) {
  return (
    <Root
      data-variant={variant}
      {...props}
      className={`
      w-12 h-6 bg-transparent rounded-full relative shadow-[0_0_0_2px] outline-none cursor-pointer
      data-[state=checked]:bg-zinc-600
      
      primary:data-[state=checked]:bg-sky-600
      success:data-[state=checked]:bg-emerald-600
      warning:data-[state=checked]:bg-yellow-600
      danger:data-[state=checked]:bg-red-600
    `}
    >
      <Thumb
        data-variant={variant}
        className={`
        block w-5 h-5 bg-white rounded-full shadow-[0_2px_2px] shadow-zinc-100 transition-transform duration-100
        translate-x-0.5 will-change-transform data-[state=checked]:translate-x-7
        
        primary:shadow-sky-100
        success:shadow-emerald-100
        warning:shadow-yellow-100
        danger:shadow-red-100
      `}
      />
    </Root>
  )
}
