import { StyledPropsFunction } from 'types';
import { TextProps as RNTextProps } from 'react-native/types';

export interface TextProps {
  // Size
  small?: boolean;
  large?: boolean;
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  h6?: boolean;
  paragraph?: boolean;

  // Style
  heavy?: boolean;
  regular?: boolean;
  light?: boolean;
}

export type PropsFunction = StyledPropsFunction<TextProps & RNTextProps, Text>;
