import React from 'react';
import { View } from 'react-native';
import { Text } from 'components';
import { TwitterLogo } from 'assets';

const Login = () => {
  return (
    <View>
      <TwitterLogo />
      <Text h1>See what's happening in the world right now</Text>
    </View>
  );
};

export default Login;
