import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components';

import MessageSvg from '../assets/icons/bottom-tab/message.svg';
import HomeSvg from '../assets/icons/bottom-tab/home.svg';

import { AppStackRoutes } from './app.stack.routes';
import { SendMessage } from '../screens/SendMessage';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppTabRoutes() {
  const theme = useTheme();
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.text_detail,
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          height: 78,
          backgroundColor: theme.colors.title,
        }
      }}
    >
      <Screen
        name="StackRoutes"
        component={AppStackRoutes}
        options={{
          tabBarIcon: ({ color }) => (
            <HomeSvg width={24} height={24} fill={color} />
          )
        }}
      />
      <Screen
        name="SendMessage"
        component={SendMessage}
        options={{
          tabBarIcon: ({ color }) => (
            <MessageSvg width={24} height={24} fill={color} />
          )
        }}
      />
    </Navigator>
  )
}