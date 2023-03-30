import styled from 'theme';
import { ViewProps } from './types';

export const ViewStyled = styled.View<ViewProps>`
  ${({ marginVertical }) => marginVertical}px;
  ${({ marginVertical }) => marginVertical}px;
`;
