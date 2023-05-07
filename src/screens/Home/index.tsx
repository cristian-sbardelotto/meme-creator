import { useRef, ChangeEvent } from 'react';

import Footer from '../../components/Footer';

import trollface from '/assets/trollface.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import * as S from './styles';

type HomeProps = {
  addFile: (event: ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
};

export default function Home({ addFile, children }: HomeProps) {
  const inpRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <S.Container>
        {children}

        <S.MainGroup>
          <main>
            <S.Button onClick={() => inpRef.current?.click()}>
              Create a New Meme
              <FontAwesomeIcon icon={faPlus} />
              <input
                ref={inpRef}
                type='file'
                onChange={event => addFile(event)}
              />
            </S.Button>
          </main>

          <S.Image
            src={trollface}
            alt='Image of a example meme, the Trollface'
          />
        </S.MainGroup>
      </S.Container>

      <Footer />
    </>
  );
}
