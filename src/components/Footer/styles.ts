import styled from 'styled-components';

export const Developer = styled.p`
  display: flex;
  align-items: center;
  gap: 4px;

  font-style: italic;

  a {
    text-decoration: none;
    color: #6ee5d7;

    &:hover {
      text-decoration: underline;
    }
  }
`;
