import Button from '../Button';

import * as S from './styles';
import { theme } from '../../styles/theme';

type ActionButtonsProps = {
  saveMeme: () => void;
  discardImage: () => void;
};

export default function ActionButtons({
  saveMeme,
  discardImage,
}: ActionButtonsProps) {
  return (
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
  );
}
