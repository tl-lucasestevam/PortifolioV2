import { styled } from '../../styles'
import Link from 'next/link'

export const HeaderContainer = styled('header', {
  padding: '4.8rem 1.5rem',
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
