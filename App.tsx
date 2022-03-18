import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components';
import { RecoverPassword } from './src/screens/RecoverPassword';
import theme from './src/styles/theme';

export default function App() {
  return (
    <GestureHandlerRootView>
      <ThemeProvider theme={theme}>
        <RecoverPassword />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
