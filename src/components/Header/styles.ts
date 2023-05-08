import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
  font-weight: 900;
  letter-spacing: 3px;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
    font-weight: 900;
  }

  span {
    font-weight: 900;
    color: ${({ theme }) => theme.colors.primary};
  }
`;
