import styled from 'styled-components'

export const SidebarContainer = styled.aside`
  padding: 1.5rem 1.25rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  .logo {
    width: 2rem;
    height: 2rem;
  }

  nav {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  @media (max-width: 780px) {
    padding: 1.5rem 0.75rem;

    align-items: center;
  }
`
