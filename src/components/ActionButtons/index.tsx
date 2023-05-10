import { useContext } from 'react';

import Button from '../Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

import { ThemeContext } from 'styled-components';
import * as S from './styles';


type ActionButtonsProps = {
  downloadMeme: () => void;
  discardImage: () => void;
};

export default function ActionButtons({
  downloadMeme,
  discardImage,
}: ActionButtonsProps) {
  const { colors } = useContext(ThemeContext);

  return (
    <S.ButtonGroup>
      <Button
        onClick={downloadMeme}
        color={colors.primary}
      >
        Download
        <FontAwesomeIcon icon={faDownload}  />
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
