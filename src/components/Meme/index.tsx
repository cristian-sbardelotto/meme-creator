import { RefObject } from 'react';
import * as S from './styles';

type ImageProps = {
  bold: boolean;
  italic: boolean;
  underline: boolean;
  text: string;
  textColor: string;
  image: File;
  imageRef: RefObject<HTMLDivElement>;
}

export default function Image({ bold, italic, underline, text, textColor, image, imageRef }: ImageProps) {
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
