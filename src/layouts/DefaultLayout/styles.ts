import styled from 'styled-components'

export const LayoutContainer = styled.div`
  margin: 0 auto;
  max-width: 1320px;
  min-height: 100vh;

  display: grid;
  grid-template-columns: 300px 1fr;

  .content {
    border-left: 1px solid ${({ theme }) => theme.border};
    border-right: 1px solid ${({ theme }) => theme.border};
    height: 100vh;
  }

  @media (max-width: 780px) {
    grid-template-columns: 80px 1fr;
  }
`
