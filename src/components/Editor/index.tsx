import { useState, createRef } from 'react';

import Header from '../Header';
import Button from '../Button';

import { exportComponentAsJPEG } from 'react-component-export-image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKeyboard } from '@fortawesome/free-solid-svg-icons';

import * as S from './styles';
import { theme } from '../../styles/theme';

type EditorProps = {
  image: File;
  discardImage: () => void;
};

export default function Editor({ image, discardImage }: EditorProps) {
  const [text, setText] = useState<string>('');
  const memeRef = createRef<HTMLDivElement>();

  function removeFileExtension(string: string) {
    return string.replace(/\.[^/.]+$/, '');
  }

  function saveMeme() {
    const fileName = image.name;
    const formattedFileName = removeFileExtension(fileName);

    const saveOptions = {
      fileName: formattedFileName + ' meme',
    };

    exportComponentAsJPEG(memeRef, saveOptions);
  }

  return (
    <>
      <Header />

      <S.Container>
        <S.ImageGroup ref={memeRef}>
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

          <S.ButtonGroup>
            <Button
              onClick={saveMeme}
              color={theme.colors.primary}
            >
              Save
            </Button>

            <Button
              onClick={discardImage}
              color='#f95959'
            >
              Discard Changes
            </Button>
          </S.ButtonGroup>
        </S.EditorSection>
      </S.Container>
    </>
  );
}
