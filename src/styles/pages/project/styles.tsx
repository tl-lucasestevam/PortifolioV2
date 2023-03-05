import Image from 'next/image'
import Link from 'next/link'

import { styled } from '../..'

export const IntroSection = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',

  hr: {
    width: '149px',
    height: '7px',
    backgroundColor: '$white',
    border: 'none',
  },

  h1: {
    color: '$white',
    maxWidth: '40rem',

    '@media (max-width: 768px)': {
      fontSize: '2rem',
    },
  },

  p: {
    maxWidth: '36.5625rem',
  },
})

export const ImageBackground = styled('div', {
  width: '100vw',
  height: '70vh',
  margin: '8rem 0',
  position: 'relative',

  '@media (max-width: 768px)': {
    height: '35vh',
  },
})

export const ImageArea = styled('div', {
  display: 'flex',
  justifyContent: 'center',
})

export const ImageProject = styled(Image, {
  maxWidth: '1000px',
  width: '100%',
  height: 'auto',
  position: 'absolute',
  bottom: 0,

  '@media (max-width: 1366px)': {
    width: '60%',
  },

  '@media (max-width: 1024px)': {
    width: '85%',
  },
})

export const DescriptionSide = styled('div', {
  display: 'flex',

  '@media (max-width: 768px)': {
    flexDirection: 'column',
    gap: '5rem',
  },
})

export const LeftSide = styled('div', {
  flex: 1,
  position: 'relative',
})

export const InfoSide = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  position: 'sticky',
  top: 20,
})

export const RightSide = styled('div', {
  flex: 3,
})

export const ProjectContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.4rem',

  p: {
    fontSize: '1.1rem',
    lineHeight: '2rem',
  },

  'h1, h2, h3': {
    color: '$white',
  },

  h2: {
    fontSize: '1.6rem',
  },

  ul: {
    listStyle: 'initial',
  },

  'ul, ol': {
    paddingLeft: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
})

export const LinkWebsite = styled(Link, {
  display: 'flex',
  gap: '0.5rem',
  transition: 'all 0.3s ease-in-out',

  '&:hover': {
    opacity: 0.6,
  },
})
