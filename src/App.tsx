import { useState, ChangeEvent } from 'react';

import Editor from './screens/Editor';
import Home from './screens/Home';

import Header from './components/Header';

import { GlobalStyle } from './styles/GlobalStyle';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import light from './styles/themes/light';
import dark from './styles/themes/dark';

export default function App() {
  const [image, setImage] = useState<File | null>(null);
  const [theme, setTheme] = useState<DefaultTheme>(dark);

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

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <div className='App'>
        {/* <Header toggleTheme={toggleTheme} /> */}

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
      </div>
    </ThemeProvider>
  );
}
