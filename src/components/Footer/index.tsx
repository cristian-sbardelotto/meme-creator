import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

import * as S from './styles';

export default function Footer() {
  return (
    <footer>
      <S.Developer>
        <FontAwesomeIcon icon={faCode} />
        Developed by{' '}
        <a
          href='http://github.com/cristian-sbardelotto/'
          target='_blank'
          rel='noreferrer'
        >
          Cristian Sbardelotto
        </a>
      </S.Developer>
    </footer>
  );
}
