import { useState } from 'react';

import Header from '../Header';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKeyboard } from '@fortawesome/free-solid-svg-icons';

import * as S from './styles';

type EditorProps = {
  image: File;
  discardImage: () => void;
};

export default function Editor({ image, discardImage }: EditorProps) {
  const [text, setText] = useState<string>('');

  return (
    <>
      <Header />

      <S.Container>
        <S.ImageGroup>
          <div>
            <p>{text}</p>
          </div>

          <img
            src={URL.createObjectURL(image)}
            alt='Image selected by the user to create the meme'
          />
        </S.ImageGroup>

        <S.EditorSection>
          <S.InputGroup className='das'>
            <S.Input
              type='text'
              placeholder='Text on top...'
              value={text}
              onChange={event => setText(event.target.value)}
            />

            <FontAwesomeIcon
              icon={faKeyboard}
              color='#777'
            />
          </S.InputGroup>

          <S.DiscardButton onClick={discardImage}>Discard Changes</S.DiscardButton>
        </S.EditorSection>
      </S.Container>
    </>
  );
}
