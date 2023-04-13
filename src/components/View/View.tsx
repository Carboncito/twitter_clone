import React, { PropsWithChildren } from 'react';
import { ViewProps } from './types';
import { ViewStyled } from './styles';

const View: React.FC<PropsWithChildren<ViewProps>> = ({
  children,
  ...props
}) => {
  return <ViewStyled {...props}>{children}</ViewStyled>;
};

export default View;
