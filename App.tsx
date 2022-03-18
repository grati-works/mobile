import React from 'react';
import AppLoading from 'expo-app-loading';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components';
import { Organizations } from './src/screens/Organizations';
import theme from './src/styles/theme';

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
} from '@expo-google-fonts/inter';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
  });

  if(!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <GestureHandlerRootView>
      <ThemeProvider theme={theme}>
        <Organizations />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
