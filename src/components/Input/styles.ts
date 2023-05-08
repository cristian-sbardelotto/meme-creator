import styled from 'styled-components';

export const InputGroup = styled.div`
  position: relative;

  svg {
    position: absolute;
    top: 25%;
    left: 90%;
  }
`;

export const Input = styled.input`
  padding: 0.4rem 5rem 0.4rem 1rem;

  border: 3px solid ${({ theme }) => theme.colors.inputPlaceholder};
  border-radius: 7px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.inputBackground};

  transition: 0.1s all ease;

  &::placeholder {
    color: ${({ theme }) => theme.colors.inputPlaceholder};
  }

  &:focus {
    background-color: ${({theme }) => `${theme.colors.inputBackground}9`};
    outline: none;
    border: 3px solid ${({ theme }) => theme.colors.primary};
  }
`;
