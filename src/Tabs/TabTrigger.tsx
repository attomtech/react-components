import { Trigger, TabsTriggerProps } from '@radix-ui/react-tabs'

interface TabTriggerProps extends TabsTriggerProps {
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger'
}

export default function TabTrigger({
  children,
  variant = 'default',
  ...props
}: TabTriggerProps) {
  return (
    <Trigger
      data-variant={variant}
      className={`
          bg-zinc-800 px-5 h-11 flex flex-1 items-center justify-center select-none 
          first:rounded-tl-md last:rounded-tr-md 
          text-zinc-100  
          
          data-[state=active]:focus:border-none
          data-[state=active]:bg-transparent data-[state=active]:border-b data-[state=active]:cursor-default
            
          data-[state=active]:border-zinc-100
          
          default:data-[state=inactive]:hover:bg-zinc-900
          
          primary:data-[state=inactive]:bg-sky-800 primary:data-[state=inactive]:text-sky-100 primary:data-[state=inactive]:hover:bg-sky-900
          primary:data-[state=active]:focus:outline-none primary:data-[state=active]:focus:outline-sky-300
          primary:data-[state=active]:border-sky-500
          
          success:data-[state=inactive]:bg-emerald-800 success:data-[state=inactive]:text-emerald-100 success:data-[state=inactive]:hover:bg-emerald-900
          success:data-[state=active]:focus:outline-none success:data-[state=active]:focus:outline-emerald-300
          success:data-[state=active]:border-emerald-500
          
          warning:data-[state=inactive]:bg-yellow-800 warning:data-[state=inactive]:text-yellow-100 warning:data-[state=inactive]:hover:bg-yellow-900
          warning:data-[state=active]:focus:outline-none warning:data-[state=active]:focus:outline-yellow-300 warning:data-[state=active]:focus:border-none
          warning:data-[state=active]:border-yellow-500
          
          danger:data-[state=inactive]:bg-red-800 danger:data-[state=inactive]:text-red-100 danger:data-[state=inactive]:hover:bg-red-900
          danger:data-[state=active]:focus:outline-none danger:data-[state=active]:focus:outline-red-300 danger:data-[state=active]:focus:border-none
          danger:data-[state=active]:border-red-500
        `}
      {...props}
    >
      {children}
    </Trigger>
  )
}
