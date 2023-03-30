import React from 'react';
import { Navigator } from './src/router';
import { ThemeProvider } from './src/theme';

const App = (): JSX.Element => {
  return (
    <ThemeProvider>
      <Navigator />
    </ThemeProvider>
  );
};

export default App;
