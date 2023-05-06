import styled from 'styled-components';

type MemeTextProps = {
  color: string;
};

export const Container = styled.div`
  padding-top: 10vh;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const ImageGroup = styled.div`
  height: 400px;
  position: relative;

  div {
    width: 100%;
    padding: 0 2rem;

    position: absolute;
  }

  img {
    height: 400px;
    width: 500px;
  }
`;

export const MemeText = styled.p<MemeTextProps>`
  text-align: center;
  word-break: break-all;
  font-size: 1.5rem;
  font-family: Impact, sans-serif;

  color: ${({ color }) => color};
`;

export const EditorSection = styled.section`
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
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

export const FontStyleGroup = styled.div`
  margin-top: 5vh;

  display: flex;
`;

export const ColorInput = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  width: 30px;
  height: 35px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &::-webkit-color-swatch {
    border-radius: 50%;
    border: 1px solid #fff;
  }

  &::-moz-color-swatch {
    border-radius: 50%;
    border: none;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
`;
