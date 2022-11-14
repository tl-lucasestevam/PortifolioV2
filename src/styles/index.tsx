import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: '#fff',
      gray800: '#151515',
      gray700: '#181818',
      gray600: '#29292E',
      gray500: '#2E2E2E',
      gray300: '#D1D1D1',

      green300: '#36C768',
    },
    fontSizes: {
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
      '3xl': '3rem',
    },
  },
})
