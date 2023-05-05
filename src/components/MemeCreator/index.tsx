import { useState, useRef, ChangeEvent } from 'react';

import Header from '../Header';
import Footer from '../Footer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import trollface from '/assets/trollface.png';

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
          <S.MemeImage
            src={URL.createObjectURL(image)}
            alt='image selected by the user to create the meme'
          />
        </S.EditorContainer>
      ) : (
        <S.MainContainer>
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
            alt=''
          />
        </S.MainContainer>
      )}
    </>
  );
}
