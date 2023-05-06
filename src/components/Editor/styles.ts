import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 10vh;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const ImageGroup = styled.div`
  position: relative;

  div {
    width: 100%;
    padding: 0 2rem;

    position: absolute;
  }

  p {
    text-align: center;
    word-break: break-all;
    font-size: 1.5rem;
    font-family: Impact, sans-serif;
  }

  img {
    height: 400px;
    width: 500px;
  }
`;

export const EditorSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 100px;
`;

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

  border: 3px solid #777;
  border-radius: 7px;
  font-weight: 700;
  color: #fff;
  background: #111;

  transition: 0.1s all ease;

  &:focus {
    background: #1119;
    outline: none;
    border: 3px solid ${({ theme }) => theme.colors.primary};
  }
`;
