import styled from 'styled-components';

export const MainContainer = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const EditorContainer = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
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

export const Image = styled.img`
  height: 300px;
`;
