import * as S from './styles';

type ButtonProps = {
  children: React.ReactNode;
  color: string;
  onClick: (event?: MouseEvent) => void;
};

export default function Button({ children, color, onClick }: ButtonProps) {
  return (
    <S.Button
      onClick={() => onClick()}
      color={color}
    >
      {children}
    </S.Button>
  );
}
