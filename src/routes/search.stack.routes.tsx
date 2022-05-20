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
      initialRouteName="Search"
    >
      <Screen
        name="Search"
        component={Search}
      />
      <Screen
        name="Profile"
        component={UserProfile}
      />
    </Navigator>
  );
}
