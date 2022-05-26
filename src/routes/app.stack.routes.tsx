import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Organizations } from "../screens/Organizations";
import { Home } from "../screens/Home";
import { UserProfile } from "../screens/Profile";

const { Navigator, Screen } = createStackNavigator();

export function AppStackRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Organizations"
    >
      <Screen name="Organizations" component={Organizations} />
      <Screen
        name="Home"
        component={Home}
        options={{
          gestureEnabled: false,
        }}
      />
      <Screen name="Profile" component={UserProfile} />
    </Navigator>
  );
}
