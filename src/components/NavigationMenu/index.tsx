import {
  CaretDown,
  List,
  ListItemHeading,
  ListItemLink,
  ListItemText,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuRoot,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  ResponsiveButton,
  ViewportPosition
} from './styles'
import * as Navigation from '@radix-ui/react-navigation-menu'
import React, { ComponentProps, ElementRef, useState } from 'react'
import { List as MenuList } from 'phosphor-react'

interface ListItemProps extends ComponentProps<typeof ListItemLink> {}

const ListItem = React.forwardRef<
  ElementRef<typeof ListItemLink>,
  ListItemProps
>(({ children, title, ...props }, forwardedRef) => (
  <li>
    <Navigation.Link asChild>
      <ListItemLink {...props} ref={forwardedRef}>
        <ListItemHeading>{title}</ListItemHeading>
        <ListItemText>{children}</ListItemText>
      </ListItemLink>
    </Navigation.Link>
  </li>
))

export interface NavigationMenuSubmenu {
  titulo: string
  descricao?: string
  href: string
}

export interface NavigationMenuItem {
  titulo: string
  href?: string
  layout?: 'one' | 'two'
  submenu?: Array<NavigationMenuSubmenu>
}

export interface NavigationMenuProps {
  menu: Array<NavigationMenuItem>
  responsiveButtonColor?: string
}

export const NavigationMenu = ({
  menu,
  responsiveButtonColor = 'black'
}: NavigationMenuProps) => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
      <ResponsiveButton
        onClick={() => {
          setOpen(!open)
        }}
      >
        <MenuList color={responsiveButtonColor} />
      </ResponsiveButton>

      <NavigationMenuRoot open={open}>
        <NavigationMenuList>
          {menu.map(({ layout = 'one', titulo, href, submenu }) => {
            return (
              <Navigation.Item key={titulo}>
                {href ? (
                  <NavigationMenuLink href={href}>{titulo}</NavigationMenuLink>
                ) : (
                  <>
                    <NavigationMenuTrigger>
                      {titulo} <CaretDown />
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <List layout={layout}>
                        {submenu &&
                          submenu.map((item) => {
                            return (
                              <ListItem
                                key={item.titulo}
                                title={item.titulo}
                                href={item.href}
                              >
                                {item.descricao}
                              </ListItem>
                            )
                          })}
                      </List>
                    </NavigationMenuContent>
                  </>
                )}
              </Navigation.Item>
            )
          })}
        </NavigationMenuList>

        <ViewportPosition>
          <NavigationMenuViewport />
        </ViewportPosition>
      </NavigationMenuRoot>
    </>
  )
}

ListItem.displayName = 'ListItem'
NavigationMenu.displayName = 'NavigationMenu'
