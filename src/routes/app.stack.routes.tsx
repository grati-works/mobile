import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Organizations } from "../screens/Organizations";
import { Home } from "../screens/Home";

const { Navigator, Screen } = createStackNavigator();

export function AppStackRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home"
    >
      <Screen
        name="Organizations"
        component={Organizations}
        options={{
          gestureEnabled: false,
        }}
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
