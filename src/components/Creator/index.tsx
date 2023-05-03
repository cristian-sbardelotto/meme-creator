import { useRef } from 'react';
import * as S from './styles';

export default function MemeCreator() {
  const inpRef = useRef<HTMLInputElement>(null);

  function selectFile() {
    inpRef.current?.click();
  }

  return (
    <S.Container>
      <header>
        <S.Title>
          Meme <span>Creator</span>
        </S.Title>
      </header>

      <main>
        <S.Button onClick={selectFile}>
          Create a New Meme
          <input
            ref={inpRef}
            type='file'
            title=''
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
    </S.Container>
  );
}
