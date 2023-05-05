import { useState } from 'react';

import Header from '../Header';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKeyboard } from '@fortawesome/free-solid-svg-icons';

import * as S from './styles';

type EditorProps = {
  image: File;
};

export default function Editor({ image }: EditorProps) {
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

        <S.InputGroup className='das'>
          <FontAwesomeIcon
            icon={faKeyboard}
            color='#777'
          />

          <S.Input
            type='text'
            placeholder='Text on top...'
            value={text}
            onChange={event => setText(event.target.value)}
          />
        </S.InputGroup>
      </S.Container>
    </>
  );
}
