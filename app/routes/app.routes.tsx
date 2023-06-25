import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home, NewClockPunch } from '@/screens'

export type StackNavigationProps = {
  HomeScreen: undefined
  NewClockPunchScreen: undefined
}

const { Navigator, Screen } = createNativeStackNavigator<StackNavigationProps>()

export const AppRoutes = () => (
  <Navigator
    initialRouteName="HomeScreen"
    screenOptions={{ headerShown: false }}
  >
    <Screen name="HomeScreen" component={Home} />
    <Screen name="NewClockPunchScreen" component={NewClockPunch} />
  </Navigator>
)
