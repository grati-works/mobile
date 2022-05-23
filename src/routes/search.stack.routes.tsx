import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Search } from "../screens/Search";
import { UserProfile } from "../screens/Profile";

const { Navigator, Screen } = createStackNavigator();

export function SearchStackRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="SearchScreen"
    >
      <Screen
        name="SearchScreen"
        component={Search}
      />
      <Screen
        name="Profile"
        component={UserProfile}
      />
    </Navigator>
  );
}
