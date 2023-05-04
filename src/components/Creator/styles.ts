import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  letter-spacing: 3px;

  span {
    font-weight: 900;
    color: ${({ theme }) => theme.colors.primary_button};
  }
`;

export const Button = styled.button`
  position: relative;

  padding: 0.8rem 2rem;

  border: none;
  border-radius: 1rem;
  font-size: 1rem;
  font-weight: 700;
  background-color: ${({ theme }) => theme.colors.primary_button};
  color: ${({ theme }) => theme.colors.background};

  transition: 0.1s all ease;

  input {
    width: 0;
    height: 0;
  }

  &:hover {
    cursor: pointer;
    filter: brightness(0.85);
  }
`;

export const Developer = styled.p`
  font-style: italic;

  a {
    text-decoration: none;
    color: #6ee5d7;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Image = styled.img`
  height: 300px;
`;
