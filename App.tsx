import React from 'react';
import { Navigator } from './src/router';
import { ThemeProvider } from './src/theme';

const STORYBOOK_START = true;

const App = (): JSX.Element => {
  return (
    <ThemeProvider>
      <Navigator />
    </ThemeProvider>
  );
};

let AppEntryPoint = App;

// Render Storybook if storybookEnabled is true
if (STORYBOOK_START) {
  AppEntryPoint = require('./.storybook').default;
}

export default AppEntryPoint;
