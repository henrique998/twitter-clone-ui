import styled from 'styled-components'

export const SeparatorElement = styled.div`
  background-color: ${({ theme }) => theme['separator-bg']};
  border-top: ${({ theme }) => theme.border};
  border-bottom: ${({ theme }) => theme.border};
  height: 0.75rem;
`
