import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components';
import { Login } from './src/screens/Login';
import theme from './src/styles/theme';

export default function App() {
  return (
    <GestureHandlerRootView>
      <ThemeProvider theme={theme}>
        <Login />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}

