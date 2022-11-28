import { InfoContainer } from './styles'
import { ReactNode } from 'react'

interface InfoProps {
  title: string
  children: ReactNode
}

export function Info({ title, children }: InfoProps) {
  return (
    <InfoContainer>
      <h3>{title}</h3>
      <p>{children}</p>
    </InfoContainer>
  )
}
