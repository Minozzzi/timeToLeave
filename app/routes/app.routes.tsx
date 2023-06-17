import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '@/screens'

export type StackParams = {
  HomeScreen: undefined
  NewClock: undefined
}

const { Navigator, Screen } = createNativeStackNavigator<StackParams>()

export const AppRoutes = () => (
  <Navigator screenOptions={{ headerShown: false }}>
    <Screen name="HomeScreen" component={Home} />
  </Navigator>
)
