import styled from 'styled-components';

export const Developer = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  color: #000;
  font-weight: 500;
  font-style: italic;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.tertiary};

    &:hover {
      text-decoration: underline;
    }
  }
`;
