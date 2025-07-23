import React, { useEffect, useState } from 'react';
import {
  NavigationContainer,
  createNavigationContainerRef,
  StackActions,
  useFocusEffect,
  DefaultTheme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from './components/ThemeProvider';
// ------------ pages import ----------------------------------------- //
import NewsFeed from './screens/NewsFeed';

const Stack = createNativeStackNavigator();
export const navigationRef = createNavigationContainerRef();

const Nav = () => {
  const { theme } = useTheme();
  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: theme.backgroundColor,
    },
  };
  return (
    <NavigationContainer theme={navTheme} ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={'CommonStack'}
        screenOptions={{
          headerShown: false,
          animation: 'default',
          gestureDirection: 'horizontal',
          fullScreenGestureEnabled: true,
        }}
      >
        <Stack.Screen component={CommonStack} name="CommonStack" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const CommonStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={'NewsFeed'}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Group>
        <Stack.Screen component={NewsFeed} name="NewsFeed" />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default Nav;
export const navigateForce = (name = '', params = {}) => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.replace(name, params));
  }
};
