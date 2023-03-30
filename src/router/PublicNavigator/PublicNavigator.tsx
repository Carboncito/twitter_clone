import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PublicScreenNames, PublicStackParams } from './types';
import { Login } from 'screens';
import getHeader from './utils/getHeader';

const PublicStackNavigator = createNativeStackNavigator<PublicStackParams>();
const Screen = PublicStackNavigator.Screen;

const PublicNavigator: React.FC = () => {
  return (
    <PublicStackNavigator.Navigator initialRouteName={PublicScreenNames.LOGIN}>
      <Screen
        name={PublicScreenNames.LOGIN}
        component={Login}
        options={{ headerShown: false }}
      />
      <Screen
        name={PublicScreenNames.REGISTER}
        component={Login}
        options={getHeader({ title: 'Register' })}
      />
    </PublicStackNavigator.Navigator>
  );
};

export default PublicNavigator;
