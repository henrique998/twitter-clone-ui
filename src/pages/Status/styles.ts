import styled from 'styled-components'

export const StatusContainer = styled.main``

export const AnswerForm = styled.form`
  padding: 1.5rem 1.25rem;
  border-bottom: 1px solid ${({ theme }) => theme.border};

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;

  label {
    flex: 1;
    display: flex;
    gap: 0.75rem;

    img {
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
    }

    textarea {
      flex: 1;

      border: 0;

      font-size: 1.25rem;
      font-weight: 500;

      margin-top: 0.75rem;
      resize: none;

      &::placeholder {
        color: ${({ theme }) => theme.placeholder};
      }
    }
  }

  button {
    /* margin-left: auto; */
    max-width: fit-content;
  }

  @media (max-width: 780px) {
    font-size: 1rem;
  }
`
