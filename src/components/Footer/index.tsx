import * as S from './styles';

export default function Footer() {
  return (
    <footer>
      <S.Developer>
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
