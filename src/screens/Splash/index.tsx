import { useNavigation } from "@react-navigation/native";
import { Image } from "./styles";
import splashImage from "../../../assets/splash.png";
import { useEffect } from "react";

export function Splash() {
  const navigation = useNavigation();
  function startApp() {
    navigation.navigate("Login");
  }

  useEffect(() => {
    console.log("splash");
    setTimeout(startApp, 3000);
  }, []);

  return <Image source={splashImage} />;
}
