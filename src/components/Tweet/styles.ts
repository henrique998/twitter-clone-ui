import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const TweetContainer = styled(Link)`
  padding: 1.5rem 1.25rem;

  display: grid;
  grid-template-columns: 3rem 1fr;
  gap: 0.75rem;

  border-bottom: 1px solid ${({ theme }) => theme.border};

  img {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
  }
`

export const TweetContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > p {
    line-height: 1.25;
    color: ${({ theme }) => theme.text};
  }
`

export const TweetContentHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  strong {
    color: ${({ theme }) => theme.text};
  }

  span {
    font-size: 0.875rem;
    color: ${({ theme }) => theme['nick-name']};
  }
`

export const TweetContentFooter = styled.footer`
  display: flex;
  align-items: center;
  gap: 3rem;

  margin-top: 0.75rem;

  button {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    color: ${({ theme }) => theme['nick-name']};

    svg {
      width: 1.25rem;
      height: 1.25rem;
    }
  }
`
