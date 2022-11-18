import { ReactNode } from 'react'
import { TitleSectionContainer } from './styles'

interface TitleSectionProps {
  'data-aos': string
  'data-aos-duration': string
  children: ReactNode
}

export function TitleSection({ children, ...props }: TitleSectionProps) {
  return <TitleSectionContainer {...props}>{children}</TitleSectionContainer>
}
