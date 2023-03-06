import Link from 'next/link'
import { styled } from '../../styles'

export const FooterContainer = styled('footer', {
  padding: '5rem 0',

  hr: {
    border: '1px solid rgba(209, 209, 209, 0.2)',
  },
})

export const FooterArea = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '3rem',
})

export const TopSide = styled('div', {
  display: 'flex',

  '@media (max-width: 768px)': {
    flexDirection: 'column',
    gap: '5rem',
  },
})

export const LeftSide = styled('footer', {
  display: 'flex',
  gap: '2rem',
  alignItems: 'center',
  flex: 1,
})

export const Avatar = styled('footer', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '139px',
  height: '139px',
  backgroundColor: '$gray600',
  borderRadius: 10,
})

export const DescriptionSide = styled('footer', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',

  h1: {
    fontSize: '2rem',
    color: '$gray200',
  },

  h3: {
    color: '#606060',
  },

  '@media (max-width: 768px)': {
    h1: {
      fontSize: '1.4rem',
    },

    h3: {
      fontSize: '1rem',
    },
  },
})

export const RightSide = styled('footer', {
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const LinkButton = styled(Link, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.5rem',

  h1: {
    fontSize: '2rem',
  },
})

export const BottomSide = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
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

export const ListIcons = styled('ul', {
  display: 'flex',
  gap: '1rem',

  '&:hover': {
    cursor: 'pointer',
  },
})
