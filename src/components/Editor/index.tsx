import { useState, createRef } from 'react';

import Header from '../Header';
import Button from '../Button';

import { exportComponentAsJPEG } from 'react-component-export-image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBold,
  faItalic,
  faKeyboard,
  faUnderline,
} from '@fortawesome/free-solid-svg-icons';

import * as S from './styles';
import { theme } from '../../styles/theme';

type EditorProps = {
  image: File;
  discardImage: () => void;
};

const acceptedFiles = [
  '.jpg',
  '.jpeg',
  '.JPG',
  '.JPEG',
  '.png',
  '.svg',
  '.webp',
  '.ico',
];
const fileExtensionRegex = /\.[^/.]+$/;

export default function Editor({ image, discardImage }: EditorProps) {
  const [text, setText] = useState<string>('');

  const [textColor, setTextColor] = useState<string>('#000');

  const [hasUnderline, setHasUnderline] = useState<boolean>(false);
  const [isItalic, setIsItalic] = useState<boolean>(false);
  const [isBold, setIsBold] = useState<boolean>(false);

  const memeRef = createRef<HTMLDivElement>();
  const colorRef = createRef<HTMLInputElement>();

  function getFileExtension(regex: RegExp) {
    return String(regex.exec(image.name)?.[0]);
  }

  function removeFileExtension(string: string) {
    return string.replace(fileExtensionRegex, '');
  }

  function saveMeme() {
    const fileName = image.name;
    const formattedFileName = removeFileExtension(fileName);

    const saveOptions = {
      fileName: formattedFileName + ' meme',
    };

    exportComponentAsJPEG(memeRef, saveOptions);
  }

  const isImage = acceptedFiles.includes(getFileExtension(fileExtensionRegex));
  if (!isImage) {
    alert('Select a image file!');
    location.reload();
  }

  function changeTextColor() {
    setTextColor(String(colorRef.current?.value));
  }

  function changeTextToBold() {
    setIsBold(previous => !previous);
  }

  function changeTextToItalic() {
    setIsItalic(previous => !previous);
  }

  function changeTextToUnderline() {
    setHasUnderline(previous => !previous);
  }

  return (
    <>
      <Header />

      <S.Container>
        <S.ImageGroup ref={memeRef}>
          <div>
            <S.MemeText
              bold={isBold}
              italic={isItalic}
              underline={hasUnderline}
              color={String(textColor)}
            >
              {text}
            </S.MemeText>
          </div>

          <img
            src={URL.createObjectURL(image)}
            alt='Image selected by the user to create the meme'
          />
        </S.ImageGroup>

        <S.EditorSection>
          <div>
            <S.InputGroup>
              <S.Input
                type='text'
                placeholder='Text on top...'
                value={text}
                onChange={event => setText(event.target.value)}
                accept='image/*'
              />

              <FontAwesomeIcon
                icon={faKeyboard}
                color='#777'
              />
            </S.InputGroup>

            <S.FontStyleGroup>
              <S.ColorInput
                ref={colorRef}
                type='color'
                onChange={changeTextColor}
              />

              <div>
                <Button
                  color='#ccc'
                  onClick={() => changeTextToBold()}
                  checked={isBold}
                >
                  <FontAwesomeIcon
                    icon={faBold}
                    color='#000'
                  />
                </Button>

                <Button
                  color='#ccc'
                  onClick={() => changeTextToItalic()}
                  checked={isItalic}
                >
                  <FontAwesomeIcon
                    icon={faItalic}
                    color='#000'
                  />
                </Button>

                <Button
                  color='#ccc'
                  onClick={() => changeTextToUnderline()}
                  checked={hasUnderline}
                >
                  <FontAwesomeIcon
                    icon={faUnderline}
                    color='#000'
                  />
                </Button>
              </div>
            </S.FontStyleGroup>
          </div>

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
