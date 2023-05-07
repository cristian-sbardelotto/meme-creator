import styled from 'styled-components';

type MemeTextProps = {
  color: string;
  italic: boolean;
  bold: boolean;
  underline: boolean;
};

export const ImageGroup = styled.div`
  height: 400px;
  position: relative;

  div {
    width: 100%;
    padding: 0 2rem;

    position: absolute;
  }

  img {
    height: 400px;
    width: 50vw;
  }
`;

export const MemeText = styled.p<MemeTextProps>`
  text-align: center;
  word-break: break-all;
  font-size: 1.5rem;
  font-family: Impact, sans-serif;

  font-style: ${({ italic }) => italic && 'italic'};
  text-decoration: ${({ underline }) => underline && 'underline'};
  font-weight: ${({ bold }) => bold && 'bold'};

  color: ${({ color }) => color};
`;
