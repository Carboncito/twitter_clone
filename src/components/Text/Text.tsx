import React, { PropsWithChildren } from 'react';
import { TextStyled } from './styles';
import { TextProps } from './types';

const Text: React.FC<PropsWithChildren<TextProps>> = ({
  children,
  ...props
}) => {
  return <TextStyled {...props}>{children}</TextStyled>;
};

export default Text;
