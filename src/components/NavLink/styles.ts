import { Link } from 'react-router-dom'
import styled from 'styled-components'

interface NavLinkContainerProps {
  isActive: boolean
}

export const NavLinkContainer = styled(Link)<NavLinkContainerProps>`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  width: fit-content;

  color: ${({ isActive, theme }) =>
    isActive ? theme['twitter-blue'] : 'black'};

  span {
    font-size: 1.25rem;
    font-weight: 700;
  }

  svg {
    width: 2rem;
    height: 2rem;
  }

  transition: color 0.1s;

  &:hover {
    color: ${({ isActive, theme }) => !isActive && theme['twitter-blue']};
  }

  @media (max-width: 780px) {
    span {
      display: none;
    }
  }
`
