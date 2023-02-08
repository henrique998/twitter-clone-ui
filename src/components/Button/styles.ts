import styled, { css } from 'styled-components'

interface ButtonContainerProps {
  variant: 'big' | 'small'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  background-color: ${({ theme }) => theme['twitter-blue']};
  color: ${({ theme }) => theme.white};

  border-radius: 9999px;
  font-weight: 900;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: filter 0.1s;

  &:hover {
    filter: brightness(0.9);
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
    display: none;
  }

  ${({ variant }) =>
    variant === 'big' &&
    css`
      padding: 1rem;
      font-size: 1.25rem;
    `}

  ${({ variant }) =>
    variant === 'small' &&
    css`
      border-radius: 9999px;
      padding: 0.75rem 1.5rem;
    `}

  @media (max-width: 780px) {
    span {
      display: none;
    }

    svg {
      display: block;
    }
  }
`
