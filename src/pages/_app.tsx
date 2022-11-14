import type { AppProps } from 'next/app'
import { DefaultLayout } from '../Layouts/DefaultLayout'
import { globalStyles } from '../styles/global'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  )
}
