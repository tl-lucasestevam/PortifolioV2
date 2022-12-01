import { styled } from '../../styles'

export const InfoContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',

  h3: {
    fontSize: '1.3rem',
    color: '$gray200',
    fontWeight: 'bold',

    '@media (max-width: 768px)': {
      fontSize: '1.1rem',
    },
  },

  p: {
    fontSize: '1.5rem',
    color: '$white',
    fontWeight: 'bold',
  },
})
