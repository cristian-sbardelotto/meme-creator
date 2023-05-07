import * as S from './styles';

type ButtonProps = {
  children: React.ReactNode;
  color: string;
  onClick: (event?: MouseEvent) => void;
  checked?: boolean;
};

export default function Button({ children, color, onClick, checked }: ButtonProps) {
  return (
    <S.Button
      onClick={() => onClick()}
      color={color}
      checked={checked}
    >
      {children}
    </S.Button>
  );
}
