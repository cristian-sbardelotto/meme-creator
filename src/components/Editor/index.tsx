import { useState } from 'react';

import Header from '../Header';
import Button from '../Button';

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

          <Button
            onClick={discardImage}
            color='#f95959'
          >
            Discard Changes
          </Button>
        </S.EditorSection>
      </S.Container>
    </>
  );
}
