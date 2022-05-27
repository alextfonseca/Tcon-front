import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../../pages/Home'
import UserLogin from '../../pages/UserPages/UserLogin'
import SponsorLogin from '../../pages/SponsorPages/SponsorLogin'
import { HomeSponsors } from '../../pages/SponsorPages/HomeSponsor'
import { Theme } from '../../pages/UserPages/CreateNewClaim/theme'
import { Description } from '../../pages/UserPages/CreateNewClaim/description'
import { Local } from '../../pages/UserPages/CreateNewClaim/local'
import { CreateNewPoint } from '../../pages/UserPages/CreatenewPoint'
import BottomTabNavigator from './BottomTabNavigator'
import { MyAccount } from '../../pages/UserPages/MyAccount'

const Stack = createNativeStackNavigator()

export const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName="Home"
    >
      {/* home */}
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="HomeUser" component={BottomTabNavigator} />

      {/* login */}
      <Stack.Screen name="UserLogin" component={UserLogin} />
      <Stack.Screen name="SponsorLogin" component={SponsorLogin} />

      <Stack.Screen name="UserAccount" component={MyAccount} />

      {/* patrocinador */}
      <Stack.Screen name="HomeSponsor" component={HomeSponsors} />

      {/* adicionar reclamação */}
      <Stack.Screen name="ClaimTheme" component={Theme} />
      <Stack.Screen name="ClaimDescription" component={Description} />
      <Stack.Screen name="ClaimLocal" component={Local} />

      {/* adicionar ponto de preservação */}
      <Stack.Screen name="CreateNewPoint" component={CreateNewPoint} />
    </Stack.Navigator>
  )
}
