import * as S from './styles';

export default function MemeCreator() {
  return (
    <S.Container>
      <header>
        <S.Title>
          Meme <span>Creator</span>
        </S.Title>
      </header>

      <main>
        <S.Button>Create a New Meme</S.Button>
      </main>

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
    </S.Container>
  );
}
