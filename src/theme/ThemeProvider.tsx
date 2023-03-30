import React, { PropsWithChildren } from 'react';
import { THEME } from './constants';
import { ThemeProvider } from 'styled-components/native';

const CustomProvider: React.FC<PropsWithChildren> = ({ children }) => (
  <ThemeProvider theme={THEME}>{children}</ThemeProvider>
);

export default CustomProvider;
