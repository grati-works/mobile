import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Organizations } from "../screens/Organizations";

const { Navigator, Screen } = createStackNavigator();

export function AppStackRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Organizations"
    >
      <Screen
        name="Organizations"
        component={Organizations}
        options={{
          gestureEnabled: false,
        }}
      />
    </Navigator>
  );
}
