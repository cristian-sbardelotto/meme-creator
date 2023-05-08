import styled from 'styled-components';

type ButtonProps = {
  color: string;
  checked?: boolean;
};

export const Button = styled.button<ButtonProps>`
  padding: 0.4rem 1rem 0.4rem 1rem;

  border: none;
  border-radius: 5px;
  background-color: ${({ theme, checked, color }) => checked ? theme.colors.primary : color};
  font-size: 1rem;
  color: #fff;

  transition: 0.1s all ease;

  &:hover {
    filter: brightness(0.9);
    cursor: pointer;
  }
`;
