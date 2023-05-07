import { useRef, ChangeEvent } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import trollface from '/assets/trollface.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import * as S from './styles';

type HomeProps = {
  addFile: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function Home({ addFile }: HomeProps) {
  const inpRef = useRef<HTMLInputElement>(null);

  return (
    <S.Container>
      <div>
        <Header />

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

        <Footer />
      </div>

      <S.Image
        src={trollface}
        alt='Image of a example meme, the Trollface'
      />
    </S.Container>
  );
}
