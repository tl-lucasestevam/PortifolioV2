import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import { appWithTranslation } from 'next-i18next'
import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

globalStyles()

export function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init()
  }, [])

  return <Component {...pageProps} />
}

export default appWithTranslation(App)
