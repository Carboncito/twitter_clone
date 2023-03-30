import { RefAttributes } from 'react';
import { ThemedStyledProps } from 'styled-components';
import { DefaultTheme } from 'styled-components/native';

export type StyledPropsFunction<T, D> = ThemedStyledProps<
  T & RefAttributes<D>,
  Partial<DefaultTheme>
>;
