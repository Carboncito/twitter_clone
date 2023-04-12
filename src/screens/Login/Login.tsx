import React from 'react';
import { Image, View } from 'react-native';
import { Text } from 'components';
import { TwitterLogo, images } from 'assets';

const Login = () => {
  return (
    <View>
      <TwitterLogo />
      <Text h1>See what's happening in the world right now.</Text>
      <Image source={images.danny_fenton} />
    </View>
  );
};

export default Login;
