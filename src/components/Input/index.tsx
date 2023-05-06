import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKeyboard } from '@fortawesome/free-solid-svg-icons';

import * as S from './styles';

type InputProps = {
  text: string;
  setText: (text: string) => void;
}

export default function Input({ text, setText }: InputProps) {
  return (
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
  );
}
