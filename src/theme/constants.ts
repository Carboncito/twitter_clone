import { DefaultTheme } from 'styled-components/native';

export const THEME: DefaultTheme = {
  base: '#1DA1F2',
  dark: '#0C90E1',
  black: '#090A0A',
  white: '#FFFFFF',
  spacing: {
    XXS: 4,
    XS: 8,
    SM: 16,
    M: 20,
    MD: 24,
    LG: 32,
    XL: 48,
    XXL: 56,
  },
};

export const COLORS_NAME = Object.keys(THEME) as Array<keyof typeof THEME>;
