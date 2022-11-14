import { ReactNode } from 'react'
import { Header } from '../Components/Header'

interface DefaultLayoutProps {
  children: ReactNode
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
