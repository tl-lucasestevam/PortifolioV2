import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import { appWithTranslation } from 'next-i18next'

globalStyles()

export function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default appWithTranslation(App)
