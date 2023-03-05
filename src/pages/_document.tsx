/* eslint-disable @next/next/no-sync-scripts */
import { Html, Head, Main, NextScript } from 'next/document'
import { getCssText } from '../styles'

export default function Document() {
  return (
    <Html className="notranslate" translate="no">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <link rel="shortcut icon" href="/favicon.svg" />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />

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
