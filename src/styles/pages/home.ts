import { styled } from '..'

export const IntroContainer = styled('div', {
  display: 'flex',
  minHeight: '40rem',
})

export const DescriptionSide = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flex: 1,
})

export const TextBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',

  width: '26rem',
  overflowWrap: 'break-word',

  div: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.9rem',
  },

  h1: {
    fontSize: '$3xl',
    fontWeight: 800,
  },

  p: {},

  span: {
    color: '$green300',
  },
})

export const ImageSide = styled('div', {
  flex: 1,
})
