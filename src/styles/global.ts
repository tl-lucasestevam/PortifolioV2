import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    scrollbarWidth: 'thin',
    scrollbarColor: 'blue blue',
  },

  html: {
    fontFamily: 'Poppins, sans-serif',
  },

  body: {
    '-webkit-font-smoothing': 'antialised',
    backgroundColor: '$gray800',
    color: '$gray300',
  },

  '.container': {
    maxWidth: '79rem',
    margin: '0 auto',
    padding: '1.5rem',

    '@media (max-width: 1366px)': {
      padding: '0 5rem',
    },

    '@media (max-width: 768px)': {
      padding: '0 2rem',
    },
  },

  'body, input, textarea, button': {
    fontWeight: 400,
    overflowX: 'hidden',
  },

  button: {
    cursor: 'pointer',
  },

  ul: {
    listStyle: 'none',
  },

  a: {
    textDecoration: 'none',
    color: '$gray300',
  },

  h1: {
    fontSize: '$3xl',
    fontWeight: 700,

    '@media (max-width: 1366px)': {
      fontSize: '$2xl',
    },
  },

  '*::-webkit-scrollbar': {
    width: '5px',
  },

  '*::-webkit-scrollbar-track': {
    background: '$gray700',
  },

  '*::-webkit-scrollbar-thumb': {
    backgroundColor: '$gray300',
    borderRadius: '20px',
  },
})
