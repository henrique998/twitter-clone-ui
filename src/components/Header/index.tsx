import { Sparkle } from 'phosphor-react'
import { HeaderContainer } from './styles'

interface HeaderProps {
  title: string
}

export function Header({ title }: HeaderProps) {
  return (
    <HeaderContainer>
      {title}
      <Sparkle />
    </HeaderContainer>
  )
}
