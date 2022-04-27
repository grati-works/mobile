import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { IntroSlider } from "../screens/IntroSlider";
import { Home } from "../screens/Home";

const { Navigator, Screen } = createStackNavigator();

export function AppStackRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="IntroSlider"
    >
      <Screen
        name="IntroSlider"
        component={IntroSlider}
      />
      <Screen
        name="Home"
        component={Home}
        options={{
          gestureEnabled: false,
        }}
      />
    </Navigator>
  );
}
