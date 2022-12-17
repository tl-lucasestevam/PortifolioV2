import { styled } from '../../../../styles'

export const BioInfoContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
})

export const PersonalInfo = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',

  div: {
    padding: '1rem 0',

    span: {
      color: '$green300',
      fontWeight: 500,
    },
  },

  '@media (max-width: 768px)': {
    gridTemplateColumns: '1fr',

    div: {
      padding: '0.5rem 0',
    },
  },
})
