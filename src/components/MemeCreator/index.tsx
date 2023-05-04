import { useState, useRef, ChangeEvent } from 'react';
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
          <header>
            <S.Title>
              Meme <span>Creator</span>
            </S.Title>
          </header>

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

          <footer>
            <S.Developer>
              Developed by{' '}
              <a
                href='http://github.com/cristian-sbardelotto/'
                target='_blank'
                rel='noreferrer'
              >
                Cristian Sbardelotto
              </a>
            </S.Developer>
          </footer>
        </S.MainContainer>
      )}
    </>
  );
}
