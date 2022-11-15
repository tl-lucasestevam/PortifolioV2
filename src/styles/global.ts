import { Poppins } from '@next/font/google'
import { globalCss } from '.'

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
})

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    scrollbarWidth: 'thin',
    scrollbarColor: 'blue blue',
  },

  html: {
    fontFamily: poppins.style.fontFamily,
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
  },

  'body, input, textarea, button': {
    fontWeight: 400,
    overflowX: 'hidden',
    fontFamily: poppins.style.fontFamily,
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
