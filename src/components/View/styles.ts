import styled from 'theme';
import { ViewProps } from './types';

const getWidth = (width: ViewProps['width']): string => {
  if (typeof width === 'string') return width.concat(';');

  return `${width}px;`;
};

export const ViewStyled = styled.View<ViewProps>`
  ${({ paddingVertical }) =>
    paddingVertical && `padding-vertical: ${paddingVertical}px;`}
  ${({ paddingHorizontal }) =>
    paddingHorizontal && `padding-horizontal: ${paddingHorizontal}px;`}
  ${({ marginVertical }) =>
    marginVertical && `margin-vertical: ${marginVertical}px;`}
  ${({ marginHorizontal }) =>
    marginHorizontal && `margin-horizontal: ${marginHorizontal}px;`}

  ${({ relative }) => relative && 'position: relative;'}
  ${({ absolute }) => absolute && 'position: absolute;'}

  ${({ width }) => width && getWidth(width)}
`;
