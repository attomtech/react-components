import { keyframes, styled } from '../../styles'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { ArrowDown } from 'phosphor-react'

const enterFromRight = keyframes({
  from: { transform: 'translateX(200px)', opacity: 0 },
  to: { transform: 'translateX(0)', opacity: 1 }
})

const enterFromLeft = keyframes({
  from: { transform: 'translateX(-200px)', opacity: 0 },
  to: { transform: 'translateX(0)', opacity: 1 }
})

const exitToRight = keyframes({
  from: { transform: 'translateX(0)', opacity: 1 },
  to: { transform: 'translateX(200px)', opacity: 0 }
})

const exitToLeft = keyframes({
  from: { transform: 'translateX(0)', opacity: 1 },
  to: { transform: 'translateX(-200px)', opacity: 0 }
})

const scaleIn = keyframes({
  from: { transform: 'rotateX(-30deg) scale(0.9)', opacity: 0 },
  to: { transform: 'rotateX(0deg) scale(1)', opacity: 1 }
})

const scaleOut = keyframes({
  from: { transform: 'rotateX(0deg) scale(1)', opacity: 1 },
  to: { transform: 'rotateX(-10deg) scale(0.95)', opacity: 0 }
})

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 }
})

const fadeOut = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 }
})

const smallScreenMediaQuery = `@media only screen and (max-width: 600px)`

export const NavigationMenuRoot = styled(NavigationMenu.Root, {
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  width: '100vw',
  zIndex: 1,

  [smallScreenMediaQuery]: {
    justifyContent: 'flex-start'
  },

  variants: {
    open: {
      true: {
        [smallScreenMediaQuery]: {
          marginLeft: 0,
          animation: `${enterFromLeft} 500ms ease`
        }
      },

      false: {
        [smallScreenMediaQuery]: {
          marginLeft: '-250px',
          animation: `${exitToLeft} 500ms ease`
        }
      }
    }
  }
})

export const NavigationMenuList = styled(NavigationMenu.List, {
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: '$gray900',
  padding: '$1',
  borderRadius: '$md',
  listStyle: 'none',
  boxShadow: '0 2px 10px $colors$gray200',
  margin: 0,

  [smallScreenMediaQuery]: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    height: '100vh',
    width: '35vw',
    borderRadius: '0',

    position: 'fixed'
  }
})

const itemStyles = {
  padding: '$2 $3',
  outline: 'none',
  userSelect: 'none',
  fontWeight: '$medium',
  lineHeight: '$base',
  borderRadius: '$sm',
  fontSize: '$md',
  color: '$gray200',
  '&:focus': { boxShadow: '0 0 0 2px $colors$white' },
  '&:hover': {
    backgroundColor: '$gray100',
    color: '$gray800'
  }
}

export const NavigationMenuTrigger = styled(NavigationMenu.Trigger, {
  all: 'unset',
  ...itemStyles,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 2
})

export const NavigationMenuLink = styled(NavigationMenu.Link, {
  ...itemStyles,
  display: 'block',
  textDecoration: 'none',
  fontSize: '$md',
  lineHeight: '$base'
})

export const NavigationMenuContent = styled(NavigationMenu.Content, {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',

  '@media only screen and (min-width: 600px)': {
    width: 'auto'
  },

  animationDuration: '250ms',
  animationTimingFunction: 'ease',
  '&[data-motion="from-start"]': { animationName: enterFromLeft },
  '&[data-motion="from-end"]': { animationName: enterFromRight },
  '&[data-motion="to-start"]': { animationName: exitToLeft },
  '&[data-motion="to-end"]': { animationName: exitToRight }
})

export const NavigationMenuIndicator = styled(NavigationMenu.Indicator, {
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
  height: 10,
  top: '100%',
  overflow: 'hidden',
  zIndex: 1,
  transition: 'width, transform 250ms ease',
  '&[data-state="visible"]': { animation: `${fadeIn} 200ms ease` },
  '&[data-state="hidden"]': { animation: `${fadeOut} 200ms ease` }
})

export const NavigationMenuViewport = styled(NavigationMenu.Viewport, {
  position: 'relative',
  transformOrigin: 'top center',
  marginTop: '$3',
  width: '100%',
  backgroundColor: '$gray900',
  borderRadius: '$md',
  overflow: 'hidden',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  height: 'var(--radix-navigation-menu-viewport-height)',
  transition: 'width, height, 300ms ease',
  '&[data-state="open"]': { animation: `${scaleIn} 200ms ease` },
  '&[data-state="closed"]': { animation: `${scaleOut} 200ms ease` },

  '@media only screen and (min-width: 600px)': {
    width: 'var(--radix-navigation-menu-viewport-width)'
  },

  [smallScreenMediaQuery]: {
    width: '65vw',
    marginLeft: '35vw'
  }
})

export const List = styled('ul', {
  display: 'grid',
  padding: '$6',
  margin: 0,
  columnGap: 10,
  listStyle: 'none',
  variants: {
    layout: {
      one: {
        '@media only screen and (min-width: 600px)': {
          width: 500,
          gridTemplateColumns: '.75fr 1fr'
        }
      },
      two: {
        '@media only screen and (min-width: 600px)': {
          width: 600,
          gridAutoFlow: 'column',
          gridTemplateRows: 'repeat(3, 1fr)'
        }
      }
    }
  },
  defaultVariants: {
    layout: 'one'
  }
})

export const ListItemHeading = styled('div', {
  fontWeight: '$medium',
  lineHeight: '$short',
  marginBottom: '$2',
  color: '$gray300'
})

export const ListItemText = styled('p', {
  all: 'unset',
  color: '$gray400',
  lineHeight: '$base',
  fontWeight: 'initial'
})

export const ListItemLink = styled('a', {
  display: 'block',
  outline: 'none',
  textDecoration: 'none',
  userSelect: 'none',
  padding: '$3',
  borderRadius: '$md',
  fontSize: '$md',
  lineHeight: '$base',
  '&:focus': { boxShadow: '0 0 0 2px $colors$white' },
  '&:hover': {
    backgroundColor: '$gray100',

    [`> ${ListItemHeading}, > ${ListItemText}`]: {
      color: '$gray800'
    }
  }
})

export const ViewportPosition = styled('div', {
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  top: '100%',
  left: 0,
  perspective: '2000px',

  [smallScreenMediaQuery]: {
    position: 'fixed',
    top: 20
  }
})

export const CaretDown = styled(ArrowDown, {
  position: 'relative',
  color: '$gray500',
  top: 1,
  transition: 'transform 250ms ease',
  '[data-state=open] &': { transform: 'rotate(-180deg)' }
})

export const Arrow = styled('div', {
  position: 'relative',
  top: '70%',
  backgroundColor: '$white',
  width: '$3',
  height: '$3',
  transform: 'rotate(45deg)',
  borderTopLeftRadius: '$xs'
})

export const ResponsiveButton = styled('button', {
  all: 'unset',
  display: 'none',

  [smallScreenMediaQuery]: {
    display: 'block',
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 999999
  }
})
