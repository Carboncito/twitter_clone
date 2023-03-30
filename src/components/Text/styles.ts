import styled from 'theme';
import { PropsFunction, TextProps } from './types';

const getSizeText = ({ small }: PropsFunction): string => {
  let size = '';
  if (small) {
    size = `
      font-style: normal;
      font-size: 36px;
      line-height: 40px;
    `;
  }
  return size;
};

const getStyleText = ({ heavy }: PropsFunction): string => {
  let size = '300';
  if (heavy) size = '600';

  return `font-weight: ${size};`;
};

export const TextStyled = styled.Text<TextProps>`
  ${getSizeText}
  ${getStyleText}
  color: ${({ theme }) => theme.black};
`;
