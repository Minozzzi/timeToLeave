import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Text, View } from 'react-native'

export type StackParams = {
  HomeScreen: undefined
  NewClock: undefined
}

const { Navigator, Screen } = createNativeStackNavigator<StackParams>()

const Home = () => (
  <View>
    <Text>Home</Text>
  </View>
)

export const AppRoutes = () => (
  <Navigator screenOptions={{ headerShown: false }}>
    <Screen name="HomeScreen" component={Home} />
  </Navigator>
)
