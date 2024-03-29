import Image from 'next/image'
import { styled } from '../../styles'

export const ProjectsContainer = styled('section', {
  backgroundColor: '$gray700',
  padding: '4rem 0',
})

export const ProjectsArea = styled('div', {
  display: 'flex',
  gap: '3rem',

  '@media (max-width: 768px)': {
    flexDirection: 'column',
    gap: '8rem',
  },
})

export const LeftSide = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '4rem',
  flex: 1,
})

export const RightSide = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '5rem',
  flex: 1,
})

export const DescriptionSide = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '3rem',
  paddingRight: '5rem',
  maxWidth: '30rem',

  h1: {
    fontSize: '2.5rem',

    '@media (max-width: 768px)': {
      fontSize: '2rem',
    },
  },

  p: {
    maxWidth: '25rem',
  },

  '@media (max-width: 768px)': {
    paddingRight: '0',
  },
})

export const Project = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '95%',
  backgroundColor: '$gray600',
  borderRadius: 15,
  gap: '2rem',
  position: 'relative',
  cursor: 'pointer',

  verticalAlign: 'middle',
  '-webkit-transform': 'perspective(1px) translateZ(0)',
  transform: 'perspective(1px) translateZ(0)',
  boxShadow: '0 0 1px rgba(0, 0, 0, 0)',
  '-webkit-transition-duration': '0.3s',
  transitionDuration: '0.3s',
  '-webkit-transition-property': 'transform',
  transitionProperty: 'transform',

  '&:hover, &:focus, &:active': {
    '-webkit-transform': 'scale(1.05)',
    transform: 'scale(1.05)',

    img: {
      '-webkit-transform': 'scale(1.08)',
      transform: 'scale(1.08)',
    },
  },

  section: {
    display: 'flex',
    flexDirection: 'column',
    padding: '2rem',
    gap: '2rem',
  },
})

export const TagsArea = styled('div', {
  width: '100%',
})

export const Tag = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 5,
  backgroundColor: '#414149',
  width: 97.07,
  height: 38.38,
})

export const DescriptionArea = styled('div', {
  display: 'flex',
  flexDirection: ' column',
  gap: '1rem',

  h2: {
    fontSize: '2rem',

    '@media (max-width: 768px)': {
      fontSize: '1.5rem',
    },
  },

  h3: {
    fontSize: '2.3rem',
    maxWidth: '27rem',
    color: '$white',

    '@media (max-width: 768px)': {
      fontSize: '1.5rem',
    },
  },
})

export const ImageArea = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  paddingTop: '3rem',
  borderRadius: 10,
  overflow: 'hidden',

  variants: {
    bg: {
      Codify: {
        backgroundColor: '$codify',
      },
    },
  },
})

export const ImageCard = styled(Image, {
  verticalAlign: 'middle',
  '-webkit-transform': 'perspective(1px) translateZ(0)',
  transform: 'perspective(1px) translateZ(0)',
  boxShadow: '0 0 1px rgba(0, 0, 0, 0)',
  '-webkit-transition-duration': '0.3s',
  transitionDuration: '0.4s',
  '-webkit-transition-property': 'transform',
  transitionProperty: 'transform',

  borderRadius: 10,
  maxWidth: '100%',
  height: 'auto',
})
