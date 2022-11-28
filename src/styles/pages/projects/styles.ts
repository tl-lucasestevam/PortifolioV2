import { styled } from '../..'

export const ProjectsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '9rem',
})

export const IntroSection = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1.3rem',

  hr: {
    width: '149px',
    height: '7px',
    backgroundColor: '$white',
    border: 'none',
  },

  h1: {
    color: '$white',
  },

  p: {
    maxWidth: '36.5625rem',
    textAlign: 'center',
  },
})

export const ProjectsArea = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridRowGap: '2.5rem',
})
