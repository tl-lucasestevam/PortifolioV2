import { styled } from '../../styles'

export const IntroContainer = styled('div', {
  display: 'flex',

  '@media (max-width: 768px)': {
    flexDirection: 'column',
    gap: '4rem',
  },
})

export const DescriptionSide = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flex: 1,

  '@media (max-width: 768px)': {
    alignItems: 'flex-start',
  },
})

export const TextBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',

  overflowWrap: 'break-word',

  div: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.9rem',
  },

  h1: {
    maxWidth: '32rem',
  },

  p: {
    maxWidth: '27rem',
  },

  span: {
    color: '$green300',
  },
})

export const ImageSide = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,

  '@media (max-width: 768px)': {
    display: 'none',
  },
})

export const Shape = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 422,
  height: 486,
  borderRadius: 20,
  backgroundColor: '$gray700',
  position: 'relative',

  '@media (max-width: 1366px)': {
    width: 342,
    height: 406,
  },
})

export const Squares = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 110,
  height: 110,
  borderRadius: 15,
  backgroundColor: '#1E1E1E',
  position: 'absolute',

  '&.left-bottom': {
    left: -30,
    bottom: -30,
  },

  '&.right-top': {
    right: -55,
    top: 60,
  },

  '@media (max-width: 1366px)': {
    width: 90,
    height: 90,

    img: {
      width: 62,
      height: 53.02,
    },
  },
})
