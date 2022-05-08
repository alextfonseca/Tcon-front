import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../pages/Home'
import UserLogin from '../pages/UserPages/UserLogin'
import { HomeUser } from '../pages/UserPages/HomeUser'
import { Ranking } from '../pages/UserPages/Ranking'
const Stack = createNativeStackNavigator()

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="UserLogin" component={UserLogin} />
        <Stack.Screen name="HomeUser" component={HomeUser} />
        <Stack.Screen name="Ranking" component={Ranking} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
