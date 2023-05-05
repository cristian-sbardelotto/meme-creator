import styled from 'styled-components';

export const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
  font-weight: 900;
  letter-spacing: 3px;

  span {
    font-weight: 900;
    color: ${({ theme }) => theme.colors.primary_button};
  }
`;
