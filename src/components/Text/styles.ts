import styled, { THEME } from 'theme';
import { PropsFunction, TextProps } from './types';
import { getPropValue } from 'utils';
import { SIZE_STYLE } from './constants';

const getSizeText = (props: PropsFunction): string => {
  const size = getPropValue(props, SIZE_STYLE, 'default');

  return size;
};

const getStyleText = ({ bold, regular }: PropsFunction): string => {
  let size = '300';
  if (regular) size = '400';
  if (bold) size = '600';

  return `font-weight: ${size};`;
};

const getColorText = (props: PropsFunction): string => {
  const color = getPropValue(props, THEME, 'black');

  return `color: ${color};`;
};

export const TextStyled = styled.Text<TextProps>`
  font-style: normal;
  ${getStyleText}
  ${getSizeText}
  ${getColorText}
`;
