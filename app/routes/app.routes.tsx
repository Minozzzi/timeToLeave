import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Text, View } from 'react-native'

const { Navigator, Screen } = createNativeStackNavigator()

const Home = () => (
  <View>
    <Text>Home</Text>
  </View>
)

export const AppRoutes = () => (
  <Navigator screenOptions={{ headerShown: false }}>
    <Screen name="home" component={Home} />
  </Navigator>
)
