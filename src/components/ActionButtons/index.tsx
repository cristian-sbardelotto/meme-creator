import { useContext } from 'react';

import Button from '../Button';

import { ThemeContext } from 'styled-components';
import * as S from './styles';

type ActionButtonsProps = {
  saveMeme: () => void;
  discardImage: () => void;
};

export default function ActionButtons({
  saveMeme,
  discardImage,
}: ActionButtonsProps) {
  const { colors } = useContext(ThemeContext);

  return (
    <S.ButtonGroup>
      <Button
        onClick={saveMeme}
        color={colors.primary}
      >
        Save
      </Button>

      <Button
        onClick={discardImage}
        color={colors.secondary}
      >
        Discard Changes
      </Button>
    </S.ButtonGroup>
  );
}
