import { ButtonBase } from './styles'
import { ReactNode } from 'react'

interface ButtonProps {
  bg: 'contained' | 'outlined'
  text: string
  icon: ReactNode
}

export function Button({ bg, text, icon }: ButtonProps) {
  return (
    <ButtonBase bg={bg}>
      {text} {icon}
    </ButtonBase>
  )
}
