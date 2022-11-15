import { ReactNode } from 'react'
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
    </>
  )
}
