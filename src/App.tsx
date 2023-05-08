import { useState, useEffect, ChangeEvent } from 'react';

import Editor from './screens/Editor';
import Home from './screens/Home';

import Header from './components/Header';

import { GlobalStyle } from './styles/GlobalStyle';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import light from './styles/themes/light';
import dark from './styles/themes/dark';

const LOCAL_STORAGE_THEME_KEY = 'theme';
const userSavedTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);

export default function App() {
  const [image, setImage] = useState<File | null>(null);
  const [theme, setTheme] = useState<DefaultTheme>(
    userSavedTheme === 'light' ? light : dark
  );

  function addFile(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) return;

    setImage(event.target.files[0]);
  }

  function discardImage() {
    setImage(null);
  }

  function toggleTheme() {
    setTheme(theme.title === 'light' ? dark : light);
  }

  useEffect(
    () => localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme.title),
    [theme]
  );

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      {image ? (
        <Editor
          image={image}
          discardImage={discardImage}
        >
          <Header toggleTheme={toggleTheme} />
        </Editor>
      ) : (
        <Home addFile={addFile}>
          <Header toggleTheme={toggleTheme} />
        </Home>
      )}
    </ThemeProvider>
  );
}
