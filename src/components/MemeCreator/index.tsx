import { useState, useRef, ChangeEvent } from 'react';

import Header from '../Header';
import Footer from '../Footer';

import * as S from './styles';

export default function MemeCreator() {
  const [image, setImage] = useState<File>();
  const inpRef = useRef<HTMLInputElement>(null);

  function addFile(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) return;

    setImage(event.target.files[0]);
  }

  return (
    <>
      {image ? (
        <S.EditorContainer>
          <S.Image
            src={URL.createObjectURL(image)}
            alt='image selected by the user to create the meme'
          />
        </S.EditorContainer>
      ) : (
        <S.MainContainer>
          <Header />

          <main>
            <S.Button onClick={() => inpRef.current?.click()}>
              Create a New Meme
              <input
                ref={inpRef}
                type='file'
                onChange={event => addFile(event)}
              />
            </S.Button>
          </main>

          <Footer />
        </S.MainContainer>
      )}
    </>
  );
}
