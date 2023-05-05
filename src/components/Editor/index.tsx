import * as S from './styles';

type EditorProps = {
  image: File;
}

export default function Editor({ image }: EditorProps) {
  return (
    <S.Container>
      <S.Image
        src={URL.createObjectURL(image)}
        alt='Image selected by the user to create the meme'
      />
    </S.Container>
  );
}
