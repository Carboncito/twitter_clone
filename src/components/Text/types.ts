import { StyledPropsFunction } from 'types';
import { TextProps as RNTextProps } from 'react-native/types';

export interface SizeText {
  small?: boolean;
  large?: boolean;
  default?: boolean;
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  h6?: boolean;
}

export interface TextProps extends SizeText {
  // Style
  bold?: boolean;
  regular?: boolean;
  light?: boolean;

  // Colors
  base?: boolean;
  dark?: boolean;
  black?: boolean;
  white?: boolean;
}

export type PropsFunction = StyledPropsFunction<TextProps & RNTextProps, Text>;
