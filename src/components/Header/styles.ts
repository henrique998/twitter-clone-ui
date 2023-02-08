import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 1.25rem;
  font-weight: 700;

  border-bottom: 1px solid ${({ theme }) => theme.border};
  padding: 1.5rem 1.25rem;

  svg {
    width: 1.5rem;
    height: 1.5rem;
    color: ${({ theme }) => theme['twitter-blue']};
  }
`
