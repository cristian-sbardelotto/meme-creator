import { RefObject } from 'react';
import * as S from './styles';

type MemeProps = {
  bold: boolean;
  italic: boolean;
  underline: boolean;
  text: string;
  textColor: string;
  image: File;
  imageRef: RefObject<HTMLDivElement>;
}

export default function Meme({ bold, italic, underline, text, textColor, image, imageRef }: MemeProps) {
  return (
    <S.ImageGroup ref={imageRef}>
      <div>
        <S.MemeText
          bold={bold}
          italic={italic}
          underline={underline}
          color={textColor}
        >
          {text}
        </S.MemeText>
      </div>

      <img
        src={URL.createObjectURL(image)}
        alt='Image selected by the user to create the meme'
      />
    </S.ImageGroup>
  );
}
