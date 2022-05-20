import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components';

import MessageSvg from '../assets/icons/bottom-tab/message.svg';
import HomeSvg from '../assets/icons/bottom-tab/home.svg';
import MedalSvg from '../assets/icons/bottom-tab/medal.svg';
import SearchSvg from '../assets/icons/bottom-tab/search.svg';
import UserSvg from '../assets/icons/bottom-tab/user.svg';

import { AppStackRoutes } from './app.stack.routes';
import { SearchStackRoutes } from './search.stack.routes';
import { SendMessage } from '../screens/SendMessage';
import { Ranking } from '../screens/Ranking';
import { ProfileMe } from '../screens/Profile/Me';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppTabRoutes() {
  const theme = useTheme();
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.light.background,
        tabBarActiveBackgroundColor: theme.colors.transparent_black,
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingVertical: 0,
          height: Platform.OS == 'ios' ? 108 : 78,
          backgroundColor: theme.colors.title,
        },
      }}
    >
      <Screen
        name="StackRoutes"
        component={AppStackRoutes}
        options={{
          tabBarIcon: ({ color }) => (
            <HomeSvg width={26} height={26} stroke={color} />
          )
        }}
      />
      <Screen
        name="Ranking"
        component={Ranking}
        options={{
          tabBarIcon: ({ color }) => (
            <MedalSvg width={27} height={27} stroke={color} />
          )
        }}
      />
      <Screen
        name="SendMessage"
        component={SendMessage}
        options={{
          tabBarIcon: ({ color }) => (
            <MessageSvg width={27} height={27} stroke={color} />
          )
        }}
      />
      <Screen
        name="Search"
        component={SearchStackRoutes}
        options={{
          tabBarIcon: ({ color }) => (
            <SearchSvg width={26} height={26} stroke={color} />
          )
        }}
      />
      <Screen
        name="ProfileMe"
        component={ProfileMe}
        options={{
          tabBarIcon: ({ color }) => (
            <UserSvg width={26} height={26} stroke={color} />
          )
        }}
      />
    </Navigator>
  )
}