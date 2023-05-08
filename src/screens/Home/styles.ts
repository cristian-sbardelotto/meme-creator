import styled from 'styled-components';

export const Container = styled.div`
  height: 85vh;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const MainGroup = styled.main`
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Button = styled.button`
  padding: 0.8rem 0 0.8rem 2rem;

  display: flex;
  align-items: center;
  gap: 1.8rem;

  border: none;
  border-radius: 1rem;
  font-size: 1rem;
  font-weight: 700;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};

  transition: 0.1s all ease;

  input {
    width: 0;
  }

  &:hover {
    cursor: pointer;
    filter: brightness(0.85);
  }
`;

export const Image = styled.img`
  height: 200px;
`;
