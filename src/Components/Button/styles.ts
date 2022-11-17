import { styled } from '../../styles'

export const ButtonBase = styled('button', {
  width: 152,
  height: 50,
  borderRadius: 10,
  fontSize: '$md',
  fontWeight: 600,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 7,
  transition: 'all 0.3s ease-in-out',

  variants: {
    bg: {
      contained: {
        backgroundColor: '$green300',
      },
      outlined: {
        backgroundColor: 'transparent',
        border: '2px solid $gray300',
        color: '$gray300',

        '&:hover': {
          backgroundColor: '$gray300',
          color: '$gray800',
        },
      },
    },
  },
})
