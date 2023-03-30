import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import PublicNavigator from './PublicNavigator/PublicNavigator';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Navigator: React.FC = () => {
  const navigator = <PublicNavigator />;
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <NavigationContainer>{navigator}</NavigationContainer>
    </SafeAreaView>
  );
};

export default Navigator;
