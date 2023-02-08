import { ReactElement, ReactSVG } from 'react'
import { useLocation } from 'react-router-dom'
import { NavLinkContainer } from './styles'

interface NavLinkProps {
  label: string
  path: string
  icon: ReactElement<ReactSVG>
}

export function NavLink({ path, label, icon }: NavLinkProps) {
  const location = useLocation()

  const isActive = location.pathname === path

  return (
    <NavLinkContainer to={path} isActive={isActive}>
      {icon}
      <span>{label}</span>
    </NavLinkContainer>
  )
}
