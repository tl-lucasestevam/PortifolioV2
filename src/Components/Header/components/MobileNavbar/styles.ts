import { styled } from '../../../../styles'
import Hamburger from 'hamburger-react'
import Link from 'next/link'

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
