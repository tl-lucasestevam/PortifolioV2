import Image from 'next/image'
import { styled } from '../../styles'

export const ProjectsContainer = styled('section', {})

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
  gap: '8rem',
  flex: 1,
})

export const DescriptionSide = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  paddingRight: '5rem',
  maxWidth: '30rem',

  h1: {
    fontSize: '2.5rem',
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
  maxWidth: '100%',
  height: 588,
  backgroundColor: '$gray600',
  borderRadius: 15,
  gap: '2rem',
  position: 'relative',

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
  },

  h3: {
    fontSize: '2.3rem',
    maxWidth: '27rem',
    color: '$white',
  },
})

export const ImageArea = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  paddingTop: '3rem',
  borderRadius: 10,
  // position: 'absolute',
  // bottom: 0,
  // left: 0,

  variants: {
    bg: {
      Codify: {
        backgroundColor: '$codify',
      },
    },
  },
})

export const ImageCard = styled(Image, {
  borderRadius: 10,
  maxWidth: '100%',
  height: 'auto',
})
