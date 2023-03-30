import React from 'react';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { HederProps } from './types';
import { LeftButtonHeader } from 'components';

const getHeader = ({
  withHeader = true,
  withBackButton,
  title,
  rightComponent,
}: HederProps): NativeStackNavigationOptions => {
  let propsHeader: NativeStackNavigationOptions = { headerShown: false };

  if (withHeader) {
    propsHeader = {
      headerLeft: () => (withBackButton ? <LeftButtonHeader /> : null),
      headerTitle: title,
      headerTitleAlign: 'center',
      headerRight: rightComponent,
    };
  }

  return propsHeader;
};

export default getHeader;
