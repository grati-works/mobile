import React from "react";
import AppLoading from "expo-app-loading";
import { ThemeProvider } from "styled-components";
import theme from "./src/styles/theme";
import { Routes } from "./src/routes";

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
  );
}
