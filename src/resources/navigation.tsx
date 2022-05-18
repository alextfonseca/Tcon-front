import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../pages/Home'
import UserLogin from '../pages/UserPages/UserLogin'
import { HomeUser } from '../pages/UserPages/HomeUser'
import { Ranking } from '../pages/UserPages/Ranking'
import { Claims } from '../pages/UserPages/Claims'
import { Sponsors } from '../pages/UserPages/Sponsors'
import { Tips } from '../pages/UserPages/Tips'
import SponsorLogin from '../pages/SponsorPages/SponsorLogin'
import { HomeSponsors } from '../pages/SponsorPages/HomeSponsor'
import { Theme } from '../pages/UserPages/CreateNewClaim/theme'
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
        <Stack.Screen name="Claims" component={Claims} />
        <Stack.Screen name="Sponsors" component={Sponsors} />
        <Stack.Screen name="Tips" component={Tips} />
        <Stack.Screen name="SponsorLogin" component={SponsorLogin} />
        <Stack.Screen name="HomeSponsor" component={HomeSponsors} />

        <Stack.Screen name="ClaimTheme" component={Theme} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
