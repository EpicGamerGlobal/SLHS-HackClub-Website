import React from 'react';
import { MantineProvider, createTheme } from '@mantine/core';
import MainPage from './pages/MainPage';
import DotBackground from './components/ui/DotBackground';

const theme = createTheme({
  colors: {
    dark: [
      '#C1C2C5',
      '#A6A7AB',
      '#909296',
      '#5c5f66',
      '#373A40',
      '#2C2E33',
      '#25262b',
      '#1A1B1E',
      '#141517',
      '#101113',
    ],
  },
  primaryColor: 'blue',
});

const App: React.FC = () => {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <DotBackground />
      <MainPage />
    </MantineProvider>
  );
};

export default App;
