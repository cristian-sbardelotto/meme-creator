import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

type ThemeProps = {
  theme: typeof theme;
};

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body {
    background-color: ${({ theme }: ThemeProps) => theme.colors.background};
    color: #fff;
  }
`;
