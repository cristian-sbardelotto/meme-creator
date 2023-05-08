import { useContext } from 'react';

import ReactSwitch from 'react-switch';

import { ThemeContext } from 'styled-components';
import * as S from './styles';

type HeaderProps = {
  toggleTheme: () => void;
};

export default function Header({ toggleTheme }: HeaderProps) {
  const { colors, title } = useContext(ThemeContext);

  return (
    <S.Header>
      <S.Title>
        <a href='/'>
          Meme <span>Creator</span>
        </a>
      </S.Title>

      <ReactSwitch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={colors.text}
        onColor={colors.primary}
        offHandleColor={colors.primary}
      />
    </S.Header>
  );
}
