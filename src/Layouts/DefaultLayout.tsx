import { ReactNode } from 'react'
import { Footer } from '../Components/Footer'
import { FrameLanguage } from '../Components/FrameLanguage'
import { Header } from '../Components/Header'

interface DefaultLayoutProps {
  children: ReactNode
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <>
      <Header />
      <FrameLanguage />
      {children}
      <Footer />
    </>
  )
}
