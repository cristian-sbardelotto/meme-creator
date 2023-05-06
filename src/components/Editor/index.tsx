import { useState, createRef } from 'react';

import Header from '../Header';
import Button from '../Button';
import TextStyleBar from '../TextStyleBar';

import { exportComponentAsJPEG } from 'react-component-export-image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKeyboard } from '@fortawesome/free-solid-svg-icons';

import * as S from './styles';
import { theme } from '../../styles/theme';
import ActionButtons from '../ActionButtons';

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

  const [isBold, setIsBold] = useState<boolean>(false);
  const [isItalic, setIsItalic] = useState<boolean>(false);
  const [hasUnderline, setHasUnderline] = useState<boolean>(false);

  const memeRef = createRef<HTMLDivElement>();
  const colorRef = createRef<HTMLInputElement>();

  function changeTextColor() {
    setTextColor(String(colorRef.current?.value));
  }

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

              <TextStyleBar
                bold={isBold}
                italic={isItalic}
                underline={hasUnderline}
                setBold={setIsBold}
                setItalic={setIsItalic}
                setUnderline={setHasUnderline}
              />
            </S.FontStyleGroup>
          </div>

          <ActionButtons discardImage={discardImage} saveMeme={saveMeme} />
        </S.EditorSection>
      </S.Container>
    </>
  );
}
