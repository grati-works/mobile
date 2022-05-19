import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Image } from "./styles";
import splashImage from "../../../assets/splash.png";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function Splash() {
  const navigation = useNavigation();
  async function startApp() {
    const alreadyAccessedApp = await AsyncStorage.getItem("@Grati:alreadyAccessedApp");

    if (!alreadyAccessedApp) {
      navigation.navigate("IntroSlider");
      AsyncStorage.setItem("@Grati:alreadyAccessedApp", "true");
    } else {
      navigation.navigate("Login");
    }
  }

  useEffect(() => {
    setTimeout(startApp, 3000);
  }, []);

  return <Image source={splashImage} />;
}
