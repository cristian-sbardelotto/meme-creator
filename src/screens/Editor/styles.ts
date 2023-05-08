import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 10vh;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const EditorSection = styled.section`
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const FontStyleGroup = styled.div`
  margin-top: 5vh;
  padding: 0.5rem 1.4rem;

  display: flex;
  justify-content: space-between;

  background-color: #4447;
  border-radius: 15px;

  div {
    display: flex;
    gap: 10px;
  }
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
    border-radius: 5px;
    border: 1px solid #fff;
  }

  &::-moz-color-swatch {
    border-radius: 5px;
    border: none;
  }
`;
