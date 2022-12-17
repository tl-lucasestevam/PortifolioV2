import { styled } from '../../../../styles'

export const EducationInfoContainer = styled('div', {})

export const EducationCard = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',

  span: {
    color: '$green300',
  },

  p: {
    opacity: 0.7,
  },

  hr: {
    marginTop: '1.5rem',
    marginBottom: '1.5rem',
    opacity: 0.2,
  },

  '&:last-child': {
    hr: {
      display: 'none',
    },
  },
})

export const EducationDescription = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  textAlign: 'justify',
  opacity: 0.7,
})
