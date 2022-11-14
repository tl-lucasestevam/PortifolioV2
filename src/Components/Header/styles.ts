import { styled } from '../../styles'
import Link from 'next/link'
import Hamburger from 'hamburger-react'

export const HeaderContainer = styled('header', {
  padding: '4.8rem 3rem',
})

export const ListItems = styled('ul', {
  display: 'flex',
  gap: '1.75rem',
  justifyContent: 'center',

  li: {
    cursor: 'pointer',
    fontSize: '$md',
  },

  '@media (max-width: 768px)': {
    display: 'none',
  },
})

export const NavLink = styled(Link, {
  display: 'inline-flex',
  overflow: 'hidden',
  paddingBottom: 5,
  position: 'relative',
  color: 'inherit',
  textDecoration: 'none',
  lineHeight: '24px',
  opacity: 0.5,
  transition: 'all .5s ease',

  '&::before': {
    content: '',
    position: 'absolute',
    transition: 'transform .5s ease',
    left: 0,
    bottom: 0,
    width: '103%',
    height: '2px',
    background: '$green300',
    transform: 'translateX(-100%)',
    opacity: 1,
  },

  '&:hover:before': {
    transform: 'translateX(0)',
  },

  '&:hover': {
    opacity: 1,
  },
})

export const HamburgerMenu = styled(Hamburger, {})

export const MobileNavbarContainer = styled('nav', {
  display: 'none',

  '@media (max-width: 768px)': {
    display: 'flex',
    alignItems: 'flex-end',
    flexDirection: 'column',
    gap: 20,
  },
})

export const MobileListItems = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  transition: 'all 0.6s ease-in-out',
  overflow: 'hidden',

  variants: {
    toggled: {
      true: {
        height: '40vh',
      },
      false: {
        height: 0,
      },
    },
  },
})

export const MobileNavLink = styled(Link, {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 15,
  transition: 'opacity 0.4s ease-in-out',

  '&:hover': {
    backgroundColor: '$gray700',
  },

  variants: {
    toggled: {
      true: {
        opacity: 1,
      },
      false: {
        opacity: 0,
      },
    },
  },
})
