/* eslint-disable @next/next/no-sync-scripts */
import { Html, Head, Main, NextScript } from 'next/document'
import { getCssText } from '../styles'

export default function Document() {
  return (
    <Html className="notranslate" translate="no">
      <Head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
        <meta name="google" content="notranslate" />
      </Head>
      <body>
        <Main />
        <NextScript />
        {/* AOS (Animate On Scroll) */}
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      </body>
    </Html>
  )
}
