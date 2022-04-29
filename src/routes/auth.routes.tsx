import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Splash } from '../screens/Splash';
import { IntroSlider } from '../screens/IntroSlider/pagination';
import { Login } from '../screens/Login';
import { RecoverPassword } from '../screens/RecoverPassword';

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName="Splash"
    >
      <Screen
        name="Splash"
        component={Splash}
      />
      <Screen
        name="IntroSlider"
        component={IntroSlider}
      />
      <Screen
        name="Login"
        component={Login}
      />
      <Screen
        name="RecoverPassword"
        component={RecoverPassword}
      />
    </Navigator>
  )
}